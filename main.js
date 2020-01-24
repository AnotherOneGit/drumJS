window.addEventListener('DOMContentLoaded', function () {

    let audio0 = new Audio()
    audio0.preload = 'auto'
    audio0.src = 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'

    let audio1 = new Audio();
    audio1.preload = 'auto';
    audio1.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';

    // let areaBtn = document.getElementById('areaBtn')
    let areaKick = document.getElementById('areaKick')
    let addSickBtn = document.getElementById('addSickBtn')
    let addStrongBtn = document.getElementById('addStrongBtn')
    let startBtn = document.getElementById('startBtn')
    let screen = document.getElementById('screen')

    let arrayKicks = []

    addStrongBtn.addEventListener('click', createStrongKick)
    addSickBtn.addEventListener('click', createSickKick)
    startBtn.addEventListener('click', start)

    function createSickKick() {
        let kick = document.createElement('div')

        arrayKicks.push(0)
        kick.classList.add('sickKick')

        areaKick.append(kick)
    }

    function createStrongKick() {
        let kick = document.createElement('div')

        arrayKicks.push(1)
        kick.classList.add('strongKick')

        areaKick.append(kick)
    }

    function changeColor(color) {
        screen.className = color
    }

    function start() {
        arrayKicks.forEach(function (item, i, arrayKicks) {
            setTimeout(function() {
                switch (item) {
                    case 0: audio0.play()
                        changeColor('green')
                        break
                    case 1: audio1.play()
                        changeColor('blue')
                }
            }, i * 500)
        })
    }
})