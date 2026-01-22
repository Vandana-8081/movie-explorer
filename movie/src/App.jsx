import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

function App() {

  return (
    <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/movie/:id" element={<MovieDetail/>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
