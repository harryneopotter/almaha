#!/usr/bin/env python3
"""
Scan HTML files in the workspace and extract links (<a href="...">) found
inside <header> and <footer> elements. Write a Markdown file `LIVE_ROUTES.md`
with a unique list of routes and a per-file listing.

Excluded folders: node_modules, dist, public, src, .git, playwright-report
"""
import os
from html.parser import HTMLParser
from pathlib import Path

EXCLUDE_DIRS = {"node_modules","dist","public","src",".git","playwright-report"}
ROOT = Path('.').resolve()

class HeaderFooterLinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_header = False
        self.in_footer = False
        self.current_tag = None
        self.links = []  # tuples (href, text, in_which)
        self._capture_text = False
        self._last_href = None
        self._buffer = ''

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        if tag == 'header':
            self.in_header = True
        elif tag == 'footer':
            self.in_footer = True
        elif tag == 'a' and (self.in_header or self.in_footer):
            href = None
            for k, v in attrs:
                if k.lower() == 'href':
                    href = v
                    break
            self._last_href = href
            self._buffer = ''
            self._capture_text = True

    def handle_endtag(self, tag):
        if tag == 'header':
            self.in_header = False
        elif tag == 'footer':
            self.in_footer = False
        elif tag == 'a' and self._capture_text:
            # commit
            context = 'header' if self.in_header else 'footer'
            # Note: when endtag triggers we may already be outside header/footer if nested; adjust context
            # We'll compute context more robustly by checking flags at time of start; but this is pragmatic.
            context = 'header' if ('header' in ("header" if self.in_header else "")) else ('footer' if ('footer' in ("footer" if self.in_footer else "")) else context)
            self.links.append((self._last_href or '', self._buffer.strip(), context))
            self._last_href = None
            self._buffer = ''
            self._capture_text = False

    def handle_data(self, data):
        if self._capture_text:
            self._buffer += data


def html_files(root: Path):
    for p in root.rglob('*.html'):
        # skip files inside excluded dirs
        parts = set(p.parts)
        if EXCLUDE_DIRS & parts:
            continue
        yield p


def extract_links_from_file(path: Path):
    parser = HeaderFooterLinkParser()
    try:
        text = path.read_text(encoding='utf-8', errors='ignore')
    except Exception as e:
        return []
    parser.feed(text)
    # Determine context more robustly by re-parsing segments: fallback is fine
    results = []
    for href, txt, context in parser.links:
        # Normalize href: strip whitespace
        href_n = href.strip()
        txt_n = ' '.join(txt.split())
        results.append((href_n, txt_n))
    return results


def main():
    files = list(html_files(ROOT))
    unique_routes = {}
    per_file = {}

    for f in sorted(files):
        links = extract_links_from_file(f)
        if not links:
            continue
        per_file[str(f)] = links
        for href, txt in links:
            if href not in unique_routes:
                unique_routes[href] = {'text': set(), 'files': set()}
            unique_routes[href]['text'].add(txt)
            unique_routes[href]['files'].add(str(f))

    out = []
    out.append('# Live site header & footer routes (extracted from local HTML snapshots)')
    out.append('')
    out.append('Note: These routes were extracted from the HTML snapshot files in the workspace (no live network requests).')
    out.append('')
    out.append('## Unique routes (hrefs)')
    out.append('')
    for href in sorted(unique_routes.keys()):
        info = unique_routes[href]
        texts = ', '.join(sorted(t for t in info['text'] if t)) or '(no link text)'
        files = '\n'.join(f'- `{p}`' for p in sorted(info['files']))
        out.append(f'- **{href}** — text(s): {texts}\n  Found in:\n{files}')

    out.append('')
    out.append('## Per-file link map')
    out.append('')
    for f, links in per_file.items():
        out.append(f'### `{f}`')
        for href, txt in links:
            display_text = txt or '(no link text)'
            out.append(f'- `{href}` — "{display_text}"')
        out.append('')

    md = '\n'.join(out)
    target = ROOT / 'LIVE_ROUTES.md'
    target.write_text(md, encoding='utf-8')
    print(f'Wrote {target} — {len(unique_routes)} unique hrefs across {len(per_file)} files')

if __name__ == '__main__':
    main()
