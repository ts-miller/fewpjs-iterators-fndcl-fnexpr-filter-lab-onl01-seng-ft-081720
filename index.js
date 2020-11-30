function findMatching(drivers, string) {
    return drivers.filter(n => {
        return n.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(n => {
        return n.startsWith(`${string}`)
    })
}

function matchName(drivers, string) {
    return drivers.filter(n => {
        return n['name'] === string
    })
}