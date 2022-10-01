import axios from 'axios';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Card, Container, Popup } from 'components';
import { selectCategory, updateCategory, updateIsLoading } from 'store';
import { Book, Category } from 'types';

interface Props {
  title: string,
  src: string
}

const BaseBooks = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 160px);

  ul li {
    margin: 0 8px;
    font-weight: inherit;
  }

  .pagination {
    display: flex;
    margin: 0;
    padding: 18px;
    list-style: none;
    user-select: none;
    position: fixed;
    bottom: 0;
    width: 100vw;
    justify-content: center;
  }

  .pagination a {
    cursor: pointer;
  }

  .pagination .active a {
    font-weight: 800;
  }
`

const BooksContainer = styled(Container)`
  margin: 18px auto;
  padding: 0 4px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 4px;
`

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
            return {
              title: item.volumeInfo.title,
              smallThumbnail: item.volumeInfo.imageLinks?.smallThumbnail,
              thumbnail: item.volumeInfo.imageLinks?.thumbnail,
              description: item.volumeInfo?.description
            }
          })
        }));
      });
    }
  }

  const forcePage = category.totalPage < page - 1 ? undefined : (page - 1);

  return (
    <BaseBooks>
      <h1>{title}</h1>
      <Popup />
      {isLoading ?
        'Загрузка...' :
        <BooksContainer>
          {category.items.map((item, index) => <Card key={index} book={item} />)}
        </BooksContainer>
      }
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
    </BaseBooks>
  );
}

export default Books;
