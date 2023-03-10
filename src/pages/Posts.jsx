import React, { useState, useMemo, useEffect } from 'react';
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from '../components/UI/button/MyButton';
import MyModal from "../components/UI/myModal/MyModal";
import { usePosts } from '../hooks/usePosts';
import axios from 'axios';
import Pagination from '../components/UI/pagination/Pagination';

import '../styles/App.css';
import PostService from '../APİ/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/page';

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useEffect(() => {
		fetchPosts()
	}, [page])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)
	}


	return (
		<div className='App'>
			<MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
				Создать объявление
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError &&
				<h1>Ошибка ${postError}</h1>
			}
			{isPostsLoading
				? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JS' />
			}
			<Pagination 
				page={page}
				changePage={changePage} 
				totalPages={totalPages}
			/>
		</div>
	);
};


export default Posts;
