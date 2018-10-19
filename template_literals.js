const name = 'Andy';
const age = 30;
const job = 'QA Automation Engineer';
const city = 'Houston';

let html;

//Those aren't quotes, they're backticks which is the tilde key
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
</ul>`;

document.body.innerHTML = html;
//this is how we'll make it print to the page