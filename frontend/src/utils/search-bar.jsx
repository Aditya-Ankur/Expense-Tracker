import React from "react";


const SearchBar = ({ value, onChange, handleSearch, OnClearSearch }) => {
    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-sm">
        <div className="flex flex-1 flex-col justify-center items-center w-88 px-4 bg-slate-100 rounded-md">
            <input
                type="text"
                placeholder="Search Expenses" 
                value={value}
                onChange={onChange}
                className="w-full text-xs bg-transparent py-[11px] outline-none" 
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-1 rounded-lg ml-2"
            >
                Search
            </button>
            <button
                onClick={OnClearSearch}
                className="bg-red-500 text-white p-1 rounded-lg ml-2"
            >
                Clear
            </button>
        </div>
        </div>
    ); 
};

export default SearchBar;