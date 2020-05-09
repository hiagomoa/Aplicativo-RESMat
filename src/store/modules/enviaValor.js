export default function EnviaValor(state = [], action) {
  switch (action.type) {
    case 'ADD_VALORES':
      return [action.valor];
    default:
      return state;
  }
}