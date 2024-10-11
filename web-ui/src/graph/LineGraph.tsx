import ReactEcharts from 'echarts-for-react';

function LineGraph({ data }: { data: number[] }) {
    const option = {
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
            },
        ],
    };

    return <ReactEcharts option={option} />;
}

export default LineGraph;
