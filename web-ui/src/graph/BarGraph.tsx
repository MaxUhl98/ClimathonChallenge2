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
