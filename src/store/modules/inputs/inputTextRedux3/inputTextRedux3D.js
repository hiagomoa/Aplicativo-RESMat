export default function InputText3D(state = '', action) {
    
    switch (action.type) {
        case 'INPUT_TEXT_3D':
            console.log('inputText3D  ' + action.valor)
            return action.valor;
        default:
            return state;
    }
}