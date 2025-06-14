import '../assets/home.css';
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <div className="container">
                <div className="slider">
                    <h1 className="text-light text-center">Bonjour, je suis John Doe</h1>
                    <h2 className="text-light text-center">Développeur web full stack</h2>
                    <button type="button" className="btn btn-danger m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    En savoir plus
                    </button>
                </div>
                <div className="container col-md-8 shadow my-4 ">
                    <div className="row justify-content-center mx-1">
                        <div className="col-md-6 my-2">
                        <h3 className="border-bottom border-primary border-4 my-2 py-3">A propos</h3>
                        <img className="img-fluid py-2" src="..//images/john-doe-about.jpg" alt="John Doe, développeur web full stack" />
                        <article>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid possimus sit, aliquam vel tempore veritatis dicta eum nulla facilis.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid possimus sit, aliquam vel tempore veritatis dicta eum nulla facilis.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid possimus sit, aliquam vel tempore veritatis dicta eum nulla facilis.</p>
                        </article>
                        </div>
                        <div className="col-md-6 my-2 pb-2">
                            <div>
                                <div>
                                    <h3 class="border-bottom border-primary border-4 my-2 py-3">Mes compétences</h3>
                                    <h5 class="py-2">HTML5 90%</h5>
                                    <ProgressBar variant="danger" now={90} />
                                </div>
                                <div>
                                    <h5 class="py-2">CSS3 80%</h5>
                                    <ProgressBar variant="info" now={80} />
                                </div>
                                <div>
                                    <h5 class="py-2">JAVASCRIPT 70%</h5>
                                    <ProgressBar variant="warning" now={70} />
                                </div>
                                <div>
                                    <h5 class="py-2">PHP 60%</h5>
                                    <ProgressBar variant="success" now={60} />
                                </div>
                                <div>
                                    <h5 class="py-2">REACT 50%</h5>
                                    <ProgressBar variant="primary" now={50} />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <Footer />
        </div>
    )
}

export default Home;