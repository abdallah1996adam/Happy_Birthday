

const text = document.querySelector('.text');
const textWish = document.querySelector('.wish');
const textFooter = document.getElementById('text_H4');
const words = textFooter.getElementsByTagName('span')

let i = 0;

function rotator(){
    words[i].style.display = "none";
    i = (i + 1) % words.length;
    words[i].style.display = 'initial';
}
setInterval(rotator, 800);

let text2 = `I'm Sorry for all the sadness that I have caused for you,I know you still angry with me, due to that bad joke, I really understand why you were so mad. 
you were afraid for your dad and your family, you love them and care about them, you don't want to lose them, So let me replace all of that by
wishing you A happy birthday and many years of happiness. #It'sYourBirthday. :)`

let idx = 1;
let speed = 350 / 2
function writeText(){
   
    textWish.innerText = text2.slice(0,idx);
    idx++;
    if(idx > text2.length){
        idx = 1
    }
    setTimeout(()=>{
        writeText();
    }, speed)
    
}
writeText();


ScrollOut({
    targets: '.wish', 
})





text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")


anime.timeline({
    loop: true
})
.add({
    targets: '.text span',
    translateY: [-600, 0], //[start value, end value]
    scale :[10,1 ],  //[start value, end value]
    opacity: [0, 1],  //[start value, end value]
    easing : "easeOutExpo",
    duration : 1500, //1.5seconds
    delay : anime.stagger(100),

})
.add({
    targets: '.text span',
    translateX: [0, -1000], //[start value, end value]
    scale :[1,1 ],  //[start value, end value]
    opacity: [1, 0],  //[start value, end value]
    easing : "easeOutExpo",
    duration : 2000, //1.5seconds
    delay : anime.stagger(100),

})
.add({
    targets: '.text span',
    translateX: [1000, 0], //[start value, end value]
    scale :[1,1 ],  //[start value, end value]
    opacity: [0, 1],  //[start value, end value]
    easing : "easeOutExpo",
    duration : 2000, //2seconds
    delay : anime.stagger(100),

})
.add({
    targets: '.text span',
    translateX: [0, 0], //[start value, end value]
    scale :[1,50 ],  //[start value, end value]
    opacity: [1, 0],  //[start value, end value]
    easing : "easeOutExpo",
    duration : 2000, //2seconds
    delay : anime.stagger(100),

})