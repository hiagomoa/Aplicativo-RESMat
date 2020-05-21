export default function InputText3C(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_3C':
            return [action.valor];
        default:
            return [0];
    }
}