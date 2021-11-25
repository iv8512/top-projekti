import React from 'react';

function TimeBar(props) {

    React.useEffect(() => {
        let sunset = document.querySelector('sunset');
        let sunrise = document.querySelector('sunrise');
        let current = document.querySelector('current');

        
    });

    return ( 
        <div className="timeBar">
            <div className="times">
                <div className="sunset">{props.data.sunset[2]}</div>
                <div className="sunrise">{props.data.sunrise[2]}</div>
                <div className="current">{props.data.current[2]}</div>
            </div>
            <div className="statics">
                <div className="end">24:00</div>
                <div className="start">00:00</div>
            </div>
        </div>
     );
};

export default TimeBar;