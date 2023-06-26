let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number = [Math.floor(Math.random() * 100)]
btn.addEventListener('click', function() {
    let input = document.getElementById('userinput').value;
    if (input == number) {
        output.innerHTML = `You Guessed right, your no was ${number}`

    } else if (input < number) {
        output.innerHTML = "You Guessed too low !";
    };
    if (input > number) {
        output.innerHTML = "You Guessed too high";
    }
});
