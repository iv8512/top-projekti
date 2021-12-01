import Info from '../data/info.json'
function Settings() {
    return ( 
        <div className="page" id="Settings">
            <div className="header">
                <h1>Settings</h1>
            </div>
            <div className="content" id ="SettingsContent">
                <div>
                    <h2>Website info:</h2>
                    <div>site started on: {Info.Website.Started[0]} -:- {Info.Website.Started[1]}</div>
                </div>
            </div>
        </div>
     );
}

export default Settings;