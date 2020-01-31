// TODO 
let data = {}
// got tired of passing them around, needs bigger refactor
const studentId = getParameter("id")
const subject = getParameter("subject") || "paradigms"

const api = new Api(subject, studentId)

function updateStudentData(res) {
    document.getElementById('student-id').innerHTML = res.emailId
    return res
}

function updateSubjectName(res) {
    document.getElementById('results-list-header').innerHTML = 
        `${res.name_ge}ს გამოცდები`
    return res
}
function updateData(api) {    
    api.getDisputes()
        .then(res => updateStudentData(res))
        .then(res => updateDisputes(res.disputes))
    api.getSubjectExams()
        .then(res => updateSubjectName(res))
        .then(res => res.exams)
        .then(exams => setUpExams(exams, api))
}

function main() {
    if (studentId) {
        if (studentId == "test")
            test()
        else
            updateData(api)
    } else {
        if (subject) {
            // display help message for id
            // on backend check if that id has
            // any tasks
            // say that email has been sent and they should recheck
        } else {
            // display generic welcome message
        }
    }

}

function getParameter(p) {
    const u = new URL(window.location)
    return u.searchParams.get(p)
}

document.addEventListener("DOMContentLoaded", main)