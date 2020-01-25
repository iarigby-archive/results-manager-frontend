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
        .then(res =>
            res.exams.forEach(exam =>
                getExamData(exam, id)
                    .then(exam => {
                        data[exam] = exam
                        return exam
                    })
                    .then(exam => displayExamData(exam))
                    .catch(e => {
                        addError(exam)
                    }))
        )
}


document.addEventListener("DOMContentLoaded", main)