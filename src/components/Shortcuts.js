function Shortcuts() {

    
    function addicon() {
        let ele = document.querySelector('shortcutGrid');
        let content = ele.innerHTML;
        ele.innerHTML = content + '<img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />';
    }

    return (
        <div className="shortcuts">

            
            <div className="header">
                <div className="row">
                    <button onClick={addicon}>add icon</button>
                    <div className="row">
                        Shortcut Icons
                    </div>
                    <button>delete icon</button>
                </div>
            </div>


            <div className="shortcutGrid">
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />
                <img className="icon shortcutIcon" src="http://localhost:3000/test.svg" alt="error" />

            </div>
        </div>
     );
}

export default Shortcuts;