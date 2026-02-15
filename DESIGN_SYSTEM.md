# Email Classifier UI - Design System & Style Guide

## 🎨 Color Palette

### Primary Colors
```
Purple Brand          #9333ea    RGB(147, 51, 234)
Blue Accent          #3b82f6    RGB(59, 130, 246)
Dark Background      #0f172a    RGB(15, 23, 42)
Darker Background    #1e1b4b    RGB(30, 27, 75)
```

### Secondary Colors
```
Green Success        #22c55e    RGB(34, 197, 94)
Red Error            #ef4444    RGB(239, 68, 68)
Orange Warning       #f59e0b    RGB(245, 158, 11)
Light Purple         #a78bfa    RGB(167, 139, 250)
```

### Neutral Colors
```
White Text           #f0f9ff    RGB(240, 249, 255)
Gray Text            #d1d5db    RGB(209, 213, 219)
Dark Gray            #374151    RGB(55, 65, 81)
Subtle Gray          #4b5563    RGB(75, 85, 99)
```

### Gradients
```
Primary Gradient     from-purple-600 to-blue-600
Dark Gradient        from-slate-900 via-purple-900 to-slate-900
Success Gradient     from-green-600 to-emerald-600
```

---

## 📐 Typography

### Font Family
```
Primary: Inter
Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
```

### Font Sizes
```
Heading 1 (h1)       2.5rem (40px)    font-bold
Heading 2 (h2)       2rem   (32px)    font-bold
Heading 3 (h3)       1.5rem (24px)    font-bold
Subheading           1.25rem (20px)   font-semibold
Body Large           1.125rem (18px)  font-medium
Body                 1rem    (16px)   font-normal
Body Small           0.875rem (14px)  font-normal
Label                0.75rem (12px)   font-medium
```

### Line Heights
```
Headings      1.2
Body Text     1.5
Labels        1.4
```

---

## 🎯 Component Styles

### Buttons

#### Primary Button
```css
Background:   gradient(purple-600 to blue-600)
Color:        white
Padding:      12px 24px (0.75rem 1.5rem)
Border:       none
Border-radius: 0.5rem
Font-weight:  600
Shadow:       0 4px 15px rgba(147, 51, 234, 0.3)
Hover:        gradient(purple-700 to blue-700)
              transform translateY(-2px)
              shadow 0 8px 25px rgba(147, 51, 234, 0.5)
Transition:   all 0.3s ease
```

#### Secondary Button
```css
Background:   transparent
Border:       1px solid rgba(147, 51, 234, 0.5)
Color:        #a78bfa
Padding:      12px 24px
Border-radius: 0.5rem
Hover:        bg-purple-900/30
              border-purple-600
```

### Input Fields

#### Text Input / Password Input
```css
Background:   rgba(30, 27, 75, 0.6)
Border:       1px solid rgba(147, 51, 234, 0.3)
Border-radius: 0.5rem
Color:        #e0e7ff
Padding:      0.75rem
Font-size:    1rem
Placeholder:  rgba(224, 231, 255, 0.5)
Focus:        border-color: #9333ea
              shadow: 0 0 0 3px rgba(147, 51, 234, 0.1)
```

### Cards

#### Card Container
```css
Background:   rgba(30, 27, 75, 0.4) - linear-gradient
Border:       1px solid rgba(147, 51, 234, 0.2)
Border-radius: 0.5rem
Padding:      1.5rem
Shadow:       0 10px 25px rgba(0, 0, 0, 0.3)
Hover:        border-color: rgba(147, 51, 234, 0.5)
              shadow: 0 15px 35px rgba(147, 51, 234, 0.2)
Transition:   all 0.3s ease
```

### Badges / Tags

#### Department Badge
```css
Background:   rgba(59, 130, 246, 0.2)
Border:       1px solid rgba(59, 130, 246, 0.5)
Color:        #3b82f6
Border-radius: 0.5rem (full for pills)
Padding:      4px 12px
Font-size:    0.875rem
Font-weight:  500
```

### Status Indicators

#### Active Status
```css
Color:        #22c55e (Green)
Icon:         🟢
Background:   rgba(34, 197, 94, 0.2) (optional)
Border:       1px solid rgba(34, 197, 94, 0.3)
```

#### Inactive Status
```css
Color:        #6b7280 (Gray)
Icon:         ⚪
Background:   rgba(107, 114, 128, 0.1) (optional)
Border:       1px solid rgba(107, 114, 128, 0.2)
```

---

## ✨ Effects & Animations

### Transitions
```css
transition-smooth: all 0.3s ease-in-out
transition-fast: all 0.15s ease
transition-slow: all 0.5s ease
```

### Hover Effects
```css
.hover-lift: 
  - scale(1.05)
  - shadow-xl shadow-purple-900/50
  - transition-smooth

.hover-glow:
  - shadow-lg shadow-purple-500/50
  - transition-smooth
```

