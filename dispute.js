// const url = `${backend}/midterms/4/disputes`

const updateDisputes = async function (disputes) {
    removeTaskDetails()
    addDisputesElement(disputes.filter(d => d.status != 'resolved'))
}

const getDisputeButton = function (exam, task) {
    // TODO if
    return `<button onclick="addDisputeInput('${exam}', '${task}')">გასაჩივრება</button></span>`
}
const addDisputesElement = function (disputes) {
    const elem = (disputes.length == 0) ?
        'თქვენ გასაჩივრებები არ გაქვთ' :
        disputes
            .map(getDisputeElement)
            .join('\n')
    document.getElementById('disputes').innerHTML = elem
}

const getDisputeElement = (dispute) =>
    `<div class="dispute">
    ${dispute.info}
    <button onclick="resolveDispute('${dispute.disputeId}')">დახურვა</button>
    </div>`
const resolveDispute = function (id) {
    api.resolveDispute(id)
        .then(res => res.disputes)
        .then(updateDisputes)
}

const addDisputeInput = (exam, task) => {
    const elem = document.getElementById(`upload_${exam}_${task}`)
    elem.innerHTML = disputeInput(exam, task)

}

const disputeInput = (exam, task) =>
    `<div class="big-container"><p>
    დასაწყისში მიუთითეთ ხაზის ნომრები, რომელსაც გულისხმობთ. 
    გთხოვთ, რომ გასაჩივრებამდე 1-2 კურსელთან გაიაროთ კონსულტაცია 
    და დარწმუნდეთ, რომ ჰენდაუთებიდან რამე ინფორმაცია არ გაქვთ გამოპარული.
    </p>
    <div class="container"><textarea id="dispute"></textarea>
    <button onclick="sendDispute('${exam}', '${task}')">გაგზავნა</button>
    </div></div>`

// TODO better to include in 
// config file or sth
const disputeCorrectness = () => dispute('Correctness')

const disputeSolution = () => dispute('Solution')

const clearElements = () => [`Solution`, `Correctness`].forEach(type =>
    document.getElementById(`dispute${type}`).innerHTML = ''
)


// TODO
// message: 
/*
თქვენი საჩივარი გაგზავნილია. დასადასტურებლად მოგივიდათ მეილი. 

დაფიქსირდა შეცდომა. გთხოვთ ეს ტექსტი მომწეროთ მეილის სახით. 
მეილის სათაური: 

if no id found,
ჩემი ნაწერი არ მოიძებნა
*/
const dispute = function (type) {
    clearElements()
    document.getElementById(`dispute${type}`).innerHTML = disputeInput(type)
}
// in admin panel: request confirmation button
const sendDispute = function (exam, task) {
    const info = document.querySelector('textarea').value
    if (info.length > 0) {
        api.createDispute({
            info: info,
            subject: subject,
            exam: exam,
            task: task
        })
        .then(res => updateDisputes(res.disputes))
    }


}