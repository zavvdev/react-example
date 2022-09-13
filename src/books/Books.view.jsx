import { useBooksStyles } from "books/Books.styles";

export function BooksView() {
  const classes = useBooksStyles();

  return <div className={classes.list}>List</div>;
}
