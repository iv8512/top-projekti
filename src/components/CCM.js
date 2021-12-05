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

                
                setTimeout(function() {
                    let launchcode = taskele.getAttribute('launch')
                    let launchBTN = document.querySelector('.launchBTN');
                    let delBTN = document.querySelector('.delBTN');
                    launchBTN.setAttribute('href', launchcode);
                    launchBTN.classList.add('active');
                    console.log('launchURL', launchcode);
                    
                    if (taskele.classList.contains('shortcutGridItem')) {

                        setTimeout(function() {
                            var gridIndex = taskele.getAttribute('index');
                            let storage = localStorage.getItem('links');
                            storage = JSON.parse(storage);
                            
                            
                            
                            delBTN.classList.add('active');
                            
                            delBTN.addEventListener('click', function remover(){
                                taskele.remove();
                                console.log(taskele);
                                
                                storage.splice(gridIndex, 1);
                                storage = JSON.stringify(storage);
                                
                                localStorage.setItem('links', storage)
                            });
                        }, 25);
                    }
                }, 25);
            });
        }
        
        document.addEventListener("contextmenu", function(){
            let delBTN = document.querySelector('.delBTN');
            let launchBTN = document.querySelector('.launchBTN');
            delBTN.replaceWith(delBTN.cloneNode(true));

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
            <div className="CCMItem"><a className="launchBTN clickable" target="_self" href={window.location.href}>launch</a></div>
            <div className="CCMItem"><div className="delBTN clickable">delete shortcut</div></div>
        </div>
     );
}

export default CCM;