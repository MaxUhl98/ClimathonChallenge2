import './Spinner.scss';

/**
 * This is a Spinner component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function Spinner() {
    return (
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
export default Spinner;