### Animations
```css
@keyframes slideIn {
  from:  opacity 0, translateY(10px)
  to:    opacity 1, translateY(0)
  duration: 0.3s ease-out
}

@keyframes fadeIn {
  from:  opacity 0
  to:    opacity 1
  duration: 0.5s ease-out
}
```

### Glassmorphism
```css
.glassmorphism:
  - background: rgba(255, 255, 255, 0.05)
  - backdrop-filter: blur(10px)
  - border: 1px solid rgba(255, 255, 255, 0.1)
```

---

## 📱 Spacing Scale

```
xs: 4px   (0.25rem)
sm: 8px   (0.5rem)
md: 12px  (0.75rem)
lg: 16px  (1rem)
xl: 24px  (1.5rem)
2xl: 32px (2rem)
3xl: 48px (3rem)
```

### Common Spacing
```
Page Padding:       16px - 32px (mobile - desktop)
Card Padding:       24px
Section Gap:        32px
Element Gap:        8px - 16px
```

---

## 🔲 Border Radius

```
sm:    0.25rem (4px)
base:  0.5rem  (8px)
md:    0.75rem (12px)
lg:    1rem    (16px)
xl:    1.5rem  (24px)
full:  9999px  (pills/circles)
```

---

## 👁️ Accessibility

### Color Contrast
```
Body Text:        WCAG AA (4.5:1 or better)
Large Text:       WCAG AA (3:1 or better)
UI Components:    WCAG AA (3:1 or better)
```

### Focus States
```
Focus Ring:       2px solid #9333ea
Focus Offset:     2px
Focus Shadow:     0 0 0 3px rgba(147, 51, 234, 0.1)
```

### Text Readability
- Minimum font size: 12px
- Line height: 1.4 - 1.6
- Max line length: 80 characters
- Adequate white space

---

## 🎬 Responsive Breakpoints

```
Mobile:      < 640px   (sm)
Tablet:      640px - 1024px  (md)
Desktop:     1024px - 1280px (lg)
Large:       > 1280px  (xl)
```

### Grid Layouts
```
Mobile:      1 column
Tablet:      2 columns
Desktop:     3 columns
Large:       4+ columns
```

---

## 📊 Data Visualization

### Charts & Graphs
```
Bar Charts:      blue (#3b82f6)
Success Data:    green (#22c55e)
Warning Data:    orange (#f59e0b)
Error Data:      red (#ef4444)
Neutral Data:    gray (#6b7280)
```

### Progress Indicators
```
Background:      rgba(147, 51, 234, 0.1)
Fill:            gradient(purple to blue)
Border:          1px solid rgba(147, 51, 234, 0.3)
Height:          8px
Border-radius:   4px
```

---

## 🎪 Icons & Emojis

### Status Icons
```
Success:         ✅ 🟢
Error:           ❌ 🔴
Warning:         ⚠️ 🟠
Info:            ℹ️ 🔵
Loading:         ⏳ 🔄
```

### Action Icons
```
Add:             ➕ 
Delete:          🗑️ ❌
Edit:            ✏️ 
Settings:        ⚙️ 
Search:          🔍 
Download:        📥 
Upload:          📤 
```

### Email Icons
```
Inbox:           📧 📬
Send:            📤 ➡️
Archive:         📦 
Spam:            🚫 
```

---

## 🚫 Anti-Patterns to Avoid

1. **Poor Contrast**: Never use light text on light background
2. **Inconsistent Spacing**: Maintain rhythm with spacing scale
3. **Overuse of Colors**: Stick to the defined palette
4. **Slow Animations**: Keep transitions under 0.5s
5. **No Focus States**: Always style focus states for accessibility
6. **Tiny Touch Targets**: Buttons should be minimum 44px
7. **Auto-playing Audio/Video**: Always require user action
8. **Poor Mobile Layout**: Always test on mobile devices

---

## 📋 Component Checklist

Before deploying components:

- [ ] Tested on mobile and desktop
- [ ] Accessibility (color contrast, focus states)
- [ ] Consistent spacing and alignment
- [ ] Proper font weights and sizes
- [ ] Hover/active/disabled states defined
- [ ] Smooth transitions implemented
- [ ] Dark theme applied
- [ ] No inline styles (use CSS classes)
- [ ] Responsive breakpoints applied
- [ ] Icons/images optimized

---

## 🔄 Customization Guide

### Change Primary Color
Replace all `purple-*` classes with your color:
```css
/* Old */
from-purple-600 to-blue-600

/* New */
from-indigo-600 to-cyan-600
```

### Change Font
Update in `globals.css`:
```css
/* Add import */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700');

/* Update body */
* { font-family: 'YourFont', sans-serif; }
```

### Adjust Dark Mode
Update CSS variables in `:root`:
```css
--background: your-color;
--foreground: your-text-color;
```

---

## 📚 Resources

- Tailwind CSS: https://tailwindcss.com
- Material Design: https://material.io
- Web Accessibility: https://www.w3.org/WAI/
- Color Contrast: https://contrast-ratio.com

---

**Version**: 1.0  
**Last Updated**: February 2024  
**Designed for**: Email Classifier Pro
