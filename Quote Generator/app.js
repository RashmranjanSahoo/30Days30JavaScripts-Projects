const api_url = "https://dummyjson.com/quotes/random";
const quoteid=document.getElementById("quote");
const author=document.getElementById("author");
const button=document.getElementById("newbtn");
async function getquote(url){
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        quoteid.innerHTML=data.quote;
        author.innerHTML=data.author;
    }
    catch(error){
        console.error(error);
    }


}
button.addEventListener("click", () => {
            getquote(api_url);
});

function tweet() {
    const tweetText = `"${quoteid.innerText}" — ${author.innerText}`;

    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText),
        "Tweet Window",
        "width=600,height=300"
    );
}
getquote(api_url);