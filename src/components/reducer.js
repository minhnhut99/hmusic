export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log("action", action);
};

export default reducer;
