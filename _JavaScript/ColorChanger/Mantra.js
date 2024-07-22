

const colors= ["red", "blue", "pink", "white"]

for(const c of colors){
    console.log(c)
    createSpan(c)
}


function createSpan(color){
    const spanElement = document.createElement('span')
    spanElement.className = "colorbox"
    spanElement.appendChild(createBox(color))
    document.getElementById("root").appendChild(spanElement)
    
}

function createBox(color){
    const box = document.createElement('div');
    box.style.width = '200px'
    box.style.height = '200px'
    box.style.backgroundColor = color
    
    return box

}


