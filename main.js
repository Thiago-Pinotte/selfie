var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Content;
function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content)
    if (Content=="selfie") {
        speak()
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speakData = "tirando sua selfie em 3 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera)
    setTimeout(function()  {
        imgId = "selfie1";
        takeSelfie();
        speakData = "tirando sua selfie em 3 segundos";
    }, 3000);
    setTimeout(function()  {
        imgId = "selfie2";
        takeSelfie();
        speakData = "tirando sua selfie em 6 segundos";
    }, 6000); 
    setTimeout(function()  {
        imgId = "selfie3";
        takeSelfie();
        speakData = "tirando sua selfie em 9 segundos";
    }, 9000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format:"png",
    png_quality: 90,

})

function takeSelfie() {
    console.log(imgId);
    Webcam.snap(function (data_uri) {
        if (imgId=="selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';   
        }
        if (imgId=="selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';   
        }
        if (imgId=="selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';   
        }
        

    })
}
