const scanButton = document.getElementById("scanButton");
const status = document.getElementById("status");

scanButton.addEventListener("click", () => {
    status.textContent = "Status: Extension is working!";
});