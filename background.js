function quitarBarraFeather() {
  document.querySelectorAll('[id*="feather_proxy_banner"]').forEach((e) => e.remove());
  document.documentElement.style.paddingTop = '0';
  document.body.style.paddingTop = '0';
  document.body.style.marginTop = '0';
}

chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: quitarBarraFeather,
  });
});
