function App() {
  const persons = [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Anne"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
      </header>
      <section>
        {
          persons && persons.length > 0 ?
          <ul>
            {persons.map(({id, name}) => <li key={id}>{name}</li>)}
          </ul>
          : <p>no data</p>
        }
      </section>  
    </div>
  );
}

export default App;
