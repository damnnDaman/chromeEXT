# Similar Website Recommender

Similar Website Recommender is a Chrome extension that provides recommendations for websites similar to the one you are currently visiting.

## Features

- Fetches similar website recommendations based on the current tab's URL.
- Displays recommended websites in a popup.
- Allows users to refresh the recommendations.

## Installation

1. Clone the repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension's source code.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. The popup will display a list of recommended websites based on the current tab's URL.
3. Click the "Refresh" button to fetch new recommendations.

## Files

- `background.js`: Handles background tasks, including fetching recommendations from the SimilarWeb API.
- `manifest.json`: Contains the extension's metadata and configuration.
- `popup.html`: The HTML structure of the popup.
- `popup.js`: The JavaScript code for the popup, including event listeners and DOM manipulation.

## API Key

The extension uses the SimilarWeb API to fetch recommendations. The API key is stored in `background.js`. 
Update the file with your own API.

### Feel free to customize the content as needed.

##License
This project is licensed under Daman Kumar.
