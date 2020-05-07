export default function EstadoInput(state = [], action) {

    switch (action.type) {
        case 'ADD_NUMBER':
            return [action.product];
        default:
            return state;
    }

}