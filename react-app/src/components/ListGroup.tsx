import { Fragment } from "react";

function ListGroup() {
  
    const items = [
        "New yourk",
        "Los Angeles",
        "Chicago",
        "Houston",
    ]

    items.map(item => <li>{item}</li>)

      return (
    <>
        <h1>List Group</h1>
        <ul className="list-group">
            {items.map(item => <li>{item}</li>)}
        </ul>
  </>
);
}

export default ListGroup;
