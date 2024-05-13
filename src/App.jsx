import NavBar from "./nav/nav"
import MainPage from "./main/main"
import Service from "./service/service"
import SerSec from "./service/sersec.jsx"
import Portfolio from "./portfolio/portfolio.jsx"
import Phylosophy from "./phylosophy/phylosophy.jsx"
import Contact from "./contact/contact.jsx"
import Footer from "./footer/footer.jsx"

function App() {
  return (
    <>
      <NavBar></NavBar>
      <MainPage></MainPage>
      <Service></Service>
      <SerSec></SerSec>
      <Portfolio></Portfolio>
      <Phylosophy></Phylosophy>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
