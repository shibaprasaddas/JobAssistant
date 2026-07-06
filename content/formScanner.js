chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.action === "scanForm") {

        console.log("Scan request received.");

        sendResponse({
            status: "Connected to webpage ✔"
        });

    }

});