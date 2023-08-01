var questions = [
    {
      question: "Qual é a capital da França?",
      alternatives: [
        { text: "a) Londres", answer: false },
        { text: "b) Paris", answer: true },
        { text: "c) Berlim", answer: false }
      ]
    },
    {
      question: "Qual é o maior planeta do sistema solar?",
      alternatives: [
        { text: "a) Júpiter", answer: true },
        { text: "b) Marte", answer: false },
        { text: "c) Vênus", answer: false }
      ]
    },
    {
      question: "Quantos continentes existem?",
      alternatives: [
        { text: "a) 5", answer: false },
        { text: "b) 6", answer: false },
        { text: "c) 7", answer: true },
        { text: "d) 8", answer: false }
      ]
    },
    {
      question: "Quem escreveu a peça 'Romeu e Julieta'?",
      alternatives: [
        { text: "a) William Shakespeare", answer: true },
        { text: "b) Charles Dickens", answer: false },
        { text: "c) Jane Austen", answer: false }
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
    questions[currentQuestionIndex].alternatives.forEach(function(alternative, index) {
      alternativesHTML += `<input type="radio" name="answer" value="${index}">${alternative.text}<br>`;
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
  
    selectedAlternativeIndex = selectedAlternativeIndex.value;
  var selectedAlternative = questions[currentQuestionIndex].alternatives[selectedAlternativeIndex];

  if (selectedAlternative.answer) {
    resultElement.textContent = "Resposta correta!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Resposta incorreta! Tente novamente.";
    resultElement.style.color = "red";
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
  
    if (currentQuestionIndex < questions.length) {
      setTimeout(displayQuestion, 1000); 
    } else {
      questionElement.textContent = "Fim do Quiz!";
      questionElement.innerHTML += '<br><button onclick="startQuiz()">Reiniciar Quiz</button>';
      submitButton.style.display = "none";
      startButton.style.display = "block";
    }
  