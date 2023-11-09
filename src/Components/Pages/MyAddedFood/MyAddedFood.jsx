
import { useEffect, useState } from "react";


import FoodCard from "./FoodCard";


const MyAddedFood = () => {
    
    const [food, setFood] = useState(null);

    useEffect(() => {
        // Replace the URL with the correct endpoint for fetching a single food item.
        fetch('http://localhost:5000/addfood')
            .then((res) => res.json())
            .then((data) => setFood(data));
    }, []);

    return (
        <div className="mt-20">
            {food? (
                <div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-orange-600"></h3>
                        <h2 className="text-5xl">Food Item</h2>
                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                    food.map(food => <FoodCard
                        key={food.gmail}
                        food={food}
                    ></FoodCard>)
                }
                     
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MyAddedFood;
