const spotlight = document.querySelector("#spotlight-container");

fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        data.slice(0, 3).forEach(member => {
            spotlight.innerHTML += `
                <div class="card">
                    <img src="${member.logo}" alt="${member.name} logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Website</a>
                </div>
            `;
        });
    })

