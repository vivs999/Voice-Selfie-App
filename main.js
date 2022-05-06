var SpeechRecognition = window.webkitSpeechRecognition;

var recognise = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognise.start();
}

recognise.onresult = function run(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content == "take my selfie"){
    speak_selfie();
}
else{
    speak();
}
}


function speak(){
    var synth = window.speechSynthesis;

    speek_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speek_data);
    
    synth.speak(utterThis);

}

function speak_selfie(){
    var synth = window.speechSynthesis;

    speek_data = "taking selfie in 5 seconds"

    var utterThis = new SpeechSynthesisUtterance(speek_data);
    
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        var mutterThis = new SpeechSynthesisUtterance("saving image");
    synth.speak(mutterThis);
    setTimeout(function(){
        save();
    },1500);
    },5000);
    

}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie_image").src= data_uri;
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}