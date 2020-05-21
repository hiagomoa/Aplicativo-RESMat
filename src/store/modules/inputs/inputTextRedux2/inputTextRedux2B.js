export default function InputText1A(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_2B':
            return [action.valor];
        default:
            return [0];
    }
}