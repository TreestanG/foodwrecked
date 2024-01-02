export function TimeToNum(time) {
    time = String(time)
    let spltTime = [time.slice(0, time.length-2), time.slice(-2)]
    let mins = parseInt(spltTime[0])
    let sec = parseInt(spltTime[1])/60
    let totalTime = Math.floor(mins + sec)
    let hours = Math.floor(totalTime/60)
    let minutes = totalTime % 60
    return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`
}

