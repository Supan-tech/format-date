const display = document.getElementById("display")


const monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function formatNumberWithOrdinalSuffix(number) {
    return number + getOrdinalSuffix(number);
}

function formatTimeComponent(component) {
    return component < 10 ? '0' + component : component;
}

function formatDate(inputDate) {
    const date = inputDate
    const day = date.getDate();
    const month = monthOfYear[date.getMonth()]
    const year = date.getFullYear();
    const weekday = dayOfWeek[date.getDay()]
    const hours = formatTimeComponent(date.getHours());
    const minutes = formatTimeComponent(date.getMinutes());
    const seconds = formatTimeComponent(date.getSeconds());

    const formattedDate = `${weekday}, ${month} ${formatNumberWithOrdinalSuffix(day)}, ${year} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
}


const currentDate = new Date();
const formattedDate = formatDate(currentDate);
display.textContent = formattedDate