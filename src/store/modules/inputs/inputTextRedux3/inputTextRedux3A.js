export default function InputText3A(state = '', action) {
    
    switch (action.type) {
        case 'INPUT_TEXT_3A':
            console.log('inputText3A  ' + action.valor)
            return action.valor;
        default:
            return state;
    }
}