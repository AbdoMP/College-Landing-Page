document.addEventListener('DOMContentLoaded', function () {
    const gradesButton = document.getElementById('load-grades');
    const calculateGpaButton = document.getElementById('calculate-gpa');
    const gradesTable = document.getElementById('grades-table');
    const gpaResult = document.getElementById('gpa-result');

    const grades = [
        { course: 'Math 101', grade: 'A' },
        { course: 'History 201', grade: 'B+' },
        { course: 'Science 301', grade: 'A-' }
    ];

    const gradePoints = {
        'A': 4.0,
        'A-': 3.7,
        'B+': 3.3,
        'B': 3.0,
        'B-': 2.7,
        'C+': 2.3,
        'C': 2.0,
        'C-': 1.7,
        'D+': 1.3,
        'D': 1.0,
        'F': 0.0
    };

    if (gradesButton) {
        gradesButton.addEventListener('click', function () {
            gradesTable.innerHTML = `
                <tr>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            `;
            grades.forEach(grade => {
                gradesTable.innerHTML += `
                    <tr>
                        <td>${grade.course}</td>
                        <td>${grade.grade}</td>
                    </tr>
                `;
            });
        });
    }

    if (calculateGpaButton) {
        calculateGpaButton.addEventListener('click', function () {
            let totalPoints = 0;
            grades.forEach(grade => {
                totalPoints += gradePoints[grade.grade];
            });
            const gpa = (totalPoints / grades.length).toFixed(2);
            gpaResult.textContent = `Your GPA is: ${gpa}`;
        });
    }

    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Message sent! Thank you for contacting us.');
            contactForm.reset();
        });
    }
});