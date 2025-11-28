# Assignments Card Dark Mode Fix

## Changes Implemented

### 1. **CSS-First Solution**
Created `src/assets/theme/assignments-dark-mode.css` which uses CSS variables scoped to `body.dark-mode`. This ensures:
- **Zero impact on Light Mode**
- **Consistent Dark Mode Styling**
- **Easy maintenance** via CSS variables

### 2. **Component Updates**
- **`src/layouts/dashboard/components/Projects/index.jsx`**: Added `className="assignments-card"` to the Card component to allow targeted styling.
- **`src/App.jsx`**: 
  - Imported the new CSS file.
  - Added a `useEffect` hook to toggle the `dark-mode` class on the `<body>` element based on the `darkMode` state.

## CSS Details

The new CSS file (`src/assets/theme/assignments-dark-mode.css`) handles:
- **Card Background**: `#1a1f37` (Dark Navy) with subtle inner/outer shadows.
- **Typography**: High contrast white text for headings/values, muted grey for labels/captions.
- **Table Borders**: Subtle `rgba(255, 255, 255, 0.15)` dividers.
- **Progress Bars**: Adjusted track background to `rgba(255, 255, 255, 0.1)` while preserving accent colors.
- **Interactivity**: Subtle hover effect on table rows.
- **Scrollbars**: Custom dark-themed scrollbar for the table container.

## Test Checklist

### ✅ Dark Mode Testing
- [ ] Toggle Dark Mode on.
- [ ] **Card Appearance**: Verify background is dark navy (`#1a1f37`) with a soft shadow.
- [ ] **Readability**: Verify "Assignments" title is white and "24 completed" text is readable.
- [ ] **Table Rows**: Verify row text is white/grey and borders are visible.
- [ ] **Progress Bars**: Verify the progress track is dark (not washed out) and the colored bar (green/blue) is vibrant.
- [ ] **Hover**: Hover over rows to see a subtle highlighting effect.

### ✅ Light Mode Testing
- [ ] Toggle Dark Mode off.
- [ ] Verify the card looks exactly as it did before (white background, standard text colors).

### ✅ Code Verification
- [ ] Check `src/App.jsx` for the `dark-mode` class toggle effect.
- [ ] Check `src/layouts/dashboard/components/Projects/index.jsx` for `className="assignments-card"`.
