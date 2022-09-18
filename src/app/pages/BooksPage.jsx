import { Layouts } from "app/layouts";
import { BooksView } from "books/gateway/output";

export function BooksPage() {
  return (
    <Layouts.MainLayout>
      <BooksView />
    </Layouts.MainLayout>
  );
}
