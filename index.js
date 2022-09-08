document.addEventListener('DOMContentLoaded', ()=>{
let LastUpdate = document.getElementById('overgrade')
let state = document.getElementById('state')
let death = document.getElementById('dist')
let high = document.getElementById('high')
let low = document.getElementById('low')

fetch('https://raw.githubusercontent.com/zmsp/coronavirus-json-api/master/latest.json')
.then(res =>res.json())
.then(array=>{
    display(array)
    mean(array)
    comment(array)
   

})
function display(array){
    for(let stud of array){
       let li = document.createElement('li')
       let div = document.getElementById('classlist')
       let but = document.createElement('button')
       but.className  = 'btn'
       div.appendChild(but)
       but.appendChild(li)
       li.innerHTML = stud['Country/Region']
       console.log(li.innerHTML)

       but.addEventListener("click", () => {
        LastUpdate.textContent = `Last Updated: ${stud['Last Update']}`;
        state.textContent = `Confirmed Cases of Covid: ${stud['Confirmed']}`;
        death.textContent = `Number of deaths: ${stud.Deaths}`;
        state.innerContent = 
        high.src = `Age: ${stud.age}`;
        low.textContent = `Score: ${stud.score}`
       })
    }
}

    function mean(array){
       
        let numDeath = []
        let numConfirmed = []
        let numRecovered = []
        let totalDeath = 0;
        for(let item of array){
         numDeath.push(item.Deaths)
        totalDeath = parseInt(totalDeath) + parseInt(item.Deaths)
     }
        let avScore =  totalDeath/numDeath.length
        console.log(avScore)
 
        let meanbutt = document.getElementById('meanbuton')
        meanbutt.addEventListener('click', ()=>{
         let meanVal = document.getElementById('mean')
        meanVal.innerHTML = `The mean score for the class is ${avScore.toFixed(4)}`


        let medianout = document.getElementById('median')
    
       medianout.innerHTML = `The median value for the class is ${medianVal}`



       let stdvalOutput = document.getElementById('stdev')
        stdvalOutput.innerHTML = `The standard deviation of the class mean score is ${stdval.toFixed(4)}`

        
        })  

    }
    function comment(){
        let comment = document.getElementById('submit');
        comment.addEventListener('click', ()=>{
            document.getElementById('commentArea').innerHTML = `Comment: ${document.getElementById('comment').value}`
            document.getElementById('commentArea').style.backgroundColor = `rgb(0, 174, 255)`;

        })
    }
       
})



                
