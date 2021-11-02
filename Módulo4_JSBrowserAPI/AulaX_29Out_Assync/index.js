
// Promise é o intermediador de um pedido
// Ele leva uma info e traz uma resposta

// assync await faz a simulação de multi-thread
// ele simula a possibilidade executar coisas paralelamente
// await promise é esperar parar receber algo, o pedido para o request

// event loop é uma fila de chamadas
// é assim que funciona o multi-thread

const alert = document.querySelector("#alert");
const tabelaUsuarios = document.querySelector("#tabela-usuarios");
const botaoCarregar = document.querySelector("#botao-carregar");

botaoCarregar.addEventListener('click', () => carregarDadosClickBotao())


const DADOS_USUARIOS = [
  { id: 1, name: "Amanda", email: "amanda@lovemail.com", company: { name: 'Lets Code'}},
  { id: 2, name: "Igor", email: "igor@bol.com", company: { name: 'Santander'}},
  { id: 3, name: "Mar cos", email: "marcos1234@outlook.com", company: { name: 'Microsoft'}},
  { id: 4, name: "Lucas", email: "lucasflores@hotmail.com", company: { name: 'Google'}},
];


const buscarUsuariosNoBancoDeDados = () => {
  return new Promise((resolve,reject) => {
    setTimeout (() => {
      if(!DADOS_USUARIOS){
        reject('Não existem usuários para serem exibidos');
      }
      resolve(DADOS_USUARIOS);
    }, 1*1000)
  })
}

/* buscarUsuariosNoBancoDeDados()
  .then((resposta) => console.log('Sucesso', resposta))
  .catch((erro) => console.log('Fracasso', erro))

  */
  
  const buscarUsuariosNoBancoDeDadosFetchApi = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resposta => resposta.json())
      .then(resposta => resposta)
      .catch((erro) => erro)
  }

const test = buscarUsuariosNoBancoDeDadosFetchApi()
const carregarDadosClickBotao = () => {
    Promise.all([buscarUsuariosNoBancoDeDados(), buscarUsuariosNoBancoDeDadosFetchApi()])
      .then((values) => {
      console.log(values);
      })
  }

  