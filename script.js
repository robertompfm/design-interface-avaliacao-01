// GENERAL FUNCTIONS
function getNumber(numStr) {
  if (numStr.length === 0) {
    return NaN;
  }
  return Number(numStr);
}

function showError(field) {
  field.value = 'Erro!'
}

function clearFields(...fields) {
  fields.forEach(field => field.value = '');
}

function makeFourDecimalsOrLess(num) {
  return parseInt(num * 10000) / 10000;
}


// QUESTION 01
function calcularQ1() {
  const inputNum1 = document.querySelector('#q1-n1');
  const inputNum2 = document.querySelector('#q1-n2');
  const inputNum3 = document.querySelector('#q1-n3');
  const resultInput = document.querySelector('#q1-r');
  const feedback = document.querySelector('#q1-f');
  
  const num1 = getNumber(inputNum1.value);
  const num2 = getNumber(inputNum2.value);
  const num3 = getNumber(inputNum3.value);

  if (isNaN(num1)) {
    feedback.textContent = '"Primeiro número" inválido';
    showError(resultInput);
    return;
  }
  if (isNaN(num2)) {
    feedback.textContent = '"Segundo número" inválido';
    showError(resultInput);
    return;
  }
  if (isNaN(num3)) {
    feedback.textContent = '"Terceiro número" inválido';
    showError(resultInput);
    return;
  }
  
  let result = (num1 + num2 + num3) / 3;
  resultInput.value = makeFourDecimalsOrLess(result);
  feedback.textContent = '';
}



// QUESTION 02
function calcularQ2() {
  const inputEmp = document.querySelector('#q2-emp');
  const inputSal = document.querySelector('#q2-sal');
  const resultInput = document.querySelector('#q2-r');
  const feedback = document.querySelector('#q2-f');
  
  const employee = inputEmp.value;
  const salary = getNumber(inputSal.value);
  
  if (employee.length === 0) {
    feedback.textContent = 'Insira nome do funcionário';
    resultInput.value = '';
    return;
  }
  if (isNaN(salary)) {
    feedback.textContent = '"Salário" inválido';
    showError(resultInput);
    return;
  }
  
  feedback.textContent = `Novo salário de ${employee}:`;
  resultInput.value = (salary * 1.1).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
}



// QUESTION 03
function calcularQ3() {
  const inputA = document.querySelector('#q3-a');
  const inputB = document.querySelector('#q3-b');
  const resultC = document.querySelector('#q3-c');
  const feedback = document.querySelector('#q3-f');
  
  const a = getNumber(inputA.value);
  const b = getNumber(inputB.value);
  
  if (isNaN(a)) {
    feedback.textContent = 'Valor de "A" inválido';
    showError(resultC);
    return;
  }
  if (isNaN(b)) {
    feedback.textContent = 'Valor de "B" inválido';
    showError(resultC);
    return;
  }
  if (a === b) {
    feedback.textContent = `C = A + B =`;
    resultC.value = makeFourDecimalsOrLess(a + b);
  } else {
    feedback.textContent = `C = A * B =`;
    resultC.value = makeFourDecimalsOrLess(a * b);
  }
}



// QUESTION 04
function calcularQ4() {
  const inputPrice = document.querySelector('#q4-p');
  const selectNumberInstallments = document.querySelector('#q4-s');
  const resultInstallment = document.querySelector('#q4-i');
  const resultTotal = document.querySelector('#q4-t');
  const feedback = document.querySelector('#q4-f');
  
  const price = getNumber(inputPrice.value);
  const installments = Number(selectNumberInstallments.value);
  const interest = {1: 1, 3: 1.1, 5: 1.2};

  if (isNaN(price)) {
    feedback.textContent = '"Preço" inválido';
    clearFields(resultTotal, resultInstallment);
    return;
  }

  if (!installments) {
    feedback.textContent = 'Selecione número de parcelas';
    clearFields(resultTotal, resultInstallment);
    return;
  }


  const total = price * interest[installments];
  resultInstallment.value = (total / installments).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
  resultTotal.value = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }); 
  feedback.textContent = '';
}



// QUESTION 05
function calcularQ5() {
  const inputName = document.querySelector('#q5-name');
  const inputGrade1 = document.querySelector('#q5-grade1');
  const inputGrade2 = document.querySelector('#q5-grade2');
  const inputGrade3 = document.querySelector('#q5-grade3');
  const resultMean = document.querySelector('#q5-r');
  const feedback = document.querySelector('#q5-f');
  
  const name = inputName.value;
  const grade1 = getNumber(inputGrade1.value);
  const grade2 = getNumber(inputGrade2.value);
  const grade3 = getNumber(inputGrade3.value);

  if (name.length === 0) {
    feedback.textContent = 'Insira nome do aluno';
    clearFields(resultMean);
    return;
  }
  if (isNaN(grade1) || grade1 < 0 || grade1 > 10) {
    feedback.textContent = '"Nota 01" inválida';
    clearFields(resultMean);
    return;
  }
  if (isNaN(grade2) || grade2 < 0 || grade2 > 10) {
    feedback.textContent = '"Nota 02" inválida';
    clearFields(resultMean);
    return;
  }
  if (isNaN(grade3) || grade3 < 0 || grade3 > 10) {
    feedback.textContent = '"Nota 03" inválida';
    clearFields(resultMean);
    return;
  }

  const mean = (grade1 + grade2 + grade3) / 3;
  const status = mean >= 8 ? 'APROVADO' : 'REPROVADO';

  resultMean.value = makeFourDecimalsOrLess(mean);
  feedback.textContent = `${name} foi ${status}`;
}



// QUESTION 06
function calcularQ6() {
  const inputNum1 = document.querySelector('#q6-n1');
  const inputNum2 = document.querySelector('#q6-n2');
  const selectCode = document.querySelector('#q6-s');
  const resultField = document.querySelector('#q6-r');
  const feedback = document.querySelector('#q6-f');
  
  const num1 = getNumber(inputNum1.value);
  const num2 = getNumber(inputNum2.value);
  const code = Number(selectCode.value);
  
  if (isNaN(num1)) {
    feedback.textContent = '"Número 01" inválido';
    clearFields(resultField);
    return;
  }
  if (isNaN(num2)) {
    feedback.textContent = '"Número 02" inválido';
    clearFields(resultField);
    return;
  }
  switch(code) {
    case 0:
      feedback.textContent = 'Selecione número de parcelas';
      clearFields(resultField);
      return;
    case 1:
      resultField.value = makeFourDecimalsOrLess(num1 + num2);
      break;
    case 2:
      resultField.value = makeFourDecimalsOrLess(num1 * num2);
      break;
    case 3:
      resultField.value = makeFourDecimalsOrLess(num1 / num2);
      break;
  }
  
  feedback.textContent = '';
}



// button elements
const buttonQ1 = document.querySelector('#q1-btn');
const buttonQ2 = document.querySelector('#q2-btn');
const buttonQ3 = document.querySelector('#q3-btn');
const buttonQ4 = document.querySelector('#q4-btn');
const buttonQ5 = document.querySelector('#q5-btn');
const buttonQ6 = document.querySelector('#q6-btn');


// event listeners
buttonQ1.addEventListener('click', calcularQ1);
buttonQ2.addEventListener('click', calcularQ2);
buttonQ3.addEventListener('click', calcularQ3);
buttonQ4.addEventListener('click', calcularQ4);
buttonQ5.addEventListener('click', calcularQ5);
buttonQ6.addEventListener('click', calcularQ6);
