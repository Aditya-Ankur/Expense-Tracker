import React, { useState } from "react";
import axios from '../utils/axios';
import { Link } from "react-router-dom";
import { useUser } from '@clerk/clerk-react';

const Form = () => {

    const { user } = useUser();
    const [item, setItem] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    const handleErrors = async (event) => {
        event.preventDefault();
        if (!item) {
            setError("Enter the item name")
            return;
        }
        if (!price) {
            setError("Enter the item price")
            return;
        }
        if (!quantity) {
            setError("Enter the item quantity")
            return;
        }
        if (!description) {
            setError("Enter the item description")
            return;
        }
        setError('');

        // post the data to the server
        try {
            const collectionName = user.lastName ? user.lastName : user.firstName;
            const response = await axios.post(`/api/expenses/${collectionName}`, {
                item,
                price,
                quantity,
                description
            });
            console.log(response.data);
            setItem("");
            setPrice(0);
            setQuantity(0);
            setDescription("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div id="hs-offcanvas-example" className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300" role="dialog" tabIndex="-1" aria-label="Sidebar">
                <div className="px-6">
                    <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Expense Tracker</a>
                </div>
                <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul className="space-y-1.5">
                        <li>
                            <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" to="/dashboard">
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                Summary
                            </Link>
                        </li>

                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            Add Expense
                        </a></li>

                        <li>
                            <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" to='/recent'>
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                            Recent Expenses
                            </Link>
                        </li>
                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            Documentation
                        </a></li>
                    </ul>
                </nav>
            </div>

            <div className="max-w-sm m-auto mt-16"> {/* Added margin-top to push the form down */}
                <form onSubmit={handleErrors}>
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="mx-auto max-w-2xl">
                            <div className="text-center">
                                <h2 className="text-xl text-gray-800 font-bold sm:text-3xl">
                                    Add Expense
                                </h2>
                            </div>
                            <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10">
                                <div className="mb-4 sm:mb-8">
                                    <h4 className="block mb-2 text-sm font-medium">Item Name</h4>
                                    <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full border rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" placeholder="Maggie" value={item} onChange={(e) => { setItem(e.target.value) }} />
                                </div>

                                <div className="mb-4 sm:mb-8">
                                    <h4 className="block mb-2 text-sm font-medium">Price</h4>
                                    <input type="number" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="40" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                                </div>

                                <div className="mb-4 sm:mb-8">
                                    <h4 className="block mb-2 text-sm font-medium">Quantity</h4>
                                    <input type="number" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="1" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                                </div>

                                <div>
                                    <h4 className="block mb-2 text-sm font-medium">Item Description</h4>
                                    <div className="mt-1">
                                        <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Describe the item..." value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                                <div className="mt-6 grid">
                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;