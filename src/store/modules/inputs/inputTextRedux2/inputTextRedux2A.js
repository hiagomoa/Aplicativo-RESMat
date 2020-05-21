export default function InputText2A(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_2A':
            return [action.valor];
        default:
            return [0];
    }
}