function Chartrow(props) {
    return ( 
        <div className="row">
            <div className="label">Viikko {props.vnum}</div>
            <div id={props.key} style={{left: props.start + 'em'}}></div>
        </div>
     );
}

export default Chartrow;