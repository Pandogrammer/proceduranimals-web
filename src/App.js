import './App.css';

let mensaje = ""

let telegramBotId = "2031201399:AAGXQG0XVXhp9zQsRhAODEpyBRbKLKMhTAA"
let chatId = "504832198L"

function sendRequest (url) {
  let baseUrl = `https://api.telegram.org/bot${telegramBotId}`
  let requestUrl = `${baseUrl}/sendMessage?chat_id=${chatId}&text=${mensaje}`
  return fetch(requestUrl)
}

function enviarMensaje(evento){
  console.log(mensaje)
  sendRequest(mensaje).then(e => console.log(e))
}


function onTextChange(evento){
  mensaje = evento.target.value
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <textarea rows="4" cols="40" onChange={onTextChange}></textarea>
        <br/>
        <input type="button" value="enviar" onClick={enviarMensaje}></input>
      </header>
    </div>
  );
}



export default App;
