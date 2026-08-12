import {discover} from'../data/discover.mjs'
console.log(discover);

const showHere = document.querySelector('#discoverall')

function displayItems(discover){
    discover.forEach(x=>{
        const thecard = document.createElement('div')

        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.image}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)

        const thename = document.createElement('h1')
        thename.innerHTML = x.name
        thecard.appendChild(thename)

        const theaddress =document.createElement('address')
        theaddress.innerHTML = x.location
        thecard.appendChild(theaddress)

        const thedate =document.createElement('date')
        thedate.innerHTML = x.date
        thecard.appendChild(thedate)

        const thedesc = document.createElement('p')
         thedesc.innerHTML = x.description
         thecard.appendChild(thedesc)

         const thecat = document.createElement('h2')
         thecat.innerHTML = x.category
         thecard.appendChild(thecat)
         
        showHere.appendChild(thecard)

    })
}

displayItems(discover)