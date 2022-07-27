## O que é REACT
#### É uma biblioteca JS para criaçao de interfaces. Uma Lib; 
#### Utilizado para construir SPAs (Single Page Application); 
#### Baseado em componentes; 
#### Utiliza o JSX para renderizar HTML (java script e js escritos em js);
#### Aplica o Virtual DOM para realizar as alterações do DOM; 
#### Podemos adicionar a um projeto ou criar um projeto com ele;

## Como instalar o React? 

#### Para instalar o React vamos utilizar uma ferramenta chamada Create React App; 
#### Para utilizar precisamos do Node e npm (yarn);

## JSX

#### O JSX é como um HTML, porém dentro do código JavaScript;
#### É a principal maneira de escrever HTML com o React;
#### Podemos interporlar variáveis, inserindo ela entre {};
#### É possivel também executar funções em JSX;
#### Inserir valores em atributos de tags também é valido em JSX;
#### Todos os elementos em JSX devem entar dentro de uma div pai. Não nessessáriamente um Div mais deve haver um elemento pai

### class é uma palavra reservada do React então ao declarar o atributo class devemos declarar como className

## Componentes

#### Permite dividir a aplicação em partes;
#### Os componentes renderizam JSX, assim como App.js ( que é um componente)
##### Ele é o principal, a ideia é que ele tenha menos código
#### Precisamos criar um arquivo de componente e importa-lo onde precisamos utilizar;
##### logo todo componente terá a função export como o App.js para podermos uriliza-lo em outras partes do código
#### Normalmente ficam em uma pasta chamada components;
#### Componentes podem ser importados dentro de outros componentes que não sejam necessáriamente o APP.js

## Props

#### As props são valores passados para componentes;
#### Podemos deixá-los dinâmicos
#### Ou seja, mudando a execução por causa do valor da prop;
#### O valor é passado como um atributo na chamada do componente;
#### E precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente;
#### As props são somente de leituira!



