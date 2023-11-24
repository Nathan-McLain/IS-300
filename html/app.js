// app.js
console.log("app.js is running");

let payments = [];

function recordPayment() {
  const studentName = document.getElementById("studentName").value;
  const paymentAmount = parseFloat(
    document.getElementById("paymentAmount").value
  );

  if (studentName && !isNaN(paymentAmount)) {
    const payment = {
      student: studentName,
      amount: paymentAmount,
      date: new Date().toLocaleDateString(),
    };

    payments.push(payment);
    updatePaymentHistory();

    document.getElementById("studentName").value = "";
    document.getElementById("paymentAmount").value = "";
  } else {
    alert("Please enter a valid student name and payment amount.");
  }
}

function updatePaymentHistory() {
  const paymentHistoryContainer = document.getElementById("paymentHistory");

  paymentHistoryContainer.innerHTML = "";

  payments.forEach((payment) => {
    const paymentItem = document.createElement("div");
    paymentItem.classList.add("payment-item");
    paymentItem.innerHTML = `<span>${
      payment.student
    } paid $${payment.amount.toFixed(2)} on ${payment.date}</span>`;
    paymentHistoryContainer.appendChild(paymentItem);
  });
}

// Call updatePaymentHistory on page load to initialize the payment history
document.addEventListener("DOMContentLoaded", updatePaymentHistory);
