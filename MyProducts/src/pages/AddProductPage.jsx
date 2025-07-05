import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function AddProductPage() {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState([])
    const [viewing, setViewing] = useState(false)
    const [domain] = useState("http://127.0.0.1:8000");
    const [error,setError] = useState(null)

    const initial = {
        name: '',
        description: '',
        price: '',
        image: null,
        contact: '',
    }
    const [formData, setFormData] = useState(initial)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            const url = domain + '/products/';
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
                
            } catch (error) {                
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [
        domain
    ]
    )

    const handleChange = (e) => {
        const{name, value, type, files} = e.target
        if(type == 'file'){
            setFormData(prev => ({   
                ...prev,                
                [name]: files[0]
            }))
        }else{
            setFormData(prev => (
                {
                ...prev,
                [name]: value
            }
            ))
        }
    }

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('contact', formData.contact);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const response = await fetch(domain + '/products/', {
                method: 'POST',
                body: data,
                
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            
            const newProduct = await response.json();
            setProducts(prev => prev ? [...prev, newProduct] : [newProduct]);
            setFormData(initial);// reset form
        } catch (error) {
            setError(error.message);
        }
    };

   
    return (
        <>
            <Header />

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-serif text-gray-900 mb-6">Add New Product</h2>
                <form onSubmit={handleAddProduct} className="space-y-6">
                    <div>
                        <label className="block text-black mb-2">Product Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.description}
                            onChange={handleChange}
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
                                value={formData.price}
                                onChange={handleChange}
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
                                value={formData.contact}
                                onChange={handleChange}
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
                            onChange={handleChange}
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
    )
}

export default AddProductPage