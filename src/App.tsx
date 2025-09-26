import './App.css'
import Footer from './components/Guidelines/Footer/Footer'
import Header from './components/Guidelines/Header/Header'
import RouterConfig from './config/RouterConfig'

function App() {
  return (
    <div className='flex flex-col justify-between items-center h-full font-[poppin] !w-full '>
      <Header />

      <RouterConfig />

      <Footer />
    </div>
  )
}

export default App
