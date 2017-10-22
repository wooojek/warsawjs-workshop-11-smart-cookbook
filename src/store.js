import { createStore } from 'redux';

function rootReducer(state = {}, action) {
    return {
        recipeList: recipeListReducer(state.recipeList, action),
        criteria: criteriaReducer(state.criteria, action)
    }
}

function recipeListReducer(recipeList = [], action) {
    switch (action.type) {
        case 'SET_RECIPES':
            return action.recipes;
        default:
            return recipeList;
    }
}

function criteriaReducer(criterium = [], action) {
    switch (action.type) {
        case 'ADD_CRITERIA':
            return [...criterium, action.criterium];
        case 'WIPE_CRITERIA':
            return [];
        default:
            return criterium;
    }
}

const store = createStore(rootReducer);

export default store;