export default function InputText1D(state = [], action) {

  switch (action.type) {
    case 'INPUT_TEXT_1D':
      return [action.valor];
    default:
      return [0];
  }
}