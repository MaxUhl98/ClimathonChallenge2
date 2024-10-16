import { useState } from 'react';
import './CreateView.scss';
import Spinner from '../../components/Spinner/Spinner';
import ZoomLevel from '../../utils/ZoomLevel';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../api/ApiService';

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
    const [previewText, setPreviewText] = useState('');
    const [feature, setFeature] = useState('Precipitation');

    const [zoomLevels, setZoomLevels] = useState(['Yearly', 'Quarterly']);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
        setShowSpinner(true);
        ApiService.zoom('2021-01-01', '2021-12-31', 'Temperature').then(
            (data) => {
                localStorage.setItem('climatelens-data', JSON.stringify(data));
            }
        );
        setTimeout(() => {
            setShowSpinner(false);
            setZoomLevels(['Daily', 'Hourly']);
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result as string;
                setPreviewText(text);
                console.log(text);
            };
            reader.readAsText(file as Blob);
        }, 1000);
    };

    const start = () => {
        if (selectedFile === null) {
            setErrorMsg('Please select a file to proceed.');
            return;
        }
        setErrorMsg('');
        setShowLoadingScreen(true);

        localStorage.setItem('climatelens-feature', feature);
        setTimeout(() => {
            navigate('/dashboard');
        }, 4000);
    };

    return (
        <div className="content">
            <h1>Create a new DataSet</h1>
            <button className="btn">
                <i className="bi bi-cloud-arrow-up mr browse"></i>Browse...
            </button>
            <input
                className="btn fup"
                type="file"
                onChange={handleFileChange}
                accept=".csv"
            />
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
            {previewText && (
                <div className="preview">
                    <h3>Preview:</h3>
                    <pre>{previewText}</pre>
                </div>
            )}
            {showSpinner ? (
                <Spinner />
            ) : (
                <>
                    <SelectZoomLevel x={zoomLevels[0]} y={zoomLevels[1]} />
                    <div className="row">
                        <p>Location: </p>
                        <select>
                            <option value="1">Station 1</option>
                            <option value="2">Station 2</option>
                            <option value="3">Station 3</option>
                        </select>
                    </div>
                    {selectedFile && (
                        <div className="row">
                            <p>Feature: </p>
                            <select
                                onChange={(e) => setFeature(e.target.value)}>
                                <option value="2">Precipitation</option>
                                <option value="1">Temperature</option>
                                <option value="3">Wind speed</option>
                            </select>
                        </div>
                    )}
                </>
            )}
            {/* <div className="row">
                <p>Start:</p>
                <input type="date" className="ml" />
                <input type="time" className="ml" />
            </div>
            <div className="row">
                <p>End:</p>
                <input type="date" className="ml" />
                <input type="time" className="ml" />
            </div> */}
            {errorMsg !== '' && <p className="error-msg">{errorMsg}</p>}
            <button className="btn mt highlight" onClick={() => start()}>
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
                <p>Current Zoom Level:</p>
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
                <p>Wanted Zoom Level:</p>
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
