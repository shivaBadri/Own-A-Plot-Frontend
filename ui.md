# Universal Frontend Design Rules

You are working on this project as a senior frontend engineer and UI/UX designer.

Every change you make MUST preserve:
- premium visual quality
- responsive behavior
- accessibility
- performance
- consistency

Never create UI that only works on one screen size.


# 1. Responsive Design System (MANDATORY)

The website must look perfect on:

- 320px small phones
- 375px iPhones
- 430px large phones
- 768px tablets
- 1024px laptops
- 1440px desktops
- 1920px full HD screens
- 2560px+ large displays

Never use layouts that break between sizes.

Avoid fixed pixel thinking.

Prefer:

clamp()
min()
max()
auto-fit
auto-fill
flex-wrap
responsive grids


Example:

font-size:
clamp(2rem, 6vw, 6rem)

spacing:
clamp(3rem, 8vw, 10rem)



# 2. Container System

Never stretch content across huge screens.

Every section must use a container.

Rules:

width: min(90%, 1440px)
margin-inline: auto


Large screens should feel premium,
not empty or stretched.



# 3. Typography Rules

Typography must automatically scale.

No fixed huge headings.

Use fluid typography.

Hero headings:
48px mobile →
120px desktop

Body text:
16px mobile →
20px desktop


Maintain:
- readable line height
- proper letter spacing
- good contrast


Text blocks should never become too wide.

Max paragraph width:
600px - 750px



# 4. Spacing System

Never randomly add margins.

Use consistent spacing.

Mobile sections:
48px - 80px

Tablet:
80px - 120px

Desktop:
120px - 180px


Use:

padding:
clamp(4rem, 10vw, 12rem)



# 5. Layout Rules

Before creating any component think:

How does this look on mobile?
How does this look on tablet?
How does this look on 4K?


Desktop:
horizontal layouts allowed.

Mobile:
stack vertically.

Use:

display:grid;
grid-template-columns:
repeat(auto-fit,minmax(280px,1fr));


Never allow:
- overflow
- horizontal scrolling
- broken alignment



# 6. Image & Video Rules

Images must feel premium.

Always:

width:100%
height:auto
object-fit:cover


Hero images/videos:

cover entire area without distortion.

Never stretch images.


Use:
responsive sizes
lazy loading
optimized formats



# 7. Component Quality Rules

Every component needs:

✓ proper spacing
✓ hover states
✓ mobile state
✓ tablet state
✓ desktop state
✓ smooth transitions
✓ loading state if needed


Components should feel like:
Apple
luxury architecture website
premium editorial magazine



# 8. Navbar Rules

Navbar must work everywhere.

Desktop:
clean horizontal navigation.

Tablet/mobile:
premium menu interaction.

Avoid:
crowded navigation
tiny touch areas


Mobile buttons minimum:
44px touch size



# 9. Animation Rules

Animations should feel expensive.

Use:

slow fade
smooth transform
parallax carefully

Avoid:

fast movement
random effects
too many animations


Duration:
300ms - 800ms



# 10. CSS Rules

Avoid:

fixed widths
magic numbers
!important
duplicate styles


Prefer:

CSS variables
design tokens
responsive utilities



# 11. Before Finishing Any Change

Always check:

✓ Mobile view
✓ Tablet view
✓ Laptop view
✓ Desktop view
✓ Large monitor view


Check:

- Does anything overflow?
- Is spacing balanced?
- Is typography readable?
- Does it feel premium?
- Does the section match the whole website?



# Final Requirement

Do not only make the feature work.

Make it production-level.

Every UI change should look like it belongs to a high-end modern website.

Think:
luxury brand
architecture studio
Apple product page
premium investment platform

Responsive perfection is required by default.