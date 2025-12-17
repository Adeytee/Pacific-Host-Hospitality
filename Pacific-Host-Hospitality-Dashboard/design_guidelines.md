# Design Guidelines: Blank Next.js + shadcn/ui Setup

## Project Context
You've requested a **blank board** setup with your own code ready to implement. These guidelines provide a flexible foundation that won't constrain your existing design direction.

## Design Approach
**Minimal Foundation Approach** - Since you're bringing your own code, the setup prioritizes flexibility over prescriptive design decisions.

## Core Design Elements

### Typography
- **System**: shadcn/ui default typography configuration
- **Flexibility**: Pre-configured for easy customization to match your design requirements
- **Hierarchy**: Standard H1-H6 structure available, customize as needed

### Layout System
- **Spacing**: Full Tailwind spacing scale (0-96) available
- **Container**: Default max-w-7xl container pattern, easily adjustable
- **Grid**: Standard Tailwind grid system ready for any layout needs

### Component Library
shadcn/ui components available on-demand:
- **Forms**: Input, Select, Checkbox, Radio, Textarea
- **Navigation**: Navigation Menu, Breadcrumb, Tabs
- **Overlays**: Dialog, Sheet, Popover, Dropdown Menu
- **Feedback**: Toast, Alert, Progress
- **Data Display**: Card, Table, Badge, Avatar

Add components as needed with: `npx shadcn-ui@latest add [component-name]`

## Implementation Notes
- Clean Next.js 14+ App Router structure
- TypeScript enabled for type safety
- Tailwind CSS configured and ready
- No predetermined color schemes or themes - fully customizable
- No layout constraints - build according to your specifications

## Development Freedom
This setup intentionally avoids prescriptive design decisions to give you complete creative control. The foundation is production-ready while remaining unopinionated about visual direction, allowing seamless integration of your existing code and design vision.