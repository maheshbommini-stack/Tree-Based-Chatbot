const chatBox = document.getElementById("chatBox");
const options = document.getElementById("options");


function botMessage(message) {

    chatBox.innerHTML += `
        <div class="bot-message">
            ${message}
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}


function userMessage(message) {

    chatBox.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}


function showButtons(buttons) {

    options.innerHTML = "";

    buttons.forEach(button => {

        options.innerHTML += `
            <button onclick="${button.action}">
                ${button.text}
            </button>
        `;

    });
}


/* =========================
   COLLEGE
========================= */

function college() {

    userMessage("🏫 College");

    botMessage("What college information do you need?");

    showButtons([

        {
            text: "🕘 College Timings",
            action: "collegeTimings()"
        },

        {
            text: "📖 Library",
            action: "library()"
        },

        {
            text: "🏠 Hostel",
            action: "hostel()"
        },

        {
            text: "⬅️ Main Menu",
            action: "mainMenu()"
        }

    ]);
}


function collegeTimings() {

    userMessage("🕘 College Timings");

    botMessage(
        "College timings are generally from 9:00 AM to 4:00 PM."
    );

    backToMenu();
}


function library() {

    userMessage("📖 Library");

    botMessage(
        "The library provides books, journals and digital learning resources."
    );

    backToMenu();
}


function hostel() {

    userMessage("🏠 Hostel");

    botMessage(
        "The college provides hostel facilities for students."
    );

    backToMenu();
}


/* =========================
   COURSES
========================= */

function courses() {

    userMessage("📚 Courses");

    botMessage("Which course information do you need?");

    showButtons([

        {
            text: "🐍 Python",
            action: "pythonCourse()"
        },

        {
            text: "☕ Java",
            action: "javaCourse()"
        },

        {
            text: "🤖 Artificial Intelligence",
            action: "aiCourse()"
        },

        {
            text: "⬅️ Main Menu",
            action: "mainMenu()"
        }

    ]);
}


function pythonCourse() {

    userMessage("🐍 Python");

    botMessage(
        "Python is widely used for programming, AI and data science."
    );

    backToMenu();
}


function javaCourse() {

    userMessage("☕ Java");

    botMessage(
        "Java is commonly used for software and application development."
    );

    backToMenu();
}


function aiCourse() {

    userMessage("🤖 Artificial Intelligence");

    botMessage(
        "Artificial Intelligence focuses on creating systems that can perform intelligent tasks."
    );

    backToMenu();
}


/* =========================
   EXAMINATIONS
========================= */

function exams() {

    userMessage("📝 Examinations");

    botMessage("What examination information do you need?");

    showButtons([

        {
            text: "📋 Internal Exams",
            action: "internalExams()"
        },

        {
            text: "📝 Semester Exams",
            action: "semesterExams()"
        },

        {
            text: "📊 Results",
            action: "results()"
        },

        {
            text: "⬅️ Main Menu",
            action: "mainMenu()"
        }

    ]);
}


function internalExams() {

    userMessage("📋 Internal Exams");

    botMessage(
        "Internal examinations are conducted during the semester."
    );

    backToMenu();
}


function semesterExams() {

    userMessage("📝 Semester Exams");

    botMessage(
        "Semester examinations are conducted at the end of the semester."
    );

    backToMenu();
}


function results() {

    userMessage("📊 Results");

    botMessage(
        "Students can check their results through the official college portal."
    );

    backToMenu();
}


/* =========================
   STUDENT SERVICES
========================= */

function services() {

    userMessage("🎓 Student Services");

    botMessage("Which student service do you need?");

    showButtons([

        {
            text: "📅 Attendance",
            action: "attendance()"
        },

        {
            text: "📄 Bonafide Certificate",
            action: "bonafide()"
        },

        {
            text: "🪪 ID Card",
            action: "idCard()"
        },

        {
            text: "⬅️ Main Menu",
            action: "mainMenu()"
        }

    ]);
}


function attendance() {

    userMessage("📅 Attendance");

    botMessage(
        "Students can check their attendance through the student portal."
    );

    backToMenu();
}


function bonafide() {

    userMessage("📄 Bonafide Certificate");

    botMessage(
        "Students can request a bonafide certificate through the college office."
    );

    backToMenu();
}


function idCard() {

    userMessage("🪪 ID Card");

    botMessage(
        "Contact the college administration for ID card-related issues."
    );

    backToMenu();
}


/* =========================
   MAIN MENU
========================= */

function backToMenu() {

    showButtons([

        {
            text: "🏠 Main Menu",
            action: "mainMenu()"
        }

    ]);
}


function mainMenu() {

    userMessage("🏠 Main Menu");

    botMessage(
        "Sure! What would you like to know?"
    );

    showButtons([

        {
            text: "🏫 College",
            action: "college()"
        },

        {
            text: "📚 Courses",
            action: "courses()"
        },

        {
            text: "📝 Examinations",
            action: "exams()"
        },

        {
            text: "🎓 Student Services",
            action: "services()"
        }

    ]);
}
