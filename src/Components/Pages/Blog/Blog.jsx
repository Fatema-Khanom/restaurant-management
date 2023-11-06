import React from 'react';
import { Fade, Bounce, Slide } from 'react-reveal';

const Blog = () => {
    return (
        <div
            className="relative max-w-full mx-auto p-4 mt-16 shadow-lg"
            style={{
                backgroundImage: 'url("https://i.ibb.co/LPt79ry/lukas-blazek-EWDv-HNNf-Um-Q-unsplash.jpg")',
                backgroundSize: 'cover',
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            />
            <Fade top>
                <h1 className="text-3xl font-bold text-white mb-4 relative z-10">1. One-way Data Binding in Web Development</h1>
                <p className="text-lg text-white leading-relaxed mb-6 relative z-10">
                    One-way data binding is a crucial concept in web development. It ensures that data flows in a single, predictable direction, simplifying data management within your application. This unidirectional flow makes your application more predictable and easier to debug. In this blog post, we'll delve deeper into the magic of one-way data binding.
                </p>
            </Fade>

            <Bounce top>
                <h1 className="text-3xl font-bold text-white mb-4 relative z-10">2. NPM in Node.js: Your JavaScript Marketplace</h1>
                <p className="text-lg text-white leading-relaxed mb-6 relative z-10">
                    Node Package Manager (NPM) is the one-stop-shop for Node.js developers. It serves as a marketplace for JavaScript packages, making it easy to discover, fetch, and manage libraries or modules for your projects. In this blog post, we'll explore the incredible world of NPM and how it simplifies the life of a Node.js developer.
                </p>
            </Bounce>

            <Slide top>
                <h1 className="text-3xl font-bold text-white mb-4 relative z-10">3. MongoDB vs. MySQL: Choosing the Right Database</h1>
                <p className="text-lg text-white leading-relaxed mb-6 relative z-10">
                    Databases are the backbone of data-driven applications, but you have choices. MongoDB and MySQL are two distinct species in the database world. MongoDB is a NoSQL database, perfect for applications dealing with unstructured data. On the other hand, MySQL is a relational database management system (RDBMS) ideal for structured data. In this blog post, we'll compare the strengths and weaknesses of MongoDB and MySQL to help you choose the right database for your project.
                </p>
            </Slide>
        </div>
    );
};

export default Blog;
