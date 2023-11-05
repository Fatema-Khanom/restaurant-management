
import { Fade, Zoom, Roll, Bounce, LightSpeed, Flip, Rotate } from 'react-reveal';

const ContactUs = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <Fade top>
                        <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
                    </Fade>
                    <Fade bottom>
                        <p className="text-lg text-gray-600 mt-2">We're here to assist you!</p>
                    </Fade>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
                        <Roll left>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
                        </Roll>
                        <Bounce left>
                            <form>
                                <div className="mb-4">
                                    <Zoom>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full py-2 px-3 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-red-500"
                                        />
                                    </Zoom>
                                </div>
                                <div className="mb-4">
                                    <Zoom>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full py-2 px-3 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-red-500"
                                        />
                                    </Zoom>
                                </div>
                                <div className="mb-4">
                                    <LightSpeed left>
                                        <textarea
                                            rows="4"
                                            placeholder="Your Message"
                                            className="w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-red-500"
                                        />
                                    </LightSpeed>
                                </div>
                                <Flip left>
                                    <button
                                        type="submit"
                                        className="mt-6 py-2 px-6 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </Flip>
                            </form>
                        </Bounce>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
                        <Rotate bottom left>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                        </Rotate>
                        <Rotate bottom right>
                            <p className="mb-2"><strong>Address:</strong> 123 Main Street, City, Country</p>
                        </Rotate>
                        <Rotate bottom left>
                            <p className="mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
                        </Rotate>
                        <Rotate bottom right>
                            <p className="mb-2"><strong>Email:</strong> info@thefoodhunt.com</p>
                        </Rotate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

