---
title: Usage
style: viridian
order: 1
---

To add a new section create a markdown file inside the `src/sections/` folder.
Specifying values for the `title`, `style`, and `order` variables in the front
matter allows you to customise the heading, style, and ordering of the sections.

Currently three styles are provided; `viridian`, `port-gore`, and `claret`. More
styles can be added by creating a new class in
`src/assets/css/custom/components.css`, using one of the existing styles for
reference.

This pre-defined example section can be found in `src/sections/example.md` to
use as a reference.
