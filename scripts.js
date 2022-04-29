/* PLANEJAMENTO
1. recriar o html com o DOM
2. Adicionar as funcionalidades dos botões à medida em que eles são criados
3. criar função que faz os botoes piscarem aleatoriamente e armazena essa sequência 
4. Criar função que identifica se a resposta está certa e armazena o resultado
5. Criar função que dá interatividade à div central e mostra seus resultados
*/

const gameData = [
    {
      tagName: "button",
      innerText: "verde",
      className: "button",
      id: "green",
      classList: 'green'
    },
    {
      tagName: "button",
      innerText: "Amarelo",
      className: "button",
      id: "yellow",
      classList: 'yellow'
    },
    {
      tagName: "button",
      innerText: "Vermelho",
      className: "button",
      id: "red",
      classList: 'red'
    },
    {
      tagName: "button",
      innerText: "Azul",
      className: "button",
      id: "blue",
      classList: 'blue'
    },
  ];
  //
  
  
  //
  const main    = document.getElementById('main');
  const section = document.getElementById('box');
  
  let arr    = [];
  let arrCpu = [];
  //
  
  
  //
  function createGame(array) {
    array.forEach(element => {
      const button     = document.createElement('button');
      button.tagName   = element.tagName;
      button.innerText = element.innerText;
      button.className = element.className;
      button.id        = element.id;
      
      button.addEventListener('click', () => {
        arr.push(element.id)
        checkSequence(arr, arrCpu)
        console.log('array do jogador')
        console.log(arr)
        console.log('array da cpu')
        console.log(arrCpu)
  
        button.classList.add(element.classList)
  
        setTimeout(() => {
            button.classList.remove(element.classList)
          }, 400)
        })
  
        section.appendChild(button);
      });
      
      const info = document.createElement('div');
      info.id    = 'info';
      
    section.appendChild(info);
  }
  createGame(gameData);
  //
  
  
  //
  const info     = document.getElementById('info');
  info.className = 'insideText'
  
  const start     = document.createElement('button');
  start.innerText = 'Começar'
  start.id        = 'start'
  info.appendChild(start)
  
  start.addEventListener('click', gameStart)
  //
  
  
  //
  function gameStart() {
    arr                 = []
    arrCpu              = []
    info.removeChild(start)
    
    const display     = document.createElement("div");
    display.className = 'insideText'
    info.appendChild(display)
  
    display.innerText = 'Preparar'
    
    setTimeout(() => {display.innerText = 'Apontar'}, 1000)
    setTimeout(() => {display.innerText = 'Agora!'}, 2000)
    setTimeout(() => {display.innerText = "", randomize()}, 3000)
  
  }
  //
  
  
  //
  function randomize() {
  
      let random = Math.floor(Math.random() * 4 + 1)
      
      switch(random) { 
          case 1:
              arrCpu.push('green');
              break;
          case 2:
              arrCpu.push('yellow');
              break;
          case 3:
              arrCpu.push('red');
              break;
          case 4:
              arrCpu.push('blue');
              break;
      }
  
      let tempo = 500
    arrCpu.forEach((element, index) => {
      
      let currentButton = document.getElementById(element)
  
      setTimeout(() => {
        currentButton.classList.add(element)
  
      }, tempo)
  
      if (element === arrCpu[index+1]) {  
        tempo += 300;
      } else {
        tempo += 400
      }
  
      setTimeout(() => {
        currentButton.classList.remove(element)
      },tempo)
  
      if (element === arrCpu[index+1]) {
        tempo += 300;
      }
    });
  }

  function checkSequence(){
      for(let i = 0; i < arr.length; i++){
          if (arr[i] !== arrCpu[i]){
            start.innerText = 'Tentar novamente'
            info.appendChild(start)
          }else if(arr.toString() === arrCpu.toString() && arr.length === arrCpu.length){
            randomize()
            arr = []
        }
      }
  }
  //
  
  // arrCpu.forEach((item, index) => {
  //   if (item[index].toString() === arr[index].toString()) {
  //     const start = document.getElementById('start')
  
  //     start.innerText = 'Boa!'
  //     setTimeout(() => {start.innerText = 'Vamos de novo'}, 1000)
  //     setTimeout(() => {start.innerText = '', randomize()}, 2000)
  //   } else {
  //     console.log('perdeu')
  //   }
  //   })
