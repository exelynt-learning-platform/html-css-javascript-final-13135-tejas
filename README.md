# Daily Water Tracker

## Overview

The Daily Water Tracker is a simple webpage that helps students track their daily water intake and work toward a hydration goal of 2000 ml.

## Features

- Displays the current water intake in milliliters.
- Adds 150 ml, 250 ml, or 500 ml with a button click.
- Resets the total to zero.
- Highlights the total in blue when the goal is reached.
- Displays a "Goal met!" message after reaching 2000 ml.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub Pages

## Setup Instructions

1. Clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.
4. Click the water buttons to track intake.

No additional packages are required.

## What I Built

I created a simple hydration dashboard with a large water intake number, four action buttons, and instructions.

The buttons are arranged in a row using CSS Flexbox. JavaScript updates the total when a button is clicked.

## What I Learned

- Selecting elements using `querySelector()`.
- Handling clicks with `addEventListener()`.
- Updating webpage content using `textContent`.
- Adding and removing CSS classes using `classList.toggle()`.
- Publishing a static website using GitHub Pages.

## Screen After a Few Clicks

After clicking the 500 ml bottle button twice and the 250 ml glass button once, the page displays 1250 ml.

The number remains in its normal color and the goal message stays hidden.

After clicking the 500 ml bottle button again, the total reaches 1750 ml. The goal is still not met.

After one more 250 ml glass click, the total becomes 2000 ml. The number turns blue and the "Goal met!" message appears.

Clicking Reset returns the number to 0 and hides the message.

## Live Demo

https://YOUR-GITHUB-USERNAME.github.io/web-basics/

## Project Files

- `index.html` - Page structure
- `style.css` - Page styling and button layout
- `script.js` - Water tracking functionality
- `README.md` - Project documentation
