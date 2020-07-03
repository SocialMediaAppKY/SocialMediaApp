export function reducer(state, action) {
  switch (action.type) {
    case 'SET_SELECTED_POST':
      state.selectedPost = action.post; // tekrar bak
      return {...state};

    default:
      return state;
  }
}
