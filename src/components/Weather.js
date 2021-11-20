import WeatherData from '../data/weather_data.json'

function Weather() {

    let currentPage = 1;
    let shownPage = 'weather1';
    let ele;
    let pages = WeatherData.length;
    
    function next() {
        ele = document.getElementById(shownPage);
        ele.style.display = 'none';

        if(currentPage < pages) {
            currentPage++;
        }
        else {
            currentPage = 1;
        };
        
        shownPage = 'weather' + currentPage;
        ele = document.getElementById(shownPage);
        ele.style.display = 'grid';
    };

    function previous() {
        ele = document.getElementById(shownPage);
        ele.style.display = 'none';

        if(currentPage > 1) {
            currentPage--;
        }
        else {
            currentPage = pages;
        };
        
        shownPage = 'weather' + currentPage;
        ele = document.getElementById(shownPage);
        ele.style.display = 'grid';
    };


    return ( 
            <>
            {WeatherData.map((data,index) => (
                <div className="weather" key={index} id={'weather' + (index + 1)}>
                    <div className="header">
                        <span>{data.city} - {data.weather.description}</span>
                        <span className="icon">
                            <img src={'https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/' + data.weather.icon + '.png'}></img>
                        </span>
                        <span>{data.air.temperature.current}°C</span>
                    </div>
                    <div className="info">
                        <div className="wind row">
                            <span>Wind: </span>
                            <span>{data.air.wind.speed}m/s</span>
                            <div className="icon">
                                <div className="arrow" style={{ transform: 'rotate(' + data.air.wind.deg + 'deg)'}}>
                                    <div className="tip"></div>
                                    <div className="shaft" style={{ height: data.air.wind.speed / 10 + 'em' }}></div>
                                </div>
                            </div>
                            <span>{data.air.wind.deg}deg</span>
                        </div>
                    </div>
                    <div className="footer">
                        <button onClick={previous}>«</button>
                        <div>
                            <div>Last updated:</div>
                            {data.dt.current[0]} -:- {data.dt.current[1]}
                        </div>
                        <button onClick={next}>»</button>
                    </div>
                </div>
            ))}
            </>
     );
}

export default Weather;