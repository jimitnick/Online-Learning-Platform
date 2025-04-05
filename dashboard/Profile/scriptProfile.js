document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("CurrentLoggedInUser"));
    const rePhone = /^[0-9]{10}$/;

    if (currentUser) {
        document.querySelectorAll(".Username").forEach(elem => {
            elem.textContent = currentUser.name;
        });
        document.querySelectorAll(".Email").forEach(elem => {
            elem.textContent = currentUser.email;
        });
    }

    let userList = JSON.parse(localStorage.getItem("UserDetails")) || [];
    let matchedUser = userList.find(user =>
        user.username === currentUser.username && user.passwd === currentUser.passwd
    );

    if (matchedUser) {
        document.querySelector("#phone").textContent = matchedUser.phone || "Not set";
        document.querySelector("#location").textContent = matchedUser.location || "Not set";
        document.querySelector("#bio").textContent = matchedUser.bio || "Not set";
    }

    document.querySelector("#edit-profile").addEventListener('click', () => {
        if (!matchedUser) return;

        // Prefill modal fields
        document.getElementById("modalPhone").value = matchedUser.phone || "";
        document.getElementById("modalLocation").value = matchedUser.location || "";
        document.getElementById("modalBio").value = matchedUser.bio || "";

        // Show modal
        document.getElementById("editModal").style.display = "block";
    });

    document.querySelector("#cancelChanges").addEventListener('click', () => {
        document.getElementById("editModal").style.display = "none";
    });

    document.querySelector("#saveChanges").addEventListener('click', () => {
        const newPhone = document.getElementById("modalPhone").value.trim();
        const newLocation = document.getElementById("modalLocation").value.trim();
        const newBio = document.getElementById("modalBio").value.trim();

        if (!rePhone.test(newPhone)) {
            alert("Phone number is invalid. It must be 10 digits.");
            return;
        }

        // Update UI
        document.querySelector("#phone").textContent = newPhone;
        document.querySelector("#location").textContent = newLocation;
        document.querySelector("#bio").textContent = newBio;

        // Update in localStorage
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].username === currentUser.username && userList[i].passwd === currentUser.passwd) {
                userList[i].phone = newPhone;
                userList[i].location = newLocation;
                userList[i].bio = newBio;
                break;
            }
        }

        localStorage.setItem("UserDetails", JSON.stringify(userList));
        document.getElementById("editModal").style.display = "none";
    });
});
