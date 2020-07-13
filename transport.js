let passengers = [["Sarah", "A", "F"], ["Ayu", "B", "D"], ["Nanda", "A", "E"]]
let locations = ["A", "B", "C", "D", "E", "F"]

function getTransport(passengers) {
    let store = []
    let getInfo
    for (i in passengers) {
        info = passengers[i]        
        getInfo = {
            passenger: info[0],
            departure: info[1],
            destination: info[2],
            pay: payment(info[1], info[2], locations)
        }
        store.push(getInfo)
    }
    return store
}

function payment(start, finish, locations) {
    let point1
    let point2 
    point1 = locations.indexOf(start)
    point2 = locations.indexOf(finish)
    pay = (point2 - point1) * 5000
    return pay
}

console.log(getTransport(passengers))