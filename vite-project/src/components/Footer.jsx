
import '../assets/Footer.css';
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (

            <footer className="bg-dark text-light">
                <div className="container">
                    <div className="row justify content-evenly">
                        <div className="col-md-3 pt-4 ps-4">
                            <h4>John Doe</h4>
                            <ul className="linkFooter socialIcon list-unstyled">
                                <li><a target="_blank" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?hl=fr&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" className="text-decoration-none text-white">40 rue Laure Diebold</a></li>
                                <li><a target="_blank" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?hl=fr&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" className="text-decoration-none text-white">69009 Lyon, France</a></li>
                                <li><a target="_blank" href="mailto:john.doe@gmail.com" className="text-decoration-none text-white">10 20 30 40 50</a></li>
                                <li><a target="_blank" href="tel:1020304050" className="text-decoration-none text-white">john.doe@gmail.com</a></li>
                            </ul>
                            <div className="col pt-2">
                                <a href="https://github.com/" className="text-secondary"><i className="socialIcon fa-brands fa-github fs-2"></i></a>
                                <a href="https://x.com/" className="text-secondary"><i className="socialIcon  mx-1 fa-brands fa-x-twitter fs-2 ms-2"></i></a>
                                <a href="https://fr.linkedin.com/" className="text-secondary"><i className="socialIcon  mx-1 fa-brands fa-linkedin fs-2 ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 pt-4 ps-4">
                            <h4>Liens utiles</h4>
                            <ul className="linkFooter socialIcon list-unstyled">
                                <li><Link to="/" className="text-decoration-none text-white">Acceuil</Link></li>
                                <li><Link to="/Services" className="text-decoration-none text-white">Services</Link></li>
                                <li><Link to="/Portfolio" className="text-decoration-none text-white">Portfolio</Link></li>
                                <li><Link to="/Contact" className="text-decoration-none text-white">Me contacter</Link></li>
                                <li><Link to="/Mentions" className="text-decoration-none text-white">Mentions légales</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 py-4 ps-4">
                            <h4>Mes dernières réalisations</h4>
                            <ul className="linkFooter socialIcon list-unstyled">
                                <li><a href="#" className="text-decoration-none text-white">Fresh Food</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Restaurant Akira</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Espace bien-être</a></li>
                                <li><a href="#" className="text-decoration-none text-white">SEO</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Création d'une API</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Maquette d'un site</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        
    );
}

export default Footer;