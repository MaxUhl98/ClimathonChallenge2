import './CardBox.scss';

/**
 * This is a CardBox component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function CardBox({
    children,
    icon,
    heading,
}: {
    children: React.ReactNode;
    icon: string;
    heading: string;
}) {
    return (
        <div className="card-box">
            <h1 className="icon">
                <i className={'bi ' + icon}></i>
            </h1>
            <h1>{heading}</h1>
            <p>{children}</p>
        </div>
    );
}
export default CardBox;
