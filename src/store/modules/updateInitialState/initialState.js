export default function initialState (state = false, action) {
 
  switch (action.type) {
    case 'UPDATE_STATE':
      return 1;
    default:
      return 0;
  }
}