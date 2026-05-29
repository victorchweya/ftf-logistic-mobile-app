# Logistics App Screen Design Prompts

Use this file as a screen-by-screen source for prompting UI designs. Each prompt should preserve the operational context, role behavior, screen states, and navigation rules described here.

## Global design context

Design a mobile logistics operations app for field delivery teams. The app is used by drivers, delivery assistants, and hybrid users during assigned routes, customer deliveries, supplier collections, proof capture, route navigation, and account support.

Shared UI patterns:
- authenticated screens use a top app header with title, optional back button, and optional right action
- Dashboard and Account live in a bottom tab shell
- route detail and notifications are stack screens above the tab workspace
- camera, signature, load check, counterparty proof, and eTIMS invoice are full-screen modal flows
- most app screens can show a next-stop surface, except route detail and profile/account
- use clear operational CTAs, status badges, compact data cards, and field-ready touch targets
- avoid marketing-style layouts; prioritize task completion, scanability, and route execution

Primary roles:
- `driver`: starts routes, navigates, marks arrival, completes routes
- `delivery_assistant`: waits for driver start/arrival, completes POC/POD proof actions after arrival
- `hybrid`: can perform both driver and delivery assistant actions

Core entities:
- route: assigned, active, ready to complete, completed
- route kind: delivery, collection, mixed
- stop: pending, arrived, completed, rejected
- order: delivery or collection
- proof outcome: full, partial, failed
- proof assets: produce photos, invoice photos/scans, signature, receiver/supplier name, customer feedback, eTIMS data

## Screen: Session Redirect / App Boot

Prompt:
Design the app boot and session redirect state for a logistics mobile app. This screen is transient and should feel calm, secure, and operational.

Audience:
- all users before the app resolves whether they are logged in

Entry points:
- app launch
- root route
- auth/app redirect boundaries

Primary content:
- centered loading indicator
- short message such as `Bootstrapping session...`, `Preparing login...`, `Syncing account...`, or `Loading workspace...`

Primary actions:
- no user action

States:
- loading session
- loading authenticated workspace
- loading auth workspace

Navigation outcomes:
- if no role/session, redirect to Login
- if role exists, redirect to Dashboard

Design notes:
- keep the screen minimal
- avoid decorative content that could delay perceived startup

## Screen: Login

Prompt:
Design the Login screen for a field logistics app. The screen must support first-time OTP login, returning PIN login, biometric unlock, remembered account behavior, and demo account simulation.

Audience:
- driver
- delivery assistant
- hybrid user
- returning remembered-device user

Entry points:
- unauthenticated app launch
- logout
- forgot PIN reset

Primary content:
- supplier/app logo
- app label: `Logistics App`
- login card
- fleet email field when no remembered account is available or user chooses a different account
- remembered account summary when available
- OTP destination copy, based on the selected/remembered phone number
- app version footer
- quick simulation/demo account chips when account picker is visible

Primary actions:
- enter fleet email
- select demo account
- enter 4-digit OTP
- verify OTP
- resend OTP after cooldown
- set 4-digit PIN
- confirm PIN
- enable fingerprint during PIN setup
- login with PIN
- login with fingerprint when enabled and available
- forgot PIN
- use remembered account
- use different account

States:
- OTP entry
- OTP resend cooldown
- invalid OTP
- PIN setup
- PIN confirmation mismatch
- returning PIN login
- biometric auto-attempt
- biometric unavailable on web/device
- biometric cancelled
- API login failure
- remembered account
- account picker
- loading submit state

Role behavior:
- all roles use the same login flow
- role is resolved after successful authentication

Navigation outcomes:
- successful login redirects to Dashboard
- forgot PIN clears local PIN and returns user to OTP flow

Design notes:
- make OTP/PIN entry large and easy for field use
- error messages should be close to the login card
- biometric should feel like an enhancement, not the only path

## Screen: Dashboard

