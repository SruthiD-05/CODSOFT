function searchJobs(){

let input = document.getElementById("search").value.toLowerCase();
let jobs = document.getElementsByClassName("job");

for(let i=0;i<jobs.length;i++){

let text = jobs[i].innerText.toLowerCase();

if(text.includes(input)){
jobs[i].style.display="block";
}
else{
jobs[i].style.display="none";
}

}

}

function addJob(){

let title = document.getElementById("jobTitle").value;
let company = document.getElementById("companyName").value;
let location = document.getElementById("location").value;

if(title === "" || company === "" || location === ""){
alert("Please fill all fields");
return;
}

let jobList = document.getElementById("jobList");

let job = document.createElement("div");
job.className = "job";

job.innerHTML =
"<h3>"+title+"</h3>" +
"<p>Company: "+company+"</p>" +
"<p>Location: "+location+"</p>" +
"<button>Apply</button>";

jobList.appendChild(job);

document.getElementById("jobTitle").value="";
document.getElementById("companyName").value="";
document.getElementById("location").value="";

}