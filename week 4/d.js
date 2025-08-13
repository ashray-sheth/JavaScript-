function convertToINR() {
  const usd = document.getElementById('usd').value;
  const exchangeRate = 83.2;

  if (usd.trim() === '') {
    document.getElementById('result').innerText = 'Please enter a valid amount.';
    return;
  }

  const inr = (parseFloat(usd) * exchangeRate).toFixed(2);
  document.getElementById('result').innerText = `$${usd} USD = ₹${inr} INR`;
}
