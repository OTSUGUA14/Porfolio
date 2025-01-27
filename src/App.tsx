
import './App.css'

import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <div className='bg-gray-100'>

        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App
