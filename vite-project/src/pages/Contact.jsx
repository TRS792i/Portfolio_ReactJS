
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="border-bottom border-primary border-4 text-center my-4">
                    <h3>Contact</h3>
                    <p>Pour me contacter au vue d'un entretien ou d'une collaboration, merci de remplir le formulaire de contact</p>
                </div>
                <div className="container shadow col-md-10 my-4">
                    <div className="row justify-content-center">
                        <div className="col-md-6 my-2">
                            <h4 className="border-bottom border-primary border-4 my-2 py-3">Formulaire de contact</h4>
                            <div className="form-floating my-3">
                            <input type="text" className="form-control" id="floatingName" placeholder="nom"/>
                            <label for="floatingName">Votre nom</label>
                            </div>
                            <div className="form-floating my-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="email" />
                            <label for="floatingEmail">Votre adresse email</label>
                            </div>
                            <div className="form-floating my-3">
                            <input type="telephone" className="form-control" id="floatingTelephone" placeholder="telephone" />
                            <label for="floatingTelephone">Votre numéro de téléphone</label>
                            </div>
                            <div className="form-floating my-3">
                            <input type="text" className="form-control" id="floatingSujet" placeholder="sujet" />
                            <label for="floatingSujet">Sujet</label>
                            </div>
                            <div className="form-floating my-3">
                                <label className="form-label" for="message">Votre message</label>
                                <textarea className="form-control" name="message" id="message" cols="30" rows="3" required></textarea>
                            </div>
                            <div className="container text-center">
                                <button className="btn btn-primary text-light text-center mt-4" type="submit">Envoyer</button>
                            </div>
                        </div>
                        <div className="col-md-6 my-2 pb-2">
                            <h4 className="border-bottom border-primary border-4 my-2 py-3">Mes coordonnées</h4>
                            <article>
                                <h4>John Doe</h4>
                                <a target="_blank" className="text-decoration-none text-dark" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?hl=fr&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D">
                                    <i className="fa-solid fa-map text-dark"></i> 40 rue Laure Diebold
                                </a> <br/>
                                <a target="_blank" className="text-decoration-none text-dark" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?hl=fr&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D">
                                    <i className="fa-solid fa-location-dot text-dark"></i> 69009 Lyon, France
                                </a> <br/>
                                <a className="text-decoration-none text-dark" href="tel:1020304050">
                                    <i className="fa-solid fa-mobile-screen-button text-dark"></i> 10 20 30 40 50
                                </a> <br/>
                                <a className="text-decoration-none text-dark" href="mailto:john.doe@gmail.com">
                                    <i className="fa-regular fa-envelope text-dark"></i> john.doe@gmail.com
                                </a>
                                <iframe className="my-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.627152462177!2d4.796403976122984!3d45.77866197108085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1748961697777!5m2!1sfr!2sfr" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;