import { MainLayout } from "app/layouts/MainLayout/MainLayout";
import { BooksView } from "books/gateway";

export function BooksPage() {
  return (
    <MainLayout>
      <BooksView />
    </MainLayout>
  );
}
