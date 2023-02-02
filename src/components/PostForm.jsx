import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import Myİnput from "./UI/input/Myİnput";

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', body:''})

    const addNewPost = (e) => {
		e.preventDefault()
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost)
		setPost({title: '', body:''})
	}

    return (
        <form>
        <Myİnput
            onChange={e => setPost( {...post, title: e.target.value} )}
             value={post.title}
            type="text"
            placeholder='Название поста'/>
        <Myİnput
            onChange={e => setPost( {...post, body: e.target.value} )}
            value={post.body}
            type="text"
            placeholder='Описание'/>
        <MyButton onClick={addNewPost}  type="">Создать пост</MyButton>
    </form>
    );
};

export default PostForm;