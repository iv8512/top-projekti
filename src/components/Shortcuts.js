function Shortcuts() {

    
    function addicon() {
        let ele = document.querySelector('.shortcutGrid');
        let content = ele.innerHTML;
        ele.innerHTML = '<a class="icon shortcutIcon task" launch="https://www.youtube.com/" href="https://www.youtube.com/"><img src="http://localhost:3000/test.svg" alt="error" /></a>' + content;
    }


    //////////////
    // does not work
    //////////////
    // function removeicon() {
    //     let ele = document.querySelector('.shortcutGrid');
    //     let content = ele.innerHTML;
    //     ele.innerHTML = content;
    // }


    //////////////
    // this function tries to set all href attributes to the launch attributes value
    //////////////
    // (function() {
    //     var ShortcutItems = document.querySelectorAll(".shortcutIcon");
      
    //     for ( var i = 0, len = ShortcutItems.length; i < len; i++ ) {
    //       var ShortcutItem = ShortcutItems[i];
    //       ShortcutItem.style.display = 'none';
    //       var launch = ShortcutItem.getAttribute('launch');
    //       ShortcutItem.setAttribute('href', launch);
    //     }
    // })();

    return (
        <div className="shortcuts">
    
            <div className="header">
                <div className="row">
                    <button onClick={addicon}>+</button>
                    <div className="row">
                        Shortcut Icons
                    </div>
                    <button>-</button>
                </div>
            </div>

            <div className="shortcutGrid">
                <a className="icon shortcutIcon task" launch="https://www.youtube.com/" href="https://www.youtube.com/"><img src="http://localhost:3000/test.svg" alt="error" /></a>
                <a className="icon shortcutIcon task" launch="https://www.youtube.com/" href="https://www.youtube.com/"><img src="http://localhost:3000/test.svg" alt="error" /></a>
            </div>
        </div>
     );
}

export default Shortcuts;