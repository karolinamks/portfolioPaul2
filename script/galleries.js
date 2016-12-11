var icon = document.getElementsByClassName("icon")[0]
var plus = true
var contentText = document.getElementsByClassName("content-text")

icon.addEventListener("click", function(element){
  var image = plus ? './assets/icons/dot.png' : "./assets/icons/plus.png"
  for (content of contentText){
    if (!plus)
      content.classList.add("invisible")
    else
      content.classList.remove("invisible")
  }
  plus = !plus
  element.srcElement.src = image
})
