# Weather Forecast Application

This application is a dynamic weather forecasting tool that uses the Weather API to fetch and display real-time weather data based on the user's location or inputted city name. The app offers current weather conditions, an hourly forecast, and a 7-day forecast, making it a useful resource for planning and staying informed about weather conditions.

## Features

1. **Current Location Weather:**
   - Automatically fetches the user's location using the browser's geolocation API.
   - Displays current temperature, wind speed, UV index, chance of rain, and more.

2. **Search Functionality:**
   - Users can search for weather information by city name.
   - Provides real-time updates as the user types in the search box.

3. **Hourly Forecast:**
   - Displays hourly weather data for the current day, updated every 3 hours.

4. **7-Day Forecast:**
   - Provides maximum and minimum temperatures for the upcoming 7 days.

5. **Dynamic Icons:**
   - Weather conditions are represented by icons fetched directly from the API.

## Technologies Used

- **HTML/CSS/JavaScript**: Frontend structure and interactivity.
- **Weather API**: Fetches weather data.
- **Browser Geolocation API**: Retrieves the user's current location.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/weather-app.git
   ```

2. Open the project folder:
   ```bash
   cd weather-app
   ```

3. Open the `index.html` file in your browser to run the application.

## Usage

1. Open the application in your web browser.
2. Allow location access for automatic weather fetching based on your current position.
3. Use the search bar to find weather information for specific cities.
4. View the current weather, hourly forecast, and 7-day forecast in the interface.

## Code Overview

### Key Components

1. **Location Handling:**
   - `getCoordinates()`: Retrieves latitude and longitude using the browser's geolocation API.

2. **Weather Data Fetching:**
   - `getWeather(location)`: Fetches weather data from the Weather API for the provided location.

3. **Dynamic Display:**
   - `display(data)`: Updates the DOM to display the fetched weather data.

4. **Search Functionality:**
   - Listens for input events on the search bar and fetches weather data for the inputted city.

### API Key

The API key is hardcoded in the script for testing purposes. In production, it is recommended to store it securely in an environment variable.

## Future Improvements

1. **Error Handling:**
   - Provide user-friendly error messages when the API or geolocation service fails.

2. **Debouncing Input:**
   - Prevent excessive API calls by implementing a debounce mechanism for the search bar.

3. **UI Enhancements:**
   - Improve responsiveness and accessibility.

4. **Secure API Key:**
   - Move the API key to a backend service or secure environment.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

