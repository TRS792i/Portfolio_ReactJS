
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../assets/Services.css'
import Image from 'react-bootstrap/Image';
import imgBanner from '../images/banner.jpg';

const Services = () => {
    return (
        <div>
            <Header />
            <div>
                <Image src={imgBanner} alt="banner" fluid/>
            </div>
            <section>
                <div className="container my-4">
                    <div className="border-bottom border-primary border-4 text-center my-4">
                        <h3>Mon offre de services</h3>
                        <p>Voici les prestations sur lesquelles je peux intervenir</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="container article text-center border col-md-3 my-3 mx-3 py-2">
                            <article>
                                <i className="fa-solid fa-paintbrush text-primary fs-3 my-4"></i>
                                <h4 className="py-2">UX Design</h4>
                                <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés ...) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'éxpérience utilisateur la plus fluide et la plus agréable possible.</p>
                            </article>
                        </div>
                        <div className="container article text-center border col-md-3 my-3 mx-3 py-2">
                            <article>
                                <i className="fa-solid fa-code text-primary fs-3 my-4"></i>
                                <h4 className="py-2">Développement web</h4>
                                <p>Le développement de sites web consiste à créer des sites internet en utilisant des languages de programmation (HTML, CSS, Javascript, PHP,etc) et des frameworks (Bootstrap, React, Angular, etc).</p>
                            </article>
                        </div>
                        <div className="container article text-center border col-md-3 my-3 mx-3 py-2">
                            <article>
                                <i className="fa-solid fa-magnifying-glass text-primary fs-3 my-4"></i>
                                <h4 className="py-2">Référencement</h4>
                                <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les resultats des moteurs de recherche (Google, Bing, Yahoo, etc). L'objectif est d'attirer les maximum d'utilisateurs qualifiés sur le site.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>            
            <Footer />
        </div>
    )
}

export default Services;