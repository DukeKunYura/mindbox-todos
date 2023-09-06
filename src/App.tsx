import { Provider } from 'react-redux';
import './App.css';
import MainPage from './components/main/MainPage';
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

export default App