Prompt:
Design the Dashboard tab for a logistics operations app. This is the user's main route workspace and should emphasize today's current focus, assigned routes, and route progress.

Audience:
- driver
- delivery assistant
- hybrid

Entry points:
- successful login
- bottom tab: Dashboard
- role redirects from driver, delivery assistant, or hybrid paths
- return from completed route

Primary content:
- header title based on role: `Driver`, `Delivery Assistant`, or `Hybrid`
- notification bell with unread badge
- welcome section with user name and avatar initials
- current date/time row
- stats summary: assigned route count, completed route count
- Current Focus section
- embedded next-stop banner for the primary route
- All Assigned Routes section
- route cards with code, status, kind, vehicle, stop summary, total weight, and sync/load-check hint

Primary actions:
- pull to refresh route assignments
- open notifications
- open focused route from next-stop banner
- start route or complete load check from next-stop banner when allowed
- navigate to next stop from next-stop banner when allowed
- mark arrival from next-stop banner when allowed
- open route detail from route card
- refresh empty state

States:
- loading route assignments
- no assigned routes
- assigned routes available
- current focus route available
- completed routes counted
- route assignment notification newly claimed
- pull-to-refresh

Role behavior:
- driver and hybrid can start assigned routes, navigate, and arrive
- delivery assistant sees passive waiting actions before driver start/arrival
- all roles can open route detail

Navigation outcomes:
- notification bell opens Notifications
- route card opens Route Detail
- next-stop banner opens Route Detail or stop-focused Route Detail
- load-check action opens Load Check modal

Design notes:
- Dashboard should be dense but not crowded
- Current Focus should be visually more prominent than the route list
- route cards should make status and next required action obvious

## Screen: Account

Prompt:
Design the Account tab for a logistics field user. The screen should combine profile identity, account details, support access, accessibility preferences, biometric unlock, and logout.

Audience:
- driver
- delivery assistant
- hybrid

Entry points:
- bottom tab: Account

Primary content:
- account header with avatar initials, name, email, and role badge
- notification bell
- Account Details accordion
- Support accordion
- Accessibility accordion
- app/build footer

Primary actions:
- pull to refresh account/session
- expand/collapse account details
- expand/collapse support tools
- expand/collapse accessibility settings
- contact dispatch on WhatsApp
- choose theme: System, Light, Dark
- choose text size: Small, Default, Large, XL, XXL, XXXL
- toggle Reduce Motion
- toggle Biometric Unlock
- logout session

States:
- default account details expanded
- support expanded
- accessibility collapsed
- refresh in progress
- biometric unavailable on web
- biometric unavailable because no PIN
- biometric unavailable because no enrolled device authentication
- preference update success/error
- logout success/error

Role behavior:
- primary role and assigned roles are displayed
- same preference and support actions are available to all roles

Navigation outcomes:
- notification bell opens Notifications
- logout returns to Login
- WhatsApp support opens external WhatsApp link

Design notes:
- keep account settings practical and compact
- preference controls should be obvious and touch-friendly
- support action should be easy to find during field issues

## Screen: Notifications

Prompt:
Design the Notifications screen for route updates, delivery events, and dispatch activity. It should support quick triage and route deep-linking.

Audience:
- driver
- delivery assistant
- hybrid

Entry points:
- notification bell from Dashboard
- notification bell from Account
- native/local notification tap

Primary content:
- header title: `Notifications`
- back button
- unread summary: unread count or `All caught up`
- toolbar actions
- notification list
- notification cards with icon, title, timestamp, body
- empty state explaining where route updates will appear

Primary actions:
- pull to refresh inbox
- mark all read
- clear inbox
- tap notification
- go back

States:
- no notifications
- unread notifications
- all notifications read
- refresh in progress

Role behavior:
- notifications are role-aware based on workflow audience
- users can open route-linked notifications

