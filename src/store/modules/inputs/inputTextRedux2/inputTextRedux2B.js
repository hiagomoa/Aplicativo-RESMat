export default function InputText1A(state = '', action) {
   
    switch (action.type) {
        case 'INPUT_TEXT_2B': 
        console.log('inputText2B  ' + action.valor)
            return action.valor;
        default:
            return state;
    }
}