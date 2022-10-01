import { useDispatch } from "react-redux";
import styled from 'styled-components';

import { noimg } from 'assets';
import { updateModal, updateOpenBook } from 'store';
import { Item } from 'types';

interface Props {
  book: Item
}

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 33%;
  padding: 8px;
  align-items: center;
  box-shadow: 0 3px 10px 0 rgb(41 41 41 / 25%);

  .title {
    margin-top: 1em;
    height: 5em;
    font-weight: 500;
  }

  img {
    width: auto;
    height: 228px;
    max-width: 100%;
  }
`

const Card = ({ book }: Props) => {
  const src = book.thumbnail ? book.thumbnail : noimg;
  const dispatch = useDispatch();

  function openModal() {
    dispatch(updateOpenBook(book));
    dispatch(updateModal(true));
  }

  return (
    <BaseCard onClick={openModal}>
      <img src={src} alt='Нет обложки' draggable='false' />
      <div className="title">{ book.title }</div>
    </BaseCard>
  );
}

export default Card;