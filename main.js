// TODO 
let data = {}

function updateData(api) {
    api.getSubjectExams()
        .then(res => res.exams)
        .then(exams => setUpExams(exams, api))
}

function main() {
    const studentId = getParameter("id")
    const subject = getParameter("subject")
    const api = new Api(subject, studentId)
    if (studentId) {
        if (studentId == "test")
            test()
        else
            updateData(api)
                // .then(updateDisputes)
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