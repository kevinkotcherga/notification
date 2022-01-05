let btn = document.getElementById("btn");
let container = document.getElementById("container");

btn.addEventListener("click", () => {
    creatNotification();
});

function creatNotification() {
    let notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "Je suis une notification !";

    container.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 3000);
}
