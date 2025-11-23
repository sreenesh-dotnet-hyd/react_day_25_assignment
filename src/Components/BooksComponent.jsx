import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Card from "./Card";

function BooksComponent() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    setLoading(true);
    try {
      const res = await axios.get("https://localhost:7261/api/Books");
      setBooks(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <div className="books-container">
      {loading && <Loader />}

      {!loading && books.map(book => (
       <Card id={book.id} title={book.title} authorName={book.authorName}/>
      ))}
    </div>
  );
}

export default BooksComponent;
