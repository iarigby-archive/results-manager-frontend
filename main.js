const main = function () {
    const studentId = getId()
    if (studentId.length > 0) {
        if (studentId == "test")
            test()
        else
            updateData(studentId)
                .then(updateDisputes)
    }

}

var files = {}

document.addEventListener("DOMContentLoaded", main)