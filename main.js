const remDays = document.getElementById('days')
const remHours = document.getElementById('hours')
const remMinutes = document.getElementById('minutes')
const remSeconds = document.getElementById('seconds')

const birthDay = new Date ('August 05, 2022 16:00:00 GTM+1').getTime

const formatTime = (Time) => (time < 10 ? `0${time}` : time);

const countdown = () => {
    const birthDayDate = new Date(birthDay);
    const currentDate = new Date();
}