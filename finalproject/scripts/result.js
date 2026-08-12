

const params = new URLSearchParams(window.location.search);


document.querySelector("#results").innerHTML = `

<p><strong>Name:</strong>
${params.get("FirstName")} ${params.get("LastName")}
</p>


<p><strong>Email:</strong>
${params.get("email")}
</p>


<p><strong>Phone:</strong>
${params.get("phone")}
</p>

<p><strong>Organization Name: </strong>
${params.get("organizationTitle")}
</p>


<p><strong>Event :</strong>
${params.get("Event")}
</p>

<p><strong>Event Category: </strong>
${params.get("event-category")}</p>


<p><strong>Date Submitted:</strong>
${params.get("timestamp")}
</p>

`;

