import React from "react";

const SearchBar = (props) => {
    const { placeholder, variant } = props;

    return (
        <div className="relative">
            <img
                src="/assets/icons/search.png"
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
                type="search"
                placeholder={placeholder}
                className={`pl-10 rounded-full ${variant}`}
            />
        </div>
    );
};

export default SearchBar;
