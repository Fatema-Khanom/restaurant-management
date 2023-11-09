// import { useEffect, useState } from "react";
// import Details from "./Details";


// const DetailsCard = () => {
//     const [details, setdetails] = useState(null);

//     useEffect(() => {
        
//         fetch('http://localhost:5000/adddetails/:id') // Adjust the endpoint
//             .then((res) => res.json())
//             .then((data) => setdetails(data));
//     }, []);

//     return (
//         <div className="mt-20">
//             {details ? (
//                 <div>
//                     <div className="text-center">
//                         <h2 className="text-5xl">details Item Details</h2>
//                     </div>

//                     {
//                     details.find(details => <Details
//                         key={details._id}
//                         details={details}
//                     ></Details>)
//                 }
                    
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default DetailsCard;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";

const DetailsCard = () => {
    const { id } = useParams();
    const [food, setFood] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/addfood/${id}`) // Replace with your correct API endpoint
            .then((res) => res.json())
            .then((data) => setFood(data))
            .catch((error) => console.error("Error fetching food item:", error));
    }, [id]);

    return (
        <div className="mt-20">
            {food ? (
                <div>
                    <div className="text-center">
                        <h2 className="text-5xl">Details for Food Item</h2>
                    </div>
                    <Details food={food} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailsCard;
