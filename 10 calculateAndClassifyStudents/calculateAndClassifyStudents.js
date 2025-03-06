function calculateAndClassifyStudents(students) {
    // Return an empty array if there are no students
    if (students.length === 0) return [];

    const classifiedStudents = students.map(student => {
        // Calculate the average grade for each student
        const averageGrade = student.grades.reduce((total, current) => total + current, 0) / student.grades.length;

        let classification;
        // Classify based on average grade
        if (averageGrade >= 90) {
            classification = "Excellent";
        } else if (averageGrade >= 80) {
            classification = "Very Good";
        } else if (averageGrade >= 70) {
            classification = "Good";
        } else if (averageGrade >= 60) {
            classification = "Accepted";
        } else {
            classification = "Low";
        }

        return {
            ...student,
            averageGrade: parseFloat(averageGrade.toFixed(2)), // Store the average rounded to 2 decimal places
            classification: classification
        };
    });

    return classifiedStudents;
}

const students = [
    { name: "Ahmed", grades: [85, 90, 78] },
    { name: "Mohamed", grades: [92, 88, 95] },
    { name: "Mahmoud", grades: [86, 97, 95] },
];

const result = calculateAndClassifyStudents(students);
console.log(result);
