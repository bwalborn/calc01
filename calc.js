/*
 * Implement all your JavaScript in this file!
 */
"use strict"
var currentOpperation = '';
var previousOpperation = '';
var currentNumber = '';
var previousNumber = '';
var clicks = 0;

$('#equalsButton').click(function (){
    compute();
});

function compute() {
    if ( previousNumber == '' && $('#display').val() == '') return;
    if ( previousNumber == '' && previousOpperation == '') return;
    if ( previousNumber != '' && $('#display').val() == '' && currentNumber == '') {
        $('#display').val(previousNumber);
    }
    else if (previousNumber != '' && currentNumber != '' ) {
        $('#display').val(eval( previousNumber + previousOpperation + currentNumber));
        previousNumber = $('#display').val();
    }
    else {
        previousNumber = $('#display').val();
        $('#display').val(eval(previousNumber + previousOpperation + $('#display').val()));
        currentNumber = $('#display').val();
    }
};

function ChooseOpperation () {
    previousOpperation = currentOpperation;
    currentOpperation = '';
    compute();
};

function SwitchNumber () {
    // currentNumber = $('#display').val();
    currentNumber = eval(previousNumber + previousOpperation + $('#display').val());
    previousNumber = currentNumber;
    currentNumber = '';
    $('#display').val('');
};

$('.nonNumButton').click(function() {
    if ($('#display').val() == '') return;
    currentOpperation = '';
    currentOpperation = $(this).val();
    SwitchNumber();
    ChooseOpperation();
    clicks = 0;
});


$('.numbutton').click(function() {
    if (previousNumber != '' && previousOpperation != '') {
        if (clicks == 0) {
            $('#display').val('');
            clicks++;
        }
    }
    $('#display').val($('#display').val() + $(this).val());
    currentNumber = $('#display').val();
});

$('#clearButton').click(function() {
    $('#display').val('');
    previousOpperation = '';
    currentOpperation = '';
    currentNumber = '';
    previousNumber = '';
    clicks = 0;
});

// ???????
// $('.deleteBotton').click(function() {
//     $('#display').val($('#display').val().slice(0,-1));
// });

// **Things that need to be added : Period-button, +/-button, delete-button ?? (Add checks for all)****