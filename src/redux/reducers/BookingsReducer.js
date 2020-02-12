const initialState = {
  bookings: [],

}

const bookings = (state = initialState, action )=>{
  switch(action.type){
    case 'LOAD_BOOKINGS_FROM_SERVER':
    return{
      ...state,
      bookings:action.payload
    };


        default:
        return state;
  }
};

export default bookings;
