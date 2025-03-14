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
- [CSS Class Implementation](#css-class-implementation)
- [Customizable Section Layout Option](#customizable-section-layout-option)
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

Note: The class mappings may be updated as layout development progresses.

## Customizable Section Layout Option

The Customizable Section Layout feature provides content editors with advanced flexibility for creating complex page structures, especially for pages with sidebar navigation.

### Purpose and Functionality

This option allows content editors to configure multi-row layouts within a single section. It specifically addresses the need for more flexible layouts on pages with sidebar navigation, while still adhering to the design system.

The customizable section works in two main modes:

1. **With Sidebar Navigation**: Creates a two-column structure where the left column contains navigation and the right column can have multiple rows with different layouts.
2. **Without Sidebar Navigation**: Creates a single column that can have multiple rows with different layouts.

### Layout Structure Options

#### Without Sidebar Navigation

The structure is simpler, with direct access to the main content area:

```html
<div class="layout--custom">
  <!-- Main column area with multiple row layouts -->
  <div class="main-column">
    <!-- Row layouts will be placed here -->
  </div>
</div>
```

#### With Sidebar Navigation

When sidebar navigation is enabled, the structure includes an additional column for navigation:

```html
<div class="layout--custom">
  <!-- Fixed-width navigation column -->
  <div class="sidebar-navigation">
    <!-- Navigation components -->
  </div>

  <!-- Main content column -->
  <div class="main-column">
    <!-- Row 1: Can be any column layout -->
    <div class="row layout--two-column">...</div>

    <!-- Row 2: Can be a different column layout -->
    <div class="row layout--single-column">...</div>

    <!-- Row 3: Can be any other column layout -->
    <div class="row layout--four-column">...</div>
  </div>
</div>
```

### Configuration Options

Content editors can configure the following aspects of the customizable section:

- **Sidebar Navigation**: Toggle to enable/disable sidebar navigation
- **Number of Rows**: Select how many layout rows to include in the main column
- **Row Layout Type**: For each row, select the column layout (single, two, three, or four columns)
- **Row Configuration**: For each row, configure horizontal and vertical spacing options

### Implementation Notes

The main column section provides additional flexibility with these considerations:

- When sidebar navigation is present, the main column will have appropriate padding to maintain proper spacing between content and navigation.
- Each row can be configured with any of the standard column layouts (1-4 columns).
- There is no limit to the number of rows that can be added to the main column.

### Proof of Concept

The initial implementation will focus on:

1. Adding the configuration option to toggle sidebar navigation
2. Supporting one configurable row in the main column with standard column layout options
3. Validating that the CSS classes are correctly applied based on configuration

After successful review of this proof of concept, development will proceed to enable multiple rows with independent layout configurations.

### Constraints

When modifying the layout configuration of a customized section:

- All content blocks under the affected section must be removed before updating the configuration to prevent layout conflicts.
- The system will prompt users to confirm before proceeding with layout changes that might affect existing content.
- When switching between sidebar and non-sidebar layouts, content will need to be rebuilt in the new structure.

## Conclusion

By using the layout options provided in this documentation, content editors can create a variety of page designs to suit different content needs. The naming conventions for configuration options are designed to be intuitive and self-explanatory, making the layout building process more efficient. The CSS class-based implementation ensures consistency while providing flexibility.

For more detailed information about implementation, refer to the official Drupal theme documentation.
