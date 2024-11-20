var score = document.getElementById('cat')
function score(){

    var scoreElement = document.getElementById("score")

    var currentValue = scoreElement.getAttribute("value")
    var newValue = parseInt(currentValue)+1;

    scoreElement.setAttribute("value", newValue.toString());
}