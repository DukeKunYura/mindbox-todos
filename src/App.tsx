import { Provider } from 'react-redux';
import './App.css'
import Main from './components/main/Main'
import { store } from './components/redux/store'

function App() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
