export interface Item {
  title: string,
  smallThumbnail: string,
  thumbnail: string,
  description: string
}

export interface Book {
  volumeInfo: {
      title: string;
      imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
      },
      description: string;
  }
}

export interface Category {
  totalPage: number,
  isLoading: boolean,
  items: Item[],
  modal: boolean,
  openBook: Item
}