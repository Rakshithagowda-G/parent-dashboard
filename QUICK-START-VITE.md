# Quick Start Guide - Vite Version

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens automatically at **http://localhost:3000**

### Production Build
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

## ⚡ What's New

This project now uses **Vite** instead of Create React App for:
- ⚡ **10-100x faster** development server
- 🔥 **Instant HMR** (Hot Module Replacement)
- 📦 **Optimized builds** with automatic code splitting
- 🎯 **Better developer experience**

## 📁 Project Structure

```
soft-ui-dashboard-react/
├── index.html              # Entry HTML (moved from public/)
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # Entry point (was index.js)
│   ├── App.jsx            # Main App component
│   ├── routes.jsx         # Route configuration
│   ├── context/           # React Context
│   ├── components/        # Reusable components
│   ├── examples/          # Example components
│   ├── layouts/           # Page layouts
│   └── assets/            # Static assets
└── public/                # Public static files
```

## 🎨 All Features Included

✅ Dashboard with statistics cards
✅ Charts and graphs (Chart.js)
✅ Tables and data display
✅ User profile pages
✅ Authentication pages (Sign In/Up)
✅ Virtual Reality page
✅ RTL support
✅ Material-UI components
✅ Responsive design
✅ Theme customization
✅ Dark mode support

## 📝 Important Notes

- All JSX files now use `.jsx` extension
- Import paths use either:
  - Relative paths: `"./Component"`
  - Path aliases: `"components/Component"`
- Vite dev server runs on port 3000
- Production builds go to `build/` directory

## 🔧 Configuration

### Path Aliases
Configured in `vite.config.js`:
- `assets/*` → `./src/assets/*`
- `components/*` → `./src/components/*`
- `context/*` → `./src/context/*`
- `examples/*` → `./src/examples/*`
- `layouts/*` → `./src/layouts/*`

### Environment Variables
Create `.env` file for environment-specific variables:
```env
VITE_API_URL=your_api_url
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📚 Documentation

- Full migration details: See `VITE-MIGRATION.md`
- Vite docs: https://vitejs.dev
- React docs: https://react.dev

## 🐛 Troubleshooting

**Server won't start?**
```bash
rm -rf node_modules .vite
npm install
npm run dev
```

**Import errors?**
- Check file extensions (.jsx for JSX files)
- Verify import paths are correct
- Use path aliases for src imports

**Build errors?**
```bash
npm run build -- --debug
```

---

**Enjoy your lightning-fast development experience! ⚡**
