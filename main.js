Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function snapshot(){
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<image id="captured_image" src = "'+data_uri+'"/> ';
    });
    }
    
    console.log('ml5 version:',ml5.version);
    
    Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XHEz1GMgN/model.json',modelLoaded);
    
    function modelLoaded(){
    console.log("model is loaded");
    }

    function output()
    {
    img = document.getElementById('captured_image');
    Classifier.classify(img, gotresult);
    }

    function gotresult(error, results)
    {
    if (error){
    console.log(error);
    }
    else{
    console.log(results);
    
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}