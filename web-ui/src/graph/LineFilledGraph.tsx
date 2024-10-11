import ReactEcharts from 'echarts-for-react';

function LineFilledGraph({ data }: { data: number[] }) {
    const option = {
        scale: true,
        scaleSize: 1,
        xAxis: {
            type: 'category',
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

export default LineFilledGraph;
