# Data Model: Implement Zoom Controls and Enhance Page Size Selection

## Entities

### Zoom Level
- **Type**: Number (percentage)
- **Allowed Values**: 50, 75, 100, 125, 150, 175, 200
- **Default**: 100
- **Validation**: Must be one of allowed values
- **Relationships**: Used by ContinuousPageView for scaling

### Page Size
- **Type**: String (enum)
- **Allowed Values**: 'A4', 'Letter', 'Legal'
- **Default**: 'A4'
- **Dimensions**:
  - A4: 794px x 1123px (210mm x 297mm at 96 DPI)
  - Letter: 816px x 1056px (8.5" x 11" at 96 DPI)
  - Legal: 816px x 1344px (8.5" x 14" at 96 DPI)
- **Validation**: Must be one of allowed values
- **Relationships**: Used by useContinuousReflow for boundary calculations

## State Structure
```javascript
{
  // Existing state...
  zoomLevel: 100,  // Zoom Level entity
  pageSize: 'A4',  // Page Size entity
  // ...existing
}
```

## Validation Rules
- Zoom level changes must trigger boundary recalculation
- Page size changes must trigger reflow and boundary updates
- Zoom and page size must work together for accurate scaling</content>
<parameter name="filePath">C:\Users\Prabhath\Dev\htmleditor\specs\004-implement-zoom-controls\data-model.md