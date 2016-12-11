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

// MODAL

var modal = document.getElementById("modal")
var pictures = document.getElementsByClassName("miniature")
var modalPicture = document.getElementById("modal-picture")
var modalTitle = document.getElementById("modal-title")
var cross = document.getElementById("cross")
var photographes = document.getElementsByClassName("photographe")

var printModal = function(event){
	//Affichage de la modale
	modal.style.display = "block"

	//Affichage du titre
	var newPicSrc = event.srcElement.currentSrc
	var picUrl = newPicSrc.split('.JPG')
	var picName = picUrl[0].split('/')
	picName = picName[picName.length - 1].replace('_', '&#8239;')
	modalTitle.innerHTML = picName
	picUrl = picUrl[0] + '-large'

	//Affichage de la bonne image dans la modale
	modalPicture.style.backgroundImage = "url(" + picUrl + '.JPG' + ")"

  //supprime le titre
  for (photographe of photographes){
    photographe.style.display = "none"
  }
  var content = document.getElementById("menu")
  content.style.marginTop = "222px"
}

//Code

//Recuperation de toutes les photos de la gallerie et ajout d'un fonction
//lorsqu'on clique dessus

for (picture of pictures){
	picture.addEventListener("click", printModal)
}

cross.addEventListener("click", function(){
	//On enleve l'affichage de la modale
	modal.style.display = "none"
  for (photographe of photographes){
    photographe.style.display = ""
  }
  var content = document.getElementById("menu")
  content.style.marginTop = ""
})
