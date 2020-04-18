export default function EstadoInput(state = [], action) {
    console.log(state);

    switch (action.type) {
        case 'ADD_NUMBER':
            return [...state,
            action.product];
        default:
            return state;
    }

}