export default function TiraPlano (state = true, action) {
 
  switch (action.type) {
    case 'ADD_FLAG_PLANO':
      return false;
    default:
      return true;
  }
}