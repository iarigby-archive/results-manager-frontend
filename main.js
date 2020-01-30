function main() {
    const studentId = getId()
    if (studentId.length > 0) {
        if (studentId == "test")
            test()
        else
            updateData(studentId)
                .then(updateDisputes)
    }

}

// TODO 
let data = {}

function updateData(id) {
    getSubjectExams('paradigms')
        .then(res => res.exams)
        .then(exams => setUpExams(exams, id))
}

function setUpExams(exams, id) {
    // this line wouldn't exist if I used appendChild
    createExamElements(exams)
    exams.forEach(exam => setupExam(exam, id))
    return exams
}
function saveExamData(exam) {
    // :( saving 
    data[exam.name] = exam
    return exam
}

function setupExam(exam, id) {
    getExamData(exam, id)
    .then(exam => saveExamData(exam))
    .then(exam => displayExamData(exam))
    .catch(e => addError(exam))
}

document.addEventListener("DOMContentLoaded", main)