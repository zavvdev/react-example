import { Layouts } from "app/layouts";
import { Books } from "books/gateway/output";

export function BooksPage() {
  return (
    <Layouts.Main>
      <Books />
    </Layouts.Main>
  );
}
