import React from 'react';
import Myİnput from './UI/input/Myİnput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
				<Myİnput
					placeholder='Поиск...'
					value={filter.query}
					onChange={e => setFilter({...filter, query: e.target.value})}
				/>

				<MySelect
					value={filter.sort}
					onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
					defaultValue='Сортировка'
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' },
					]}
				/>
			</div>

    );
};

export default PostFilter;