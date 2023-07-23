import Skills from './components/Skills'
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {

  return (
    <>
    <Provider store={store}>
      <Skills />
      </Provider>
    </>
  )
}

export default App
