

const params = new URLSearchParams(window.location.search);


document.querySelector("#results").innerHTML = `

<p><strong>Name:</strong>
${params.get("FirstName")} ${params.get("LastName")}
</p>


<p><strong>Email:</strong>
${params.get("email")}
</p>


<p><strong>Message: </strong>
${params.get("description")}</p>


`;

