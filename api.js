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

function getTasks(exam, id) {
    const path = `${backend}/exams/paradigms/${exam}/tasks/${id}`
    return fetch(path)
        .then(response => {
            if (response.status == 404)
                throw 'file not found'
            // :((
            return response.json()
        })
        .then(data => data.tasks)

}

const addError = (exam) =>
    document.getElementById(`${exam}-files`).innerHTML = 'ფაილი ვერ მოიძებნა'

function addLinks (id, exam, tasks) {
    document.getElementById(`${exam}-files`).innerHTML = getLinks(id, exam, tasks)
    return tasks
}

const getLinks = (id, exam, tasks) =>
    tasks.map(task => getLink(id, exam, task)).join('\n')

const getLink = (id, exam, task) =>
    `<div> <button onclick="displayTaskData('${id}','${exam}','${task}')"> 
        ფაილის ნახვა
    </button> ${task} </div>`

function getTaskData(id, exam, task) {
    // const path = window.location.pathname
    // const id = path.substring(path.lastIndexOf('/'), path.length)
    return fetch(`${backend}/exams/paradigms/${exam}/results/${id}/${task}`)
        .then(response => response.json())
}






