import { Items } from 'types';
import styled from 'styled-components';

import { noimg } from 'assets';

interface Props {
  book: Items
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
  const src = book.imageLinks ? book.imageLinks : noimg;
  return (
    <BaseCard>
      <img src={src} alt='Нет обложки' draggable='false' />
      <div className="title">{ book.title }</div>
    </BaseCard>
  );
}

export default Card;