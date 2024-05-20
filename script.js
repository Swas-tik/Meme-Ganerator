const generateBtn = document.querySelector('.generate-btn');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const authorOutput = document.querySelector('#author span');

function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=> res.json())
    .then((data)=> {
        
        const {author, url, title}= data
        memeText.innerText = title;
        memeImg.src= url;
        authorOutput.innerText= `Meme by: ${author}`
    })
}
getMeme()


generateBtn.addEventListener('click', ()=>{
   getMeme()
})