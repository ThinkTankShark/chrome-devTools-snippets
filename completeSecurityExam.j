// completeSecurityExam
// *** Hilarious isn't? Hacking the security training ***

// Video handler to run the handler when video is finished
var video = document.getElementsByTagName('video')[0];

if(typeof video !== 'undefined') {
   video.addEventListener('ended',onVideoCompleteHandler,false); 
}


function playVideo() {
    console.log('Attempting to play automatically...');

    var video = document.getElementsByTagName('video')[0];
    video.playbackRate = 100;
    return video.play();
}
playVideo();


function onVideoCompleteHandler() {
    console.log('The play() Promise fulfilled! Rock on!');
    
    var numberOfQuestions = Number(document.getElementById('questionNumber').innerHTML[2]);
    var form = document.getElementsByTagName('form');
    var inputs = document.getElementsByTagName('input', form);

    var correctInput;
    var inputsLength = inputs.length;

    while(numberOfQuestions > 0) {
        for (var i = 0; i < inputsLength; i++) {
            if(inputs[i].dataset && inputs[i].dataset.correct === 'true') {
                inputs[i].click();
                document.getElementById('quizSubmitButton').click();
                document.getElementById('nextQuestionButton').click();
            }
        }
        numberOfQuestions--;
    }
    

}
onVideoCompleteHandler();
