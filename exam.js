function setUpExams(exams, api) {
    // this line wouldn't exist if I used appendChild
    createExamElements(exams)
    exams.forEach(exam => setupExam(exam, api))
    return exams
}

function saveExamData(exam) {
    // :( saving 
    data[exam.name] = exam
    return exam
}

function setupExam(exam, api) {
    api.getExamData(exam)
        .then(exam => saveExamData(exam))
        .then(exam => displayExamData(exam))
        .catch(e => addError(exam))
}

function displayExamData(exam) {
    addTaskLinks(exam)
    addExamScore(exam)
    return exam
}

function createExamElements(exams) {
    getExamsElement().innerHTML = exams.map(getExamElement).join('\n')
    return exams
}

function getExamElement(examName) {
    return `<div id="${examName}-data">
     <h2>${examName}</h2>
     <div id="${examName}-files"></div>
    </div>`
}

function getExamsElement() {
    return document.getElementById('exams')
}

function addExamScore(exam) {
    // TODO
    return exam
}

function addError(exam) {
    document.getElementById(`${exam}-files`).innerHTML = 'გამოცდის ნაშრომი ვერ მოიძებნა'
    // რამე ღილაკის დამატება, დედას გეფიცები, დესკტოპზე დავტოვე, მართლა
}

