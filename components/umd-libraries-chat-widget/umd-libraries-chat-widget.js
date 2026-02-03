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

const checkInterval = 30000; // 30 seconds

// reload the iframe to show correct chatbox page
function reloadIframe() {
  addRefererToIframe();
}

// add referer to the chat widget iframe
function addRefererToIframe() {
  const iframe = document.getElementById("cw-iframe-window");
  if (!iframe) {
    return;
  }
  const referer = window.location.href;

  try {
    const url = new URL(iframe.src, window.location.href);
    if (url.searchParams.get("referer") !== referer) {
      url.searchParams.set("referer", referer);
      iframe.src = url.toString();
    }
  } catch (e) {
    if (!/[?&]referer=/.test(iframe.src)) {
      iframe.src =
        iframe.src +
        (iframe.src.indexOf("?") === -1 ? "?" : "&") +
        "referer=" +
        encodeURIComponent(referer);
    }
  }
}

// update the chat widget UI
function updateChatWidgetStatus(status) {
  let widget = document.getElementById("chatwidget");
  let widgetStatus = document.getElementById("cw--status");

  if (!widget || !widgetStatus) {
    return;
  }

  if (status === true) {
    widgetStatus.innerText = "live";
    widget.classList.remove("offline");
  } else {
    widgetStatus.innerText = "offline";
    widget.classList.add("offline");
    reloadIframe();
  }
}

// check the service status
function checkServiceStatus() {
  return fetch(serviceURL) // RETURN the promise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const isLive = data.away === false;
      updateChatWidgetStatus(isLive);
    })
    .catch((error) => {
      updateChatWidgetStatus(false);
    });
}

// Initialize on DOM ready
function initChatWidget() {
  // Initial check
  checkServiceStatus().then(() => {
    reloadIframe();
  });

  // Set up recurring check
  const intervalId = setInterval(() => {
    checkServiceStatus();
  }, checkInterval);
}

// Run initialization
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatWidget);
} else {
  initChatWidget();
}
