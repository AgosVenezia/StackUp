import React, { useRef } from 'react';

function SearchBar ({ onSearch }) {
    const inputRef = useRef(null)

    const handleKeyDown = (event) => {
        const newLocation = event.target.value;
        if (event.key === "Enter") {
            onSearch(newLocation);
            inputRef.current.blur();
        }
    }
    
    return (
        <header className="px-5 pt-8 flex gap-2">
            <button>
                <svg className="w-5 h-5 fill-zinc-400" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7246 17.1852L14.2708 12.7561C16.5184 9.6821 16.287 5.28601 13.4775 2.50953C11.9901 1.02213 10.0069 0.195801 7.89147 0.195801C5.77606 0.195801 3.79287 1.02213 2.30547 2.50953C-0.768489 5.58349 -0.768489 10.6076 2.30547 13.6815C3.79287 15.1689 5.77606 15.9953 7.89147 15.9953C9.90773 15.9953 11.7918 15.2351 13.2792 13.8799L18.7991 18.3421C18.9313 18.4412 19.0965 18.5073 19.2618 18.5073C19.4932 18.5073 19.6915 18.4082 19.8237 18.2429C20.0881 17.9124 20.0551 17.4496 19.7246 17.1852ZM7.89147 14.5079C6.1727 14.5079 4.58614 13.8468 3.36317 12.6238C0.851122 10.1118 0.851122 6.04623 3.36317 3.56724C4.58614 2.34426 6.1727 1.6832 7.89147 1.6832C9.61025 1.6832 11.1968 2.34426 12.4198 3.56724C14.9318 6.07929 14.9318 10.1448 12.4198 12.6238C11.2299 13.8468 9.61025 14.5079 7.89147 14.5079Z"/>
                </svg>
            </button>
            <input ref={inputRef} type="text" placeholder="Search a city" onKeyDown={handleKeyDown} className="px-3 py-2 bg-transparent rounded-md text-xl text-zinc-700 placeholder:text-zinc-400 outline-none flex-grow focus:bg-zinc-200"/>
        </header>
    );
}

export default SearchBar;