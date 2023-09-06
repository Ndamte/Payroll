function processPayroll() {
  var payrollTable = document.getElementById("payrollTable").getElementsByTagName("tbody")[0];
  payrollTable.innerHTML = ""; // Clear the table body

  var totalPay = 0;
  var index = 1;
  var hoursWorked = parseInt(prompt("Enter the number of hours worked (enter -1 to finish):"));

  while (hoursWorked >= 0) {
    var pay = calculatePay(hoursWorked);
    totalPay += pay;

    var row = payrollTable.insertRow();
    var indexCell = row.insertCell(0);
    var hoursCell = row.insertCell(1);
    var payCell = row.insertCell(2);

    indexCell.textContent = index;
    hoursCell.textContent = hoursWorked;
    payCell.textContent = "$" + pay.toFixed(2);

    index++;
    hoursWorked = parseInt(prompt("Enter the number of hours worked (enter -1 to finish):"));
  }

  document.getElementById("totalPay").textContent = "Total Weekly Pay: $" + totalPay.toFixed(2);
}

function calculatePay(hours) {
  var hourlyRate = 15;
  var overtimeRate = hourlyRate * 1.5;
  var regularHours = Math.min(hours, 40);
  var overtimeHours = Math.max(hours - 40, 0);

  var regularPay = regularHours * hourlyRate;
  var overtimePay = overtimeHours * overtimeRate;

  return regularPay + overtimePay;
}