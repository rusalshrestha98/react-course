import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Rusal', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Paak', text: 'Learning React is boring!' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;