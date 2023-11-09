


import { Link } from "react-router-dom";

const Details = ({ details }) => {
    const {
        _id,
        detailsName,
        detailsCategory,
        quantity,
        price,
        photoURL,
    } = details;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="h-64">
                <img src={photoURL} alt={detailsName} className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center">{detailsName}</h2>
                <p>Category: {detailsCategory}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <div className="card-actions  flex justify-center ">
                    <Link to={`/detailsDetails`}>
                        <button className="btn btn-primary ">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
