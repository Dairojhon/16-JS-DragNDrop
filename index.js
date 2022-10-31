const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papeleras = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {        
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {       
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
        //
    })

    seccion.addEventListener("drop", event => {        
        const id_parrafo = event.dataTransfer.getData("id")        
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

papeleras.forEach(papelera => {
    papelera.addEventListener("dragover", event => {
        event.preventDefault()    
    })
    
    papelera.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")        
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove()
    })

})