Navigation outcomes:
- tapping route notification opens Route Detail for that route
- back returns to previous screen

Design notes:
- unread state should be visible but not noisy
- destructive clear action should be visually secondary to reading/opening

## Screen: Route Detail

Prompt:
Design the Route Detail screen for a field logistics route. This is the operational hub for route preview, stops, navigation, route start, arrival, POC/POD proof, and completion.

Audience:
- driver
- delivery assistant
- hybrid

Entry points:
- Dashboard route card
- Current Focus / next-stop banner
- Notifications
- native/local notification deep link

Primary content:
- top header with back button
- short route title, such as `Route R-310`
- route kind subtitle: Delivery route, Collection route, or Mixed route
- status badge: Assigned, Active, Ready to complete, Completed
- route actions menu
- route update banner when route has changed
- top tabs: Preview and Stops Left
- fixed bottom CTA area when a driver/hybrid action is available

Header secondary actions:
- Route Preview
- Share route link
- Copy route link

Preview tab content:
- stops count
- packages count
- progress completed/total
- trip weight
- route type
- pickup count
- delivery count
- current leg
- proof sync status
- dispatch updates
- route map preview

Stops tab content:
- show completed toggle when some stops are completed but route is not fully finalized
- list of pending/arrived stops by default
- completed stops shown when toggled or when all stops are finalized
- expandable stop cards

Primary actions:
- refresh route update
- dismiss route update banner
- pull to refresh route and route list
- switch between Preview and Stops
- swipe between tabs
- complete load check
- start route
- navigate route
- navigate to next stop
- complete route
- arrive at stop
- open route preview in Maps
- share/copy route link

States:
- loading route detail
- route unavailable
- request error with technical details
- assigned route
- assigned route requiring load check
- assigned route blocked because another route is active or ready to complete
- active route
- active current stop arrived
- ready to complete
- completed route
- route update available
- all stops finalized
- completed stops hidden/shown
- pull-to-refresh

Role behavior:
- driver and hybrid see route start, load check, navigation, arrival, and completion actions
- delivery assistant does not see driver-only footer CTAs
- delivery assistant can work POC/POD only after a stop is arrived
- hybrid can do both driver and assistant work

Navigation outcomes:
- back returns to previous workspace
- load-check CTA opens Load Check modal
- stop proof actions may open Camera, Counterparty Proof, Signature, or eTIMS Invoice
- route completion returns to Dashboard
- external map actions open Google Maps/browser route preview

Design notes:
- Preview should help the user understand route scope quickly
- Stops should emphasize the next actionable stop
- bottom CTA must not obscure stop content
- blocked states must explain what must happen next

## Component/Screen Section: Stop Card

Prompt:
Design the expandable Stop Card used inside Route Detail. It must support pending, arrived, completed, and rejected stops; driver arrival; assistant proof work; and final proof review.

Audience:
- driver
- delivery assistant
- hybrid

Entry points:
- Route Detail Stops tab
- stop-focused deep link from next-stop banner or notification

Primary content:
- stop status icon
- customer or supplier name
- order number
- time slot
- stop address
- order/stop status pill
- expand/collapse affordance
- sequence
- ETA
- weight
- contact name
- contact phone
- waiting-for-arrival message
- final proof summary after completion
- POC/POD action area when arrived

Primary actions:
- expand/collapse stop
- call contact
- long-press/copy contact phone
- mark `I've Arrived`
- select proof outcome: full, partial, failed
- accept/reject item quantities
- choose rejection reasons
- capture produce proof photo
- capture invoice proof photo for delivery
- remove proof photo
- open Customer Proof or Supplier Proof
- submit POD or POC

States:
- collapsed
- expanded
- pending stop
- arrived stop
- completed stop
- rejected stop
- arrival blocked by active arrived stop
- arrival blocked by sequential arrival rule
- waiting for arrival
- proof draft in progress
- proof validation error
- final proof submitted
- proof submission loading

