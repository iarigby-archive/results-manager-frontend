function getLanguage(fileName) {
    if (fileName.includes('.scm'))
        return 'scheme'
    if (fileName.includes('.c'))
        return 'c'
    if (fileName.includes('.s'))
        return 'asm'
    if (fileName.includes('.java'))
        return 'java'
}

function getFileDestination() {
    return document.getElementById('student-files')
}
function addFiles(files) {
    getFileDestination().innerHTML = ''
    files
        .map(getFileElement)
        .forEach(addFile)

    Prism.highlightAll()
}

function addFile(fileElement) {
    getFileDestination().appendChild(fileElement)
}

function getFileElement(file) {
    const language = getLanguage(file.name)
    const d = document.createElement('div')
    d.id = file.name
    const header = document.createElement('h1')
    header.innerText = file.name
    d.appendChild(header)
    const p = document.createElement('pre')
    p.className = `language-${language} line-numbers`
    file.contents.split('\n')
        .forEach(line => {
            const c = document.createElement('code')
            c.innerText = line
            p.appendChild(c)
            p.appendChild(document.createElement('br'))
        })
    d.appendChild(p)
    return d
}