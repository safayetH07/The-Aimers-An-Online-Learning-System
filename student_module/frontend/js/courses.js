const token = localStorage.getItem('token');
if(!token) window.location.href = "login.html";

const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn){
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('studentName');
        window.location.href = "login.html";
    });
}

// Example courses
const courses = [
    { id: 1, title: "HTML Basics" },
    { id: 2, title: "CSS Styling" },
    { id: 3, title: "JavaScript Advanced" }
];

const courseList = document.getElementById('courseList');
courses.forEach(course => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <h3>${course.title}</h3>
        <button onclick="enrollCourse(${course.id}, '${course.title}')">Enroll</button>
    `;
    courseList.appendChild(div);
});

function enrollCourse(id, title){
    alert(`You have enrolled in "${title}"`);
}
