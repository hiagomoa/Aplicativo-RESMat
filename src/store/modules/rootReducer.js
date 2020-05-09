import { combineReducers } from 'redux'
import numberInput from './reducer'
import enviaValor from './enviaValor'
import valoresModal from './valoresModal'
import modalVisible from './estadoModal'

export default combineReducers({
  numberInput,
  enviaValor,
  valoresModal,
  modalVisible
})