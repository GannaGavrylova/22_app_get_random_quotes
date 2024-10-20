import { useEffect } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../../redux/slices/quoteSlice";

function QuoteRandom() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);
  const author = useSelector((state) => state.quote.author);
  const status = useSelector((state) => state.quote.status);
  const error = useSelector((state) => state.quote.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes()); // Запросить цитату при загрузке компонента
    }
  }, [status, dispatch]);

  function handleRandomClick() {
    dispatch(fetchQuotes()); // Запросить новую цитату по клику на кнопку
  }
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>Error{error}</div>;
  }
  return (
    <div>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <p>{author}</p>
      <button onClick={handleRandomClick}>New Quote</button>
    </div>
  );
}

export default QuoteRandom;