Role behavior:
- driver and hybrid can mark arrival
- delivery assistant and hybrid can complete proof actions once stop is arrived
- delivery assistant sees waiting copy while stop is pending

Navigation outcomes:
- proof photo opens Camera modal
- customer/supplier proof opens Counterparty Proof modal
- signature capture opens Signature modal through Counterparty Proof
- submit POC/POD updates Route Detail

Design notes:
- stop cards should remain scannable when collapsed
- proof controls should be grouped as a step-by-step task area
- validation errors should appear near the submit action

## Screen: Load Check Modal

Prompt:
Design the Load Check full-screen modal for confirming loaded delivery quantities before a route can start.

Audience:
- driver
- hybrid

Entry points:
- Route Detail footer CTA when assigned route requires load check
- Dashboard next-stop banner when assigned route requires load check

Primary content:
- close button
- title: `Load Check`
- explanatory copy
- blocked warning card when unavailable
- delivery order cards
- customer name
- order number
- time slot
- order weight
- item rows with item name, dispatched quantity, and loaded quantity input
- fixed footer submit action

Primary actions:
- edit loaded quantity per item
- submit load check
- close modal

States:
- loading route
- load check available
- load check unavailable while checking active routes
- blocked by another active/ready route
- blocked because route is already in trip
- blocked because route is not assigned
- submit loading
- submit success
- submit error

Role behavior:
- driver and hybrid can submit
- delivery assistant should not be the primary user for this flow

Navigation outcomes:
- successful submit returns to Route Detail
- close returns to previous screen

Design notes:
- quantity fields need large numeric input affordances
- blocked state should clearly state the route preventing action

## Screen: Camera Modal

Prompt:
Design the Camera full-screen modal for proof photo capture and invoice scanning. The screen must support produce photos, invoice photos, native document scanning, preview, retake, save, camera permissions, torch, camera flip, and a 15-photo limit.

Audience:
- delivery assistant
- hybrid

Entry points:
- Stop Card proof photo action
- Stop Card invoice action

Primary content:
- close button
- title: `Proof Camera` or `Invoice Camera`
- camera preview
- captured image preview
- document scan card for invoice scan on device
- helper copy
- attached photo count
- photo limit warning
- camera permission request state

Primary actions:
- grant camera access
- cancel permission request
- toggle torch
- flip camera
- take photo
- scan invoice document
- retake
- use photo
- use scan
- close

States:
- permission unknown/loading
- permission denied/not granted
- live camera
- captured preview
- invoice document scan auto-launch
- invoice scan busy
- photo limit reached
- save success
- scan/PDF artifact error

Role behavior:
- used by roles that can work proof, primarily delivery assistant and hybrid

Navigation outcomes:
- using photo/scan saves the asset to proof draft and returns to Stop Card
- close returns without saving

Design notes:
- camera preview should dominate the screen
- capture count should be visible but not distract from capture
- invoice scan should communicate that scanned image also counts as required invoice proof

## Screen: Signature Modal

Prompt:
Design the Signature full-screen modal for customer or supplier signature capture. The screen should be simple enough to hand to the counterparty.

Audience:
- customer
- supplier representative
- delivery assistant
- hybrid

Entry points:
- Counterparty Proof screen

Primary content:
- close button
- title: `Customer Signature` or `Supplier Signature`
- helper copy
- large signature pad
- action row

Primary actions:
- draw signature
- clear signature
- use signature
- close

States:
- empty signature pad
- signature in progress
- signature captured
- use signature disabled until strokes exist
- missing target fallback returns back

Role behavior:
- delivery assistant or hybrid initiates
- customer/supplier physically signs

Navigation outcomes:
- saved signature returns to Counterparty Proof
- close returns without saving changes

Design notes:
- make the pad large and uncluttered
- use very clear buttons because this may be used by non-staff users

## Screen: Counterparty Proof Modal

