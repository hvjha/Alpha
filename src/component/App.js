import Info from './Info';
import Navbar from './Navbar'
import S from './S';
import Services from './Services';
import Pricing from './Pricing';
// import Aman from './Aman';
import Footer from './Footer'
import Chat from '../component/Chat';


function App() {
  return (
    <>
       <Info/>
        <Navbar/>
        <Chat/>
        <S/>
        <Services/>
        <Pricing/>
        {/* <Aman/> */}
        <Footer/>

    </>
  );
}

export default App;
