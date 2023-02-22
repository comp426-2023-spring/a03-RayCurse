function randomShot(rules) {
    values = Object.keys(rules)
    return values[~~(Math.random() * values.length)]
}

const rpsRules = {
    "rock": ["paper"],
    "paper": ["scissors"],
    "scissors": ["rock"]
}
function rps(playerShot, ...outOfRange) {

    if (playerShot === undefined) {
        return {"player": randomShot(rpsRules)}
    }

    if (!(playerShot.toLowerCase() in rpsRules)) {
        console.error(`ERROR: argument must be one of [${values.join(", ")}]`)
        process.exit(1)
    }

    if (outOfRange.length > 1) {
        console.error(`${outOfRange.join(", ")} out of range`)
        process.exit(1)
    }

    opponentShot = randomShot(rpsRules)
    console.log(opponentShot)
    return {
        "player": playerShot,
        "opponent": opponentShot,
        "result": rpsRules[playerShot].includes(opponentShot.toLowerCase()) ? "lose" : "win"
    }
}

const rpslsRules = {
    "rock": ["paper", "spock"],
    "paper": ["scissors", "lizard"],
    "scissors": ["rock", "spock"],
    "spock": ["lizard", "paper"],
    "lizard": ["rock", "scissors"]
}
function rpsls(playerShot, ...outOfRange) {
    if (playerShot === undefined) {
        return {"player": randomShot(rpslsRules)}
    }

    if (!(playerShot.toLowerCase() in rpslsRules)) {
        console.error(`ERROR: argument must be one of [${values.join(", ")}]`)
        process.exit(1)
    }

    if (outOfRange.length > 1) {
        console.error(`${outOfRange.join(", ")} out of range`)
        process.exit(1)
    }

    opponentShot = randomShot(rpslsRules)
    console.log(opponentShot)
    return {
        "player": playerShot,
        "opponent": opponentShot,
        "result": rpslsRules[playerShot].includes(opponentShot.toLowerCase()) ? "lose" : "win"
    }
}

exports.rps = rps
exports.rpsls = rpsls
