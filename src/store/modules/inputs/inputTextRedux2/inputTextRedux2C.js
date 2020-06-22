export default function InputText2C(state = '', action) {
    
    switch (action.type) {
        case 'INPUT_TEXT_2C':
            console.log('inputText2C  ' + action.valor)
            return action.valor;
        default:
            return state;
    }
}