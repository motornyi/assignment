import ReactDOM from 'react-dom/client'
import { configure } from 'mobx'

import './global.css'

import Home from './views/home/Home'

configure({
  enforceActions: 'never',
})

const App = () => {
  return <Home />
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
