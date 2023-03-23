import { useState } from 'react';
import Header from './components/Header';
import ContainerComponent from './components/Container';
import ModalForm from './components/ModalForm';
import Footer from './components/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Header />
      <ContainerComponent handleShowModal={handleShowModal} />
      <ModalForm showModal={showModal} handleCloseModal={handleCloseModal} />
      <Footer />
    </>
  );
}

export default App;
