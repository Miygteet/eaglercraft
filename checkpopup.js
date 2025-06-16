var div = document.getElementById("popuperror")
function checkPopupBlocker() {
  let popup = window.open('', '_blank', 'width=100,height=100');

  if (popup) {
    popup.close();
    return false; // Popups are not blocked
  } else {
    return true; // Popups are blocked
  }
}

if (checkPopupBlocker()) {
  div.style.display = "block"
}/* else {
  alert("Popup blocker is disabled!");
}
