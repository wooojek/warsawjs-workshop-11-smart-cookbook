import React from 'react';


import Search from './Search';
import RecipeList from './RecipeList';
import './style.sass';

export default function App() {
    return <div>
        <Search/>
        <RecipeList/>
    </div>;
}