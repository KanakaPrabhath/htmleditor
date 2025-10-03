# Icon Reference Guide

Quick reference for all icons used in the HTML Editor application.

## Sidebar Icons

### Header
- **FileText** (18px) - Document Info title icon
- **ChevronLeft** (16px) - Collapse sidebar button
- **ChevronRight** (16px) - Expand sidebar button

### Statistics Section
- **FileCheck** (14px) - Pages count indicator
- **Hash** (14px) - Word count indicator
- **FileText** (14px) - Active page indicator

### Document Outline
- **List** (14px) - Outline section header
- **Heading1** (12px) - Level 1 heading items
- **Heading2** (12px) - Level 2 heading items
- **Heading3** (12px) - Level 3+ heading items

## Toolbar Icons

### Text Formatting (16px)
- **Bold** - Bold text formatting
- **Italic** - Italic text formatting
- **Underline** - Underline text formatting
- **Strikethrough** - Strikethrough text formatting

### Text Alignment (16px)
- **AlignLeft** - Left align text
- **AlignCenter** - Center align text
- **AlignRight** - Right align text
- **AlignJustify** - Justify text

### Lists (16px)
- **List** - Bullet/unordered list
- **ListOrdered** - Numbered/ordered list
- **CheckSquare** - Checklist

### Content Insertion (16px)
- **Link** - Insert hyperlink
- **Table** - Insert table
- **FileText** - Insert page break
- **Image** - Insert image

### Actions (16px)
- **Undo** - Undo last action
- **Redo** - Redo last undone action

## PageManager Icons

### Controls
- **Settings** (14px) - Page size selector label
- **FileText** (14px) - Page button icon
- **X** (14px) - Delete page button
- **Plus** (16px) - Add new page button

## Icon Sizing Standards

- **Large Icons (18px):** Primary section headers
- **Medium Icons (16px):** Toolbar buttons and primary actions
- **Small Icons (14px):** Labels, stats, and secondary actions
- **Micro Icons (12px):** Nested items and tertiary elements

## Color Guidelines

### Default States
- **Toolbar Icons:** White (#FFFFFF) on dark background
- **Sidebar Icons:** Medium gray (#6c757d) for labels
- **PageManager Icons:** Dark gray (#495057) for buttons

### Active States
- **Toolbar:** White on hover background (#4A5568)
- **Sidebar:** Dark (#212529) on light hover background
- **PageManager Active:** Blue (#0056b3) for selected page

### Special States
- **Delete Button:** Red (#dc3545) on hover
- **Add Button:** White on blue background (#0d6efd)
- **Outline Icons:** Reduced opacity (0.6) for subtlety

## Implementation Example

```jsx
import { Bold, Italic, FileText } from 'lucide-react';

// Toolbar button
<button onClick={handleBold}>
  <Bold size={16} />
</button>

// Sidebar stat
<div className="stat-label">
  <Hash size={14} />
  <span>Words:</span>
</div>

// Page button
<button className="page-button">
  <FileText size={14} />
  <span>Page 1</span>
</button>
```

## Accessibility

All icons maintain:
- Proper ARIA labels on parent buttons
- Title attributes for tooltips
- Sufficient color contrast ratios
- Consistent sizing for touch targets (min 36px)

## Browser Support

Lucide-react icons are SVG-based and support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Screen readers (proper semantic HTML maintained)
