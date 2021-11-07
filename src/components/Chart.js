function Chart(props) {

    var widthMultiplier = 1

    return ( 
        <>
        <div className="row">
            <span className="label">{props.data.rows[0].label}</span>
            <span className="chartContent" style={{ marginLeft: props.data.rows[0].start * widthMultiplier + 'em', width: props.data.rows[0].end * widthMultiplier - props.data.rows[0].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[0].progress + '% , var(--color-dark1) ' + props.data.rows[0].progress + '%' }}></span>
        </div>
        <div className="row">
            <span className="label">{props.data.rows[1].label}</span>
            <span className="chartContent" style={{ marginLeft: props.data.rows[1].start * widthMultiplier + 'em', width: props.data.rows[1].end * widthMultiplier - props.data.rows[1].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[1].progress + '% , var(--color-dark1) ' + props.data.rows[1].progress + '%' }}></span>
        </div>
        </>
     );
}
/* marginLeft: props.start + 'em', width: props.end - props.start + 'em' */
export default Chart;