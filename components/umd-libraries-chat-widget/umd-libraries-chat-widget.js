// expand/collapse the chatbox
function expand() {
  let chatwidget = document.getElementById("chatwidget");
  let chevron = document.getElementById("cw--chevron");

  if (chatwidget.classList.contains("closed")) {
    chatwidget.classList.remove("closed");
    chevron.classList.remove("chevron-ver");
  } else {
    chatwidget.classList.add("closed");
    chevron.classList.add("chevron-ver");
  }
}

// connect to dept: library chat
const serviceURL =
  "https://chat-us.libanswers.com/widget_status?iid=450&rules=%5B%7B%22u%22%3A0%2C%22d%22%3A%5B1198%5D%2C%22c%22%3A%22%22%2C%22fallbackSeconds%22%3A0%7D%5D";

const checkInterval = 30000; // 30 seconds in milliseconds

// reload the iframe to show correct chatbox page
function reloadIframe() {
  const iframe = document.getElementById("cw-iframe-window");
  addRefererToIframe();
  iframe.src = iframe.src; // Explicitly reassign the src to reload the iframe
  console.log("iframe reloaded");
}

// add referer to the chat widget iframe
function addRefererToIframe() {
  const iframe = document.getElementById("cw-iframe-window");
  const referer = window.location.href; // Get the current page URL

  iframe.src = iframe.src + "?referer=" + encodeURIComponent(referer);
}

// update the chat widget UI
function updateChatWidgetStatus(status) {
  let widget = document.getElementById("chatwidget");
  let widgetStatus = document.getElementById("cw--status");

  if (status === true) {
    widgetStatus.innerText = "live";
    widget.classList.remove("offline");
    // console.log("chat widget is live");
  } else {
    widgetStatus.innerText = "offline";
    widget.classList.add("offline");
    // console.log("chat widget is offline");

    // reload the iframe to show correct chat widget page, only reload if the chat widget is offline to prevent disconnecting the user during a chat session
    reloadIframe();
  }
}

// check the service status
function checkServiceStatus() {
  fetch(serviceURL)
    //   check the server status and get the service status
    .then((response) => {
      if (response.status === 200) {
        // console.log("server is live");
        // console.log(response);
        let data = response.json();
        // console.log(data);
        return data;
      } else {
        // console.log("server is down");
      }
    })
    // update the chat widget based on the service status
    .then((data) => {
      const awayValue = data.away;
      if (typeof awayValue !== "undefined") {
        // console.log("chat widget is live");
        updateChatWidgetStatus(true);
      } else {
        // console.log("chat widget is offline");
        updateChatWidgetStatus(false);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// initial check
checkServiceStatus();
// onely reload the iframe once on initial load, it should not be reloaded again if the chat widget is live to prevent disconnecting the user during a chat session
reloadIframe();

// set up a recurring check
setInterval(checkServiceStatus, checkInterval);
