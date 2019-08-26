import React from 'react';
import search from './search.module.scss';

const Search: React.FC = () => {
    return (
        <div className="search">
            <form>
                <label>Search</label>
                <input className={search.red}>
                </input>
                <button>Search</button>
            </form>
        </div>
    );
}

export default Search;