import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import styled from 'styled-components';

import { selectCategory, updateModal } from 'store';
import { Category } from 'types';
import { noimg } from 'assets';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    overflow: 'unset',
    display: 'flex'
  },
  overlay: {
    backgroundColor: 'rgb(57 57 57 / 75%)'
  }
};

const Img = styled.div`
  img {
    padding-right: 1em;
    max-width: 130px;
  }
`

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 1em;
`

const Text = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 30;
  -webkit-box-orient: vertical;
`

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #cfcece;
  border-radius: 14px;
  cursor: pointer;
  font-size: 24px;
  padding: 0px 6px 4px 8px;
  position: absolute;
  line-height: 22px;
  right: -14px;
  top: -14px;
`

const Popup = () => {
  const category: Category = useSelector(selectCategory);
  const dispatch = useDispatch();
  const modalIsOpen = category.modal;
  const openBook = category.openBook;
  Modal.setAppElement("#root");

  const src = openBook.smallThumbnail ? openBook.smallThumbnail : noimg;

  function closeModal() {
    dispatch(updateModal(false));
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Button onClick={closeModal}>x</Button>
      <Img><img src={src} alt='Нет обложки' draggable='false' /></Img>
      <div>
        <Title>{openBook.title}</Title>
        <Text title={openBook.description}>{openBook.description}</Text>
      </div>
    </Modal>
  )
}

export default Popup;
