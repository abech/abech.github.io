var questions = [
    {question: "el bol&iacute;grafo",
     answer: "pen"},
    {question: "la carpeta.",
     answer: "el cuaderno"},
    {question: "notebook",
     answer: "el estudiante"},
     {question: "student (male)",
     answer: "la estudiante"},
     {question: "student (female)",
     answer: "la hoja de papel"},
     {question: "sheet of paper",
     answer: "el l&aacute;piz"},
     {question: "pencil",
     answer: "el libro"},
     {question: "book",
     answer: "el profesor"},
     {question: "teacher (male)",
     answer: "la profesora"},
     {question: "el pupitre",
     answer: "(student) desk"},
     {question: "la sala de clases",
     answer: "classroom"},
];
var index = 0;

function htmlDecode(value){ 
  return $('<div/>').html(value).text(); 
}

$(document).ready(function(){

    // Load by default the first question
    $('#card').html(questions[index]["question"]);

    // When clicked, switch to show the answer.
    $('#card').click(function(){
        card = $('#card')
        text = card.html()
        if (text == htmlDecode(questions[index]["question"])) {
            card.html(questions[index]["answer"]);
            index++;
        }
        else {
            card.html(questions[index]["question"]);
        }
    })
});

