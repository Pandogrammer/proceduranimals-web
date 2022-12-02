import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label>Mensaje</label>
        <textarea rows="4" cols="40" onChange={onTextChange}></textarea>
        <br/>
        <input type="button" value="enviar" onClick={enviarMensaje}></input>
      </header>
    </div>
  );
}



export default App;
