function getLanguage(fileName) {
    if (fileName.includes('.scm'))
        return 'scheme'
    if (fileName.includes('.c'))
        return 'c'
    if (fileName.includes('.s'))
        return 'wasm'
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

/* DISGUSTING */
function addFile(fileElement) {
    getFileDestination().innerHTML = fileElement
}

function getFileElement(file) {
    const language = getLanguage(file.name)
    console.log(language)
    return `<div id=${file.name}>
        <h1>${file.name}</h1>
        <pre class="language-${language}"><code>${file.contents}
        </code></pre>
    </div>`
}