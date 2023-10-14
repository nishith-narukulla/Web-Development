// Init Synthesis API
const synth = window.speechSynthesis

// Init DOM Elements
const textForm = document.querySelector('form')
const textInput = document.querySelector('#text-input')
const rateValue = document.querySelector('#rate-value')
const rateInput = document.querySelector('#rate')
const pitchValue = document.querySelector('#pitch-value')
const pitchInput = document.querySelector('#pitch')
const voiceSelect = document.querySelector('#voice-selector')
const body = document.querySelector('body')

// Init voices array
let voices = []

const getVoices = () => {
    voices = synth.getVoices()


    // Loop through voices
    voices.forEach(voice => {
        const option = document.createElement('option')
        option.textContent = `${voice.name}(${voice.lang})`

        option.setAttribute('data-name', voice.name)
        option.setAttribute('data-lang', voice.lang)

        voiceSelect.appendChild(option)
    })
}


if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices
}

// speak
const speak = () => {

    // check if already speaking
    if (synth.speaking) {
        console.log('Already Speaking');
        return
    }

    if (textInput.value !== '') {
        const speakText = new SpeechSynthesisUtterance(textInput.value)

        // speak end
        speakText.onend = () => {
            console.log('Done Speaking');
        }

        // speak erron
        speakText.onerror = () => {
            console.log('Speak Error');
        }

        // Get selected Voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name')

        // lopp through voices
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice
            }
        })

        speakText.pitch = pitchInput.value
        speakText.rate = rateInput.value

        // speak
        synth.speak(speakText)
    } else {
        console.log('Text Empty');
    }
}

// EVENTS

textForm.addEventListener('submit', (e) => {
    e.preventDefault()
    speak()
    textInput.blur()
})


// Rate Value change
rateInput.addEventListener('change', () => { rateValue.textContent = rateInput.value })

// pitch Value change
pitchInput.addEventListener('change', () => { pitchValue.textContent = pitchInput.value })

// voice change
voiceSelect.addEventListener('change', () => {
    speak()
})