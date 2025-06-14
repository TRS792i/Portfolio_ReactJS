import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import imgModale from '../images/modal/19842736.png';

function Modale() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user,setUser] = useState([]);

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUser(json);
  }

  useEffect( () => {
    getUser();
  },[])


  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        En savoir plus
      </Button>

      <Modal size='lg' show={show} onHide={handleClose} animation={false}>
        <Modal.Header className='bg-dark text-light' closeButton variant="light">
          <Modal.Title>Mon profil Github</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-light'>
          <div className="row justify-content-evenly my-3">
            <div className="col-md-6 my-2 mx-0">
              <Image src={imgModale} alt="avatar" fluid/>
            </div>
            <div className="col-md-6 my-2 mx-0">
              <p><i class="fa-solid fa-user text-light pe-2"></i><a target="_blank" href="https://github.com/github-john-doe"> John Doe</a></p>
              <hr />
              <i class="fa-solid fa-location-dot text-light pe-2"></i>
              <hr />
              <p><i class="fa-solid fa-comment text-light pe-2"></i> As we all know, John Doe's indentity is unknow. I just wanted to contribute without being unknown</p> 
              <hr />
              <p><i class="fa-solid fa-box-archive pe-2"></i> Repositories : 1</p> 
              <hr />
              <p><i class="fa-solid fa-user-group text-light pe-2"></i> Followers : 16</p> 
              <hr />
              <p><i class="fa-solid fa-user-group text-light pe-2"></i> Following : 0</p>
            </div>
          </div>       
        </Modal.Body>
        <Modal.Footer className='bg-dark text-light'>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;