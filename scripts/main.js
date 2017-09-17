var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bald_eagle.jpg') {
      myImage.setAttribute ('src','images/gorilla.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
