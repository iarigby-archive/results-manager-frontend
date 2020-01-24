function addTaskData(json) {
    console.log(json.results)
    addFiles(json.results)
    return json
}

function displayTaskData(id, exam, task) {
    getTaskData(id, exam, task)
        .then(addTaskData)
        .then(addScore)
        .catch(err => console.log(err))
}


function addScore(json) {
    return json
}