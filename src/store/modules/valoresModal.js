export default function ValoresModal(state = [], action) {

  switch (action.type) {
    case 'ADD_MODAL_VALOR':
      return [action.valor];
    default:
      return state;
  }
}