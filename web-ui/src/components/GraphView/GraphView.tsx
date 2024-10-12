import { useState } from 'react';
import { GenericGraph, getAllGraphNames } from '../../graph/GenericGraph';
import './GraphView.scss';

/**
 * This is a GraphView component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-12
 */
function GraphView({ data }: { data: number[] }) {
    const [name, setName] = useState('Bar Plot');

    return (
        <div>
            <select value={name} onChange={(e) => setName(e.target.value)}>
                {getAllGraphNames().map((name) => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </select>
            <GenericGraph data={data} name={name} />
        </div>
    );
}
export default GraphView;
