function displayExamData(exam) {
    addTaskLinks(exam)
    addExamScore(exam)
    return exam
}

function addExamScore(exam) {
    // TODO
    return exam
}

function addError(exam) {
    document.getElementById(`${exam}-files`).innerHTML = 'ფაილი ვერ მოიძებნა'
    // რამე ღილაკის დამატება, დედას გეფიცები, დესკტოპზე დავტოვე, მართლა
}

