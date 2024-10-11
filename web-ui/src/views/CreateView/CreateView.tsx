import { useState } from 'react';
import './CreateView.scss';
import Spinner from '../../components/Spinner/Spinner';

/**
 * This is the CreateView
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function CreateView() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
        setShowSpinner(true);
        setTimeout(() => {
            setShowSpinner(false);
        }, 2000);
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
            {showSpinner ? <Spinner /> : <p>X: Daily</p>}
            <button className="btn mt">Start</button>
        </div>
    );
}

export default CreateView;
