# Hybrid Logistics App Design Reference

Source seed: `index.html`

This document turns the AI-generated HTML dashboard into an app-wide design reference for the Hybrid Android logistics app. Use it as the visual and UX foundation for every screen, not only the dashboard.

## Design Direction

Hybrid should feel like a serious field operations tool: calm, compact, clear, and reliable. The driver should be able to glance at the app, understand the next action, and move on.

The design should avoid marketing-style layouts, oversized decorative sections, and playful visual noise. Use quiet surfaces, strong information hierarchy, direct labels, and high-confidence action placement.

## Product Principles

- Put the next operational action first.
- Make status readable in text, not only color.
- Keep screens dense enough for field work, but never cramped.
- Prefer predictable Android patterns over novelty.
- Design for one-handed use and quick roadside scanning.
- Assume weak network conditions and support offline/pending states.
- Keep proof, collection, issue, and completion flows explicit and hard to misread.

## Platform

- Primary platform: Android phone
- Primary orientation: portrait
- Recommended implementation style: native Android with Material 3, adapted to the custom Hybrid tokens
- Primary user: driver handling delivery and collection routes
- Primary context: field work, vehicle stops, warehouse handoffs, customer signatures, photo proof, and route updates

## Information Architecture

The HTML prototype currently shows the Dashboard and Account destinations. As the app grows, use this broader structure:

| Area | Purpose | Common Screens |
| --- | --- | --- |
| Dashboard | Today's work summary and next action | Overview, active objective, urgent alerts |
| Routes | Assigned route list and route history | Route list, filters, route detail |
| Stops | Delivery and collection execution | Stop detail, navigation handoff, checklist, completion |
| Proof | Evidence capture | Photo proof, signature, barcode, notes |
| Notifications | Operational alerts | Route changes, failed uploads, dispatch messages |
| Account | Driver profile and settings | Profile, vehicle, availability, sync status |

Keep the bottom navigation small. If the app only needs two top-level areas at first, keep `Dashboard` and `Account`. If route browsing becomes a primary workflow, add `Routes` as a middle tab rather than hiding it behind the dashboard.

## Navigation Model

### Top App Bar

Use a compact top app bar on primary screens.

- Height: 64dp
- Background: white surface
- Bottom border: neutral border token
- Left content: brand mark and screen title, or back button and title on child screens
- Right actions: notifications, sync indicator, account/avatar where relevant

Child screens should use a back arrow with a clear title:

- `Route R-312`
- `Stop 3 of 7`
- `Proof of Delivery`
- `Notifications`

### Bottom Navigation

Use bottom navigation for persistent primary destinations only.

- Height: 64dp
- Surface: white with subtle top border
- Active state: primary green icon/text
- Inactive state: muted neutral icon/text
- Avoid more than four tabs

Recommended first set:

- Dashboard
- Routes
- Account

If `Routes` is not added yet, route lists can live inside Dashboard until the workflow grows.

### Screen Flow

Typical driver flow:

1. Dashboard
2. Open current stop
3. Review stop detail
4. Capture proof or collection information
5. Complete stop
6. Return to route or next stop

## Visual Language

The app uses restrained operational surfaces:

- Light neutral background
- White cards
- Thin borders
- Low elevation
- Deep green brand accents
- Compact line icons
- Small status chips
- Clear primary buttons

The memorable design signature is not decoration. It is the steady use of green operational emphasis for "do this now" moments: active route, current stop, primary completion action, selected navigation.

## Color Tokens

### Core

| Token | Value | Usage |
| --- | --- | --- |
| `color.brand.primary` | `#1E4A35` | Brand, active state, primary CTA |
| `color.brand.primarySoft` | `#DFEDDF` | Subtle green panels, icon wells, requirement banners |
| `color.background.app` | `#F7F7F7` | Main screen background |
| `color.surface.default` | `#F9F9F9` | Cards, app bars, sheets |
| `color.surface.muted` | `#F7F7F7` | Fact cells, quiet grouped content |
| `color.border.default` | `#E6E6E6` | Dividers, card borders, outline buttons |
| `color.text.primary` | `#333333` | Main text |
| `color.text.strong` | `#080808` | Highest emphasis values |
| `color.text.secondary` | `#666666` | Supporting labels |
| `color.text.muted` | `#808080` | Disabled or inactive metadata |

