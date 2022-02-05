if ("serviceWorker" in this.navigator) {
  this.addEventListener("load", function() {
    this.navigator.serviceWorker
      .register("/sw.js")      
  })
}