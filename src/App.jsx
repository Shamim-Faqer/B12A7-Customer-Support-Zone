 import './App.css'
 import Header from './components/Header';
 import Footer from './components/Footer';
 import Banner from './components/Banner';
import Tickets from './components/Tickets';
import {ToastContainer} from "react-toastify";

 
 function App() {
  return(<div className='max-w-7xl mx-auto px-4'>
        <Header></Header>

        <Tickets></Tickets>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
  </div>)
 }

 export default App;