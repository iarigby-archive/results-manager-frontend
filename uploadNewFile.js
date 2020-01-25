const getUploadElement = (exam, task) => {
    return `
 <div class="container" id="requested-changes">
   <div class="container">ფაილის სახელი:
   <input id="new-file-name" type="text"/>
   </div>
   <div>
   კომენტარი: <textarea id="new-file-comments"> </textarea>
   </div>
   <div class="container">
   <input id="file-input" type="file" />
   <button onclick="uploadFile('${exam}','${task}')">ატვირთვა</button>
   </div>
 </div>
`
}

const uploadFile = (exam, task) => {
    const fileName = document.querySelector('input#new-file-name').value
    if (fileName.length < 1) {
        alert('ფაილის სახელი ცარიელია')
        return
    }
    const comments = document.querySelector('textarea#new-file-comments').value
    const uploaderElement = document.getElementById('file-input')
    readFile(uploaderElement)
        .then(result => {
            removeUploadElement(exam, task)
            sendFile(exam,
                {
                    comments: comments,
                    name: fileName,
                    contents: result
                })
        })
}

const readFile = (uploaderElement) =>
    new Promise((resolve) => {
        const file = uploaderElement.files[0]

        const reader = new FileReader()
        reader.addEventListener('load', () => {
            // uploader.parentNode.removeChild(uploader)
            resolve(reader.result)
        })
        reader.readAsText(file)
    })
