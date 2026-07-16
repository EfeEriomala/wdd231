const url = 'members.json';
const membersContainer = document.querySelector('#members');

async function getMembers() {
    try {
        const response = await fetch(url);
        const members = await response.json();

        displayMembers(members);
    } catch (error) {
        console.error('Error loading member data:', error);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('member-card');
        const name = document.createElement('h3');
        const logo = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('h3');
        const website = document.createElement('a');
        const membership = document.createElement('p');

        name.textContent = member.name;
        
        

        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');

       
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;

        website.textContent = 'Visit Website';
        website.href = member.website;
        website.target = '_blank';

        membership.textContent = `Membership: ${member.membership}`;

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        membersContainer.appendChild(card);
    });
};

getMembers();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
