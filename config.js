// const backend = 'http://localhost:3000'
const backend = 'http://116.203.187.241:3000'
const getId = function() {
    const path = window.location.href.toString()
    return path.substring(path.indexOf('?id=') + 4, path.length)
}

const studentId = getId()