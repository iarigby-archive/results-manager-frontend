function displayTaskData(id, exam, task) {
    getTaskData(id, exam, task)
        .then(addTaskData)
        .then(addScore)
        .catch(err => console.log(err))
}

function addTaskData(json) {
    addFiles(json.results)
    return json
}


function addScore(json) {
    return json
}