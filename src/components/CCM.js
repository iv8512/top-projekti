import React, { useState } from "react";

function CCM() {

    let [CCMDisplay, setCCMDisplay] = useState('none');
    let [X, setX] = useState(0);
    let [Y, setY] = useState(0);

    React.useEffect(() => {
        const CCM = document.getElementById('CCMContainer');

        let x;
        let y;
    
        document.addEventListener('contextmenu', (data) => {
            data.preventDefault();
            x = data.pageX + CCM.offsetWidth > document.innerWidth ? document.innerWidth - CCM.offsetWidth : data.pageX;
            y = data.pageY + CCM.offsetHeight > document.innerHeight ? document.innerHeight - CCM.offsetHeight : data.pageY;
            setX(x);
            setY(y);
            setCCMDisplay('grid');
        });
        
        document.addEventListener('mousedown', () => {
            setCCMDisplay('none');
        });
    });

    return ( 
        <div id="CCMContainer" style={{ display: CCMDisplay, top: Y, left: X + 'px' }}>
            <div className="CCMItem">Launch Game</div>
            <div className="CCMItem">what</div>
            <div className="CCMItem">item</div>
            <div className="CCMDivider"></div>
            <div className="CCMItem">eeeeeeee</div>
        </div>
     );
}

export default CCM;