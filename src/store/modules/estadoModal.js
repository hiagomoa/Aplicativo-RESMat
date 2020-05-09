export default function EstadoModal (state = false, action) {
 
  switch (action.type) {
    case 'ADD_MODAL':
      return false;
    default:
      return state;
  }
}