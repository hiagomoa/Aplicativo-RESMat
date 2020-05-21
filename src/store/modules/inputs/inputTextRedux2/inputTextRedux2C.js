export default function InputText2C(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_2C':
            return [action.valor];
        default:
            return [0];
    }
}