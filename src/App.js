import React from "react";
import List from "./List";
import "./App.css";

export default function App({ store }) {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>To-Do App</h1>
      </header>
      <div className="App-list">
        {store.lists.map((item) => {
          return (
            <List
              key={item.id}
              header={item.header}
              cards={item.cardIds.map((id) => store.allCards[id])}
            />
          );
        })}
      </div>
    </main>
  );
}
