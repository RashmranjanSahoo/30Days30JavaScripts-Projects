console.log("hello");

const scriptURL = 'https://script.google.com/macros/s/AKfycbyC1oDdf6nlpZprCFM81WadC_EYIHqSZpGR90ig94a0wFhfYpGlMWsAaZp_gNxLY8u4IQ/exec'
const form = document.forms['submit-to-google-sheet']
console.log(form)
    const msg=document.getElementById("msg");

	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response => {
                  msg.innerHTML="Thank You for Subscribing!";
                  setTimeout(function(){
                           msg.innerHTML="";
                  },5000)
                  form.reset()
            })
			.catch(error => console.error('Error!', error.message))
	})

    