import React from 'react';
import { getPagesArray } from '../../../utils/page';


const pagination = ({totalPages, page, changePage}) => {
	let pagesArray = getPagesArray(totalPages)
    return (
        <div className='pagination'>
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </button>
            )}
        </div>
    );
};

export default pagination;