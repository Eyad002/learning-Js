let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let adminsCount = 0;
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") break;
    adminsCount++;
}

document.write(`<div>We Have ${adminsCount} Admins</div>`);
document.write(`<hr>`);
// Loop through admins and assign members
for (let i = 0; i < myAdmins.length; i++){
    if (myAdmins[i] === "Stop") break;
    document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`);
    let membercount = 1;
  
    // Assign employees whose first letter matches the admin’s
    for (let j = 0; j < myEmployees.length; j++){
        if (myEmployees[j][0] !== myAdmins[i][0]) continue;
        document.write(`<p>- ${membercount} ${myEmployees[j]}</p>`);
        membercount++;
    }
  
    document.write(`</div>`);
    document.write(`<hr>`);
}
