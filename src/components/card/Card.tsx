import { Items } from 'components/books/Books';
import noimg from 'assets/noimg.png';

import './Card.css';

interface Props {
  book: Items
}

const Card = ({ book }: Props) => {
  const src = book.imageLinks ? book.imageLinks : noimg;
  return (
    <div className="card">
      <img src={src} alt='Нет обложки' />
      <div className="title">{ book.title }</div>
    </div>
  );
}

export default Card;