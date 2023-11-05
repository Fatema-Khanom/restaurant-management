
import { Fade, Slide } from 'react-reveal';

const Banner = () => {
    return (
        <div>
            <div className="relative h-[600px] mt-20 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/LCgZRBw/1a45956b22c8e25784e599d9abc7b68d.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex items-center justify-center h-full relative z-10">
                    <div className="text-white text-center">
                        <Slide top>
                            <h1 className="text-4xl font-bold">Welcome to</h1>
                        </Slide>
                        <Slide bottom>
                            <h2 className="text-6xl font-extrabold mb-4">The Food Hunt</h2>
                        </Slide>
                        <Fade>
                            <p className="mt-4 text-lg">Embark on a Culinary Adventure</p>
                        </Fade>
                        <Fade>
                            <p className="mt-2 text-lg">Where Every Dish Tells a Unique Story</p>
                        </Fade>
                        <Fade>
                            <p className="mt-2 text-lg">Experience a World of Flavors Crafted with Love and Passion</p>
                        </Fade>
                        <Fade>
                            <a href="/menu" className="mt-6 inline-block px-6 py-3 bg-red-500 text-white hover:bg-red-600 hover-text-white rounded-full transition duration-300">View Menu</a>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

