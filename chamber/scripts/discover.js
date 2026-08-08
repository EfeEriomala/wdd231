import{places} from '../data/places.mjs'
console.log(places);

//.........GRAB A REFERENC TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector('#allplaces')


// //..........LOOP THROUGH THE ARRAY OF JSON ITEMS
// function dispalyItems(places){
//     places.forEach(x =>{
//         //build the card element
//         const thecard = document.createElement('div')

//         //build the photo element
//         const thephont = document.createElement('img')
//         thephoto.src = `images/${x.photo_link}`
//         thephoto.alt = x.name
//         thecard.appendChild(thephoto)

//         //build the title element
//         const thetitle = document.createElement('h2')
//         thetitle.innerHTML = x.name
//         thecard.appendChild(thetitle)

//         //build the address element
//         const theaddress = document.createElement('address')
//         theaddress.innerHTML= x.address
//         thecard.appendChild(theaddress)

//         //build the description element 
//         const desc = document.createElement('p')
//         thedesc.innerHTML = x.description
//         thecard.appendChild(thedesc)

//          showHere.appendChild(thecard)
//     })//end loop
// }//end function

function dispalyItems(places) {
    places.forEach(x => {

        const thecard = document.createElement('div')

        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.photo_url}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)
        
        

        const thetitle = document.createElement('h2')
        thetitle.innerHTML = x.name
        thecard.appendChild(thetitle)

        const theaddress = document.createElement('address')
        theaddress.innerHTML = x.address
        thecard.appendChild(theaddress)

        const thedesc = document.createElement('p')
        thedesc.innerHTML = x.description
        thecard.appendChild(thedesc)

        showHere.appendChild(thecard)

    })
}

///start displaying all the json file
dispalyItems(places)