Palette families are exposed as Tailwind v4 theme colors: green, orange, indigo, neutral, red, yellow, olive, brown, violet, and purple.

### Semantic

| Token | Value | Usage |
| --- | --- | --- |
| `color.status.active` | `#1E4A35` | Active route/stop |
| `color.status.completed` | `#6B7248` | Completed work |
| `color.status.assigned` | `#6470B5` | Assigned but not active |
| `color.status.collection` | `#AC6820` | Collection route/stop |
| `color.status.warning` | `#C47423` | Attention needed |
| `color.status.error` | `#B71C1C` | Failed upload, blocked stop, validation error |
| `color.status.info` | `#6470B5` | Dispatch updates, neutral notices |
| `color.notification.unread` | `#D64545` | Unread badge |

### Status Chip Backgrounds

| Status | Background | Text |
| --- | --- | --- |
| Active | `#1E4A35` | `#F7F7F7` |
| Completed | `#F3F5E7` | `#6B7248` |
| Assigned | `#E8EAFC` | `#6470B5` |
| Collection | `#F7E6D4` | `#AC6820` |
| Warning | `#FCF6DE` | `#C47423` |
| Error | `#FBEAEA` | `#B71C1C` |

## Typography

Use Android system typography or Material 3 typography with these target sizes.

| Role | Size | Weight | Usage |
| --- | ---: | --- | --- |
| App title | 20sp | Bold | Brand or primary screen title |
| Screen title | 24sp | Semibold | Main page greeting/title |
| Section title | 18sp | Semibold | Major content groups |
| Section label | 12sp | Semibold uppercase | Operational labels |
| Body prominent | 16sp | Semibold | Address, route ID, stop title |
| Body | 14sp | Regular | Supporting content |
| Body medium | 14sp | Medium | Buttons, tabs, fact labels |
| Metadata | 12sp | Medium | Status chips, timestamps, route facts |
| Bottom nav label | 10sp | Medium | Navigation labels |

Guidelines:

- Keep letter spacing at 0 except uppercase section labels.
- Use sentence case for buttons and labels.
- Keep operational labels short: `Open Current Stop`, `Start Route`, `Capture Proof`, `Complete Stop`.

## Spacing And Shape

| Token | Value | Usage |
| --- | ---: | --- |
| `space.screenX` | 16dp | Horizontal screen padding |
| `space.sectionY` | 24dp | Between major sections |
| `space.groupY` | 16dp | Between cards or grouped controls |
| `space.card` | 16dp | Default card padding |
| `space.cardLarge` | 20dp | High-priority action card body |
| `space.inline` | 8dp | Icon/text and compact horizontal gaps |
| `space.inlineLarge` | 12dp | Larger row gaps |

| Token | Value | Usage |
| --- | ---: | --- |
| `radius.card` | 12dp | Cards and panels |
| `radius.tile` | 8dp | Fact cells and grouped fields |
| `radius.button` | 6dp | Buttons |
| `radius.chip` | Full | Status chips |
| `radius.avatar` | Full | Driver avatar |

Touch target rule:

- Minimum interactive target: 48dp
- Icon-only visible size: 20-24dp inside a 40-48dp hit area

## Elevation And Borders

The app should feel sturdy, not floaty.

- Prefer borders over heavy shadows.
- Use low elevation for cards and app bars.
- Use shadows only to separate fixed bars, cards, sheets, and menus.
- Requirement banners and fact cells should use tinted backgrounds, not deep elevation.

## Iconography

Use a consistent outline icon style. Material Symbols Rounded or a similar single-stroke Android icon set will match the source design well.

Common icon meanings:

| Concept | Icon Direction |
| --- | --- |
| Dashboard | Grid/dashboard |
| Routes | Map or route |
| Stop/location | Pin |
| Vehicle | Truck/van |
| Package/stops | Box/package |
| Weight | Scale |
| Proof/photo | Camera |
| Completed | Check circle |
| Notifications | Bell |
| Account | Person |
| Sync/offline | Cloud sync/cloud off |
| Issue | Alert triangle |

