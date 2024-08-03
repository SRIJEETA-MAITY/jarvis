const btn=document.querySelector(".talk")
const content=document.querySelector(".content")

function speak(text){
    const text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.volume=1;
    text_speak.pitch=1;

    window.speechSynthesis.speak(text_speak);

}

function wishme(){
    var day=new Date();
    var hour=day.getHours();

    if (hour>=0 && hour<12){ 
      speak("Good morning... creater")
    }  
    else if (hour>=12 && hour<17){
        speak("Good After Noon ..madam")
    }

    else{
        speak("Good Evening noona")
    }
}

window.addEventListener('load',()=>{
    speak("Initializing rison...")
    wishme()


})

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onresult=(event)=>{
    const currentIndex=event.resultIndex;
    const transcript =event.results[currentIndex][0].transcript;
    content.textContent=transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click',()=>{
    content.textContent='Listening'
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey')||message.includes('hello')){
        speak("Hello mam How can I help you?")}
    if(message.includes("open google")){
        window.open("https://google.com","_blank");
        speak("opening Google")
    }
    if(message.includes("open spotify")){
        window.open("https://open.spotify.com/","_blank");
        speak("opening spotify")
    }
    if(message.includes("open youtube")){
        window.open("https://www.youtube.com/","_blank");
        speak("opening youtube")
    }


}