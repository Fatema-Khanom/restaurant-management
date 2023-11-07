
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

const SignUp = () => {
  const { signUp, } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the signin page", location);


  // Function to validate the password
  const isPasswordValid = (password) => {
    const passwordPattern = /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return passwordPattern.test(password);
  };

  const handleSignUp = async () => {
    if (!isPasswordValid(password)) {
      setError(
        "Password must be at least six characters and contain at least one letter and one number or special character."
      );
      return;
    }

    try {
      setError("");
      const result = await signUp(email, password);

      console.log(result.user);
      Swal.fire({
        icon: "success",
        title: "Sign-up Successful",
        text: "You are now signed up and logged in.",
      }).then(() => {
        navigate(location?.state ? location.state : "/");
      });
    } catch (error) {
      setError("Sign-up failed. Please check your information.");
      console.error("Sign-up error:", error);
    }

     // create user
     createUserWithEmailAndPassword(auth, email, password)
     .then(result => {
         console.log(result.user);
         //setSuccess('User Created Successfully.')
         Swal.fire({
          icon: "success",
          title: "Sign-up Successful",
          text: "You are now signed up and logged in.",
        })

         // update profile
         updateProfile(result.user, {
             displayName: name, 
             photoURL: "https://example.com/jane-q-user/profile.jpg"
         })
         .then( () => console.log('profile updated'))
         .catch()

         // send verification email: 
         sendEmailVerification(result.user)
         .then( () =>{
             alert('Please check your email and verify your account')
         })

     })
     .catch(error => {
         console.error(error);
         setError(error.message);
     })
  };

  const backgroundImage =
    "url('https://i.ibb.co/LPt79ry/lukas-blazek-EWDv-HNNf-Um-Q-unsplash.jpg')";

  return (
    <div
      className="min-h-screen flex items-center justify-center mt-20 bg-cover"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        opacity: 1,
      }}
    >
      <div className="max-w-md w-full p-4 bg-white  rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photoURL"
            >
              Photo URL
            </label>
            <input
              onChange={(e) => setPhotoURL(e.target.value)}
              value={photoURL}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="photoURL"
              type="url"
              placeholder="Photo URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <div className="flex items-center justify-center">
            <button
              onClick={handleSignUp}
              className="bg-red-500 hover-bg-red-700 text-white font.bold py-2 px-4 rounded focus:outline.none focus.shadow.outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          
        </form>
        
          <div className=" mt-2"><Link to={'/login'}>Already have account? <span className="text-red-700 font-bold">Login</span></Link></div>
      </div>
    </div>
  );
};

export default SignUp;
