let overgrade = document.getElementById('overgrade')
let dist = document.getElementById('dist')
let high = document.getElementById('high')
let low = document.getElementById('low')

document.addEventListener('DOMContentLoaded', ()=>{
fetch('http://localhost:3000/students')
.then(res =>res.json())
.then(array=>{
    display(array)
    mean(array)
    median(array)
    stdev(array)
    rangeValue(array)
    overal(array)
    comment()

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

       but.addEventListener("click", () => {
        overgrade.textContent = `Name: ${stud.name}`;
        dist.textContent = `Gender: ${stud.gender}`;
        high.textContent = `Age: ${stud.age}`;
        low.textContent = `Score: ${stud.score}`
       })
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
    
       meanVal.innerHTML = `The mean score for the class is ${avScore.toFixed(4)}`
       
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
    let marks = []
    for(let mark of array){
        marks.push(mark.score)
        console.log(marks)
        console.log(marks.length)
    }
    let average = marks.reduce((accum, initval)=>{
        return accum + initval
    }, 0) / marks.length;
    
    marks = marks.map((elem)=>{
        return (elem - average) ** 2
    })
    
    let total = marks.reduce((accum, initval)=> accum + initval, 0);
    let stdval = Math.sqrt(total/marks.length)
    console.log(stdval)
    
    let stdnbuton = document.getElementById('stdnbuton')
    stdnbuton.addEventListener('click', ()=>{
        let stdvalOutput = document.getElementById('stdev')
        stdvalOutput.innerHTML = `The standard deviation of the class mean score is ${stdval.toFixed(4)}`
    })
    }
    function rangeValue(array){
        let rangeArray = []
        for(let value of array){
            rangeArray.push(value.score)
            console.log(rangeArray)
        }
        let newArray = [...rangeArray]
        newArray.sort(function(a, b){return a-b})
        console.log(newArray)
        range = newArray[newArray.length-1] - newArray[0]
        rangebut = document.getElementById('rangebuton')
        rangebut.addEventListener('click', ()=>{
            const output = document.getElementById('range')
            output.innerHTML = `The range of the test score is ${range}`
        })
    }
    function comment(){
        let comment = document.getElementById('submit');
        comment.addEventListener('click', ()=>{
            document.getElementById('commentArea').innerHTML = `Comment: ${document.getElementById('comment').value}`
            document.getElementById('commentArea').style.backgroundColor = `#95d7f3`;

        })
    }
        function overal(array){
            let marks = []
               for(let mark of array){
                marks.push(mark.score)
            let average = marks.reduce((accum, initval)=>{
                return accum + initval
            }, 0) / marks.length;
            console.log(average)

            let total = marks.reduce((accum, initval)=> accum + initval, 0);
            let stdval = Math.sqrt(total/marks.length)
            console.log(stdval)

            let newArray = [...marks]
            newArray.sort(function(a, b){return a-b})
           let max = newArray[newArray.length-1] 
           let min = newArray[0]

            let btn1 = document.getElementById('overalbuton')
            btn1.addEventListener('click', ()=>{
                if(average>80 && average < 100){
                    overgrade.innerHTML = `Since the average score is ${average.toFixed(4)}, the class has an overal grade of A`
                }
                if(average<80 && average > 70){
                    overgrade.innerHTML = `Since the average score is ${average.toFixed(4)}, the class has an overal grade of B`
                }
                if(average<70 && average > 60){
                    overgrade.innerHTML = `Since the average score is ${average.toFixed(4)}, the class has an overal mean of C`
                }
                if(average<60 && average > 50){
                    overgrade.innerHTML = `Since the average score is ${average.toFixed(4)}, the class has an overal mean of D`
                }
                if(average<50){
                    overgrade.innerHTML = `The class has failed since it has a mean scorescore (${average.toFixed(4)}) less than 50`
                }
                    dist.innerHTML = `The mean ranges within ${average.toFixed(4)} ± ${stdval.toFixed(4)}`
                    high.innerHTML = `The highest student attained a score of ${max}`
                    low.innerHTML = `The lowest student attained a score of ${min}`

            })
        }
      
    }
    
})



                
