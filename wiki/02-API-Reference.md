# API Reference

## Components

### ContentEditableEditor

The main editor component that provides WYSIWYG editing capabilities.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pageManagerComponent` | ReactNode | undefined | Custom page manager component |
| `onNavigatePage` | (pageIndex: number) => void | undefined | Callback when navigating pages |
| `onAddPage` | () => void | undefined | Callback when adding a page |
| `onDeletePage` | (pageIndex: number) => void | undefined | Callback when deleting a page |
| `onPageSizeChange` | (size: 'A4'\|'Letter'\|'Legal') => void | undefined | Callback when page size changes |
| `onChange` | (htmlContent: string) => void | undefined | Callback when content changes |
| `showSidebar` | boolean | true | Show/hide sidebar |
| `showToolbar` | boolean | true | Show/hide toolbar |
| `showPageManager` | boolean | true | Show/hide page manager |

#### Ref Methods

```typescript
interface ContentEditableEditorRef {
  getHTMLContent(): string;
  getPlainText(): string;
  setContent(html: string): void;
}
```

**getHTMLContent()**
Returns the current HTML content of the editor.

**getPlainText()**
Returns plain text content with HTML tags stripped.

**setContent(html: string)**
Sets the editor content programmatically.

### DocumentProvider

Context provider for document state management.

```jsx
<DocumentProvider initialState={initialState}>
  {/* Your editor components */}
</DocumentProvider>
```

#### Initial State

```typescript
interface DocumentInitialState {
  title?: string;
  pageSize?: 'A4' | 'Letter' | 'Legal';
  continuousContent?: string;
  pages?: Page[];
  activePage?: number;
}
```

## Hooks

### useFormatting()

Manages text formatting state and commands.

```typescript
interface FormattingHook {
  currentFormat: FormatState;
  formatText: (command: string, value?: string) => void;
  resetFormat: () => void;
  isFormatActive: (format: string) => boolean;
}

interface FormatState {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  fontSize: string;
  fontFamily: string;
  textAlign: string;
  color: string;
}
```

**Supported Format Commands:**
- `'bold'` - Toggle bold formatting
- `'italic'` - Toggle italic formatting
- `'underline'` - Toggle underline formatting
- `'strikethrough'` - Toggle strikethrough formatting
- `'fontSize'` - Set font size (e.g., '16px')
- `'fontFamily'` - Set font family (e.g., 'Arial')
- `'justifyLeft'` - Left align text
- `'justifyCenter'` - Center align text
- `'justifyRight'` - Right align text
- `'justifyFull'` - Justify text
- `'color'` - Set text color (e.g., '#ff0000')

### useContinuousReflow()

Handles automatic page reflow and boundary calculations.

```typescript
interface ReflowHook {
  updateBoundaries: () => void;
  getCurrentPage: () => number;
  scrollToPage: (pageIndex: number) => void;
  triggerAutoReflow: () => void;
  pageBoundaries: PageBoundary[];
  currentPage: number;
}

interface PageBoundary {
  pageIndex: number;
  start: number;
  end: number;
  height: number;
}
```

## Context

### useDocument()

Access complete document state and actions.

```typescript
interface DocumentContext {
  state: DocumentState;
  actions: DocumentActions;
}

interface DocumentState {
  continuousContent: string;
  pageBoundaries: PageBoundary[];
  activePage: number;
  pageSize: string;
  pages: Page[];
  title: string;
}

interface DocumentActions {
  updateContinuousContent: (content: string) => void;
  setActivePage: (pageIndex: number) => void;
  updatePageSize: (size: string) => void;
  addPage: () => void;
  deletePage: (pageIndex: number) => void;
  updateTitle: (title: string) => void;
}
```

### useDocumentState()

Access document state only.

```typescript
const { continuousContent, pageBoundaries, activePage } = useDocumentState();
```

### useDocumentActions()

Access document actions only.

```typescript
const { updateContinuousContent, setActivePage, updatePageSize } = useDocumentActions();
```

## Utilities

### Storage Utilities

```typescript
// Save image to local storage
saveImage(key: string, dataUrl: string): Promise<void>

// Get image from local storage
getImage(key: string): Promise<string | null>

// Delete image from local storage
deleteImage(key: string): Promise<void>

// Clear all images
clearImages(): Promise<void>

// Get all image keys
getAllImageKeys(): Promise<string[]>
```

### Logger Utility

```typescript
interface Logger {
  info(message: string, ...args: any[]): void;
  warn(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
  debug(message: string, ...args: any[]): void;
}
```

## Constants

### PAGE_DIMENSIONS

```typescript
const PAGE_DIMENSIONS = {
  A4: { width: 595, height: 842 },    // A4 in points (8.27" x 11.69")
  Letter: { width: 612, height: 792 }, // Letter in points (8.5" x 11")
  Legal: { width: 612, height: 1008 }   // Legal in points (8.5" x 14")
};
```

## Type Definitions

### Page Interface

```typescript
interface Page {
  id: string;
  content: string;
  index: number;
  height: number;
  breakElement?: HTMLElement;
}
```

### Formatting Types

```typescript
type TextAlign = 'left' | 'center' | 'right' | 'justify';
type FontSize = string; // e.g., '12px', '16px'
type FontFamily = string; // e.g., 'Arial', 'Times New Roman'
type Color = string; // e.g., '#ff0000', 'rgb(255, 0, 0)'
```

## Event Handlers

### Editor Events

The editor supports standard React event handlers:

- `onFocus` - When editor gains focus
- `onBlur` - When editor loses focus
- `onKeyDown` - Key press events
- `onKeyUp` - Key release events
- `onPaste` - Paste events
- `onCut` - Cut events
- `onCopy` - Copy events

### Custom Events

```typescript
// Content change event
onChange?: (htmlContent: string) => void

// Page navigation event
onNavigatePage?: (pageIndex: number) => void

// Page addition event
onAddPage?: () => void

// Page deletion event
onDeletePage?: (pageIndex: number) => void

// Page size change event
onPageSizeChange?: (size: 'A4' | 'Letter' | 'Legal') => void