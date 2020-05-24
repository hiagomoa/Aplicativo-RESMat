export default function InputText3C(state = '', action) {
   
    switch (action.type) {
        case 'INPUT_TEXT_3C':
            console.log('inputText3C  ' + action.valor)
            return action.valor;
        default:
            return state;
    }
}