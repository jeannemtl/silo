const initialState = {
  recipes: []
}

const recipes = (state = initialState, action )=>{
  switch(action.type){
    case 'LOAD_RECIPES_FROM_SERVER':
    return{
      ...state,
      recipes:action.payload
    };
        default:
        return state;
  }
};

export default recipes;
