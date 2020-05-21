export default function InputText1C(state = [], action) {

  switch (action.type) {
    case 'INPUT_TEXT_1C':
      return [action.valor];
    default:
      return [0];
  }
}