let backend = 'http://localhost:3000'

const getPath = function () {
   
}
    // const backend = 'http://116.203.187.241:3000'
const getId = function() {
    const path = window.location.href.toString()
    // !!!!!!!!!!!!!!
    if (path.includes('116.203.187.241'))
      backend = 'http://116.203.187.241:3000'  
    const header = path.indexOf('#')
    const pos = header > 0 ? header : path.length
    const id = path.indexOf('?id=')
    return id > 0 ? path.substring(id + 4, pos) : ''
}

const studentId = getId()
