import React from "react";

function CCM() {

    
    
    React.useEffect(() => {
        document.querySelector('.shortcuts').addEventListener('mousedown', function() {
            var taskItems = document.querySelectorAll(".task");
            
            for ( var i = 0, len = taskItems.length; i < len; i++ ) {
                var taskItem = taskItems[i];
                contextMenuListener(taskItem);
            }
        });
    });



    function contextMenuListener(taskele) {
        taskele.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            let CCM = document.getElementById('CCMContainer');
            CCM.style.display = 'grid'

            
            setTimeout(function() {
                let launchcode = taskele.getAttribute('launch')
                let launchBTN = document.querySelector('.launchBTN');
                let delBTN = document.querySelector('.delBTN');
                launchBTN.setAttribute('href', launchcode);
                launchBTN.classList.add('active');
                // console.log('launchURL', launchcode);
                
                if (taskele.classList.contains('shortcutGridItem')) {
                    setTimeout(function() {
                        var index = Array.from(taskele.parentNode.children).indexOf(taskele)

                        let storage = localStorage.getItem('links');
                        storage = JSON.parse(storage);
                        
                        
                        
                        delBTN.classList.add('active');
                        
                        delBTN.addEventListener('click', function remover(){
                            taskele.remove();
                            
                            storage.splice(index, 1);
                            storage = JSON.stringify(storage);
                            
                            localStorage.setItem('links', storage)
                            console.log(storage);
                        });
                    }, 25);
                }
            }, 25);
        });
    }


    document.addEventListener("contextmenu", function(){
        let delBTN = document.querySelector('.delBTN');
        let launchBTN = document.querySelector('.launchBTN');
        delBTN.classList.remove('active');
        delBTN.replaceWith(delBTN.cloneNode(true));

        launchBTN.classList.remove('active');
        launchBTN.setAttribute('href', window.location.href);
    })


    React.useEffect(() => {
        const CCM = document.getElementById('CCMContainer');

        document.addEventListener('contextmenu', function(e) {
            var x = e.pageX + CCM.offsetWidth > document.innerWidth ? document.innerWidth - CCM.offsetWidth : e.pageX;
            var y = e.pageY + CCM.offsetHeight > document.innerHeight ? document.innerHeight - CCM.offsetHeight : e.pageY;
            CCM.style.left = x + 'px';
            CCM.style.top = y + 'px';
            console.log(x, y);
        });
        
        document.addEventListener('mouseup', () => {
            CCM.style.display = 'none';
        });
    });

    return ( 
        <div id="CCMContainer">
            <div className="CCMItem"><a className="launchBTN clickable" target="_self" href={window.location.href}>launch</a></div>
            <div className="CCMItem"><div className="delBTN clickable">delete shortcut</div></div>
        </div>
     );
}

export default CCM;