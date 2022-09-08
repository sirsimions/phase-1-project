document.addEventListener('DOMContentLoaded', ()=>{
    
let LastUpdate = document.getElementById('overgrade')
let state = document.getElementById('state')
let death = document.getElementById('dist')
let recoveries = document.getElementById('high')
let latitude = document.getElementById('low')
let long = document.getElementById('long')

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
        death.textContent = `Number of Deaths: ${stud.Deaths}`;
        recoveries.textContent = `Number of Recoveries: ${stud.Recovered}`;
        latitude.textContent = `Latitude: ${stud.Latitude}`
        long.textContent = `Longitude: ${stud.Longitude}`
       })
    }
}

    function mean(array){
       
        let numDeath = []
        let numConfirmed = []
        let numRecovered = []
        let totalDeath = 0;
        let totalConfirmed = 0;
        let totalRecovered = 0;
        for(let item of array){
        numDeath.push(item.Deaths)
        numConfirmed.push[item.Confirmed]
        numRecovered.push[item.Recovered]
        totalDeath = parseInt(totalDeath) + parseInt(item.Deaths)
        totalConfirmed = parseInt(totalConfirmed) + parseInt(item.Confirmed)
        totalRecovered = parseInt(totalRecovered) + parseInt(item.Recovered)
     }
        let avScore =  totalDeath/numDeath.length
        let confirmed =  totalConfirmed/totalConfirmed.length
        let recovered =  totalRecovered/totalRecovered.length

        let meanbutt = document.getElementById('meanbuton')
        meanbutt.addEventListener('click', ()=>{
         let meanVal = document.getElementById('mean')
         let confirm = document.getElementById('mean1')
         let recover = document.getElementById('mean2')

        meanVal.innerHTML = `Global mean number of deaths: ${avScore.toFixed(4)}`
        confirm.innerHTML = `Global mean number of Confirmed Cases: ${confirmed.toFixed(4)}`
        recover.innerHTML = `Global mean number of recoveries: ${recovered.toFixed(4)}`

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



                
