import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from '../pages/About';
import Posts from '../pages/Posts';

const AppRouter = () => {
    return (
        <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/about' element={<About />} />
    </Routes>
    );
};

export default AppRouter;