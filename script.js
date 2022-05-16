


let buttonCreer = document.getElementById("buttonCreer")
const buttonReini = document.getElementById("buttonReini")
let selectField = document.getElementById("selectField")
let selectText = document.getElementById("selectText")
let options = document.getElementsByClassName("options")
let list = document.getElementById("list")
let iconArrow = document.getElementById("iconArrow")
let image_input = document.getElementById("image")
let uploaded_image = ""

let image = document.getElementById("displayImage")

let lien = ""

let source = ""


let chargerImage = function (event) {
    image.src = URL.createObjectURL(event.target.files[0])
    // image.style.display = "block"
    image.style.position = "relative"
    image.style.top = "20px"
    image.style.right = "-100px"
    lien = URL.createObjectURL(event.target.files[0])

}





selectField.onclick = function () {
    list.classList.toggle("hide")
    iconArrow.classList.toggle("rotate")
}
for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent
        list.classList.toggle("hide")
        iconArrow.classList.toggle("rotate")

    }
}
buttonCreer.addEventListener("click", function (event) {
    event.preventDefault()
    source = image_input.value
    let divDisplay = document.createElement("div")
    divDisplay.classList.add("contacts")

    divDisplay.id = Math.floor(Math.random() * 1000)

    let grid2 = document.getElementById("grid2")
    grid2.appendChild(divDisplay)

    let prenom = document.getElementById("prenom").value
    let nom = document.getElementById("nom").value
    let bio = document.getElementById("bio").value
    let selectText = document.getElementById("selectText").textContent
    let deleteItem = document.createElement("img")
    let createImage = document.createElement("img")
    createImage.src = lien
    createImage.classList.add("showImage")

    divDisplay.appendChild(createImage)

    deleteItem.src = "delete.png"
    deleteItem.classList.add("delete")

    divDisplay.appendChild(deleteItem)

    let listPrenom = document.createElement("span")
    listPrenom.classList.add("userData")
    listPrenom.textContent = prenom
    divDisplay.appendChild(listPrenom)

    let listNom = document.createElement("span")
    listNom.classList.add("userData")
    listNom.textContent = nom
    divDisplay.appendChild(listNom)

    let listText = document.createElement("h4")
    listText.textContent = selectText
    divDisplay.appendChild(listText)

    let listBio = document.createElement("p")
    listBio.classList.add("describeBio")
    listBio.textContent = bio
    divDisplay.appendChild(listBio)

    deleteItem.addEventListener("click", function () {
        listPrenom.remove()
        listNom.remove()
        listBio.remove()
        listText.remove()
        createImage.remove()

        deleteItem.style.display = "none"


    })
    let prenoms = document.getElementById("prenom")

    let divCont = document.querySelectorAll('.contacts')



    divDisplay.addEventListener("click", function () {

        let idInput = document.getElementById("identifiant")

        for (let i = 0; i < divCont.length; i++) {

            idInput.value = divCont[i].id
            image.src = divCont[i].childNodes[0].src
            document.getElementById("prenom").value = divCont[i].childNodes[2].textContent
            document.getElementById("nom").value = divCont[i].childNodes[3].textContent
            selectText = divCont[i].childNodes[4]
            document.getElementById("selectText").textContent = selectText.textContent
            document.getElementById("bio").value = divCont[i].childNodes[5].textContent


        }
        prenoms.addEventListener("change", function () {
            for (let i = 0; i < divCont.length; i++) {

                if (idInput.value == divCont[i].id) {
                    divCont[i].childNodes[2].textContent = prenoms.value
                }
            }
        })

        document.getElementById("nom").addEventListener("change", function () {
            for (let i = 0; i < divCont.length; i++) {

                if (idInput.value == divCont[i].id) {
                    divCont[i].childNodes[3].textContent = document.getElementById("nom").value
                }
            }
        })


        for (option of options) {
            option.onclick = function () {
                console.log(selectText.textContent);
                selectText.textContent = this.textContent
                divDisplay.childNodes[4].textContent = selectText.textContent
                list.classList.toggle("hide")
                iconArrow.classList.toggle("rotate")


            }
        }

        document.getElementById("bio").addEventListener("change", function () {
            for (let i = 0; i < divCont.length; i++) {

                if (idInput.value == divCont[i].id) {
                    divCont[i].childNodes[5].textContent = document.getElementById("bio").value
                }
            }
        })

        document.getElementById("image").addEventListener("change", function () {
            for (let i = 0; i < divCont.length; i++) {
                if (idInput.value == divCont[i].id) {
                    divCont[i].childNodes[0].src = image.src
                }
            }
        })
    })







})

//Réinitialiser
buttonReini.addEventListener("click", function (event) {

    document.getElementById("prenom").value = ""
    document.getElementById("nom").value = ""
    document.getElementById("bio").value = ""
    document.getElementById("selectText").textContent = ""
    image.src = ""


})







