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
    median(array)
    stdev(array)
})

function display(array){
    for(let stud of array){
       let li = document.createElement('li')
       let div = document.getElementById('classlist')
       let but = document.createElement('button')
       but.className  = 'btn'
       div.appendChild(but)
       but.appendChild(li)
       li.innerHTML = stud.name
       console.log(li.innerHTML)
    }
}
function mean(array){
    let studentScore = []
       let totalScore = 0;
       for(let scor of array){
           studentScore.push(scor.score)
           console.log(studentScore)
           
       totalScore = parseInt(totalScore) + parseInt(scor.score)
    }

       console.log(totalScore)
       console.log(studentScore.length)
       let avScore =  totalScore/studentScore.length
       console.log(avScore)

       let meanbutt = document.getElementById('meanbuton')
       meanbutt.addEventListener('click', ()=>{
        let meanVal = document.getElementById('mean')
    
       meanVal.innerHTML = `The mean score for the class is ${avScore}`
       
       })  
}

function median(array){
    let studentMark = []
    for(let item of array){
        studentMark.push(item.score)
        console.log(item.score)
        console.log(studentMark)
        console.log(studentMark.length)
    }
    let sorted = studentMark.sort()
    console.log(sorted)
    if(sorted % 2 ===0){
       let medianVal = (sorted[sorted.length/2 -1] + sorted[sorted.length/2])/2
       console.log(medianVal)
    }
    else{
         medianVal =sorted[Math.floor(sorted.length/2)]
        }
        console.log(medianVal)

        let medianbutt = document.getElementById('medianbuton')
       medianbutt.addEventListener('click', ()=>{
        let medianout = document.getElementById('median')
    
       medianout.innerHTML = `The median value for the class is ${medianVal}`
       
       })  
}
function stdev(array){
    
}

