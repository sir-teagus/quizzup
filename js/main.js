let accAcertos = 0;
let accErros = 0;

function myFunction1() {
  const radioResposta = document.getElementsByName("pergunta1");
  const pResultado = document.getElementById("resultado1");
  const botao = document.getElementById("my-btn1");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op1") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction2() {
  const radioResposta = document.getElementsByName("pergunta2");
  const pResultado = document.getElementById("resultado2");
  const botao = document.getElementById("my-btn2");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op1") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction3() {
  const radioResposta = document.getElementsByName("pergunta3");
  const pResultado = document.getElementById("resultado3");
  const botao = document.getElementById("my-btn3");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op2") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction4() {
  const radioResposta = document.getElementsByName("pergunta4");
  const pResultado = document.getElementById("resultado4");
  const botao = document.getElementById("my-btn4");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op3") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction5() {
  const radioResposta = document.getElementsByName("pergunta5");
  const pResultado = document.getElementById("resultado5");
  const botao = document.getElementById("my-btn5");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op2") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction6() {
  const radioResposta = document.getElementsByName("pergunta6");
  const pResultado = document.getElementById("resultado6");
  const botao = document.getElementById("my-btn6");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op1") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction7() {
  const radioResposta = document.getElementsByName("pergunta7");
  const pResultado = document.getElementById("resultado7");
  const botao = document.getElementById("my-btn7");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op2") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction8() {
  const radioResposta = document.getElementsByName("pergunta8");
  const pResultado = document.getElementById("resultado8");
  const botao = document.getElementById("my-btn8");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op3") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction9() {
  const radioResposta = document.getElementsByName("pergunta9");
  const pResultado = document.getElementById("resultado9");
  const botao = document.getElementById("my-btn9");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op2") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}

function myFunction10() {
  const radioResposta = document.getElementsByName("pergunta10");
  const pResultado = document.getElementById("resultado10");
  const botao = document.getElementById("my-btn10");

  for (let i = 0, length = radioResposta.length; i < length; i++) {
    if (radioResposta[i].checked) {
      resposta = radioResposta[i].value;
      if (resposta == "op1") {
        pResultado.innerHTML = "Parabéns! A resposta está correta!";
        pResultado.style = `
        color: #66bb6a;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accAcertos = accAcertos + 1;
        document.getElementById("corretas").innerHTML = accAcertos;
      } else {
        pResultado.innerHTML = "Resposta incorreta. Tente novamente!";
        pResultado.style = `
        color: #ef5350;
        font-size: 1.1rem;
        padding-top: 10px;
        `;
        botao.disabled = true;
        accErros = accErros + 1;
        document.getElementById("erradas").innerHTML = accErros;
      }
    }
  }
}
