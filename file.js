function getLanguage(fileName) {
    console.log(fileName)
    if (fileName.includes('.scm'))
        return 'scheme'
    if (fileName.includes('.c'))
        return 'c'
    if (fileName.includes('.s'))
        return 'asm'
}

function getFileDestination() {
    return document.getElementById('student-files')
}
function addFiles(files) {
    getFileDestination().innerHTML = ''
    console.log(files)
    files
        .map(getFileElement)
        .forEach(addFile)
}

/* DISGUSTING */
function addFile(fileElement) {
    getFileDestination().appendChild(fileElement)
}

function getFileElement(file) {
    const language = getLanguage(file.name)
    const d = document.createElement('div')
    d.id =file.name
    const header = document.createElement('h1')
    header.innerText = file.name
    d.appendChild(header) 
    const p = document.createElement('pre')
    const c = document.createElement('code')
    c.class = `language-${language}`
    c.innerText = file.contents
    p.appendChild(c)
    d.appendChild(p)
    return d
}