/* eslint-disable @typescript-eslint/no-explicit-any */
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

    const data = JSON.parse(localStorage.getItem('climatelens-data')!);
    const feature = localStorage.getItem('climatelens-feature')!;

    const avg = data.reduce((a: number, b: number) => a + b, 0) / data.length;
    const ogData = [avg + avg * 0.1, avg - avg * 0.1];
    console.log(ogData);
    return (
        <div className="content">
            <h1 className="mb">Dashboard</h1>
            <p>
                Feature: <b>{feature}</b>
            </p>
            <h2 className="mb">Original Data</h2>
            <GraphView data={ogData} viewType="Scatter Plot" />
            <h2 className="mb">Generated Data</h2>
            {[...Array(graphCount)].map((_, i) => (
                <GraphView key={i} data={data} viewType="Line Area Plot" />
            ))}
            <button
                className="btn dashed mb"
                style={{ width: '95%' }}
                onClick={() => setGraphCount(graphCount + 1)}>
                Add View
            </button>
            <button className="btn mb highlight" style={{ width: '95%' }}>
                Export CSV
            </button>
        </div>
    );
}

export default DashboardView;
