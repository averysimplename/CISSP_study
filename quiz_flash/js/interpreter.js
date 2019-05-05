var i = -1;  // current questions
var answered = false;

shuffle(questions);

// Shuffles array
function shuffle(o){
    for(var j, x, i = o.length; i > 0; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){};
        return o;
}

function submitAnswer() {
    if (answered)
        loadNextQuestion();
    else {
        $('#answer').html(questions[i].answer);
        answered = true;
    }
}

function loadNextQuestion() {
    $('#answer').html("");
    answered = false;
    valid = false;
    while (!valid) {
        i += 1;
        if (i+1 >= questions.length) {
            finished();
            return;
        }
        valid = false;
        if ($("label:contains(" + questions[i].chapter + ")").first().find(':checkbox').is(':checked')) {
            valid = true; }
    }
    $('#question').html(questions[i].question);
    $('#chapter').html(questions[i].chapter);
}

function finished() {
    $('.hero-unit').html('<a href="" class="btn btn-primary btn-large">AGAIN!</a>');
    $('.hero-unit').prepend("no more :(<br /><br />");
    i = -1;
}


 $(document).ready(function() {
    loadNextQuestion();
 });
