import ReactDOM from 'react-dom/client'
import './global.css'

import Home from './views/home/Home'

const App = () => {
  return <Home />
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
