function Chart(props) {
    return ( 
        <div className="row">
            <span className="label"></span>
            <span className="chartContent"></span>
        </div>
     );
}
/* marginLeft: props.start + 'em', width: props.end - props.start + 'em' */
export default Chart;