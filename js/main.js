var datevar = new Date();
var i = 1;
var progressBarId = document.getElementById('progress');

updater = this.setInterval(progressBar, 1000);
time = this.setInterval(localClock, 1000);

function localClock() {
    paragrapId = document.getElementById("test").innerHTML;
    var datevar = new Date();
    if (paragrapId != datevar) {
        document.getElementById("test").innerHTML = datevar;
    }
}

function progressBar() {
    if (progressBarId.value <= progressBarId.max) {
        progressBarId.value = i;
        i++
    } else {
        clearInterval(updater);
    }
}
console.log(progressBarId)
console.log(progressBarId.value)