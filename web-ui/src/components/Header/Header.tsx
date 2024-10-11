import './Header.scss';

/**
 * This is a Header component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function Header() {
    return (
        <div className="header">
            <h1 className="logo">
                ClimateLens<i className="bi bi-search"></i>
            </h1>
            <div className="links">
                <a href="/">
                    <i className="bi bi-house"></i>
                </a>
                <a href="/#/help">
                    <i className="bi bi-question-circle"></i>
                </a>
            </div>
        </div>
    );
}
export default Header;
