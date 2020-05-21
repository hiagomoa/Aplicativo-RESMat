export default function InputText1A(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_1A':
            return [action.valor];
        default:
            return [0];
    }
}