import React, { useRef, useReducer } from "react";

const reducer = (state, action) => {
  switch (
    action.type
    //Do something with the action
  ) {
  }
};

export default function ShoppingList() {
  const inputRef = useRef();

  const [items, dispatch] = useReducer(reducer, []);

  return <div>Non sense</div>;
}
