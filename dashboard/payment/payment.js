document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from form
    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    // Basic Validation
    if (!name || !cardNumber || !expiryDate || !cvv || !amount) {
        displayMessage("Please fill in all fields", "red");
        return;
    }

    if (cardNumber.length !== 16) {
        displayMessage("Card number must be 16 digits", "red");
        return;
    }

    if (cvv.length !== 3 || (/^{0-9}[3]$/).test(cvv.value)) {
        displayMessage("CVV must be 3 digits", "red");
        return;
    }

    // Simulate successful payment processing
    displayMessage(`Payment of $${amount} successful!`, "green");
    window.location.href = "../dashboard.html";
});

function displayMessage(message, color) {
    const paymentMessage = document.getElementById('paymentMessage');
    paymentMessage.textContent = message;
    paymentMessage.style.color = color;
}

document.querySelector("#back").addEventListener('click',()=>{
    var confirmation = confirm("Are you sure you want to cancel the payment ?");
    if (confirmation){
        window.location.href = "../dashboard.html";
    }
})