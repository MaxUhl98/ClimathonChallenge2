import { useState } from 'react';
import './DashboardView.scss';
import { GenericGraph, getAllGraphNames } from '../../graph/GenericGraph';
/**
 * This is the DashboardView
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function DashboardView() {
    const [name, setName] = useState('Bar Plot');

    const data = [120, 200, 150, 80, 70, 110, 130];
    return (
        <div className="content">
            <h1>Welcome to the DashboardView!</h1>
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

export default DashboardView;
