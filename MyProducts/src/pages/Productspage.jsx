import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Productpage = () => {
    const [data, setData] = useState([]);
    const [formdata, setformdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [domain] = useState("http://127.0.0.1:8000");

    const fetchData = async () => {
        const url = domain + '/products/';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await fetch(domain + '/products/', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            fetchData();
            e.target.reset(); // Reset form after submission
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="pt-16 min-h-screen bg-blue-100 relative">
            <Header />

            <main className="container mx-auto px-4 py-12">
                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8" role="alert">
                        <p>Error loading products: {error}</p>
                    </div>
                )}

                {/* Products Grid */}
                {!loading && !error && (
                    <>
                        <div className="mb-12">
                            <div className="flex justify-between gap-4">
                                <h1 className="text-4xl font-serif text-gray-900 mb-2">Your Luxury Collection</h1>
                                <button className=" bg-blue-950 text-white py-3 px-4 rounded hover:bg-[#C9A227] transition-colors font-medium"
                                >
                                    <Link
                                        to="/addproducts"
                                        className="relative text-[#D4AF37] hover:text-white text-lg md:text-xl font-medium transition-colors duration-300 group"
                                    >
                                        Add Your Products
                                        <span className="absolute left-0 bottom-[-4px] h-0.5 w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </button>
                            </div>
                            <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>

                            {data.length === 0 ? (
                                <p className="text-gray-600">No products available yet.</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {data.map(item => (
                                        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            {item.image && (
                                                <div className="h-64 overflow-hidden">
                                                    <img
                                                        src={domain + item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                                                <p className="text-gray-600 mb-4">{item.description}</p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-2xl font-serif text-[#D4AF37]">${item.price}</span>
                                                    <a
                                                        href={`tel:${item.contact}`}
                                                        className="px-4 py-2 bg-[#D4AF37] text-white rounded hover:bg-[#C9A227] transition-colors"
                                                    >
                                                        Contact
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Add Product Form */}
                        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                            <h2 className="text-2xl font-serif text-gray-900 mb-6">Add New Product</h2>
                            <form onSubmit={handleAddProduct} className="space-y-6">
                                <div>
                                    <label className="block text-black mb-2">Product Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter product name"
                                        className="w-full px-4 py-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-black mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        placeholder="Enter product description"
                                        rows="3"
                                        className="w-full px-4 py-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                        required
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-black mb-2">Price ($)</label>
                                        <input
                                            type="number"
                                            name="price"
                                            placeholder="Enter price"
                                            className="w-full px-4 py-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-black mb-2">Contact</label>
                                        <input
                                            type="text"
                                            name="contact"
                                            placeholder="Enter contact info"
                                            className="w-full px-4 py-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-black mb-2">Product Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        className="block w-full text-sm text-black
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-[#D4AF37] file:text-black
                                        hover:file:bg-[#C9A227]"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#D4AF37] text-white py-3 px-4 rounded hover:bg-[#C9A227] transition-colors font-medium"
                                >
                                    Add Product
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Productpage;