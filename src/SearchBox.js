import React from 'react';

const SearchBox = props => (
    <div className="pa2">
        <input
            name='hi'
            className='pa3 ba b--green bg-lightest-blue'
            type="search"
            placeholder="search robots"
            onChange={props.handleSearch}
            value={props.searchVal}
        />
    </div>
);

export default SearchBox;