function Chartrow(props) {
    return ( 
        <div className="row">
            <span className="label">{props.label}</span>
            <span style={{left: props.start, right: props.end }}></span>
        </div>
     );
}

export default Chartrow;