function postData(url = '', data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
        .then(response => response.json()) // parses JSON response into native JavaScript objects
}

function studentEndpoint(exam, id) {
    return `${backend}/exams/paradigms/${exam}/${id}`
}

function fileChangeEndpoint(exam, id, task) {
    return `${studentEndpoint(exam, id)}/${task}/change`
}
function sendFile(exam, fileData) {
    const opts = data[exam]
    const path = fileChangeEndpoint(opts.name, opts.id, fileData.task)
    postData(path, fileData)
    .then(a => console.log(a))

}
function getSubjectExams(subject) {
    const path = `${backend}/exams/${subject}`
    return fetch(path)
        .then(response => response.json())
}

function getExamData(exam, id) {
    const path = studentEndpoint(exam, id)
    return fetch(path)
        .then(response => {
            if (response.status == 404)
                throw 'file not found'
            // :((
            return response.json()
        })
    // .then(data => data.tasks)
}









