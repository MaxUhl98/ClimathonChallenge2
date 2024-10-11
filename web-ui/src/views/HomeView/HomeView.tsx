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
            <h1>Welcome to the ClimateLens!</h1>
            <p>
                ClimateLens is a tool to get more information of your clima
                data!
            </p>
            <div className="hor">
                <CardBox icon="bi-search" heading="Get more information">
                    Get more information of your clima data!
                </CardBox>
                <CardBox>This is a test</CardBox>
                <CardBox>This is a test</CardBox>
            </div>
            <button className="btn mt" onClick={() => navigate('/create')}>
                Let's do it!
            </button>
        </div>
    );
}

export default HomeView;
