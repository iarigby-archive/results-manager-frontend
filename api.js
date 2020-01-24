async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
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
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

function updateData(id) {
    ['midterm3', 'midterm4', 'final']
        .forEach(exam => {
            const path = `${backend}/exams/paradigms/${exam}/tasks/${id}`
            fetch(path)
                .then(response => {
                    if (response.status == 404)
                        throw 'file not found'
                    // :((
                    return response.json()
                })
                .then(data => data.tasks)
                .then(tasks => addLinks(id, exam, tasks))
                .catch(e => {
                    console.log(e)
                    addError(exam)
                })
                
        })
}
const addError = (exam) =>
    document.getElementById(`${exam}-files`).innerHTML = 'ფაილი ვერ მოიძებნა'

const addLinks = (id, exam, tasks) =>
    document.getElementById(`${exam}-files`).innerHTML = getLinks(id, exam, tasks)

const getLinks = (id, exam, tasks) =>
    tasks.map(task => getLink(id, exam, task)).join('\n')

const getLink = (id, exam, task) =>
    `<div> <button onclick="getTaskFiles('${id}','${exam}','${task}')"> 
        ფაილის ნახვა
    </button> ${task} </div>`

function getTaskFiles(id, exam, task) {
    // const path = window.location.pathname
    // const id = path.substring(path.lastIndexOf('/'), path.length)
    console.log(id)
    return fetch(`${backend}/exams/paradigms/${exam}/results/${id}/${task}`)
        .then(response => response.json())
        .then(addData)
        .catch(err => console.log(err))
}

function addData(json) {
    const diffText = json.text
    // addResult(json.result)
    // addName(json.name)
    addFiles(json.results)
    // addScore(json.score)
    return json
}

function addFiles(files) {
    const elem = `
        ${files.map(addFile)}
    `
    document.querySelector('div#student-files').innerHTML = elem
}

function getLanguage(fileName) {
    console.log(fileName)
    if (fileName.includes('.scm'))
        return 'scheme'
    if (fileName.includes('.c'))
        return 'c'
    if (fileName.includes('.s'))
        return 'asm'
}
function addFile(file) {
    const language = getLanguage(file.name)
    return `<div id="${file.name}">
    <h3 id="file-name">${file.name}</h3>
    <pre class="language-${language}"><code>
    ${file.contents}
    </code></pre></div>`

}
function addSolution(text) {
    text = text.split('\n').map((line, number) => `<span class="line-number">${number + 1}.</span>\t ${line}`).join('\n')
    document.getElementById('answer').innerHTML = text
    // displayFile(text)
}

function addScore(file) {
    const maxScore = 40;
    const count = (file.match(/\/\/ N:/g) || []).length;
    document.querySelector('span#score').innerHTML = maxScore - count;
    document.querySelector('span#maxscore').innerHTML = maxScore;
}