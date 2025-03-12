# UMDLIB Theme Layout Options

This documentation provides an overview of the layout options available in the UMDLIB theme, along with possible configurations for each column layout.

## Table of Contents

- [Layout Overview](#layout-overview)
- [Layout Configuration Options](#layout-configuration-options)
  - [Horizontal Configuration](#horizontal-configuration)
  - [Vertical Configuration](#vertical-configuration)
- [Column Layouts](#column-layouts)
  - [Single Column Layout](#single-column-layout)
  - [Two Column Layout](#two-column-layout)
  - [Three Column Layout](#three-column-layout)
  - [Four Column Layout](#four-column-layout)
- [Configuration Examples](#configuration-examples)
- [Conclusion](#conclusion)

## Layout Overview

The UMDLIB theme offers flexible layout options that adapt to different screen sizes. The system supports four different column layouts (1-4 columns), which automatically respond to screen width. As the screen narrows, the layout progressively shifts from the selected number of columns down to a single column, with breakpoints aligned to the design system specifications.

## Layout Configuration Options

Each layout can be customized using the following configuration options, which control spacing between and around content blocks.

### Horizontal Configuration

#### Section Level Options

Content editors must select one of these options for the section's horizontal spacing:

- **Content Width** - Creates space on both sides of the content, with a maximum width of 1680px (default)
- **Full Width** - Expands the content to fill the entire screen width with no side margins

#### Block Level Options

Content editors must select one of these options for horizontal spacing between blocks:

- **Spaced Blocks** - Adds space between adjacent content blocks
- **Flush Blocks** - Eliminates space between blocks, creating a seamless connection

_Note: For single column layouts, the block-level horizontal spacing option has no effect._

### Vertical Configuration

Vertical spacing is divided into two areas that can be configured independently:

#### Top Spacing Options

- **Major Break** - Creates larger space above the section to indicate a distinct content division
- **Minor Break** - Creates smaller space above the section to indicate related content groups

#### Bottom Spacing Options

- **Major Break** - Creates larger space below the section to indicate a distinct content division
- **Minor Break** - Creates smaller space below the section to indicate related content groups

#### Example Implementation

For instance, the Featured section on the Libraries' main website could be divided into two layout builder sections:

1. First section - Title Text: Single column layout with configuration:

   - Horizontal section: Full Width
   - Block spacing: Spaced Blocks
   - Vertical top: Major Break
   - Vertical bottom: Minor Break

2. Second section - Card Group: Three column layout with configuration:
   - Horizontal section: Full Width
   - Block spacing: Spaced Blocks
   - Vertical top: Minor Break
   - Vertical bottom: Major Break

## Column Layouts

By default, all column layouts divide the available width equally among columns. However, specific layout options provide additional flexibility as detailed below. Each configuration option corresponds to CSS classes that will be applied to the layout, making customization straightforward for developers while providing intuitive controls for content editors.

### Single Column Layout

The single column layout presents content in a linear flow, ideal for text-heavy pages or when content should be consumed sequentially.

#### Configuration

```yaml
layout:
  type: single_column
  settings:
    width_option: "content_width" # or "full_width"
    vertical_top: "major_break" # or "minor_break"
    vertical_bottom: "minor_break" # or "major_break"
```

### Two Column Layout

The two column layout is perfect for pages that require a sidebar or supporting content area alongside main content.

#### Special Sub-Navigation Option

The two column layout includes a special option for pages with sub-navigation:

- **Navigation Left** - When enabled, the left column will use `fit-content` to match the width of the sub-navigation component, while the right column takes the remaining width
- **Equal Columns** - The default option that divides available width equally between columns

#### Configuration

```yaml
layout:
  type: two_column
  settings:
    width_option: "content_width" # or "full_width"
    block_spacing: "spaced_blocks" # or "flush_blocks"
    vertical_top: "major_break" # or "minor_break"
    vertical_bottom: "minor_break" # or "major_break"
    column_option: "equal_columns" # or "navigation_left"
```

### Three Column Layout

The three column layout is suitable for complex pages with multiple content areas that need to be presented simultaneously.

#### Configuration

```yaml
layout:
  type: three_column
  settings:
    width_option: "content_width" # or "full_width"
    block_spacing: "spaced_blocks" # or "flush_blocks"
    vertical_top: "major_break" # or "minor_break"
    vertical_bottom: "minor_break" # or "major_break"
    column_option: "equal_columns" # or "navigation_left"
```

### Four Column Layout

The four column layout provides maximum content density, ideal for dashboard-like pages or content comparison displays.

#### Configuration

```yaml
layout:
  type: four_column
  settings:
    width_option: "content_width" # or "full_width"
    block_spacing: "spaced_blocks" # or "flush_blocks"
    vertical_top: "major_break" # or "minor_break"
    vertical_bottom: "minor_break" # or "major_break"
    column_option: "equal_columns" # or "navigation_left"
```

## Configuration Examples

Here are some practical examples of how to configure different layouts for common use cases.

### Example 1: Blog Post Layout

```yaml
layout:
  type: two_column
  settings:
    width_option: "content_width"
    block_spacing: "spaced_blocks"
    vertical_top: "major_break"
    vertical_bottom: "major_break"
    column_option: "equal_columns"
```

### Example 2: Section with Sub-Navigation

```yaml
layout:
  type: two_column
  settings:
    width_option: "content_width"
    block_spacing: "spaced_blocks"
    vertical_top: "major_break"
    vertical_bottom: "major_break"
    column_option: "navigation_left"
```

### Example 3: Media Gallery

```yaml
layout:
  type: three_column
  settings:
    width_option: "full_width"
    block_spacing: "flush_blocks"
    vertical_top: "minor_break"
    vertical_bottom: "minor_break"
    column_widths: "equal" # Default equal distribution
```

### Example 4: Featured Content Banner

```yaml
layout:
  type: single_column
  settings:
    width_option: "full_width"
    vertical_top: "major_break"
    vertical_bottom: "minor_break"
```

### Example 5: Resource Dashboard

```yaml
layout:
  type: four_column
  settings:
    width_option: "content_width"
    block_spacing: "spaced_blocks"
    vertical_top: "major_break"
    vertical_bottom: "major_break"
    column_widths: "equal"
```

## CSS Class Implementation

Each configuration option corresponds to specific CSS classes applied to the layout HTML. This approach allows for:

1. Intuitive configuration through the Drupal admin interface
2. Consistent styling through predefined CSS classes
3. Easier debugging and theme maintenance

### CSS Class Mappings:

- `width_option: "content_width"` → `s-box-page-default-h`
- `width_option: "full_width"` → `s-box-page-none-h`
- `block_spacing: "spaced_blocks"` → `layout--blocks-spaced`
- `block_spacing: "flush_blocks"` → `layout--blocks-flush`
- `vertical_top: "major_break"` → `s-box-default-v-top`
- `vertical_top: "minor_break"` → `s-box-small-v-top`
- `vertical_bottom: "major_break"` → `s-box-default-v-bottom`
- `vertical_bottom: "minor_break"` → `s-box-small-v-bottom`
- `column_option: "navigation_left"` → `layout--nav-left`

Note: The class mappings will be updated depending on the layout development.

## Conclusion

By using the layout options provided in this documentation, content editors can create a variety of page designs to suit different content needs. The naming conventions for configuration options are designed to be intuitive and self-explanatory, making the layout building process more efficient. The CSS class-based implementation ensures consistency while providing flexibility.

For more detailed information about implementation, refer to the official Drupal theme documentation.
