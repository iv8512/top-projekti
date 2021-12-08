import React from "react";
function Shortcuts() {

    function addlink(newlink) {
        let links = localStorage.getItem('links');
        if (links === null) {
            localStorage.setItem('links', JSON.stringify([]))
        }
        links = localStorage.getItem('links');
        links = links.substring(0, links.length - 1);
        
        if (links === '[') {
            links = links + '"' + newlink + '"]';
        }
        else {
            links = links + ',"' +newlink + '"]';
        }
        console.log(links);
        
        localStorage.setItem('links', links);
        refreshShortcutIcons();
    }






    function refreshShortcutIcons() {
        console.log('refresh');
        var links = localStorage.getItem('links');
        links = JSON.parse(links);

        const SCcontainer = document.querySelector('.shortcutGrid');
        SCcontainer.innerHTML = '';

        if (links === null || links.length === 0) {
            SCcontainer.innerHTML = '<div style="grid-area: 1 / 1 / 2 / 4;">You can add shortcuts by pressing the "+" button</div>';
        }
        else {
            links.map((link) => (
                SCcontainer.innerHTML = SCcontainer.innerHTML + '<div class="shortcutGridItem task" launch="https://' + link + '"><a class="icon shortcutIcon" href="https://' + link + '"><img src="https://' + link + '/favicon.ico" alt="error" /></a></div>'
            ))
        }
    }

    

    React.useLayoutEffect(() => {
        const SCcontainer = document.querySelector('.shortcutGrid');
        SCcontainer.addEventListener('change', function() {
            refreshShortcutIcons();
        });

        refreshShortcutIcons();

        document.querySelector('.submitShortcut').addEventListener('click', function newLinkSubmit() {
            let inputele = document.querySelector('.addIconInput');
            if (inputele.value !== '') {
                addlink((inputele.value));
            }
        });
    });




    
    window.onclick = function(event) {
        var body = document.getElementsByTagName('body')[0];
        var modal = document.querySelector('.modal');

        if (event.target === modal) {
            modal.style.display = 'none';
            body.style.overflowY = 'unset';
            formReset();
        }
    }
    
    function openModal() {
        var body = document.getElementsByTagName('body')[0];
        var modal = document.querySelector('.modal');
        modal.style.display = 'grid';
        body.style.overflowY = 'hidden';
    }

    function formReset() {
        let ele = document.querySelector('.addIconInput');
        ele.value = null;
    }

    return (
        <div className="shortcuts">
    
            <div className="header">
                <div className="row">
                    <button onClick={openModal}>+</button>
                    <div className="row">
                        Shortcut Icons
                    </div>
                </div>
            </div>

            <div className="shortcutGrid">
            <a className="icon shortcutIcon task" launch="https://www.youtube.com/" href="https://www.youtube.com/"><img src="http://localhost:3000/test.svg" alt="error" /></a>
                
            </div>
        </div>
     );
}

export default Shortcuts;