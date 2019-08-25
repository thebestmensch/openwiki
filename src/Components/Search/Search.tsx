import React from 'react';
import style from './search.module.scss';

const Search: React.FC = () => {
    return (
        <div className="search">
            <form>
                <label>Search</label>
                <input className={style.red}>
                </input>
                <button>Search</button>
            </form>
        </div>
    );
}

export default Search;