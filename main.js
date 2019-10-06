
var myText = 'What an amazing Trick thought !',
    i = 0,
    myButton = document.getElementById('myButton');



    myButton.onclick = function () {

        var typeWriter = setInterval(function() {
            document.getElementById('type').textContent += myText[i];

            i = i + 1;

            if(i > myText.length - 1) {
                clearInterval(typeWriter);
            }
        }, 100);
    };