export default function EnviaValor(state = [], action) {
    
    switch (action.type) {
      case 'ADD_COUNT4':
        return [action.valor];
      case 'RESET':
          return [];  
      default:
        return state;
    }
  }