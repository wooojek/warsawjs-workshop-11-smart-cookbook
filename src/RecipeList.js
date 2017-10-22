import React, {Component} from 'react';
import Recipe from './Recipe';
import RecipeService from './RecipeService';

export default class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        RecipeService()
            .then(recipes => this.setState({recipes}))
    }

    render() {
        const recipeList = this.state.recipes.map((recipe, index) => <li key={index}><Recipe {...recipe} /></li>);
        return (
            <ul>
                {recipeList}
            </ul>
        );
    }
}