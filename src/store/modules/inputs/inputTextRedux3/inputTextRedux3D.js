export default function InputText3D(state = [], action) {

    switch (action.type) {
        case 'INPUT_TEXT_3D':
            return [action.valor];
        default:
            return [0];
    }
}