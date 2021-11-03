function Chart(props) {
    return ( 
        <div className="row" id={props.wnum}>
            <span className="label">{props.label}</span>
            <span className="chartContent" style={{ marginLeft: props.start + 'em', width: props.end - props.start + 'em' }}></span>
        </div>
     );
}
/* marginLeft: props.start + 'em', width: props.end - props.start + 'em' */
export default Chart;