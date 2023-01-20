//your code here
let text=document.getElementById('evaluatedText');
let header=document.getElementById('wordCount');
text.addEventListener('keyup',function(){
	let sentence=text.value;

	let count=0;
	for(let i=0;i<sentence.length;i++){
		if(sentence[i]==" "){
			count=count+1;
		}
	}
	count=count+1;
	
	header.innerText=count;
});


