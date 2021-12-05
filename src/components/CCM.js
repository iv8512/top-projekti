import React, { useState } from "react";

function CCM() {

    React.useEffect(() => {
      
        var taskItems = document.querySelectorAll(".task");
      
        for ( var i = 0, len = taskItems.length; i < len; i++ ) {
          var taskItem = taskItems[i];
          contextMenuListener(taskItem);
        }
      
        function contextMenuListener(taskele) {
            taskele.addEventListener( "contextmenu", function(e) {
                let launchcode = taskele.getAttribute('launch')
                let launchele = document.querySelector('.launchBTN');
                if (launchcode !== null) {
                    launchele.setAttribute('href', launchcode);
                    launchele.classList.add('active');
                }
                else {
                    launchele.setAttribute('href', window.location.href);
                    launchele.classList.remove('active');
                }
          });
        }
      
    });

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
        
        document.addEventListener('mouseup', () => {
            setCCMDisplay('none');
        });
    });

    return ( 
        <div id="CCMContainer" style={{ display: CCMDisplay, top: Y, left: X + 'px' }}>
            <div className="CCMItem"><a className="launchBTN" target="_self">Launch</a></div>
            <div className="CCMDivider"></div>
            <div className="CCMItem">delete shortcut</div>
        </div>
     );
}

export default CCM;