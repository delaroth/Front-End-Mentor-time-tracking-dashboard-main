
const displayTimeFrame = document.getElementsByClassName('timeFrame')

const daily_button = document.getElementById('daily_button')
const weekly_button = document.getElementById('weekly_button')
const monthly_button = document.getElementById('monthly_button')


// work html variables
const displayWorkHours = document.getElementById('workHours')
const displayWorkLastHours = document.getElementById('workLastHours')
//play html variables
const displayPlayHours = document.getElementById('playHours')
const displayPlayLastHours = document.getElementById('playLastHours')
// study html variables
const displayStudyHours = document.getElementById('studyHours')
const displayStudyLastHours = document.getElementById('studyLastHours')
// exercise html variables 
const displayExerciseHours = document.getElementById('exerciseHours')
const displayExerciseLastHours = document.getElementById('exerciseLastHours')
// social html variables
const displaySocialHours = document.getElementById('socialHours')
const displaySocialLastHours = document.getElementById('socialLastHours')
// self-care html variables
const displaySelfCareHours = document.getElementById('self-careHours')
const displaySelfCareLastHours = document.getElementById('self-careLastHours')

// ------------------------------------------------------------------------------
function changeTimeFrame(timeframe) {
    let last
    if (timeframe == "daily") {
        last = "Yesterday"
        daily_button.style.color = 'grey'
        weekly_button.style.color = 'white'
        monthly_button.style.color = 'white'
    }
    else if (timeframe == 'weekly') {
        last = "Last Week"
        daily_button.style.color = 'white'
        weekly_button.style.color = 'grey'
        monthly_button.style.color = 'white'
    }
    else if (timeframe == 'monthly') {
        last = "Last Month"
        daily_button.style.color = 'white'
        weekly_button.style.color = 'white'
        monthly_button.style.color = 'grey'
    }
    else {
        timeframe = "daily"
        last = "Yesterday"
        daily_button.style.color = 'grey'
    }
    for (i = 0; i < displayTimeFrame.length; i++) {
        displayTimeFrame[i].innerHTML = last

    }
    //work
    displayWorkHours.innerHTML = data.work.timeframes[timeframe].current
    displayWorkLastHours.innerHTML = data.work.timeframes[timeframe].previous
    //play
    displayPlayHours.innerHTML = data.play.timeframes[timeframe].current
    displayPlayLastHours.innerHTML = data.play.timeframes[timeframe].previous
    //study
    displayStudyHours.innerHTML = data.study.timeframes[timeframe].current
    displayStudyLastHours.innerHTML = data.study.timeframes[timeframe].previous
    // exercise
    displayExerciseHours.innerHTML = data.exercise.timeframes[timeframe].current
    displayExerciseLastHours.innerHTML = data.exercise.timeframes[timeframe].previous
    // social
    displaySocialHours.innerHTML = data.social.timeframes[timeframe].current
    displaySocialLastHours.innerHTML = data.social.timeframes[timeframe].previous
    // self-care
    displaySelfCareHours.innerHTML = data.self_care.timeframes[timeframe].current
    displaySelfCareLastHours.innerHTML = data.self_care.timeframes[timeframe].previous
}



// function daily() {
//     for (i = 0; i < displayTimeFrame.length; i++) {
//         displayTimeFrame[i].innerHTML = 'Yesterday'
//     }
//     //work
//     displayWorkHours.innerHTML = data.work.timeframes.daily.current
//     displayWorkLastHours.innerHTML = data.work.timeframes.daily.previous
//     //play
//     displayPlayHours.innerHTML = data.play.timeframes.daily.current
//     displayPlayLastHours.innerHTML = data.play.timeframes.daily.previous
//     //study
//     displayStudyHours.innerHTML = data.study.timeframes.daily.current
//     displayStudyLastHours.innerHTML = data.study.timeframes.daily.previous
//     // exercise
//     displayExerciseHours.innerHTML = data.exercise.timeframes.daily.current
//     displayExerciseLastHours.innerHTML = data.exercise.timeframes.daily.previous
//     // social
//     displaySocialHours.innerHTML = data.social.timeframes.daily.current
//     displaySocialLastHours.innerHTML = data.social.timeframes.daily.previous
//     // self-care
//     displaySelfCareHours.innerHTML = data.self_care.timeframes.daily.current
//     displaySelfCareLastHours.innerHTML = data.self_care.timeframes.daily.previous
// }

// function weekly() {
//     for (i = 0; i < displayTimeFrame.length; i++) {
//         displayTimeFrame[i].innerHTML = 'Last Week'

//     }
//     //work
//     displayWorkHours.innerHTML = data.work.timeframes.weekly.current
//     displayWorkLastHours.innerHTML = data.work.timeframes.weekly.previous
//     //play
//     displayPlayHours.innerHTML = data.play.timeframes.weekly.current
//     displayPlayLastHours.innerHTML = data.play.timeframes.weekly.previous
//     //study
//     displayStudyHours.innerHTML = data.study.timeframes.weekly.current
//     displayStudyLastHours.innerHTML = data.study.timeframes.weekly.previous
//     // exercise
//     displayExerciseHours.innerHTML = data.exercise.timeframes.weekly.current
//     displayExerciseLastHours.innerHTML = data.exercise.timeframes.weekly.previous
//     // social
//     displaySocialHours.innerHTML = data.social.timeframes.weekly.current
//     displaySocialLastHours.innerHTML = data.social.timeframes.weekly.previous
//     // self-care
//     displaySelfCareHours.innerHTML = data.self_care.timeframes.weekly.current
//     displaySelfCareLastHours.innerHTML = data.self_care.timeframes.weekly.previous
// }

// function monthly() {
//     for (i = 0; i < displayTimeFrame.length; i++) {
//         displayTimeFrame[i].innerHTML = 'Last Week'

//     }
//     //work
//     displayWorkHours.innerHTML = data.work.timeframes.monthly.current
//     displayWorkLastHours.innerHTML = data.work.timeframes.monthly.previous
//     //play
//     displayPlayHours.innerHTML = data.play.timeframes.monthly.current
//     displayPlayLastHours.innerHTML = data.play.timeframes.monthly.previous
//     //study
//     displayStudyHours.innerHTML = data.study.timeframes.monthly.current
//     displayStudyLastHours.innerHTML = data.study.timeframes.monthly.previous
//     // exercise
//     displayExerciseHours.innerHTML = data.exercise.timeframes.monthly.current
//     displayExerciseLastHours.innerHTML = data.exercise.timeframes.monthly.previous
//     // social
//     displaySocialHours.innerHTML = data.social.timeframes.monthly.current
//     displaySocialLastHours.innerHTML = data.social.timeframes.monthly.previous
//     // self-care
//     displaySelfCareHours.innerHTML = data.self_care.timeframes.monthly.current
//     displaySelfCareLastHours.innerHTML = data.self_care.timeframes.monthly.previous
// }

// const daily_button = document.getElementById('daily_button')
// daily_button.addEventListener('click', daily)


// const weekly_button = document.getElementById('weekly_button')
// weekly_button.addEventListener('click', weekly)

// const monthly_button = document.getElementById('monthly_button')
// monthly_button.addEventListener('click', monthly)

document.addEventListener('DOMContentLoaded', changeTimeFrame, false);