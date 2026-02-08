// Show student name
document.getElementById('studentName').textContent = localStorage.getItem('studentName');

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('studentName');
    window.location.href = "login.html";
});

// Example enrolled courses
const enrolledCourses = [
    { title: "HTML Basics" },
    { title: "CSS Styling" },
    { title: "JavaScript Advanced" }
];

const enrolledDiv = document.getElementById('enrolledCourses');
enrolledCourses.forEach(c => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.textContent = c.title;
    enrolledDiv.appendChild(div);
});
