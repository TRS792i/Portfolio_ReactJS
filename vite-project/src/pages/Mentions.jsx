
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Accordion from 'react-bootstrap/Accordion';

const Mentions = () => {
    return (
        
        <div>
            <Header />
            <div className="container">
                <div className="border-bottom border-primary border-4 text-center my-4 py-2">
                <h3>Mentions légales</h3>
                </div>
                <div className="container pb-4">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Editeurs du site</Accordion.Header>
                            <Accordion.Body>
                                <h5>John Doe</h5>
                                <a className="text-decoration-none text-dark" href="#">
                                    <i className="fa-solid fa-map text-dark"></i> 40 rue Laure Diebold
                                </a> <br/>
                                <a className="text-decoration-none text-dark" href="#">
                                    <i className="fa-solid fa-location-dot text-dark"></i> 69009 Lyon, France
                                </a> <br/>
                                <a className="text-decoration-none text-dark" href="#">
                                    <i className="fa-solid fa-mobile-screen-button text-dark"></i> 10 20 30 40 50
                                </a> <br/>
                                <a className="text-decoration-none text-dark" href="#">
                                    <i className="fa-regular fa-envelope text-dark"></i> john.doe@gmail.com
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hébergeur</Accordion.Header>
                            <Accordion.Body>
                                <h4>alwaysdata</h4>
                                <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <i className="fa-solid fa-globe text-dark"></i> <a href="#">www.alwaysdata.com</a>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Crédits</Accordion.Header>
                            <Accordion.Body>
                                <h4>Crédits</h4>
                                <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation.</a></p>
                                <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a></p>
                                <p className="fst-italic">Le favicon de ce site a été fourni par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John doe icons erstellt von Freepik - Flaticon.</a></p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </div>
          
        
    )
}

export default Mentions;