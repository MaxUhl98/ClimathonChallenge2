import { useNavigate } from 'react-router-dom';
import './HomeView.scss';
import CardBox from '../../components/CardBox/CardBox';

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
            <h1>Welcome to ClimateLens!</h1>
            <p>
                ClimateLens is a tool to get more information of your clima
                data!
            </p>
            <div className="hor">
                <CardBox icon="bi-zoom-in" heading="Zoom">
                    Get more information of your clima data!
                </CardBox>
                <CardBox icon="bi-body-text" heading="Fill">
                    Fill your the gaps of your clima data set!
                </CardBox>
                <CardBox icon="bi-graph-up" heading="Visualize">
                    Visualize your clima data in a better way!
                </CardBox>
            </div>
            <button
                className="btn mt highlight"
                style={{ width: '98.5%', fontSize: '1.8rem' }}
                onClick={() => navigate('/create')}>
                Let's do it!
            </button>
        </div>
    );
}

export default HomeView;
