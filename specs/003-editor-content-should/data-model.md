# Data Model: Multi-Page Content Management

## Document
The root entity representing the entire document.

**Fields:**
- `id: string` - Unique identifier
- `title: string` - Document title
- `pages: Page[]` - Ordered collection of pages
- `createdAt: Date` - Creation timestamp
- `updatedAt: Date` - Last modification timestamp

**Validation Rules:**
- Must have at least one page
- Title must be 1-100 characters

## Page
Represents a single page in the document.

**Fields:**
- `id: string` - Unique identifier
- `documentId: string` - Reference to parent document
- `content: ContentBlock[]` - Ordered collection of content blocks
- `pageNumber: number` - Position in document (1-based)
- `isOverflowPage: boolean` - Whether this page was created due to overflow

**Validation Rules:**
- Must have at least one content block (unless it's a placeholder for overflow)
- Page number must be sequential

## Content Block
The basic unit of content on a page.

**Fields:**
- `id: string` - Unique identifier
- `pageId: string` - Reference to parent page
- `type: 'text' | 'image' | 'table' | 'heading'` - Content type
- `content: string` - Serialized content (HTML for text, base64/data URL for images)
- `position: { x: number, y: number }` - Position on page (for absolute positioning)
- `size: { width: number, height: number }` - Dimensions in page units

**Validation Rules:**
- Content must be valid for the type
- Size must be within page boundaries

## Relationships
- Document 1--* Page
- Page 1--* ContentBlock