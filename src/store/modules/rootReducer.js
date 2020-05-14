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

export default combineReducers({
  numberInput,
  reducerCount1,
  valoresModal,
  modalVisible,
  resultado,
  count1,
  count2,
  count3,
  count4
})