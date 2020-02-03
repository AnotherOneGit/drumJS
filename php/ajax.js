// let response = document.getElementById('response')
//
// document.forms.reg.onsubmit = function (e) {
//     e.preventDefault()
//
//     let userInput = document.forms.reg.name.value
//
//     let xhr = new XMLHttpRequest()
//
//     xhr.open('POST', 'reg.php')
//
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
//
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 && xhr.status === 200){
//             if (xhr.responseText === 'User exists') {
//                 response.textContent = xhr.responseText
//             } else {
//                 response.textContent = "success"
//             }
//         }
//     }
//
//     xhr.send('name' + userInput)
// }

let response = document.getElementById('response')

document.forms.regForm.onsubmit = function (e) {
    e.preventDefault()

    let formData = {
        name: document.forms.regForm.name.value,
        email: document.forms.regForm.email.value,
        password: document.forms.regForm.password.value
    }

    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', function () {
        if(xhr.responseText == 'exist'){
            response.textContent = 'User with this name already exist! Please, choose another name'
        } else {
            window.location = 'enter.html'
        }
    })

    xhr.open('POST', 'reg.php', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')

    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState === 4 && xhr.status === 200){
    //         if (xhr.responseText === 'User exists') {
    //             response.textContent = xhr.responseText
    //         } else {
    //             response.textContent = "success"
    //         }
    //     }
    // }

    xhr.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email) + '&password=' + encodeURIComponent(formData.password))
}