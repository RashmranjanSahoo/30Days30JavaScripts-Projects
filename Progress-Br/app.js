function animateSkill(numberId, circleClass, target){

    let number = document.getElementById(numberId);
    let circle = document.querySelector(circleClass);

    let counter = 0;

    let interval = setInterval(() => {

        if(counter >= target){
            clearInterval(interval);
        }
        else{
            counter++;

            number.innerHTML = counter + "%";

            let offset = 440 - (440 * counter) / 100;
            circle.style.strokeDashoffset = offset;
        }

    }, 20);
}

animateSkill("html-number", ".html-circle", 90);
animateSkill("css-number", ".css-circle", 80);
animateSkill("js-number", ".js-circle", 70);