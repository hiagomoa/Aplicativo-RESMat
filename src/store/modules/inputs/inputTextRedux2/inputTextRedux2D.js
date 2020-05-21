export default function InputText2D(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_2D':
            return [action.valor];
        default:
            return [0];
    }
}