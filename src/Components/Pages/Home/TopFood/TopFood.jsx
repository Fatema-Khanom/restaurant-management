
import { useEffect, useState } from "react";
import TopCard from "./TopCard";


//import foodsCard from "./foodsCard";


const Topfood = () => {
    
    const [foods, setfoods] = useState(null);

    useEffect(() => {
        // Replace the URL with the correct endpoint for fetching a single foods item.
        fetch('http://localhost:5000/addfood')
            .then((res) => res.json())
            .then((data) => setfoods(data));
    }, []);

    return (
        <div className="mt-20">
            {foods? (
                <div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-orange-600"></h3>
                        <h2 className="text-5xl">Top foods</h2>
                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                    foods.map(foods => <TopCard
                        key={foods._id}
                        foods={foods}
                    ></TopCard>)
                }
                     
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Topfood;
