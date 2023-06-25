var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        img_id = "selfie1"; 
        take_snapshot(); 
        speak_data = "Tirando sua selfie nos próximos 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);
}

setTimeout(function() {
    var img_id = "selfie1";
    var speak_data = "Tirando selfie 1";
  }, 5000);
setTimeout(function() {
    var img_id = "selfie1";
    var speak_data = "Tirando selfie 1";
  }, 10000);
setTimeout(function() {
    var img_id = "selfie1";
    var speak_data = "Tirando selfie 1";
  }, 15000);
 
setTimeout(function() {
    var img_id = "selfie2";
    var speak_data = "Tirando selfie 2";
  }, 5000);
setTimeout(function() {
    var img_id = "selfie2";
    var speak_data = "Tirando selfie 2";
  }, 10000);
setTimeout(function() {
    var img_id = "selfie2";
    var speak_data = "Tirando selfie 2";
  }, 15000);
  

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
    if(img_id=="selfie1"){ 
    document.getElementById("result1").innerHTML = '<img id="selfie1" scr"'+data_uri+'"/>';
    }
    if(img_id=="selfie2"){ 
    document.getElementById("result2").innerHTML = '<img id="selfie2" scr"'+data_uri+'"/>';
    }
    if(img_id=="selfie3"){ 
    document.getElementById("result3").innerHTML = '<img id="selfie3" scr"'+data_uri+'"/>';
    }
}

