import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useUser } from "@clerk/clerk-react";
import SearchBar from "../utils/search-bar";

const Recent = () => {

    const { user } = useUser();
    const collectionName = user.lastName ? user.lastName : user.firstName;
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get(`/api/expenses/${collectionName}`);
                setExpenses(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchExpenses();
    }, []);

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`/api/expenses/${collectionName}/${id}`);
            setExpenses(expenses.filter(expense => expense._id !== id));
        } catch (error) {
            console.error('Failed to delete expense', error);
        }
    };

    return (
        <div className="flex">
            <div id="hs-offcanvas-example" className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300" role="dialog" tabIndex="-1" aria-label="Sidebar">
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

                        <li>
                            <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" to="/form">
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                Add Expense
                            </Link>
                        </li>

                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                            Recent Expenses
                        </a></li>
                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            Documentation
                        </a></li>
                    </ul>
                </nav>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <SearchBar
                // value={searchValue}
                // onChange={(e) => setSearchValue(e.target.value)}
                // handleSearch={handleSearch}
                // OnClearSearch={handleClearSearch}
                />
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="w-full max-w-4xl">
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <div className="grid grid-cols-1 gap-4">
                            {expenses.map(expense => (
                                <div key={expense._id} className="bg-white shadow-md rounded-lg p-4">
                                    <h2 className="text-xl font-semibold mb-2">{expense.item}</h2>
                                    <p className="text-gray-700">Price: ${expense.price}</p>
                                    <p className="text-gray-700">Quantity: {expense.quantity}</p>
                                    <p className="text-gray-700">Description: {expense.description}</p>
                                    <button
                                        onClick={() => deleteExpense(expense._id)}
                                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Recent;