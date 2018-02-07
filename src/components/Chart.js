import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const divStyle = {
    textAlign: 'center'
};

const Chart = ({ data, color, units }) => {
    const average = (data) => _.round(_.sum(data)/data.length);

    return (
        <div>
            <Sparklines data={data} height={120} margin={5} width={180}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div style={divStyle}>{average(data)} {units}</div>
        </div>
    );
}

export default Chart;