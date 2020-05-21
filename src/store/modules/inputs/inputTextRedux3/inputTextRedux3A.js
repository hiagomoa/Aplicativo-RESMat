export default function InputText3A(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_3A':
            return [action.valor];
        default:
            return [0];
    }
}