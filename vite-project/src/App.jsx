
import './App.css'
import './assets/header.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import imgJohnDoe from './images/john-doe-about.jpg'
import Modale from "./components/Modale.jsx";


function App() {
 
  return (
    <div>
      <Header />
          <div className="slider">
              <h1 className="text-light text-center">Bonjour, je suis John Doe</h1>
              <h2 className="text-light text-center mb-4">Développeur web full stack</h2>
              <Modale />
          </div>
          <div className="container col-md-8 shadow my-4 ">
              <div className="row justify-content-center mx-1">
                  <div className="col-md-6 my-2">
                  <h3 className="border-bottom border-primary border-4 my-2 py-3">A propos</h3>
                  <Image className='py-4' src={imgJohnDoe} alt="John Doe, développeur web full stack" fluid/>
                  <article>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid possimus sit, aliquam vel tempore veritatis dicta eum nulla facilis.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid possimus sit, aliquam vel tempore veritatis dicta eum nulla facilis.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid possimus sit, aliquam vel tempore veritatis dicta eum nulla facilis.</p>
                  </article>
                  </div>
                  <div className="col-md-6 my-2 pb-2">
                      <div>
                          <div>
                              <h3 className="border-bottom border-primary border-4 my-2 py-3">Mes compétences</h3>
                              <h5 className="pt-3 pb-2">HTML5 90%</h5>
                              <ProgressBar variant="danger" now={90} />
                          </div>
                          <div className='py-2'>
                              <h5 className="py-2">CSS3 80%</h5>
                              <ProgressBar variant="info" now={80} />
                          </div>
                          <div className='py-2'>
                              <h5 className="py-2">JAVASCRIPT 70%</h5>
                              <ProgressBar variant="warning" now={70} />
                          </div>
                          <div className='py-2'>
                              <h5 className="py-2">PHP 60%</h5>
                              <ProgressBar variant="success" now={60} />
                          </div>
                          <div className='py-2'>
                              <h5 className="py-2">REACT 50%</h5>
                              <ProgressBar variant="primary" now={50} />
                          </div>
                      
                      </div>
                  </div>
              </div>
          </div>
      <Footer />
    </div>
  )
}

export default App
