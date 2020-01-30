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
    document.getElementById(`${exam}-files`).innerHTML = 'ფაილი ვერ მოიძებნა'
    // რამე ღილაკის დამატება, დედას გეფიცები, დესკტოპზე დავტოვე, მართლა
}

