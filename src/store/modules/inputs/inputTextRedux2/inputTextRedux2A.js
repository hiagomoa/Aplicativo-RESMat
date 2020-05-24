export default function InputText2A(state = '', action) {
    
    switch (action.type) {
        case 'INPUT_TEXT_2A':
            console.log('inputText2A  ' + action.valor)
            return action.valor;
        default:
            return state;
    }
}