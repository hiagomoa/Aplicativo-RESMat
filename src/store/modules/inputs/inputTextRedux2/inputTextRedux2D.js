export default function InputText2D(state = '', action) {
    
    switch (action.type) {
        case 'INPUT_TEXT_2D':
            console.log('inputText2D  ' + action.valor)
            return action.valor;
        default:
            return state;
    }
}