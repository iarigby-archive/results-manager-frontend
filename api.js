const Api = class {
    constructor(subject, id) {
        this.subject = subject
        this.id = id
        this.backendURL = this.getBackendLocation()
    }

    getBackendLocation = () => {
        const path = window.location.href.toString()
        if (path.includes('116.203.187.241'))
            return 'http://116.203.187.241:3000'
        else
            return 'http://localhost:3000'

    }

    postData(url = '', data = {}) {
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

    getStudentEndpoint(exam) {
        return `${this.backendURL}/exams/${this.subject}/${exam}/${this.id}`
    }

    fileChangeEndpoint(exam, task) {
        return `${this.getStudentEndpoint(exam)}/${task}/change`
    }

    sendFile(exam, fileData) {
        const opts = data[exam]
        const path = fileChangeEndpoint(opts.name, fileData.task)
        postData(path, fileData)
            .then(a => console.log(a))

    }
    getSubjectExams() {
        const path = `${this.backendURL}/exams/${this.subject}`
        return fetch(path)
            .then(response => response.json())
    }

    getExamData(exam) {
        const path = this.getStudentEndpoint(exam)
        return fetch(path)
            .then(response => {
                if (response.status == 404)
                    throw 'file not found'
                // :((
                return response.json()
            })
        // .then(data => data.tasks)
    }
}






