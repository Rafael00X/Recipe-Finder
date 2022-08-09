function DisplayCard(props) {
    const { data, setRecipe } = props;
    const { title, image } = data;
    return (
        <div className="display-card card" onClick={() => setRecipe(data)}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}

export default DisplayCard;