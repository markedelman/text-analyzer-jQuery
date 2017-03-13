// your code here!

// JS Logic Functions 1,2,3,4

// JS Logic Function 1
// converts input text into an array
function convertText(input) {
    return input.toLowerCase().split(/[^\w']/).filter(Boolean);
}

// JS Logic Function 2
// counts the number of words within the array
function wordCounter() {
    var wordCount = convertText(input).length;
    return wordCount;
}

// JS Logic Function 3
// counts the number of unique words within the array
function uniqueWordCounter(input) {
    function unique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var uniqueWordCount = convertText(input).filter(unique).length;
    return uniqueWordCount;
}

// JS Logic Function 4
// calculates average word length
function averageWordLength(input) {
    var letters = 0;
    for (var i = 0; i < convertText(input).length; i++) {
        letters += convertText(input)[i].length;
    }
    var averageLetters = letters / convertText(input).length;
    return averageLetters;
}


// jQuery DOM Functions 1,2,3,4,5

// jQuery DOM Function 1
// Declares input as value entered into "textarea"
// var userInput = $(".js-text-form").find('#user-text').val();


// jQuery DOM Function 2
// Displays wordCount result into "<dt>Word count</dt><dd></dd>"
// $(".js-wordCount").append(`${convertText(userInput)}`);

// jQuery DOM Function 3
// Displays uniqueWordCount result into
// "<dt>Unique word count</dt><dd></dd>"

// $(".js-uniqueWordCount").append('value');

// jQuery DOM Function 4
// Displays averageWordLength result into
// "<dt>Average word length</dt>
// <dd></dd>"
// $(".js-averageWordLength").append(`{$value}`);

// jQuery DOM Function 5
// Listens for click on "<button type="submit">Analyze it!</button>"
$('.button').click(function() {
    event.preventDefault();
    $('dl').removeClass('hidden');
    var userInput = $(".js-text-form").find('#user-text').val();
    $(".js-wordCount").append(`${convertText(userInput).length}`);
    $(".js-uniqueWordCount").append(`${uniqueWordCounter(userInput)}`);
    $(".js-averageWordLength").append(`${averageWordLength(userInput)}`);
});
