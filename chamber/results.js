

const params = new URLSearchParams(window.location.search);


document.querySelector("#results").innerHTML = `

<p><strong>Name:</strong>
${params.get("firstName")} ${params.get("lastName")}
</p>


<p><strong>Email:</strong>
${params.get("email")}
</p>


<p><strong>Phone:</strong>
${params.get("phone")}
</p>


<p><strong>Organization:</strong>
${params.get("organization")}
</p>


<p><strong>Date Submitted:</strong>
${params.get("timestamp")}
</p>

`;

