function onClick(belgi) {
    var input = document.getElementById("input");
    input.value += belgi;
}

function result() {
    var input = document.getElementById("input");

    var inputText = input.value;

    var result = eval(inputText);

    input.value = result;
}

function kvadrat() {
    var input = document.getElementById("input");

    var inputText = input.value;

    input.value = inputText * inputText;
}

function C() {
    var input = document.getElementById("input");

    input.value = "";
}

function Del() {
    var input = document.getElementById("input");

    var inputText = input.value;

    input.value = inputText.substring(0, inputText.length - 1);
}