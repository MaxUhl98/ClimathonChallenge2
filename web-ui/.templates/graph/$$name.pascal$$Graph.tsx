import ReactEcharts from 'echarts-for-react';

function $$name.pascal$$Graph({
    data,
    xTicks = [],
}: {
    data: number[];
    xTicks?: string[];
}) {
    const option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: data,
                type: 'line',
                areaStyle: {},
            },
        ],
    };
    return <ReactEcharts option={option} />;
}

export default $$name.pascal$$Graph;
