window.addEventListener('DOMContentLoaded', function () {

    const bankOne = [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Clap',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: "Kick-n'-Hat",
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];

    const bankTwo = [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Chord-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Chord-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Shaker',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: 'Punchy-Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Side-Stick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Snare',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }];

    function selectAudio(url) {
        let audio = new Audio()
        audio.preload = 'auto'
        audio.src = bankOne[url].url
        audio.play()
    }

    let speedInput = document.getElementById('speedInput')
    let addStrongBtn = document.getElementById('addStrongBtn')
    let clearLastBtn = document.getElementById('clearLastBtn')
    let clearAllBtn = document.getElementById('clearAllBtn')
    let addSickBtn = document.getElementById('addSickBtn')
    let areaKick = document.getElementById('areaKick')
    let startBtn = document.getElementById('startBtn')
    let kickDivs = document.getElementsByClassName('kick')
    let screen = document.getElementById('screen')
    let speedBtn = document.getElementById('speedBtn')
    // let speed = setSpeed()

    let arrayKicks = []

    speedBtn.addEventListener('click', setSpeed)
    addStrongBtn.addEventListener('click', createStrongKick)
    addSickBtn.addEventListener('click', createSickKick)
    clearLastBtn.addEventListener('click', clearLast)
    clearAllBtn.addEventListener('click', clearAll)
    startBtn.addEventListener('click', start)

    function setSpeed() {
        let speed = speedInput.value
        console.log(speed)
        return speed
    }



    function clearAll() {
        arrayKicks = []
        while (kickDivs.length > 0) {
            kickDivs[0].remove()
        }
    }

    function clearLast() {
        arrayKicks.pop()
        kickDivs[kickDivs.length-1].remove()
    }

    function createSickKick() {
        let kick = document.createElement('div')
        arrayKicks.push(0)
        kick.classList.add('sick')
        kick.classList.add('kick')
        areaKick.append(kick)
    }

    function createStrongKick() {
        let kick = document.createElement('div')
        arrayKicks.push(1)
        kick.classList.add('strong')
        kick.classList.add('kick')
        areaKick.append(kick)
    }

    function changeColor(color) {
        screen.className = color
    }

    function start() {
        arrayKicks.forEach(function (item, i, arrayKicks) {
            setTimeout(function() {
                switch (item) {
                    case 0: selectAudio(6)
                        changeColor('green')
                        break
                    case 1: selectAudio(7)
                        changeColor('blue')
                }
            }, i * setSpeed())
        })
    }
})