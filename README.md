# A responsive Javacript off canvas navigation menu

A responsive Javacript and flexbox off canvas navigation menu

Test cases:


Default

- Only one icon can be active and it's content displayed at any time

-This is navigatable/usuable by keyboard only as well as default mouse

- Aria roles are defined for screen readers where native attributes do not cover them


Default actions for buttons

- They can be independently clicked to open and close the panel

- You can switch between panels whilst the side panel is open


Screen size changes

Desktop

- By default the side menu is open

- The 'default' content will be open

- The content is moved across when the side panel is active


Below desktop

- The active panel is set to overlay with a dropshadow

- The active state and  panel can be closed by clicking outside the menu.


Between small and desktop

- By default the side panel is closed and only the menu options are visible

- None are active by default

- Once clicked the side panel slides in with the clicked options content


Small 'phone'

- The menu is hidden by default except for the hamburger icon

- Once the icon above is clicked the panel slides in with the default content visible

- The icon can be used to close the panel

- The icon can also close the panel if another icon is already 'active'

- The options once clicked can close the panel and deactivate the hamburger to close it

- The icon changes to an 'x' whilst open and back to the hamburger once closed


Screen resizing changes

- The screen layout should go back to it's default settings if the browser is resized over the breakpoints
