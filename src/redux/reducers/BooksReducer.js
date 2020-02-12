const initialState = {
  books: [],
  isLoadingBooks: false

}

const books = (state = initialState, action )=>{
  switch(action.type){
    case 'LOAD_BOOKS_FROM_SERVER':
    return{
      ...state,
      books:action.payload
    };
    case 'DELETE_BOOKS_FROM_SERVER':
    return{
      ...state,
      books:action.payload
    };
    case 'TOGGLE_IS_LOADING_BOOKS':
    return{
      ...state,
      isLoadingBooks:action.payload
    };
        default:
        return state;
  }
};

export default books;
