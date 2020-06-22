export default function InputText3B(state = '', action) {
    switch (action.type) {
        case 'INPUT_TEXT_3B':
            console.log('inputText3B  ' + action.valor)
            return action.valor;
        default:
            return state;
    }
}