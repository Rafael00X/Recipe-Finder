import { Link } from "react-router-dom";

function DisplayCard(props) {
    const { data } = props;
    const { title, image } = data;
    return (
        <Link to="/recipe" state={data}>
            <div className="display-card card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </Link>
    );
}

export default DisplayCard;
