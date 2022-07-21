import './App.css';
import Print from './images/img1.png'
import exFuncao from './images/img2.png'
import divPai from './images/img3.png'



function App() {
  
  const name = 'Gisele'
  const newName = name.toUpperCase()
  const url ='https://via.placeholder.com/300'

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <h2>Alterando o JSX</h2>
      <h4> Interpolando variáveis</h4>
      <img src={Print} alt=" "/>
      <p>Utilizamos chaves para interpolar variáveis após declara-lás no código.</p>
      <p> Mas se declaramos e não utilizarmos o código repostará erro</p>
      <p>Abaixo vou reproduzir o código da foto</p> 
      <p>Olá, {newName}</p>
      <h4>Podemos tbm realizar expressões com JSX</h4>
      <p> Soma:{5+5}</p>
      <p> Entre chaves, no código eu coloquei 5 + 5 mas, no front apareceu apenas o resultado da operação</p>
      <h2>Utilizando funções</h2>
      <img src = {exFuncao} alt=" "/>
      <h2>Utilizando URL dinamicas</h2>
      <img src={url} alt="Minha Imagem com URL dinamica"/>
      <h2>Todos os elementos em JSX devem entar dentro de uma div pai</h2>
      <img src={divPai} alt=" "/>
      <p>Ao retirar a div pai o código corrompeu</p>
      <h3>*class é uma palavra reservada do React então ao declarar o atributo class devemos declarar como className</h3>
       
           
    </div>
  );
}

export default App;
