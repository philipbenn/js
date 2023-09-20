const memberUrl = "http://localhost:8080/api/members";

function getAllMembers() {
    fetch(memberUrl)
        .then(res => res.json())
        .then(members => {
            const output = document.getElementById("output");

            output.innerHTML = "";

            members.forEach(member => {
                const p = document.createElement("p");

                p.textContent = `Username: ${member.username}
                                 First name: ${member.firstName}
                                 City: ${member.city}`;
                output.appendChild(p);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

const btnGetMembers = document.getElementById("btn-get-members");
btnGetMembers.addEventListener("click", getAllMembers);

function findMemberById() {
    const memberIdInput = document.getElementById("text-for-id").value;
    const findMemberUrl = `http://localhost:8080/api/members/${memberIdInput}`;

    fetch(findMemberUrl)
    .then(res => res.json())
    .then(member => {
        const singleOutput = document.getElementById("singleOutput");
        const p = document.createElement("p");

        singleOutput.innerHTML = "";

        p.textContent = `Username: ${member.username}
                         Firstname: ${member.firstName}`;
        singleOutput.appendChild(p);
    }).catch(error => {
        console.error("Error fetching data:", error);
    });
}

const btnFindMember = document.getElementById("btn-find-member");
btnFindMember.addEventListener("click", findMemberById);

/* async function getAllMemberss() {
    try {
        const res = await fetch(url);
        const members = res.json();
    
        console.log("data", members);
    
        const output = document.getElementById("output");
        output.innerHTML = "";
    
        members.forEach(member => {
            const p = document.createElement("p");
            p.textContent = `Username: ${member.username}`;
            output.appendChild(p);
        });        
    } catch (error) {
        console.error("Error fetching data:", error);        
    }
} */

function addMember() {
    const memberData = {
      username: document.getElementById("username-input").value,
      password: document.getElementById("password-input").value,
      email: document.getElementById("email-input").value,
      firstName: document.getElementById("firstName-input").value,
      lastName: document.getElementById("lastName-input").value,
      street: document.getElementById("street-input").value,
      city: document.getElementById("city-input").value,
      zip: document.getElementById("zip-input").value
    };
  
    fetch(memberUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(memberData)
    })
      .then(data => {
        const newMemberOutput = document.getElementById("newMemberOutput");
        const p = document.createElement("p");

        newMemberOutput.innerHTML = "";

        p.textContent = `New member has been created!`;
        newMemberOutput.appendChild(p);
      })
      .catch(error => {
        console.error("Error adding member:", error);
      });
  }
  
const btnAddMember = document.getElementById("btn-add-member");
btnAddMember.addEventListener("click", addMember);