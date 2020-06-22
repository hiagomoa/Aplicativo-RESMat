export default function ValoresModal(state = [], action) {

  const initialState={
    CenterX: 0,
    CenterY: 0,
    visibilidadeModal: true
    }

  switch (action.type) {
    case 'ADD_MODAL_VALOR':
      return [action.valor];
    case 'RESET':
    return [initialState];
    default:
      return [...state];
  }
}