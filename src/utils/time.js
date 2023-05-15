export function numberToString(num) {
    //convert a number to a string with 2 characters
    let numString = num.toString();
    if (num < 10 && num >= 0) {
        numString = "0" + numString;
    }
    return numString;
}

//const toDay = new Date();
// be carefull with toISOString because it returns UTC time that is one hour less
//console.log("Hoy es: ", toDay.toISOString().substring(0, 19)) is one hour less;
// constructing the date with each element to become a string and to look like the ISO time without delays :::

// The hour, month, ... must be a string and have two digits 

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
    const toDay = new Date();
    //YYYY-MM-DD today (la fecha de hoy)
    const tomorrowDayString = `${numberToString(toDay.getFullYear())}-${numberToString(toDay.getMonth() + 1)}-${numberToString(toDay.getDate() + 1)}`;
    //console.log("Hoy es: ", toDayString + "T" + nowHour + ":" + nowMinutes);
    return tomorrowDayString;
}
