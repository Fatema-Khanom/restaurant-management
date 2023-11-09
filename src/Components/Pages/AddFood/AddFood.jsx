

import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddFood = () => {
    const {user} = useContext(AuthContext);
    console.log('User Data:', user);
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const foodName = form.foodName.value;
        const foodCategory = form.foodCategory.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const foodOrigin = form.foodOrigin.value;
        const shortDescription = form.shortDescription.value;
        const photoURL = form.photoURL.value;
        const email = user?.email;
        const name = user?.displayName;
       

        const addProduct = {
            foodName,
            foodCategory,
            quantity,
            price,
            foodOrigin,
            shortDescription,
            photoURL,
            email,
            name,
        };

        console.log(addProduct);

        fetch('http://localhost:5000/addfood', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });
    };

    return (
        <div className="p-24" style={{ backgroundImage: "url('https://i.ibb.co/LPt79ry/lukas-blazek-EWDv-HNNf-Um-Q-unsplash.jpg')", backgroundSize: 'cover' }}>
            <div className="bg-opacity-70  rounded-lg shadow-lg">
                <h2 className="font-extrabold text-3xl md:text-5xl text-black mb-8">Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black font-bold">Food Name</span>
                            </label>
                            <label className="input-grou">
                                <input type="text" placeholder="Food Name" name="foodName" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-black font-bold">Food Image (Photo URL)</span>
                            </label>
                            <label className="input-">
                                <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black font-bold">Food Category</span>
                            </label>
                            <label className="input-grou">
                                <input type="text" placeholder="Food Category" name="foodCategory" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-black font-bold">Quantity</span>
                            </label>
                            <label className="input-">
                                <input type="text" placeholder="Rating" name="quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black font-bold">Price</span>
                            </label>
                            <label className="input-grou">
                                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-black font-bold">Food Origin (Country)</span>
                            </label>
                            <label className="input-">
                                <input type="text" placeholder="Food Origin" name="foodOrigin" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>



                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black font-bold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="User Name" name="name" defaultValue={user.displayName}  className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-black font-bold">Email</span>
                            </label>
                            <label className="input-">
                                <input type="email" placeholder="User Email" name="email" defaultValue={user?.email}  className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <div className="mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Short Description</span>
                            </label>
                            <label className="input-grou">
                                <textarea
                                    rows="4"
                                    placeholder="Short Description"
                                    name="shortDescription"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Item" className="btn btn-block bg-black text-white border border-solid border-1 border-[#331A15]" />
                </form>
            </div>
        </div>
    );
};

export default AddFood;
