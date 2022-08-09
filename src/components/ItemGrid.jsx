import DisplayCard from "./DisplayCard";

function ItemGrid(props) {

    const { results } = props;
    console.log("Item grid")

    return (
        <div className="container">
                <div className="row">
                    
                {results && results.map((result, index) => {
                    return (
                        <div className="col col-md-6 col-lg-auto">
                            <DisplayCard key={index} data={result} />
                        </div>
                    )
                })}
                
                </div>
            </div>
    )

}

export default ItemGrid;