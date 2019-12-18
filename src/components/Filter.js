import React from 'react';

const Filter = ({handleGreasedToggle, handleSortBySelect, sortBy, greased}) => {

    return<div className='filterWrapper'>
        <div className='item'>
            <label>Sort By</label>
        </div>
        < div className='ui item'>
            <select
                className='ui selection dropdown'
                name={'sort'}
                onChange={handleSortBySelect}
                value={sortBy}>
                <option defaultValue={''}>Sort by </option>
                <option value="Name(A-Z ↓ )"> Name(A-Z ↓ )</option>
                <option value="Name(Z-A ↑ )"> Name(Z-A ↑ )</option>
                <option value='Weight( ↓ )'> Weight( ↓ )</option>
                <option value='Weight( ↑ )'> Weight( ↑ )</option>
            </select>
        </div>
        <div className='ui item'>
            <label>Filter Greased</label>
            <input className='ui toggle checkbox'
                   onChange={handleGreasedToggle}
                   checked={greased}
                   type='checkbox'
            />

        </div>
    </div>
}

export default Filter

