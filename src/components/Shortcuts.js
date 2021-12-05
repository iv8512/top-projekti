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
    
    function newLinkSubmit() {
        let inputele = document.querySelector('.addIconForm').firstElementChild;
        addlink((inputele.value));
    }
    
    


    
    
    function refreshShortcutIcons() {
        let links = localStorage.getItem('links');
        links = JSON.parse(links);

        let SCcontainer = document.querySelector('.shortcutGrid');
        SCcontainer.innerHTML = '';
        if (links !== null) {
            {links.map((link, index) => (
                SCcontainer.innerHTML = SCcontainer.innerHTML + '<a class="icon shortcutIcon task" index="' + index + '"launch="https://' + link + '" href="https://' + link + '"><img src="https://' + link + '/favicon.ico" alt="error" /></a>'
            ))}
        }
        else {
            SCcontainer.innerHTML = '<div style="grid-area: 1 / 1 / 2 / 4;">You can add shortcuts by pressing the "+" button</div>';
        }
    }

    React.useEffect(() => {
        refreshShortcutIcons();
    });





    
    window.onclick = function(event) {
        var modal = document.querySelector('.modal');
        if (event.target === modal) {
            modal.style.display = "none";
            formReset();
        }
    }
    
    function openModal() {
        var modal = document.querySelector('.modal');
        modal.style.display = 'grid';
    }

    function formReset() {
        let ele = document.querySelector('.addIconForm')
        ele.reset()
    }

    return (
        <>
        <div className="modal">
            <div className="modalContent">
                <div className="rowContainer">
                    <form className="addIconForm">
                        <input type="text" placeholder="example url: www.w3schools.com"/>
                    </form>
                    <button className="mimicSubmit" onClick={newLinkSubmit}>Add Icon</button>
                </div>
            </div>
        </div>
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
        </>
     );
}

export default Shortcuts;