export default function InputText3B(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_3B':
            return [action.valor];
        default:
            return [0];
    }
}