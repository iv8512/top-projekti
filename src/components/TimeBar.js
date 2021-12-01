import React from 'react';

function TimeBar(props) {
    
    function times() {
        let secondsFraction = (100 / 86400);
        
        let sunsets = document.querySelectorAll('.sunset');
        sunsets.forEach(sunset => {
            sunset.style.top = (sunset.getAttribute('seconds') * secondsFraction + '%');
            let sunsetstr = sunset.innerHTML;
            sunsetstr = sunsetstr.substring(0, 5);
            sunset.innerHTML = sunsetstr;
        });

        let sunrises = document.querySelectorAll('.sunrise');
        sunrises.forEach(sunrise => {
            sunrise.style.top = (sunrise.getAttribute('seconds') * secondsFraction + '%');
            let sunrisestr = sunrise.innerHTML;
            sunrisestr = sunrisestr.substring(0, 5);
            sunrise.innerHTML = sunrisestr;
        });
        
        let currents = document.querySelectorAll('.current');
        currents.forEach(current => {
            current.style.top = (current.getAttribute('seconds') * secondsFraction + '%');
            let currentstr = current.innerHTML;
            currentstr = currentstr.substring(0, 5);
            current.innerHTML = currentstr;
        });
    }

    React.useEffect(() => {
            times();
        });
        
    return (
        <div className="timeBar">
            <div className="statics">
                <span className="start dot">00:00</span>
                <div></div>
                <span className="end dot">24:00</span>
            </div>
            <div className="times">
                <span className="sunset dot" seconds={props.data.sunset[0]}>{props.data.sunset[2]}</span>
                <span className="sunrise dot" seconds={props.data.sunrise[0]}>{props.data.sunrise[2]}</span>
                <span className="current dot" seconds={props.data.current[0]}>{props.data.current[2]}</span>
            </div>
        </div>
     );
};

export default TimeBar;