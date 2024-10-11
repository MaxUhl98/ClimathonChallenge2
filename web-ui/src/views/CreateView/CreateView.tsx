import { useState } from 'react';
import './CreateView.scss';
import Spinner from '../../components/Spinner/Spinner';
import ZoomLevel from '../../utils/ZoomLevel';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { useNavigate } from 'react-router-dom';

/**
 * This is the CreateView
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function CreateView() {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [zoomLevels, setZoomLevels] = useState(['Yearly', 'Quarterly']);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
        setShowSpinner(true);
        setTimeout(() => {
            setShowSpinner(false);
            setZoomLevels(['Daily', 'Hourly']);
        }, 2000);
    };

    const start = () => {
        if (selectedFile === null) {
            setErrorMsg('Please select a file to proceed.');
            return;
        }
        setErrorMsg('');
        setShowLoadingScreen(true);
        setTimeout(() => {
            navigate('/dashboard');
        }, 4000);
    };

    return (
        <div className="content">
            <h1>Welcome to the CreateView!</h1>
            {selectedFile && (
                <div>
                    <p>
                        File name: <b>{selectedFile.name}</b>
                    </p>
                    <p>
                        File size: <b>{selectedFile.size} bytes</b>
                    </p>
                </div>
            )}
            <button className="btn">
                <i className="bi bi-cloud-arrow-up mr browse"></i>Browse...
            </button>
            <input
                className="btn fup"
                type="file"
                onChange={handleFileChange}
                accept=".csv"
            />
            {showSpinner ? (
                <Spinner />
            ) : (
                <SelectZoomLevel x={zoomLevels[0]} y={zoomLevels[1]} />
            )}

            <div className="row">
                <p>Parameter: </p>
                <input type="text" className="ml" />
            </div>
            <div className="row">
                <p>Start:</p>
                <input type="date" className="ml" />
                <input type="time" className="ml" />
            </div>
            <div className="row">
                <p>End:</p>
                <input type="date" className="ml" />
                <input type="time" className="ml" />
            </div>
            {errorMsg !== '' && <p className="error-msg">{errorMsg}</p>}
            <button className="btn mt" onClick={() => start()}>
                Start
            </button>
            {showLoadingScreen && <LoadingScreen />}
        </div>
    );
}

function SelectZoomLevel({ x, y }: { x: string; y: string }) {
    return (
        <div className="zoomLevelSelect mt">
            <div className="row">
                <p>
                    <b>X:</b>
                </p>
                <select>
                    {ZoomLevel.getLevelDispalys().map((display: string) => (
                        <option
                            key={display}
                            value={display}
                            selected={display === x ? true : false}>
                            {display}
                        </option>
                    ))}
                </select>
            </div>
            <div className="row">
                <p>
                    <b>Y:</b>
                </p>
                <select>
                    {ZoomLevel.getLevelDispalys().map((display: string) => (
                        <option
                            key={display}
                            value={display}
                            selected={display === y ? true : false}>
                            {display}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default CreateView;
