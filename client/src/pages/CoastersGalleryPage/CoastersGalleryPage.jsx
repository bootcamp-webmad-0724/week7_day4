import { Button, Container, Modal } from 'react-bootstrap'
import CoastersList from '../../components/CoastersList/CoastersList.jsx'
import NewCoasterForm from '../../components/NewCoasterForm/NewCoasterForm.jsx'
import { useEffect, useState } from 'react'
import coastersServices from '../../services/coasters.services.js'

const CoastersGalleryPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [coasters, setCoasters] = useState([])

    useEffect(() => {
        fetchCoasters()
    }, [])

    const fetchCoasters = () => {

        coastersServices
            .getAllCoasters()
            .then(({ data }) => setCoasters(data))
            .catch(err => console.log(err))
    }


    return (
        <div className="CoastersGalleryPage">

            <Container>

                <h1>Galería de montañas rusas</h1>
                <hr />
                <Button variant='dark' onClick={() => setShowModal(true)}>Crear nueva</Button>

                <CoastersList coasters={coasters} />

            </Container>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva coaster</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCoasterForm closeModal={() => setShowModal(false)} reloadCoasters={fetchCoasters} />
                </Modal.Body>
            </Modal>

        </div >
    )
}

export default CoastersGalleryPage