import { useEffect, useState } from 'react';
import { Modal, Button, Spinner, Alert } from 'react-bootstrap';

function GitHubProfileModal() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        if (!response.ok) throw new Error(`Erreur : ${response.status}`);
        const data = await response.json();
        setUser(data);
        setShowModal(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mt-4 text-center">
      {user && !loading && (
        <Button variant="danger" onClick={() => setShowModal(true)}>
          En savoir plus
        </Button>
      )}

      <Modal className='border border-secondary' size='lg' show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header className='bg-dark text-light' closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-light'>
          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {user && (
            <div className="row justify-content-evenly my-3">
              <div className='col-md-6 my-2'>
                <img
                src={user.avatar_url}
                alt="Avatar"
                className="img-fluid rounded-circle mb-3"
                />
              </div>
              <div className='col-md-6 my-2'>
                <p><i className="fa-solid fa-user text-light pe-2"></i><strong>{user.name || user.login}</strong></p>
                <hr />
                <i className="fa-solid fa-location-dot text-light pe-2"></i>
                <hr />
                <p><i className="fa-solid fa-comment text-light pe-2"></i>{user.bio}</p>
                <hr />
                <p><i className="fa-solid fa-box-archive pe-2"></i><strong>Repository :</strong> {user.public_repos}</p>
                <hr />
                <p><i className="fa-solid fa-user-group text-light pe-2"></i><strong>Followers :</strong> {user.followers}</p>
                <hr />
                <p><i className="fa-solid fa-user-group text-light pe-2"></i><strong>Following :</strong> {user.following}</p>
                <hr />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  Voir le profil
                </a>
              </div>
              
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className='bg-dark text-light'>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GitHubProfileModal;