Icons should support text, not replace critical labels.

## Core Components

### AppTopBar

Use on every primary screen.

- Brand or screen title on the left
- Notification/sync/account actions on the right
- Back button replaces brand on child screens
- Show unread notification state with a small red badge

### BottomNavigation

Use only for primary destinations. Active state uses primary green. Inactive state uses muted text.

### PrimaryButton

Use for the most important action on a screen.

- Background: primary green
- Text: neutral-50 near-white
- Height: 44-48dp minimum
- Radius: 6dp
- Full width when the action is central to a workflow

Examples:

- `Open Current Stop`
- `Start Route`
- `Capture Proof`
- `Complete Stop`

### SecondaryButton

Use for lower-priority actions.

- White surface
- Border: neutral border
- Text: primary text
- Height: 36-44dp depending on context

Examples:

- `Details`
- `Call Customer`
- `View Notes`

### StatusChip

Use compact chips for state. Always include the text label.

Statuses:

- Active
- Assigned
- Completed
- Collection
- Pending Sync
- Failed
- Cancelled

### DataCard

Generic card used for routes, stops, metrics, alerts, and account sections.

- White background
- 12dp radius
- 1dp neutral border
- 16dp padding
- Low elevation or no elevation

Do not nest cards inside cards. If a card needs inner grouping, use muted tiles or dividers.

### MetricCard

Use for dashboard and route summary counts.

- Label at top
- Icon well on the right
- Large numeric value
- Small unit label

Examples:

- Assigned routes
- Completed routes
- Stops remaining
- Failed uploads

### SegmentedFilter

Use for small filter sets.

- Container: neutral-200 background
- Selected segment: surface background with subtle shadow
- Text: 14sp medium
- Full-width when there are 3-4 options

Examples:

- All / Delivery / Collection / Mixed
- Pending / Completed / Failed
- Today / Week / History

### RouteCard

Use in dashboard and route list screens.

Required content:

- Route ID
- Status chip
- Vehicle type
- Stop count
- Total weight
- Optional requirement banner
- Details action or row tap

### StopCard

Use for route detail and stop lists.

Recommended content:

- Stop sequence number
- Stop status
- Customer or site name
- Address
- Task type: delivery, collection, mixed
- Required proof indicators
- Time window if available

### CurrentActionCard

Use whenever one action deserves top priority.

Examples:

- Current stop on dashboard
- Next stop on route detail
- Pending proof upload
- Failed sync requiring retry

Structure:

- Tinted header with status/route context
- Main location or task details
- One strong full-width CTA

### RequirementBanner

Use a low-height tinted row for operational requirements.

Examples:

- Proof of delivery required
- Signature required
- Barcode scan required
- Cash collection required
- Upload pending

### FormField

Use simple, high-contrast forms for field input.

- Label above field
- 48dp minimum field height
- Clear validation message below
- Avoid placeholder-only labels

Common fields:

- Notes
- Quantity
- Recipient name
- Signature
- Issue reason

### ProofCapturePanel

Use for proof workflows.

Required states:

- Empty
- Captured
- Uploading
- Pending sync
- Failed with retry

Proof types:

- Photo
- Signature
- Barcode
- Manual note

## Screen Patterns

### Dashboard

Purpose: today's summary and next action.

Recommended sections:

- Greeting or driver status
- Summary metrics
- Current objective
- Route filters
- Route cards

The dashboard from `index.html` is the first concrete application of this pattern.

### Routes

Purpose: browse and filter assigned work.

Recommended sections:

- Search or filter row if route volume grows
- Segmented status/type filters
- Route cards
- Empty filtered state

### Route Detail

Purpose: understand route progress and move through stops.

Recommended sections:

- Route header with status, vehicle, stops, weight
- Progress summary
- Current/next stop action card
- Stop list
- Route notes or requirements

### Stop Detail

Purpose: execute one delivery or collection.

Recommended sections:

- Customer/site and address
- Task checklist
- Contact actions
- Navigation action
- Proof requirements
- Issue reporting
- Completion CTA

### Proof Of Delivery Or Collection

Purpose: capture required evidence.

Recommended sections:

