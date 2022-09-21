import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, updateCategory, updateIsLoading } from 'store/categorySlice';
import Card from 'components/card/Card';
import Container from 'components/container/Container';

import './Books.css';

interface Props {
  title: string,
  src: string
}

export interface Book {
  volumeInfo: {
      title: string;
      imageLinks: {
        smallThumbnail: string;
      }
  }
}

export interface Items {
  title: string,
  imageLinks: string
}

interface Category {
  totalPage: number,
  isLoading: boolean,
  items: Array<Items>
}

const Books = ({title, src}: Props) => {
  const category: Category = useSelector(selectCategory);
  const isLoading = category.isLoading;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const page = Number(location.pathname.split("/")[2]);

  const maxResults = 12;
  const query = `https://www.googleapis.com/books/v1/volumes?q=subject:${src}&startIndex=${(page - 1) * maxResults}&maxResults=${maxResults}`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => receivedData(), [query]);

  const handlePageClick = (e: {
      selected: number;
    }) => {
    const selectedPage = e.selected + 1;
    navigate(`${selectedPage}`);
  };

  const receivedData = () => {
    if (isNaN(page)) {
      navigate("/not-found")
    } else {
      dispatch(updateIsLoading(true));
      axios.get(query).then(resp => {
        const totalPage = Math.ceil(resp.data.totalItems / maxResults);
        if (page - 1 > totalPage) navigate("/not-found");
        dispatch(updateIsLoading(false));
        dispatch(updateCategory({
          totalPage,
          items: resp.data.items.map((item: Book) => {
            return {title: item.volumeInfo.title, imageLinks: item.volumeInfo.imageLinks?.smallThumbnail}
          })
        }));
      });
    }
  }

  const forcePage = category.totalPage < page - 1 ? undefined : (page - 1);

  return (
    <div className="books">
      <div className="content">
        <h1>{title}</h1>
        {isLoading ?
          'Загрузка...' :
          <>
            <Container>
              {category.items.map((item, index) => <Card key={index} book={item} />)}
            </Container>
          </>
        }
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={category.totalPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        forcePage={forcePage}
        containerClassName={"pagination"}
        activeClassName={"active"}/>
    </div>
  );
}

export default Books;
