import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New yourk", "Los Angeles", "Chicago", "Houston"];

  return <div><ListGroup items={items} heading="cities" /></div>
}

export default App;