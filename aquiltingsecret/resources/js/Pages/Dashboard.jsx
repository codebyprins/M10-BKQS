import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ products }) {
    const { data, setData, post, put, reset, delete: destroy } = useForm({
        id: "",
        name: "",
        price: "",
        category: "",
        image: null,
    });

    const [editing, setEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("category", data.category);
    
        if (data.image) {
            formData.append("image", data.image);
        }
    
        console.log("Form data before submission:", [...formData.entries()]);
    
        post(route("products.store"), {
            data: formData,
            transform: (formData) => formData, // Pass the FormData directly
            onSuccess: () => {
                console.log("Success");
                alert("Product added successfully");
            },
            onError: (errors) => {
                console.error("Errors:", errors);
                alert("An error occurred!");
            },
        });
    };
    

    const resetForm = () => {
        reset();
        setEditing(false);
    };

    const handleEdit = (product) => {
        setData({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: null,
        });
        setEditing(true);
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            destroy(`/products/${id}`);
        }
    };

    

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <div className="py-12">
                <h1>Welkom Gwendolijn Louise Taams</h1>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">

                        {/* Add/Edit Product Form */}
                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    value={data.price}
                                    onChange={(e) => setData("price", e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    value={data.category}
                                    onChange={(e) => setData("category", e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Image
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => setData("image", e.target.files[0])}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                            >
                                {editing ? "Update Product" : "Add Product"}
                            </button>
                            {editing && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="ml-2 px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            )}
                        </form>

                        {/* Product List */}
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="px-6 py-4">{product.name}</td>
                                        <td className="px-6 py-4">${product.price}</td>
                                        <td className="px-6 py-4">${product.category}</td>
                                        <td className="px-6 py-4">
                                            {product.image ? (
                                                <img
                                                    src={`/storage/${product.image}`}
                                                    alt={product.name}
                                                    className="h-10 w-10 rounded-md"
                                                />
                                            ) : (
                                                "No Image"
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="px-2 py-1 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="ml-2 px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
