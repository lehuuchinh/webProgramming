class Student {
    constructor(id, name, gender, dob, hometown) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.hometown = hometown;
    }
}

class StudentManager {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
        this.renderTable();
    }

    addStudent(student) {
        this.students.push(student);
        this.saveToStorage();
    }

    updateStudent(index, updatedStudent) {
        this.students[index] = updatedStudent;
        this.saveToStorage();
    }

    deleteStudent(index) {
        this.students.splice(index, 1);
        this.saveToStorage();
    }

    saveToStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
        this.renderTable();
    }

    renderTable() {
        const tbody = document.querySelector('#studentTable tbody');
        tbody.innerHTML = '';
        this.students.forEach((student, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.dob}</td>
                <td>${student.hometown}</td>
                <td>
                    <button class="edit-btn" onclick="studentManager.editStudent(${index})">Sửa</button>
                    <button class="delete-btn" onclick="studentManager.deleteStudent(${index})">Xóa</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    editStudent(index) {
        const student = this.students[index];
        document.getElementById('studentIndex').value = index;
        document.getElementById('studentId').value = student.id;
        document.getElementById('studentName').value = student.name;
        document.getElementById('studentGender').value = student.gender;
        document.getElementById('studentDob').value = student.dob;
        document.getElementById('studentHometown').value = student.hometown;
    }
}

const studentManager = new StudentManager();

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const index = document.getElementById('studentIndex').value;
    const student = new Student(
        document.getElementById('studentId').value,
        document.getElementById('studentName').value,
        document.getElementById('studentGender').value,
        document.getElementById('studentDob').value,
        document.getElementById('studentHometown').value
    );

    if (index === '') {
        studentManager.addStudent(student);
    } else {
        studentManager.updateStudent(index, student);
    }

    this.reset();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('studentIndex').value = '';
});
