let response = document.getElementById('response')

document.forms.enterForm.onsubmit = function (e) {
    e.preventDefault()

    let formData = {
        name: document.forms.enterForm.name.value,
        password: document.forms.enterForm.password.value
    }

    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', function () {
        if(xhr.responseText === 'wrong'){
            response.textContent = 'User not found! Wrong login AND/OR password'
        } else {
            window.location = '../index.html'
        }
    })

    xhr.open('POST', 'enter.php', true)
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

    xhr.send('name=' + encodeURIComponent(formData.name) + '&password=' + encodeURIComponent(formData.password))
}