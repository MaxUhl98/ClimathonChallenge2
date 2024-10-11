import { useNavigate } from 'react-router-dom';
import './HomeView.scss';

/**
 * This is the HomeView
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function HomeView() {
    const navigate = useNavigate();
    return (
        <div className="content">
            <h1>Welcome to the ClimaLens!</h1>
            <p>
                ClimaLens is a tool to get more information of your clima data!
            </p>
            <button className="btn mt" onClick={() => navigate('/create')}>
                Start
            </button>
        </div>
    );
}

export default HomeView;