Prompt:
Design the Counterparty Proof full-screen modal for collecting customer or supplier proof after staff have prepared POD/POC details. The screen may be handed to the customer or supplier and should hide internal staff controls.

Audience:
- customer
- supplier representative
- delivery assistant
- hybrid

Entry points:
- Stop Card `Customer Proof`
- Stop Card `Supplier Proof`

Primary content:
- close button
- title: `Customer Proof` or `Supplier Proof`
- hand-device-over instruction card
- receiver/supplier representative name input
- signature capture card
- customer feedback section when delivery feedback is required
- validation hint
- final proof-ready CTA

Primary actions:
- enter receiver/supplier representative name
- capture signature
- retake signature
- clear signature
- choose customer rating from 1 to 5
- select feedback tags
- enter feedback note for low ratings
- mark customer/supplier proof ready
- close

States:
- missing receiver/supplier name
- signature missing
- rating missing when feedback required
- feedback tags missing when feedback required
- proof ready
- validation error
- failed outcome skips counterparty requirements

Role behavior:
- delivery assistant or hybrid opens the flow
- customer/supplier completes visible proof fields
- driver-only users are not the primary target

Navigation outcomes:
- capture signature opens Signature modal
- proof-ready returns to Stop Card
- close returns to Stop Card

Design notes:
- wording should reassure the counterparty that only their proof fields are visible
- proof-ready state should be unmistakable

## Screen: eTIMS Invoice Modal

Prompt:
Design the eTIMS Invoice full-screen modal for supplier POC invoice QR capture and invoice document attachment.

Audience:
- delivery assistant
- hybrid

Entry points:
- supplier collection proof flow when eTIMS invoice data is needed

Primary content:
- close button
- title: `eTIMS Invoice`
- supplier POC eTIMS explanation
- QR scanner area on web
- document scanner area on native device
- web import area when available
- captured data card
- eTIMS invoice link input
- attached invoice file summary
- footer actions

Primary actions:
- enable camera for QR scanner
- scan QR code
- scan invoice document
- import camera/image file on web
- upload PDF on web
- manually edit eTIMS invoice link
- remove attached file
- clear eTIMS data
- save eTIMS data
- close

States:
- no camera permission
- scanner active
- scanner paused after QR capture
- scan busy
- QR detected
- no QR detected
- file attached
- no file attached
- web file picker available
- native scanner available
- native scanner unavailable
- save and clear states

Role behavior:
- delivery assistant and hybrid are primary users

Navigation outcomes:
- save returns to proof flow
- clear returns to proof flow after removing draft eTIMS data
- close returns without explicit save

Design notes:
- make it clear that QR link and file attachment are related but separate pieces of captured data
- native and web variants should preserve the same information hierarchy

## Cross-Screen Flow Prompt: Route Execution

Prompt:
Design the full route execution flow across Dashboard, Route Detail, Load Check, Stop Card, Camera, Counterparty Proof, Signature, and route completion.

Flow:
1. user logs in
2. Dashboard shows current route focus and all assigned routes
3. user opens Route Detail
4. if assigned and load check is required, user completes Load Check
5. driver/hybrid starts route
6. driver/hybrid navigates to next stop
7. driver/hybrid marks arrival
8. delivery assistant/hybrid completes POC/POD proof
9. proof may include item discrepancies, rejection reasons, photos, invoice scans, counterparty name, signature, and feedback
10. user repeats stop workflow until all stops are finalized
11. driver/hybrid completes route
12. user returns to Dashboard

Critical states to include:
- assigned route
- load check required
- active route
- pending stop
- arrived stop
- proof draft
- completed proof
- route ready to complete
- completed route
- blocked by another active route
- route update available
- sync/proof pending

Design notes:
- each screen should make the next valid action obvious
- blocked states must explain why action is unavailable and what resolves it
- field users should never need to infer whether the route is ready to start, ready for proof, or ready to complete
