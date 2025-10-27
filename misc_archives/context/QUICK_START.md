# 🚀 Quick Start Guide - Al Maha Foods React App

## Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```
The app will open automatically at **http://localhost:3000**

### 3️⃣ Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder, ready for deployment.

---

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run test:visual` | Run Playwright visual tests |

---

## 🎯 What's Included

✅ **Fully responsive homepage** with:
- Hero slider with 4 slides
- Welcome section with image carousel
- Vision statement block
- Interactive world map (International presence)
- Interactive India map (Domestic presence)
- Call-to-action section
- Complete header with navigation
- Complete footer with social links

✅ **Modern tech stack:**
- React 18
- React Router v6
- Vite (lightning-fast builds)
- CSS Modules
- Swiper (sliders/carousels)
- amCharts 4 (interactive maps)

✅ **Production ready:**
- Build tested and working
- No linter errors
- Responsive at 375px, 768px, 1920px
- SEO-friendly structure

---

## 📱 Responsive Breakpoints

- **Mobile:** 375px and up
- **Tablet:** 768px and up
- **Desktop:** 1024px and up
- **Large Desktop:** 1920px and up

---

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, edit `vite.config.js` and change the port:
```js
server: {
  port: 3001, // Change this
  open: true
}
```

### Build Warnings
Large chunk size warnings for amCharts are **expected and normal**. The library is optimized for production.

### Maps Not Showing
Ensure you're viewing the site over HTTP (not file://). The dev server handles this automatically.

---

## 📦 Deployment

### For cPanel or Static Hosting:
1. Run `npm run build`
2. Upload contents of `dist/` folder to your server
3. Point your domain to the upload directory
4. Done! ✅

### For Netlify/Vercel:
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy! 🚀

---

## 🎨 Customization

### Change Colors
Edit `src/styles/global.css` and update CSS variables:
```css
:root {
  --color-red: #fe0000; /* Your accent color */
  --color-dark-2: #141618; /* Dark backgrounds */
  /* ... */
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Create corresponding CSS module

### Modify Hero Slides
Edit the `slides` array in `src/components/home/HeroSlider.jsx`

---

## 💡 Tips

- **Hot Reload:** Save any file and see changes instantly in the browser
- **CSS Modules:** Styles are scoped to components automatically
- **Images:** Place in `public/assets/images/` for easy access
- **Components:** All reusable in `src/components/`

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Swiper Demos](https://swiperjs.com/demos)
- [amCharts Maps](https://www.amcharts.com/docs/v4/chart-types/map/)

---

## ✅ Verification Checklist

After running `npm run dev`, verify:
- [ ] Hero slider auto-plays and navigation works
- [ ] Mobile menu (hamburger) opens/closes
- [ ] Desktop dropdown menus work on hover
- [ ] World map displays with red countries
- [ ] India map displays with red states
- [ ] All images load correctly
- [ ] Footer social icons are clickable
- [ ] Scroll to top button appears on scroll
- [ ] Page is smooth and responsive

---

## 🆘 Need Help?

Check `CONVERSION_SUMMARY.md` for detailed documentation about:
- Project structure
- Component details
- Styling system
- Testing setup
- Known issues

---

**Happy Coding! 🎉**

