import ReactEcharts from 'echarts-for-react';

function ScatterGraph({
    data,
    xTicks = [],
}: {
    data: number[];
    xTicks?: string[];
}) {
    const newData = data.map((value, index) => {
        return [index, value];
    });
    let option = {
        xAxis: {},
        yAxis: {},
        series: [
            {
                symbolSize: 20,
                data: newData,
            },
        ],
        type: 'scatter',
    };
    option = {
        xAxis: {},
        yAxis: {},
        series: [
            {
                symbolSize: 20,
                data: newData,
                type: 'scatter',
            },
        ],
    };
    return <ReactEcharts option={option} />;
}

export default ScatterGraph;
