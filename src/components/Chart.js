function Chart(props) {

    var widthMultiplier = 2

    return ( 
        <div className="list">
            <div className="row">
                <span className="label">{props.data.rows[0].label}</span>
                <span className="chartContent" style={{ marginLeft: props.data.rows[0].start * widthMultiplier + 'em', width: props.data.rows[0].end * widthMultiplier - props.data.rows[0].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[0].progress + '% , var(--color-dark1) ' + props.data.rows[0].progress + '%' }}></span>
            </div>
            <div className="row">
                <span className="label">{props.data.rows[1].label}</span>
                <span className="chartContent" style={{ marginLeft: props.data.rows[1].start * widthMultiplier + 'em', width: props.data.rows[1].end * widthMultiplier - props.data.rows[1].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[1].progress + '% , var(--color-dark1) ' + props.data.rows[1].progress + '%' }}></span>
            </div>
            <div className="row">
                <span className="label">{props.data.rows[2].label}</span>
                <span className="chartContent" style={{ marginLeft: props.data.rows[2].start * widthMultiplier + 'em', width: props.data.rows[2].end * widthMultiplier - props.data.rows[2].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[2].progress + '% , var(--color-dark1) ' + props.data.rows[2].progress + '%' }}></span>
            </div>
            <div className="row">
                <span className="label">{props.data.rows[3].label}</span>
                <span className="chartContent" style={{ marginLeft: props.data.rows[3].start * widthMultiplier + 'em', width: props.data.rows[3].end * widthMultiplier - props.data.rows[3].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[3].progress + '% , var(--color-dark1) ' + props.data.rows[3].progress + '%' }}></span>
            </div>
            <div className="row">
                <span className="label">{props.data.rows[4].label}</span>
                <span className="chartContent" style={{ marginLeft: props.data.rows[4].start * widthMultiplier + 'em', width: props.data.rows[4].end * widthMultiplier - props.data.rows[4].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[4].progress + '% , var(--color-dark1) ' + props.data.rows[4].progress + '%' }}></span>
            </div>
            <div className="row">
                <span className="label">{props.data.rows[5].label}</span>
                <span className="chartContent" style={{ marginLeft: props.data.rows[5].start * widthMultiplier + 'em', width: props.data.rows[5].end * widthMultiplier - props.data.rows[5].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[5].progress + '% , var(--color-dark1) ' + props.data.rows[5].progress + '%' }}></span>
            </div>
            <div className="row">
                <span className="label">{props.data.rows[6].label}</span>
                <span className="chartContent" style={{ marginLeft: props.data.rows[6].start * widthMultiplier + 'em', width: props.data.rows[6].end * widthMultiplier - props.data.rows[6].start * widthMultiplier + 'em', background: 'linear-gradient(90deg, var(--color-accent2) ' + props.data.rows[6].progress + '% , var(--color-dark1) ' + props.data.rows[6].progress + '%' }}></span>
            </div>
        </div>
     );
}
/* marginLeft: props.start + 'em', width: props.end - props.start + 'em' */
export default Chart;