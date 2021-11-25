import React from 'react';

function TimeBar(props) {

    React.useEffect(() => {
        // get list of required elements
        let sunset = document.querySelector('.sunset');
        let sunrise = document.querySelector('.sunrise');
        let current = document.querySelector('.current');

        // one second is % of day (100% / amount of seconds in a day)
        let secondsFraction = (100 / 86400);
        
        // position the values in the timebar
        sunset.style.top = (sunset.getAttribute('seconds') * secondsFraction + '%');
        sunrise.style.top = (sunrise.getAttribute('seconds') * secondsFraction + '%');
        current.style.top = (current.getAttribute('seconds') * secondsFraction + '%');

        // cut out seconds to make timebar slimmer
            // get strings that will be cut
            let sunsetstr = sunset.innerHTML;
            let sunrisestr = sunrise.innerHTML;
            let currentstr = current.innerHTML;

            // cut them
            sunsetstr = sunsetstr.substring(0, 5);
            sunrisestr = sunrisestr.substring(0, 5);
            currentstr = currentstr.substring(0, 5);

            // place cut strings into elements
            sunset.innerHTML = sunsetstr
            sunrise.innerHTML = sunrisestr
            current.innerHTML = currentstr
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