---
slug: '/projects/tabber'
order: 2
title: 'Tabber'
image1: '../images/Projects/Tabber/tabber1.png'
image2: '../images/Projects/Tabber/tabber2.png'
image3: '../images/Projects/Tabber/tabber3.png'
imageAlt1: 'Creating one tab with sidebar open.'
imageAlt2: 'Creating two tabs with sidebar closed.'
imageAlt3: 'Comparing the two tabs to the generated and exported text file.'
stack: 'React, ExpressJS, SCSS, GitHub'
gitUrl: 'https://www.github.com/JonLunde/tabber'
websiteUrl: 'https://tabber.netlify.app/'
---

A personal project of mine stemming from the lack of good guitar tab creators on the web.
It is an application providing the user with every tool needed to create tabs for any guitar
piece out there. It has support for chords and all kinds of notations. The tabs are also 
interactable for easy rearrangement and customization. The tuning system makes it possible
to transpose and transcribe songs in any key. To save your tabs you can export them to a text file.
The ExpressJS server receives all the data collected in the Tabber app and generates a text file which
is fetched and downloaded to the user's computer.
\
It is built with React and instead of using the Create-React-App setup i chose to build my own toolchain. It has given me great insight into Webpack and its capabilities. As well as transposing with Babel, linting with ESLint and code formatting with Prettier. The project has given me valuable experience with keeping a relatively complex 
state with the useReducer hook and has generally strengthened my knowledge of React hooks.
I've had a big breakthrough in my knowledge of CSS and really fell in love with SCSS. 
The backend is running on ExpressJS and I plan to incorporate a login and authentication system for
storing guitar tabs on the server. Stay tuned.
