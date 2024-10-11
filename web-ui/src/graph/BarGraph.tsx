import ReactEcharts from 'echarts-for-react';

function BarGraph({
    data,
    xTicks = [],
}: {
    data: number[];
    xTicks?: string[];
}) {
    const option = {
        xAxis: {
            type: 'category',
            data: xTicks,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data,
                type: 'bar',
            },
        ],
    };

    return <ReactEcharts option={option} />;
}

export default BarGraph;
