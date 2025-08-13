function gradeStudent() {
  const marks = document.getElementById('marks').value.trim();
  const result = document.getElementById('result');

  if (marks === '') {
    result.innerText = 'Please enter marks.';
    return;
  }

  const score = parseFloat(marks);
  if (score < 0 || score > 100) {
    result.innerText = 'Marks should be between 0 and 100.';
    return;
  }

  let grade = '';

  if (score >= 90) {
    grade = 'A+';
  } else if (score >= 80) {
    grade = 'A';
  } else if (score >= 70) {
    grade = 'B';
  } else if (score >= 60) {
    grade = 'C';
  } else if (score >= 50) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  result.innerText = `Grade: ${grade}`;
}
