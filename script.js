document.getElementById('check-btn').addEventListener('click', function() {
  const phoneInput = document.getElementById('user-input').value.trim();
  const result = document.getElementById('results-div');
  
  if (!phoneInput) {
      alert("Please provide a phone number");
      return;
  }

  // Regex to validate the phone number
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  
  if (phoneRegex.test(phoneInput)) {
      result.textContent = `Valid US number: ${phoneInput}`;
      result.style.color = "green";
  } else {
      result.textContent = `Invalid US number: ${phoneInput}`;
      result.style.color = "red";
  }
});

document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('user-input').value = '';
  document.getElementById('results-div').textContent = '';
});