- Stop context
- Required proof list
- Capture controls
- Preview/correction
- Submit or save pending

### Notifications

Purpose: show operational alerts.

Recommended sections:

- Unread/All filter
- Alert cards grouped by time
- Route update details
- Failed upload/sync warnings

### Account

Purpose: driver profile and operational settings.

Recommended sections:

- Driver identity
- Vehicle assignment
- Availability/status
- Sync state
- App settings
- Sign out

## Interaction States

Every interactive component should define:

- Default
- Pressed
- Focused
- Disabled
- Loading
- Error where relevant

Android translation from HTML:

- HTML hover states become pressed/focused states.
- The fixed bottom nav must account for gesture navigation insets.
- Scroll content needs bottom padding so final cards are never hidden.

## Loading, Empty, Offline, And Error States

Build these states into every list or workflow screen.

| State | Design Treatment |
| --- | --- |
| Loading | Skeleton cards or compact progress indicator |
| Empty | Clear message, optional illustration-free icon, direct next action |
| Empty filter | Explain that no items match the selected filter |
| Offline | Show last synced time and what remains usable |
| Pending sync | Muted warning banner with retry/sync context |
| Failed upload | Error banner plus retry action |
| Validation error | Inline field error plus blocked completion |

## Accessibility

- Maintain 48dp touch targets.
- Provide content descriptions for icon buttons and non-text icons.
- Do not rely on color alone for route or stop status.
- Keep contrast high on all chips, banners, and buttons.
- Make completion actions explicit and confirmation-aware when irreversible.
- Support large text without clipping route IDs, addresses, buttons, or chips.

## Android Implementation Guidance

Recommended structure:

- Use `Scaffold` for top app bar, bottom navigation, and content.
- Use `LazyColumn` for scrolling screen content.
- Use reusable composables for cards, chips, buttons, route facts, filters, and banners.
- Keep status and color mapping centralized.
- Keep dimensions in a design token file.
- Use system window insets for status bar, navigation bar, and keyboard handling.

Suggested shared models:

```kotlin
enum class RouteStatus {
    Active,
    Assigned,
    Completed,
    Collection,
    Cancelled
}

enum class StopStatus {
    Pending,
    Active,
    Completed,
    Failed,
    PendingSync
}
```

```kotlin
data class RouteSummary(
    val id: String,
    val status: RouteStatus,
    val vehicleType: String,
    val stopCount: Int,
    val weightKg: Int,
    val requiresProofOfDelivery: Boolean
)
```

```kotlin
data class StopSummary(
    val id: String,
    val sequenceNumber: Int,
    val status: StopStatus,
    val taskType: TaskType,
    val siteName: String,
    val address: String,
    val requiresPhoto: Boolean,
    val requiresSignature: Boolean
)
```

## Dashboard Seed From `index.html`

The existing HTML prototype contributes these reusable choices:

- Brand name: `Hybrid`
- Brand color: `#1E4A35`
- Light neutral app background with near-white cards
- Compact top app bar
- Bottom navigation
- Metric cards
- Current objective card
- Segmented filters
- Route cards with facts and status chips
- Requirement banner pattern for proof of delivery

Dashboard sample data from the prototype:

| Route | Status | Vehicle | Stops | Weight | Extra Requirement |
| --- | --- | --- | ---: | ---: | --- |
| R-312 | Active | Heavy Van | 7 | 450 kg | Proof of delivery required |
| R-318 | Completed | Van | 3 | 150 kg | None shown |
| R-322 | Assigned | Heavy Van | 8 | 510 kg | Proof of delivery required |
| R-324 | Collection | Van | 2 | 90 kg | None shown |
| R-326 | Assigned | Van | 5 | 220 kg | None shown |

Do not treat this as the full app scope. It is the first screen example for the broader design system above.

## Source Cleanup Notes

- The source text contains an encoding artifact around the separator after `Next Stop`. Use `Next Stop - R-312` or another correctly encoded separator in the app.
- The `vid` attributes in the HTML are AI/export artifacts and should not be implemented.
- The Tailwind CDN and remote avatar URL are prototype-only details.
- Replace web hover behavior with Android pressed, focused, selected, disabled, and loading states.
