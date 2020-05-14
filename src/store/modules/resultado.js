export default function EstadoResult (state = [], action) {
    
    switch (action.type) {
        case 'ADD_RESULT':
            return [action.product];
        default:
            return 'merdaaa';
    }
}