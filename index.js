const questions = document.getElementsByClassName("qicon");
const icons = document.getElementsByClassName("plus");

for (let i = 0; i < questions.length; i++) {
    questions[i].onclick = function() {
        this.classList.toggle("active");

        if(icons[i].getAttribute("src") == "./assets/images/icon-plus.svg"){
            icons[i].src = "./assets/images/icon-minus.svg";
        }
        else{
            icons[i].src = "./assets/images/icon-plus.svg";
        }
    };
}
