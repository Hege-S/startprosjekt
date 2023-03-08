export const WeatherList = () => {
    const weather = ['sun', 'windy', 'snow', 'snowstorm', 'rain', 'blizzard', 'cloudy']
    return <div>
        { weather.map((weatherReport) => {
            return <h6 key={weatherReport}>Today's weather: {weatherReport}</h6>
        })
            
        }
    </div>
}