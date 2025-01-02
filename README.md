# Digital Clock Project

A simple and elegant digital clock implementation with 12/24 hour format toggle functionality. The clock displays hours, minutes, and seconds with a clean interface and automatic leading zero padding for single-digit numbers.

## Features

- Real-time clock display
- Toggle between 12-hour and 24-hour formats
- Leading zero padding for single-digit numbers
- Immediate display on page load
- Automatic updates every second

## Installation

1. Clone this repository:
```bash
git clone [your-repository-url]
```

2. Open `index.html` in your web browser

## Usage

The clock starts automatically when the page loads. Use the toggle switch to change between 12-hour and 24-hour formats:
- Unchecked: 12-hour format (1:00 - 12:59)
- Checked: 24-hour format (00:00 - 23:59)

## HTML Structure

Your HTML file should include the following elements:
```html
<div id="hrs"></div>
<div id="min"></div>
<div id="sec"></div>
<input type="checkbox" id="toggle">
```

## Contributing

Feel free to open issues and pull requests for any improvements you want to add.
