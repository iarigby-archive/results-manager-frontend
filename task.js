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
    const links = getTaskLinks(exam.name, exam.tasks)
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
    `<div> 
    <button onclick="displayTaskData('${exam}','${task}')"> 
        ფაილების ნახვა
    </button> 
    
    <button onclick="displayUploadElement('${exam}','${task}')">
         ცვლილების ატვირთვა
    </button>
    ${task} 
    
    </div>

    <div id='upload_${exam}_${task}'>
    </div>
    `
function displayUploadElement(exam, task) {
    const elem = document.getElementById(`upload_${exam}_${task}`)
    elem.innerHTML = getUploadElement(exam, task) 
}

function removeUploadElement(exam, task) {
    const elem = document.getElementById(`upload_${exam}_${task}`)
    elem.innerHTML = '' 
}
function getTaskData(exam) {
    // const path = window.location.pathname
    // const id = path.substring(path.lastIndexOf('/'), path.length)
    // return fetch(`${backend}/exams/paradigms/${exam}/results/${id}/${task}`)
        // .then(response => response.json())
    return data[exam]
}
