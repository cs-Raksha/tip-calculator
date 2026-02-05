document.getElementById("calculateBtn").addEventListener("click", calculateTip);

function calculateTip() {
    const billInput = document.getElementById("bill").value.trim();
    const tipInput = document.getElementById("tip").value.trim();

    const error = document.getElementById("error");
    const tipAmountDisplay = document.getElementById("tipAmount");
    const totalAmountDisplay = document.getElementById("totalAmount");

    error.textContent = "";

    const bill = parseFloat(billInput);
    const tipPercent = parseFloat(tipInput);

    // Validation
    if (isNaN(bill) || isNaN(tipPercent)) {
        error.textContent = "Please enter valid numbers.";
        return;
    }

    if (bill <= 0 || tipPercent < 0) {
        error.textContent = "Bill must be positive and tip cannot be negative.";
        return;
    }

    // Calculation
    const tipAmount = bill * (tipPercent / 100);
    const totalAmount = bill + tipAmount;

    // Display results
    tipAmountDisplay.textContent = "₹" + tipAmount.toFixed(2);
    totalAmountDisplay.textContent = "₹" + totalAmount.toFixed(2);
}