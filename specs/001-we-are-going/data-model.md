# Data Model: Multi-Page HTML Editor

## Core Entities

### Document
*Represents the entire multi-page document with metadata and page configuration*

**Properties**:
- `id`: string (UUID) - Unique identifier for the document
- `title`: string - Document title (default: "Untitled Document")
- `createdAt`: Date - Timestamp of document creation
- `updatedAt`: Date - Timestamp of last modification
- `pageSize`: PageSize - Current page size configuration (A4, Letter, Legal)
- `pages`: Page[] - Array of pages in the document
- `activePage`: number - Index of currently active page

**Validation Rules**:
- Title must be 1-100 characters
- Must contain at least one page
- Page size must be one of: A4, Letter, Legal
- Document cannot exceed 500 pages

**State Transitions**:
- New → Edited (when content changes)
- Edited → Saved (when document is persisted)
- Saved → Edited (when further changes are made)

### Page
*Represents a single page within the document with specific size and content*

**Properties**:
- `id`: string (UUID) - Unique identifier for the page
- `index`: number - Position in the document (0-based)
- `size`: PageSize - Page dimensions (A4, Letter, Legal)
- `content`: ContentBlock[] - Array of content blocks on the page
- `isBreakPoint`: boolean - Whether this page has a manual break point

**Validation Rules**:
- Index must be non-negative integer
- Content blocks must not exceed page dimensions
- Page size must match document page size unless overridden

**State Transitions**:
- Created → Populated (when content is added)
- Populated → Modified (when content changes)
- Modified → Stable (when content reflow completes)

### ContentBlock
*Represents a unit of content (text or image) within a page with formatting*

**Properties**:
- `id`: string (UUID) - Unique identifier for the content block
- `type`: "text" | "image" - Type of content
- `content`: string - HTML content (for text) or base64 data URL (for images)
- `formatting`: FormattingOptions - Text formatting properties
- `position`: { x: number, y: number } - Position on page (for absolute positioning)
- `dimensions`: { width: number, height: number } - Size in pixels

**Validation Rules**:
- Content must be valid HTML fragment (for text)
- Images must be base64-encoded and under 5MB
- Formatting must conform to allowed styles
- Position and dimensions must be within page boundaries

### PageBreak
*Represents a boundary between pages that may be automatically inserted or user-defined*

**Properties**:
- `id`: string (UUID) - Unique identifier for the page break
- `type`: "auto" | "manual" - How the break was created
- `position`: number - Character position in document where break occurs
- `pageAfter`: number - Index of page following the break

**Validation Rules**:
- Position must be within document content
- Cannot have overlapping breaks
- Manual breaks take precedence over automatic ones

## Relationships

```
Document 1───* Page
Page 1───* ContentBlock
Document 1───* PageBreak
Page ────1 PageBreak (as start or end)
```

## Page Size Configuration

### PageSize
*Enumeration of supported page sizes*

**Values**:
- `A4`: { width: 210, height: 297, unit: "mm" }
- `Letter`: { width: 8.5, height: 11, unit: "in" }
- `Legal`: { width: 8.5, height: 14, unit: "in" }

**Conversion**:
- 1 inch = 25.4 mm
- CSS pixels: 96px = 1 inch

## Formatting Options

### FormattingOptions
*Structure for text formatting properties*

**Properties**:
- `fontFamily`: string
- `fontSize`: number (in px)
- `bold`: boolean
- `italic`: boolean
- `underline`: boolean
- `color`: string (hex color)
- `backgroundColor`: string (hex color)
- `textAlign`: "left" | "center" | "right" | "justify"