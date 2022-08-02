randIdx = Math.floor(Math.random() * data.length)
randObj = data[randIdx]

document.getElementById("title").innerHTML = randObj.title
document.getElementById("subtitle").innerHTML = randObj.subtitle
document.getElementById("description").innerHTML = randObj.description