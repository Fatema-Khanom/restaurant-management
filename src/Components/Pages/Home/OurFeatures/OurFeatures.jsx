import React from "react";
import { Fade, Zoom, Roll, Bounce, LightSpeed, Flip, Rotate } from "react-reveal";

const OurFeatures = () => {
  return (
    <div className="my-16">
      <div className="flex items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-8 text-black">Our Features</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Fade>
          <div className="border rounded-lg p-4 text-center w-72 mx-auto">
            <img
              src="https://i.ibb.co/TWBPYcX/images.png"
              alt=""
              className="w-36 h-36 mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-4 text-black">Delicious Cuisine</h1>
            <p className="text-gray-600">
              Enjoy a wide variety of mouthwatering dishes made with love.
            </p>
          </div>
        </Fade>
        <Zoom>
          <div className="border rounded-lg p-4 text-center w-72 mx-auto">
            <img
              src="https://i.ibb.co/JRSxXBC/images-3.jpg"
              alt=""
              className="w-36 h-24 mt-8 mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-6 text-black">Cozy Ambience</h1>
            <p className="text-gray-600">
              Relax in our cozy atmosphere while enjoying your meal.
            </p>
          </div>
        </Zoom>
        <Roll>
          <div className="border rounded-lg p-4 text-center w-72 mx-auto">
            <img
              src="https://i.ibb.co/5KLDvqY/images-4.jpg"
              alt=""
              className="w-36 h-24 mt-8 mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-6 text-black">Friendly Staff</h1>
            <p className="text-gray-600">
              Our dedicated staff is here to make your dining experience exceptional.
            </p>
          </div>
        </Roll>
        <Bounce>
          <div className="border rounded-lg p-4 text-center w-72 mx-auto">
            <img
              src="https://i.ibb.co/Hqdm5ML/images-1.png"
              alt=""
              className="w-36 h-36 mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-6 text-black">Special Events</h1>
            <p className="text-gray-600">
              Join us for special events and celebrations throughout the year.
            </p>
          </div>
        </Bounce>
        
      </div>
    </div>
  );
};

export default OurFeatures;
