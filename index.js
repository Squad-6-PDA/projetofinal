var questions = [
  {
    question: "Em que ano foi eleito o primeiro presidente negro nos Estados Unidos?",
    alternatives: [
      { text: "a) 2003", answer: false },
      { text: "b) 1967", answer: false },
      { text: "c) 2008", answer: true },
      { text: "d) 1985", answer: false }
    ]
  },
  {
    question: "Em qual ano acabou a segunda guerra mundial?",
    alternatives: [
      { text: "a) 1945", answer: true },
      { text: "b) 1845", answer: false },
      { text: "c) 1930", answer: false },
      { text: "c) 1989", answer: false }
    ]
  },
  {
    question: "Das alternativas a seguir, quem NÃO foi uma das três cientistas negras da NASA, representadas no filme, Estrelas além do tempo?",
    alternatives: [
      { text: "a) Mary Jackson", answer: false },
      { text: "b) Dorothy Vaughn", answer: false },
      { text: "c) Angela Davis", answer: true },
      { text: "d) Katherine Goble Johnson", answer: false }
    ]
  },
  {
    question: "Como foi chamado o primeiro computador brasileiro?",
    alternatives: [
      { text: "a) Joaquina", answer: false },
      { text: "b) Pelézin", answer: false },
      { text: "c)  Xerox Alto", answer: false },
      { text: "c)  Zezinho", answer: true }
    ]
  },
];

var currentQuestionIndex = 0;
var resultElement = document.getElementById("result");
var questionElement = document.getElementById("question");
var startButton = document.getElementById("startButton");
var submitButton = document.getElementById("submitButton");

function displayQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].question;

  var alternativesHTML = '';
  questions[currentQuestionIndex].alternatives.forEach(function (alternative, index) {
    alternativesHTML += `<input type="radio" name="answer" class="menuDeOpções" value="${index}">${alternative.text}<br>`;
  });

  alternativesHTML += '<br>';
  questionElement.innerHTML += alternativesHTML;

  submitButton.style.display = "block";
  startButton.style.display = "none";
}

function startQuiz() {
  currentQuestionIndex = 0;
  resultElement.textContent = "";
  displayQuestion();
}

function checkAnswer() {
  var selectedAlternativeIndex = document.querySelector('input[name="answer"]:checked');

  if (!selectedAlternativeIndex) {
    // Caso o usuário não tenha selecionado nenhuma alternativa
    resultElement.textContent = "Selecione uma resposta!";
    resultElement.style.color = "red";
    return; // Encerra a função sem avançar para a próxima pergunta
  }

  selectedAlternativeIndex = selectedAlternativeIndex.value;
  var selectedAlternative = questions[currentQuestionIndex].alternatives[selectedAlternativeIndex];

  if (selectedAlternative.answer) {
    resultElement.textContent = "Resposta correta!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Resposta incorreta! Fim do Quiz.";
    resultElement.style.color = "red";
    questionElement.innerHTML = '<button onclick="startQuiz()">Reiniciar Quiz</button>';
    submitButton.style.display = "none";
    startButton.style.display = "block";
    return; // Encerra o quiz após uma resposta incorreta
  }

  setTimeout(function () {
    resultElement.textContent = "";
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
      questionElement.textContent = "Fim do Quiz!";
      questionElement.innerHTML += '<br><button onclick="startQuiz()">Reiniciar Quiz</button>';
      submitButton.style.display = "none";
      startButton.style.display = "block";
    }
  }, 1000);
}
currentQuestionIndex++; 
const buttonStart = document.getElementById("startButton") 
buttonStart.addEventListener("click", startQuiz)

const buttoncheckAnswer = document.getElementById("submitButton") 
buttoncheckAnswer.addEventListener("click", checkAnswer)