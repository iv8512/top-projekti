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
                e.preventDefault();
                let CCM = document.getElementById('CCMContainer');
                CCM.style.display = 'grid'

                let launchcode = taskele.getAttribute('launch')
                let launchBTN = document.querySelector('.launchBTN');
                let delBTN = document.querySelector('.delBTN');
                setTimeout(function() {
                    launchBTN.setAttribute('href', launchcode);
                    launchBTN.classList.add('active');
                    console.log(launchcode);
                }, 50);
                
                if (taskele.classList.contains('shortcutIcon')) {
                    setTimeout(function() {
                        delBTN.classList.add('active');
                    }, 50);
                }
            });
        }
        
        document.addEventListener("contextmenu", function(){
            let delBTN = document.querySelector('.delBTN');
            let launchBTN = document.querySelector('.launchBTN');
            delBTN.classList.remove('active');
            launchBTN.classList.remove('active');
            launchBTN.setAttribute('href', window.location.href);
            console.log('CCM reset');
        })
      
    });

    let [X, setX] = useState(0);
    let [Y, setY] = useState(0);

    React.useEffect(() => {
        const CCM = document.getElementById('CCMContainer');

        let x;
        let y;
    
        document.addEventListener('contextmenu', (data) => {
            x = data.pageX + CCM.offsetWidth > document.innerWidth ? document.innerWidth - CCM.offsetWidth : data.pageX;
            y = data.pageY + CCM.offsetHeight > document.innerHeight ? document.innerHeight - CCM.offsetHeight : data.pageY;
            setX(x);
            setY(y);
        });
        
        document.addEventListener('mouseup', () => {
            CCM.style.display = 'none';
        });
    });

    return ( 
        <div id="CCMContainer" style={{ top: Y, left: X }}>
            <div className="CCMItem"><a className="launchBTN" target="_self">launch</a></div>
            <div className="CCMItem"><a className="delBTN" target="_self">delete shortcut</a></div>
        </div>
     );
}

export default CCM;