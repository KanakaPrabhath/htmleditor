# Quickstart: Multi-Page HTML Editor

## Setup Instructions

1. **Install dependencies**:
```bash
npm install
# or
yarn install
```

2. **Start development server**:
```bash
npm run dev
# or
yarn dev
```

3. **Open in browser**:
Visit `http://localhost:5173` in your browser

## Basic Usage

1. **Create a new document**:
```javascript
import { MultiPageEditor } from './src/components/editor/MultiPageEditor';

function App() {
  return (
    <div className="editor-container">
      <MultiPageEditor 
        initialContent={/* Optional initial HTML content */}
        pageSize="A4" // Can be "A4", "Letter", or "Legal"
      />
    </div>
  );
}
```

2. **Basic editing**:
- Type text directly into the editor
- Use the toolbar for formatting (bold, italic, underline)
- Add images by clicking the image icon and selecting a file

3. **Page navigation**:
- Use the page manager on the left to navigate between pages
- Click "Add Page" to insert a new page
- Click the trash icon to delete a page

## Verification Steps

1. **Verify text editing**:
   - Type text that exceeds one page
   - Confirm automatic page break is inserted
   - Verify content reflows correctly when editing

2. **Verify page management**:
   - Add a new page using the page manager
   - Delete a page and confirm document reflows
   - Change page size and verify layout updates

3. **Verify image handling**:
   - Insert an image into the editor
   - Confirm it's stored in browser local storage
   - Refresh the page and verify the image persists

## Expected Results

1. Text should flow across multiple pages with automatic page breaks
2. Page manager should correctly show all pages in the document
3. Images should be stored in browser local storage and persist across refreshes
4. Editor should handle documents with up to 500 pages without performance issues

## Troubleshooting

- **Page breaks not appearing**: Check browser console for errors, verify ProseMirror configuration
- **Images not loading**: Check browser storage quota, verify image encoding
- **Performance issues with large documents**: Enable virtualized rendering in editor configuration