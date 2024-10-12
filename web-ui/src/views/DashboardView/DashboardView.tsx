import './DashboardView.scss';
import GraphView from '../../components/GraphView/GraphView';
import { useState } from 'react';
/**
 * This is the DashboardView
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function DashboardView() {
    const [graphCount, setGraphCount] = useState(1);

    const data = [120, 200, 150, 80, 70, 110, 130];
    return (
        <div className="content">
            <h1 className="mb">Dashboard</h1>
            {[...Array(graphCount)].map((_, i) => (
                <GraphView key={i} data={data} />
            ))}
            <button
                className="btn dashed"
                style={{ width: '95%' }}
                onClick={() => setGraphCount(graphCount + 1)}>
                Add View
            </button>
        </div>
    );
}

export default DashboardView;
