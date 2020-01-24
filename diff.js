function addDiff(diffString) {
    var diffHtml = Diff2Html.getPrettyHtml(
        diffString, { inputFormat: 'diff', showFiles: true, matching: 'lines' }
        //, outputFormat: 'side-by-side' 
    );
    document.getElementById('diffElement').innerHTML = diffHtml;
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

/*
function addData(json) {
    const diffText = json.text
    // addResult(json.result)
    // addName(json.name)
    addFiles(json.results)
    // addScore(json.score)
    return json
}
*/