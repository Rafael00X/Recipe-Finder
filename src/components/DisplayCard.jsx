
function DisplayCard(props) {
    console.log("Inside card")
    console.log(props)
    const { title, image } = props.data;
    return (
        <div>
            <img src={image} />
            <p>{title}</p>
        </div>
    )
}

export default DisplayCard;