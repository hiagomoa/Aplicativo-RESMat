export default function InputText1A(state = '', action) {
    
    switch (action.type) {
        case 'INPUT_TEXT_1B':
            return action.valor;
        case 'RESET':
            return [];
        default:
            return state;
    }
}