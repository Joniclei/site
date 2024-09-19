const imgOlhinho = document.querySelector('#idMostraSenha');
const btnOlhinho = document.querySelector('#idBtnMostraSenha');
const inputSenha = document.querySelector('#idSenha');
const esqSenha = document.querySelector('#idEsqSenha');
const conta = document.querySelector('#idConta');

esqSenha.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Esqueceu a senha?');
});
conta.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Criar conta');
});

btnOlhinho.addEventListener('click', (e) => {
  e.preventDefault();
  const tipo = inputSenha.getAttribute('type');
  if (tipo === 'password') {
    inputSenha.setAttribute('type', 'text');
    imgOlhinho.src = '/assets/img/olhoaberto.svg';
  } else{
    inputSenha.setAttribute('type', 'password');
    imgOlhinho.src = '/assets/img/olhofechado.svg';
  }
});

class validaForm {
  constructor() {
    this.form = document.querySelector('#idFormulario');
    this.eventos();
  }
  eventos(){
    this.form.addEventListener('submit',e => {
      this.handleSubmit(e);
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.validaCampos();
    if(camposValidos){
      alert('Deu certo,bem vindo a sua conta!');
    }

  };

  validaCampos() {
    let valida = true;
    let email = this.form.querySelector('#idEmail');
    let senha = this.form.querySelector('#idSenha');
    let divSenha = this.form.querySelector('#idDivSenha');
    let idF = this.form.querySelector('#idF');

    for (let erros of this.form.querySelectorAll('.erroText')){
      erros.remove();
    }

      if (!email.value){
        this.criaErro(email, `Campo email não pode estar em branco`);
        valida = false;
      }
      if (!senha.value){
        this.criaErro(divSenha, `Campo senha não pode estar em branco`);
        valida = false;
      }
      if (senha.value != 'admin' && email.value != 'admin@admin.com'){
        this.criaErro(idF, `Login ou senha inválidos  S e E`);
      }else if (email.value != 'admin@admin.com'){
        this.criaErro(idF, `Login ou senha inválidos  E`);
      }else if (senha.value != 'admin'){
        this.criaErro(idF, `Login ou senha inválidos  S`);
      }


    return valida;
  }

  criaErro(input, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('erroText');
    input.insertAdjacentElement('afterend', div);
  }

};

const form = new validaForm();
