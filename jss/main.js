

var arrayQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Always forgive your enemies; nothing annoys them so much.'},
    
     {'author': 'Mahatma Gandhi', 
     'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever'
    },

    {'author': 'Friedrich Nietzsche', 
     'quote': 'Without music, life would be a mistake'},

    {'author': 'Oscar Wilde', 
     'quote': 'I am so clever that sometimes I don\'t understand a single word of what I am saying.'},

    {'author': 'Stephen Chbosky', 
     'quote': 'We accept the love we think we deserve.'},

    {'author': 'Martin Luther King', 
     'quote': 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'},

];


function quoteGenerator(){
  var random = Math.floor(Math.random()*arrayQuotes.length + 1);

document.getElementById('outPutQuote').innerHTML=`"${arrayQuotes[random].quote}\"`;
document.getElementById('outPutAuthor').innerHTML=`${arrayQuotes[random].author}` ;

  
}
