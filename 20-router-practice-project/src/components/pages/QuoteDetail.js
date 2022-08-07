import { Route, useParams } from "react-router-dom";

import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from '../comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Rusal', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Paak', text: 'Learning React is boring!' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  )
}

export default QuoteDetail;