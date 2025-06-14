
import '../assets/Portfolio.css';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Image from 'react-bootstrap/Image';
import imgBanner from '../images/banner.jpg';
import imgCoder from '../images/portfolio/coder.jpg';
import imgEspaceBienEtre from '../images/portfolio/espace-bien-etre.jpg';
import imgFreshFood from '../images/portfolio/fresh-food.jpg';
import imgRestaurant from '../images/portfolio/restaurant-japonais.jpg';
import imgScreens from '../images/portfolio/screens.jpg';
import imgSeo from '../images/portfolio/seo.jpg';

const Portfolio = () => {
    return (
        <div>
            <Header />
            <div>
                <Image src={imgBanner} alt="banner" fluid/>
            </div>
            <div className="container text-center my-4">
                <div className="border-bottom border-primary border-4 text-center my-4">
                    <h3>Portfolio</h3>
                    <p>Voici quelques-unes de mes réalisations</p>
                </div>
                <div className="row justify-content-center my-3">
                    <div className="card col-md-3 mx-3 px-0 my-3" >
                        <Image src={imgFreshFood} className="card-img-top" alt="Fresh Food" fluid/>
                        <div className="card-body">
                            <h5 className="card-title">Fresh Food</h5>
                            <p className="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                        <div className="card-footer">Site réalisé avec PHP et MySQL</div>
                    </div>
                    <div className="card col-md-3 mx-3 px-0 my-3">
                        <Image src={imgRestaurant} className="card-img-top" alt="Restaurant japonais" fluid/>
                        <div className="card-body">
                            <h5 className="card-title">Restaurant Akira</h5>
                            <p className="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                        <div className="card-footer w-100">Site réalisé avec WordPress</div>
                    </div>
                    <div className="card col-md-3 mx-3 px-0 my-3">
                        <Image src={imgEspaceBienEtre} className="card-img-top" alt="Espace bien-être" fluid/>
                        <div className="card-body">
                            <h5 className="card-title">Espace bien-être</h5>
                            <p className="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                        <div className="card-footer">Site réalisé avec LARAVEL</div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="card col-md-3 mx-3 px-0 my-3">
                        <Image src={imgSeo} className="card-img-top" alt="SEO" fluid/>
                        <div className="card-body">
                            <h5 className="card-title">SEO</h5>
                            <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                        <div className="card-footer">Utilisation des outils SEO</div>
                    </div>
                    <div className="card col-md-3 mx-3 px-0 my-3">
                        <Image src={imgCoder} className="card-img-top" alt="API" fluid/>
                        <div className="card-body">
                            <h5 className="card-title">Création d'une API</h5>
                            <p className="card-text">Création d'une API RESTFULL publique</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                        <div className="card-footer">PHP - SYMFONY</div>
                    </div>
                    <div className="card col-md-3 mx-3 px-0 my-3">
                        <Image src={imgScreens} className="card-img-top" alt="Maquette site web" fluid/>
                        <div className="card-body">
                            <h5 className="card-title">Maquette d'un site web</h5>
                            <p className="card-text">Création du prototype d'un site</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                        <div className="card-footer">Réalisé avec FIGMA</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;