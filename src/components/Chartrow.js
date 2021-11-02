function Chartrow(props) {
    return ( 
        <div className="row">
            <span className="label">{props.label}</span>
            <span className="chartContent" id={props.key}>test</span>
        </div>
     );
}
/* marginLeft: props.start + 'em', width: props.end - props.start + 'em' */
export default Chartrow;