import Skeleton from "react-loading-skeleton";

function CardSkeleton(props) {

    return (
        <div className="list__card_skeleton">
           { Array(props.cards).fill(0).map((_, index) => (
            <div key={index} className="card__skeleton">
                <div className="image__skeleton">
                    <Skeleton width={320} height={320} />
                </div>
                <div className="col__text_skeleton">
                    <Skeleton count={5} style={{ margin: "5px 0" }} />
                </div>
            </div>
           ))}
            
        </div>
    );

}

export default CardSkeleton;