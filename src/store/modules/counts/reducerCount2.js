export default function EnviaValor(state = [], action) {
    
    switch (action.type) {
      case 'ADD_COUNT2':
        return [action.valor];
      default:
        return state;
    }
  }