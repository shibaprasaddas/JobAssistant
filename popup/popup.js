const scanButton = document.getElementById("scanButton");
const status = document.getElementById("status");

scanButton.addEventListener("click", async () => {

    status.textContent = "Status: Scanning...";

    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.tabs.sendMessage(
        tab.id,
        { action: "scanForm" },
        (response) => {

            if (chrome.runtime.lastError) {
                status.textContent = "Status: Could not connect.";
                console.error(chrome.runtime.lastError);
                return;
            }

            status.textContent = `Status: ${response.status}`;

        }
    );

});