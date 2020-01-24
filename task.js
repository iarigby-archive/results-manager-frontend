function displayTaskData(exam, task) {
    // getTaskData(exam, task)
    //     .then(addTaskData)
    //     .then(addScore)
    //     .catch(err => console.log(err))
    const d = getTaskData(exam)
    addTaskData(d, task)
    addTaskScore(d, task)
}

function addTaskLinks(exam) {
    const links = getTaskLinks(exam, exam.tasks)
    document.getElementById(`${exam.name}-files`).innerHTML = links
    return exam
}

/*
function addTaskData(json) {
    addFiles(json.results)
    return json
}
*/
function addTaskData(exam, task) {
    addFiles(exam.files[task])
    return exam
}

function addTaskScore(exam, task) {
    // TODO
    return exam
}

const getTaskLinks = (exam, tasks) =>
    tasks.map(task => getTaskLink(exam, task)).join('\n')

const getTaskLink = (exam, task) =>
    `<div> <button onclick="displayTaskData('${exam}','${task}')"> 
        ფაილის ნახვა
    </button> ${task} </div>`

function getTaskData(exam) {
    // const path = window.location.pathname
    // const id = path.substring(path.lastIndexOf('/'), path.length)
    // return fetch(`${backend}/exams/paradigms/${exam}/results/${id}/${task}`)
        // .then(response => response.json())
    return data[exam]
}
