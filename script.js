let div = document.querySelector("div");
let btn = document.querySelector(".btn");
let finish = false;
btn.onclick = () => {
    finish = !finish;
    if (finish) {
        document.body.style.backgroundColor = "#fff";
        btn.style.backgroundColor = "#17c926";
        div.classList.add("active");
        btn.children[0].style.left = "30px";
    } else {
        btn.style.backgroundColor = "#fff";
        btn.children[0].style.left = "0px";
        div.classList.remove("active");
        document.body.style.backgroundColor = "#161616";
    }
};
