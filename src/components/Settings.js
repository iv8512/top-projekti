import Info from '../data/info.json'
function Settings() {
    return ( 
        <div className="page subpage" id="Settings">
            <div className="header">
                <h1>Settings</h1>
            </div>
            <div className="content" id ="SettingsContent">
                <div>
                    <h2>Website info:</h2>
                    <div className="rowContainer">
                        <div className="row">Website by: </div>
                        <ul>
                            <li>
                                Jussi Lehtinen (front end)
                            </li>
                            <li>
                                Iivari Vitikainen (back end)
                            </li>
                        </ul>
                        <div className="row"></div>
                        <div className="row">site started on: {Info.Website.Started[0]} -:- {Info.Website.Started[1]}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Settings;