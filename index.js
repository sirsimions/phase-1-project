fetch('http://localhost:3000/students')
.then(res =>{
    if(res.ok){
        return res.json()
    }
    else{
        throw new error('Database loading problem')
    }
} )
.then(array=>{
    display(array)
    mean(array)
})

function display(array){
    //let studentNames = []
    for(let stud of array){
       let li = document.createElement('li')
       let div = document.getElementById('classlist')
       let but = document.createElement('button')
       but.className  = 'btn'
       div.appendChild(but)
       but.appendChild(li)
       li.innerHTML = stud.name
       console.log(li.innerHTML)
       
       //studentNames.push(stud.name)
       //let names = document.getElementById('classlist')
       
    }
}
function mean(array){
    let studentScore = []
    for(let stud of array){
       let div = document.getElementById('classlist')
       let but = document.createElement('button')
       but.className  = 'btn'
       div.appendChild(but)
       but.appendChild(li)
       li.innerHTML = stud.name
       console.log(li.innerHTML)
       
       //studentNames.push(stud.name)
       //let names = document.getElementById('classlist')
       
    }
}