function DisplayCard(props) {
    console.log("Inside card")
    console.log(props)
    const { title, image } = props;
    return (
        <div className="display-card card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}

export default DisplayCard;