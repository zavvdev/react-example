import { Layouts } from "app/layouts";
import { Books } from "books/gateway/output";

export function BooksPage() {
  return (
    <Layouts.MainLayout>
      <Books />
    </Layouts.MainLayout>
  );
}
