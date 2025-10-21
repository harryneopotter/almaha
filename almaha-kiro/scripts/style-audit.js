#!/usr/bin/env node

/**
 * Style Audit Script - Analyzes CSS implementation for WordPress parity
 * This script validates that all necessary WordPress styles are preserved
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);

console.log('🔍 Starting Style Audit...');
console.log('Project root:', projectRoot);

// WordPress theme colors that should be preserved
const EXPECTED_COLORS = {
  '--color-primary': '#28a745',
  '--brand-green': '#28a745',
  '--color-accent': '#28a745',
  '--color-success': '#28a745',
  '--brand-dark-green': '#20c997',
  '--color-warning': '#ffc107',
  '--brand-gold': '#ffc107',
  '--color-error': '#dc3545',
  '--color-white': '#ffffff',
  '--color-secondary': '#ffffff'
};

// Expected breakpoints
const EXPECTED_BREAKPOINTS = [
  '375px', // Mobile
  '768px', // Tablet
  '1024px', // Desktop
  '1200px', // Wide
  '1920px'  // Ultra-wide
];

// WordPress CSS classes that should be preserved
const WORDPRESS_CLASSES = [
  'wp-container',
  'wp-content',
  'alignleft',
  'alignright',
  'aligncenter',
  'alignwide',
  'alignfull',
  'btn',
  'wp-block-button__link',
  'style-color-jevc-bg',
  'style-color-nhtu-bg',
  'style-color-wayh-bg'
];

async function auditStyles() {
  console.log('🔍 Starting comprehensive style audit...\n');
  
  const results = {
    colors: await auditColors(),
    breakpoints: await auditBreakpoints(),
    wordpressClasses: await auditWordPressClasses(),
    cssModules: await auditCSSModules(),
    responsiveUtilities: await auditResponsiveUtilities(),
    imports: await auditCSSImports()
  };

  generateAuditReport(results);
  return results;
}

async function auditColors() {
  console.log('🎨 Auditing color palette...');
  
  const results = { found: [], missing: [], incorrect: [] };
  
  try {
    const variablesPath = path.join(projectRoot, 'src/styles/variables.css');
    const globalsPath = path.join(projectRoot, 'src/styles/globals.css');
    
    const variablesContent = await fs.readFile(variablesPath, 'utf-8');
    const globalsContent = await fs.readFile(globalsPath, 'utf-8');
    const combinedContent = variablesContent + globalsContent;
    
    for (const [colorVar, expectedValue] of Object.entries(EXPECTED_COLORS)) {
      const regex = new RegExp(`${colorVar}\\s*:\\s*([^;]+);`, 'i');
      const match = combinedContent.match(regex);
      
      if (match) {
        const actualValue = match[1].trim();
        if (actualValue.toLowerCase() === expectedValue.toLowerCase()) {
          results.found.push({ variable: colorVar, value: actualValue });
        } else {
          results.incorrect.push({ 
            variable: colorVar, 
            expected: expectedValue, 
            actual: actualValue 
          });
        }
      } else {
        results.missing.push({ variable: colorVar, expected: expectedValue });
      }
    }
    
    console.log(`  ✅ Found ${results.found.length} correct colors`);
    console.log(`  ⚠️  Found ${results.incorrect.length} incorrect colors`);
    console.log(`  ❌ Missing ${results.missing.length} colors`);
    
  } catch (error) {
    console.error('  ❌ Error auditing colors:', error.message);
  }
  
  return results;
}

async function auditBreakpoints() {
  console.log('📱 Auditing responsive breakpoints...');
  
  const results = { found: [], missing: [] };
  
  try {
    const responsivePath = path.join(projectRoot, 'src/styles/responsive.css');
    const variablesPath = path.join(projectRoot, 'src/styles/variables.css');
    
    let content = '';
    try {
      content += await fs.readFile(responsivePath, 'utf-8');
    } catch (e) {
      console.log('  ⚠️  responsive.css not found');
    }
    
    try {
      content += await fs.readFile(variablesPath, 'utf-8');
    } catch (e) {
      console.log('  ⚠️  variables.css not found');
    }
    
    for (const breakpoint of EXPECTED_BREAKPOINTS) {
      if (content.includes(breakpoint)) {
        results.found.push(breakpoint);
      } else {
        results.missing.push(breakpoint);
      }
    }
    
    console.log(`  ✅ Found ${results.found.length} breakpoints`);
    console.log(`  ❌ Missing ${results.missing.length} breakpoints`);
    
  } catch (error) {
    console.error('  ❌ Error auditing breakpoints:', error.message);
  }
  
  return results;
}

async function auditWordPressClasses() {
  console.log('🏷️  Auditing WordPress CSS classes...');
  
  const results = { found: [], missing: [] };
  
  try {
    const globalsPath = path.join(projectRoot, 'src/styles/globals.css');
    const globalsContent = await fs.readFile(globalsPath, 'utf-8');
    
    for (const className of WORDPRESS_CLASSES) {
      if (globalsContent.includes(`.${className}`)) {
        results.found.push(className);
      } else {
        results.missing.push(className);
      }
    }
    
    console.log(`  ✅ Found ${results.found.length} WordPress classes`);
    console.log(`  ❌ Missing ${results.missing.length} WordPress classes`);
    
  } catch (error) {
    console.error('  ❌ Error auditing WordPress classes:', error.message);
  }
  
  return results;
}

async function auditCSSModules() {
  console.log('📦 Auditing CSS Modules implementation...');
  
  const results = { components: [], pages: [], missing: [] };
  
  try {
    // Check components
    const componentsDir = path.join(projectRoot, 'src/components');
    const componentDirs = await fs.readdir(componentsDir, { withFileTypes: true });
    
    for (const dir of componentDirs) {
      if (dir.isDirectory()) {
        const componentPath = path.join(componentsDir, dir.name);
        const files = await fs.readdir(componentPath);
        
        const hasJSX = files.some(f => f.endsWith('.jsx'));
        const hasCSS = files.some(f => f.endsWith('.module.css'));
        
        if (hasJSX && hasCSS) {
          results.components.push(dir.name);
        } else if (hasJSX && !hasCSS) {
          results.missing.push(`Component: ${dir.name}`);
        }
      }
    }
    
    // Check pages
    const pagesDir = path.join(projectRoot, 'src/pages');
    try {
      const pageFiles = await fs.readdir(pagesDir);
      const jsxFiles = pageFiles.filter(f => f.endsWith('.jsx'));
      
      for (const jsxFile of jsxFiles) {
        const baseName = jsxFile.replace('.jsx', '');
        const cssFile = `${baseName}.module.css`;
        
        if (pageFiles.includes(cssFile)) {
          results.pages.push(baseName);
        } else {
          results.missing.push(`Page: ${baseName}`);
        }
      }
    } catch (e) {
      console.log('  ⚠️  Pages directory not found');
    }
    
    console.log(`  ✅ Components with CSS Modules: ${results.components.length}`);
    console.log(`  ✅ Pages with CSS Modules: ${results.pages.length}`);
    console.log(`  ❌ Missing CSS Modules: ${results.missing.length}`);
    
  } catch (error) {
    console.error('  ❌ Error auditing CSS Modules:', error.message);
  }
  
  return results;
}

async function auditResponsiveUtilities() {
  console.log('📐 Auditing responsive utilities...');
  
  const results = { utilities: [], mediaQueries: 0 };
  
  try {
    const responsivePath = path.join(projectRoot, 'src/styles/responsive.css');
    const content = await fs.readFile(responsivePath, 'utf-8');
    
    // Count media queries
    const mediaQueryMatches = content.match(/@media[^{]+\{/g);
    results.mediaQueries = mediaQueryMatches ? mediaQueryMatches.length : 0;
    
    // Check for utility classes
    const utilityClasses = [
      'responsive-container',
      'responsive-grid-2',
      'responsive-grid-3',
      'responsive-grid-4',
      'hide-mobile',
      'show-mobile',
      'hide-tablet',
      'show-tablet',
      'hide-desktop',
      'show-desktop'
    ];
    
    for (const utility of utilityClasses) {
      if (content.includes(`.${utility}`)) {
        results.utilities.push(utility);
      }
    }
    
    console.log(`  ✅ Media queries found: ${results.mediaQueries}`);
    console.log(`  ✅ Utility classes found: ${results.utilities.length}`);
    
  } catch (error) {
    console.log('  ⚠️  responsive.css not found - responsive utilities not implemented');
    results.error = error.message;
  }
  
  return results;
}

async function auditCSSImports() {
  console.log('📥 Auditing CSS imports...');
  
  const results = { imports: [], missing: [] };
  
  const expectedImports = [
    'google-fonts.css',
    'style.css',
    'style(1).css',
    'styles.css',
    'style-custom.css',
    'uncode-icons.css'
  ];
  
  try {
    const globalsPath = path.join(projectRoot, 'src/styles/globals.css');
    const content = await fs.readFile(globalsPath, 'utf-8');
    
    for (const importFile of expectedImports) {
      if (content.includes(importFile)) {
        results.imports.push(importFile);
      } else {
        results.missing.push(importFile);
      }
    }
    
    console.log(`  ✅ CSS imports found: ${results.imports.length}`);
    console.log(`  ❌ Missing imports: ${results.missing.length}`);
    
  } catch (error) {
    console.error('  ❌ Error auditing CSS imports:', error.message);
  }
  
  return results;
}

function generateAuditReport(results) {
  console.log('\n📊 STYLE AUDIT REPORT');
  console.log('='.repeat(50));
  
  // Overall score calculation
  let totalChecks = 0;
  let passedChecks = 0;
  
  // Colors
  totalChecks += Object.keys(EXPECTED_COLORS).length;
  passedChecks += results.colors.found.length;
  
  // Breakpoints
  totalChecks += EXPECTED_BREAKPOINTS.length;
  passedChecks += results.breakpoints.found.length;
  
  // WordPress classes
  totalChecks += WORDPRESS_CLASSES.length;
  passedChecks += results.wordpressClasses.found.length;
  
  const score = Math.round((passedChecks / totalChecks) * 100);
  
  console.log(`\n🎯 OVERALL SCORE: ${score}% (${passedChecks}/${totalChecks} checks passed)`);
  
  // Detailed results
  if (results.colors.incorrect.length > 0) {
    console.log('\n❌ INCORRECT COLORS:');
    results.colors.incorrect.forEach(color => {
      console.log(`  ${color.variable}: expected ${color.expected}, got ${color.actual}`);
    });
  }
  
  if (results.colors.missing.length > 0) {
    console.log('\n❌ MISSING COLORS:');
    results.colors.missing.forEach(color => {
      console.log(`  ${color.variable}: ${color.expected}`);
    });
  }
  
  if (results.breakpoints.missing.length > 0) {
    console.log('\n❌ MISSING BREAKPOINTS:');
    results.breakpoints.missing.forEach(bp => console.log(`  ${bp}`));
  }
  
  if (results.wordpressClasses.missing.length > 0) {
    console.log('\n❌ MISSING WORDPRESS CLASSES:');
    results.wordpressClasses.missing.forEach(cls => console.log(`  .${cls}`));
  }
  
  if (results.cssModules.missing.length > 0) {
    console.log('\n❌ MISSING CSS MODULES:');
    results.cssModules.missing.forEach(missing => console.log(`  ${missing}`));
  }
  
  // Recommendations
  console.log('\n💡 RECOMMENDATIONS:');
  
  if (score < 80) {
    console.log('  🔴 CRITICAL: Style implementation needs significant work');
    console.log('  - Fix missing colors and breakpoints');
    console.log('  - Ensure all WordPress classes are preserved');
    console.log('  - Complete CSS Modules implementation');
  } else if (score < 95) {
    console.log('  🟡 GOOD: Minor issues need attention');
    console.log('  - Address missing elements identified above');
    console.log('  - Run visual comparison to verify pixel-perfect match');
  } else {
    console.log('  🟢 EXCELLENT: Style implementation looks complete');
    console.log('  - Run visual comparison to verify pixel-perfect match');
    console.log('  - Complete manual validation checklist');
  }
  
  console.log('\n📋 NEXT STEPS:');
  console.log('  1. Fix any issues identified above');
  console.log('  2. Run: npm run visual:validate');
  console.log('  3. Complete VISUAL_VALIDATION_CHECKLIST.md');
  console.log('  4. Get design approval before marking task complete');
}

// Run audit if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  auditStyles().catch(console.error);
}

export { auditStyles };