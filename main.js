const main = function () {
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
var files = {}

function updateData(id) {
    ['midterm3', 'midterm4', 'final']
        .forEach(exam =>
            getTasks(exam, id)
                .then(tasks => addLinks(id, exam, tasks))
                .catch(e => {
                    console.log(e)
                    addError(exam)
                }))
}


document.addEventListener("DOMContentLoaded", main)