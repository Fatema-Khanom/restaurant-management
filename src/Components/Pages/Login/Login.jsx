


import { useContext, useState } from "react";
//import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
    const { googleSignIn, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    console.log('location i n the login page', location)


    const handleGoogle = () => {
        googleSignIn()
        .then((result) => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        });
       
    };

    const handleLogin = () => {
        if (email && password) {
            signIn(email, password)
                .then((result) => {
                    console.log(result.user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        text: 'You are now logged in.',
                    }).then(() => {
                        
                        navigate(location?.state ? location.state : '/');
                    });
                })
                .catch((error) => {
                    setError(error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text:'Please enter a valid email and password',
                    });
                });
        } else {
            setError('Please provide both email and password.');
        }
    };

    const backgroundImage = "https://i.ibb.co/LPt79ry/lukas-blazek-EWDv-HNNf-Um-Q-unsplash.jpg";

    return (
        <div
            className="min-h-screen flex items-center justify-center "
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                opacity: 1,
            }}
        >
            <div className="max-w-md w-full p-4 bg-white  rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={handleLogin} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Login
                        </button>
                    </div>
                    
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                </form>
                <div className="flex items-center justify-center mt-2 border border-blue-500">
                        <h2 >Login with </h2>
                        <button onClick={handleGoogle} type="button" className="text-blue-800 font-bold ml-2">
                            Google
                        </button>
                    </div>
                    <div className=" mt-2"><Link to={'/signup'}>Haven't any account? <span className="text-red-700 font-bold">SignUp</span></Link></div>
            </div>
        </div>
    );
};

export default Login;
