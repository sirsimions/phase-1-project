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

    function comment(){
        let comment = document.getElementById('submit');
        comment.addEventListener('click', ()=>{
            document.getElementById('commentArea').innerHTML = `You have given this app ${document.getElementById('comment').value} star rating`
           
        })
    }
       
})



                
