// Note that we don’t need to use jQuery to check if the document has loaded. 
// By default, Chrome injects content scripts after the DOM is complete.

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);