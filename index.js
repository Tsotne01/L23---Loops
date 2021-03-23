const tourists = [{
        personalInfo: {
            firstName: 'მარკი',
            age: 19
        },
        routes: ['თბილისი', 'ლონდონი', 'რომი', 'ბერლინი'],
        money: [120, 200, 150, 140]
    },
    {
        personalInfo: {
            firstName: 'ბობი',
            age: 21
        },
        routes: ['მაიამი', 'მოსკოვი', 'ვენა', 'რიგა', 'კიევი'],
        money: [90, 240, 100, 76, 123]
    },
    {
        personalInfo: {
            firstName: 'სემი',
            age: 22
        },
        routes: ['თბილისი', 'ბუდაპეშტი', 'ვარშავა', 'ვილნიუსი'],
        money: [118, 95, 210, 236]
    },
    {
        personalInfo: {
            firstName: 'ანნა',
            age: 20
        },
        routes: ['ნიუ იორკი', 'ათენი', 'სიდენი', 'ტოკიო'],
        money: [100, 240, 50, 190]
    },
    {
        personalInfo: {
            firstName: 'ალექსი',
            age: 23
        },
        routes: ['პარიზი', 'თბილისი', 'მადრიდი', 'მარსელი', 'მინსკი'],
        money: [96, 134, 76, 210, 158]
    }
]


// მეტია თუ არა 21-ზე && დამატება
for (let i = 0; i < tourists.length; i++) {
    tourists[i].personalInfo.adult = tourists[i].personalInfo.age > 20 ? true : false
}

// ნამყოფია თუ არა საქართველოში
for (let i = 0; i < tourists.length; i++) {
    let routesArr = tourists[i].routes

    let visited = 0
    for (let x = 0; x < routesArr.length; x++) {
        if (routesArr[x] === 'თბილისი') {
            visited += 1
        }
        tourists[i].personalInfo.visitedToGeorgia = visited > 0 ? 'ნამყოფია' : 'არაა ნამყოფი'
    }
}


// ჯამში დახარჯული თანხა თითოეული ტურისტის მიერ
for (let i = 0; i < tourists.length; i++) {
    let moneySpent = tourists[i].money
    let sum = 0
    for (let x = 0; x < moneySpent.length; x++) {
        tourists[i].sumOfSpent = sum += moneySpent[x]
    }
}

// საშუალოდ დახარჯული თანხა თითოეული ტურისტის მიერ
for (let i = 0; i < tourists.length; i++) {
    let moneySpent = tourists[i].money
    let sum = 0
    for (let x = 0; x < moneySpent.length; x++) {
        tourists[i].avgOfSpent = (sum += moneySpent[x]) / moneySpent.length
    }

}

let sumOfTourist1 = tourists[0].sumOfSpent
let sumOfTourist2 = tourists[1].sumOfSpent
let sumOfTourist3 = tourists[2].sumOfSpent
let sumOfTourist4 = tourists[3].sumOfSpent
let sumOfTourist5 = tourists[4].sumOfSpent

// ყველაზე მხარჯველი ტურისტი
let mostSpending =
    sumOfTourist1 > sumOfTourist2 &&
    sumOfTourist1 > sumOfTourist3 &&
    sumOfTourist1 > sumOfTourist4 &&
    sumOfTourist1 > sumOfTourist5 ? tourists[0] : null

mostSpending =
    sumOfTourist2 > sumOfTourist1 &&
    sumOfTourist2 > sumOfTourist3 &&
    sumOfTourist2 > sumOfTourist4 &&
    sumOfTourist2 > sumOfTourist5 ? tourists[1] : mostSpending

mostSpending =
    sumOfTourist3 > sumOfTourist1 &&
    sumOfTourist3 > sumOfTourist2 &&
    sumOfTourist3 > sumOfTourist4 &&
    sumOfTourist3 > sumOfTourist5 ? tourists[2] : mostSpending

mostSpending =
    sumOfTourist4 > sumOfTourist1 &&
    sumOfTourist4 > sumOfTourist2 &&
    sumOfTourist4 > sumOfTourist3 &&
    sumOfTourist4 > sumOfTourist5 ? tourists[3] : mostSpending

mostSpending =
    sumOfTourist5 > sumOfTourist1 &&
    sumOfTourist5 > sumOfTourist2 &&
    sumOfTourist5 > sumOfTourist4 &&
    sumOfTourist5 > sumOfTourist3 ? tourists[4] : mostSpending


console.log(`ყველაზე მეტი დახარჯა ${mostSpending.personalInfo.firstName}მ, ${mostSpending.sumOfSpent}$.`)