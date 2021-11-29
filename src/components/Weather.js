import WeatherData from '../data/weather_data.json';
import TimeBar from './TimeBar.js';

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
                        <span className="icon big">
                            <img src={'https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/' + data.weather.icon + '.png'}></img>
                        </span>
                        <div className="row">{data.city}</div>
                    </div>

                    <div className="info">
                        
                        <div className="row temperature">
                            
                            <div className="row icon tempDegs dataToolTip" data-tool-tip={data.air.temperature.current[1] + '°C'}>{data.air.temperature.current[0]}°C</div>
                            <div className="row">
                                <div className="row">max: {data.air.temperature.max}°C</div>
                                <div className="row">feels: {data.air.temperature.feels_like}°C</div>
                                <div className="row">min: {data.air.temperature.min}°C</div>
                            </div>
                        </div>

                        <div className="line"></div>

                        <div className="row">
                            <div className="row">humidity: {data.air.other.humidity}</div>
                            <div className="row">pressure: {data.air.other.pressure}</div>
                            <div className="row">visibility: {data.air.other.visibility}</div>
                        </div>
                        
                        <div className="line"></div>

                        <div className="row wind">
                            <div className="icon row dataToolTip" data-tool-tip={data.air.wind.deg[1]}>
                                <div className="arrow" style={{ transform: 'rotate(' + data.air.wind.deg[0] + 'deg)'}}>
                                    <div className="tip"></div>
                                    <div className="shaft" style={{ height: data.air.wind.speed / 10 + 'em' }}></div>
                                </div>
                            </div>
                            <span>Wind: </span>
                            <span>{data.air.wind.speed}m/s</span>
                            <span>{data.air.wind.deg[0]}deg</span>
                        </div>

                    </div>
                    <div className="footer">
                        <button onClick={previous}>«</button>
                        <div>
                            <div>Last updated:</div>
                            {data.dt.current[1]} -:- {data.dt.current[2]}
                        </div>
                        <button onClick={next}>»</button>
                    </div>

                    <TimeBar data={data.dt} />

                </div>
            ))}
            </>
     );
}

export default Weather;