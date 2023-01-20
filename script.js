//your code here
let text=document.getElementById('evaluatedText');
let header=document.getElementById('wordCount');
text.addEventListener('keyup',function(){
	header.innerText=text.value.length;
});