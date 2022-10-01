import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: {
    totalPage: 1,
    isLoading: true,
    items: [{
      title: 'Sorry no books found...',
      smallThumbnail: '',
      thumbnail: '',
      description: ''
    }],
    modal: false,
    openBook: {
      title: 'Sorry, book not found...',
      smallThumbnail: '',
      thumbnail: '',
      description: ''
    }
  }
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.books.totalPage = action.payload.totalPage || initialState.books.totalPage;
      state.books.items = action.payload.items || initialState.books.items;
    },
    updateIsLoading: (state, action) => {
      state.books.isLoading = action.payload;
    },
    updateModal: (state, action) => {
      state.books.modal = action.payload;
    },
    updateOpenBook: (state, action) => {
      state.books.openBook = action.payload || initialState.books.openBook;
    },
  }
});

export const { updateCategory, updateIsLoading, updateModal, updateOpenBook } = categorySlice.actions;

export const selectCategory = (state:any) => state.category.books;

export default categorySlice.reducer;