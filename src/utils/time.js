import moment from 'moment';

export function numberToString(num) {
    //convert a number to a string with 2 characters
    let numString = num.toString();
    if (num < 10 && num >= 0) {
        numString = "0" + numString;
    }
    return numString;
}

export const toDayYMD = () => {
    const toDay = new Date();
    let nowHour = numberToString(toDay.getHours());
    let nowMinutes = numberToString(toDay.getMinutes());
    //YYYY-MM-DD today (la fecha de hoy)
    const toDayString = `${numberToString(toDay.getFullYear())}-${numberToString(toDay.getMonth() + 1)}-${numberToString(toDay.getDate())}`;
    //console.log("Hoy es: ", toDayString + "T" + nowHour + ":" + nowMinutes);
    return toDayString;
}

export const nowHour = () => {
    const toDay = new Date();
    let nowHour = numberToString(toDay.getHours());
    return nowHour;
}

export const nowMinutes = () => {
    const toDay = new Date();
    let nowMinutes = numberToString(toDay.getMinutes());
    return nowMinutes;
}

export const tomorroyYMD = () => {
    const dayPlusOne = moment().add(1, 'days').format().split("T");
    const yesterDay = dayPlusOne[0]; //YYYY-MM-DD
    return yesterDay;
}

export const beforeDayYMD = (numDays) => {
    //numDays is the number of days before today
    const dayMenusOne = moment().subtract(numDays, 'days').format().split("T");
    const yesterDay = dayMenusOne[0]; //YYYY-MM-DD
    return yesterDay;
}

