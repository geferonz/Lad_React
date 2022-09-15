import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: {
    totalPage: 1,
    // page: 1,
    isLoading: true,
    items: [{
      title: 'Извините, книги не найдены...',
      imageLinks: ''
    }]
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
    // updatePage: (state, action) => {
    //   state.books.page = action.payload || initialState.books.page;
    // },
    updateIsLoading: (state, action) => {
      state.books.isLoading = action.payload;
    }
  }
});

export const { updateCategory, updateIsLoading } = categorySlice.actions;

export const selectCategory = (state:any) => state.category.books;

export default categorySlice.reducer;