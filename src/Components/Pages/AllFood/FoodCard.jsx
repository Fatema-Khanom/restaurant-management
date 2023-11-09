
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const {
        _id,
        foodName,
        foodCategory,
        quantity,
        price,
        photoURL,
    } = food;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="h-64">
                <img src={photoURL} alt={foodName} className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center">{foodName}</h2>
                <p>Category: {foodCategory}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <div className="card-actions  flex justify-center ">
                    <Link to={`/foodDetails`}>
                        <button className="btn btn-primary ">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
