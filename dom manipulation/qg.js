let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes =[{quotes:"Remember that not getting what you want is sometimes a wonderful stroke of luck",
person:'Dalai Lama'},{quotes:"Our lives begin to end the day we become silent about things that matter.",
person:'Martin Luther King, Jr'},{quotes:"The journey of a thousand miles begins with one step.",
person:'Lao Tzu'},{quotes:"It does not matter how slowly you go as long as you do not stop.",
person:'Confucious'},{quotes:"If you look at what you have in life,  you'll always have more . if you loook at what you don't have in life,you'll never have enough",
person:'Oprah Winfrey'},{quotes:"Remember that not getting what you want is sometimes a wonderful stroke of luck",
person:'Dalai Lama'},
];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quotes;
    person.innerText= quotes[random].person;
    });