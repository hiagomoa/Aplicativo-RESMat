import { combineReducers } from 'redux'
import numberInput from './reducer'
import reducerCount1 from './counts/reducerCount1'
import valoresModal from './valoresModal'
import modalVisible from './estadoModal'
import resultado from './resultado'
import count1 from './counts/reducerCount1'
import count2 from './counts/reducerCount2'
import count3 from './counts/reducerCount3'
import count4 from './counts/reducerCount4'
import inputTextRedux1A from './inputs/inputTextRedux1/inputTextRedux1A'
import inputTextRedux1B from './inputs/inputTextRedux1/inputTextRedux1B'
import inputTextRedux1C from './inputs/inputTextRedux1/inputTextRedux1C'
import inputTextRedux1D from './inputs/inputTextRedux1/inputTextRedux1D'
import inputTextRedux2A from './inputs/inputTextRedux2/inputTextRedux2A'
import inputTextRedux2B from './inputs/inputTextRedux2/inputTextRedux2B'
import inputTextRedux2C from './inputs/inputTextRedux2/inputTextRedux2C'
import inputTextRedux2D from './inputs/inputTextRedux2/inputTextRedux2D'
import inputTextRedux3A from './inputs/inputTextRedux3/inputTextRedux3A'
import inputTextRedux3B from './inputs/inputTextRedux3/inputTextRedux3B'
import inputTextRedux3C from './inputs/inputTextRedux3/inputTextRedux3C'
import inputTextRedux3D from './inputs/inputTextRedux3/inputTextRedux3D'

export default combineReducers({
  numberInput,
  reducerCount1,
  valoresModal,
  modalVisible,
  resultado,
  count1,
  count2,
  count3,
  count4,
  inputTextRedux1A,
  inputTextRedux1B,
  inputTextRedux1C,
  inputTextRedux1D,
  inputTextRedux2A,
  inputTextRedux2B,
  inputTextRedux2C,
  inputTextRedux2D,
  inputTextRedux3A,
  inputTextRedux3B,
  inputTextRedux3C,
  inputTextRedux3D,

})