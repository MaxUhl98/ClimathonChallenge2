import BarGraph from './BarGraph';
import LineFilledGraph from './LineFilledGraph';
import LineGraph from './LineGraph';
import ScatterGraph from './ScatterGraph';

export function GenericGraph({
    data,
    name,
    xTicks = [],
}: {
    data: number[];
    xTicks?: string[];
    name: string;
}) {
    switch (name) {
        case 'Line Plot':
            return <LineGraph data={data} />;
        case 'Bar Plot':
            return <BarGraph data={data} xTicks={xTicks} />;
        case 'Line Area Plot':
            return <LineFilledGraph data={data} />;
        case 'Scatter Plot':
            return <ScatterGraph data={data} xTicks={xTicks} />;
        default:
            return <div>Invalid graph type</div>;
    }
}

export function getAllGraphNames() {
    return ['Bar Plot', 'Line Plot', 'Line Area Plot', 'Scatter Plot'];
}
