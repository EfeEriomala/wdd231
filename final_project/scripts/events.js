import{events} from '../data/events.mjs'
console.log(events);

const showHere = document.querySelector('#allevents')

function displayItems(events){
    events.forEach(x=>{
        const thecard = document.createElement('div')

        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.image}`
        thephoto.alt = x.title
        thecard.appendChild(thephoto)

        const thetitle = document.createElement('h1')
        thetitle.innerHTML = x.title
        thecard.appendChild(thetitle)

        const theaddress =document.createElement('address')
        theaddress.innerHTML = x.location
        thecard.appendChild(theaddress)

        const thedate =document.createElement('date')
        thedate.innerHTML = x.date
        thecard.appendChild(thedate)

        const thetime =document.createElement('time')
        thetime.innerHTML = x.time
        thecard.appendChild(thetime)

        const thedesc = document.createElement('p')
         thedesc.innerHTML = x.description
         thecard.appendChild(thedesc)

         const thecat = document.createElement('h2')
         thecat.innerHTML = x.category
         thecard.appendChild(thecat)
         
        showHere.appendChild(thecard)

    })
}

displayItems(events)