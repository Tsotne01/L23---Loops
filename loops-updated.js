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


// ტურისტების მასივის გავლა
for (let i = 0; i < tourists.length; i++) {
    // მეტია თუ არა 21-ზე && დამატება
    tourists[i].personalInfo.adult = tourists[i].personalInfo.age > 20

    // ნამყოფია თუ არა საქართველოში
    let routesArr = tourists[i].routes
    let visited = 0
    for (let x = 0; x < routesArr.length; x++) {
        if (routesArr[x] === 'თბილისი') {
            visited += 1
        }
        tourists[i].personalInfo.visitedToGeorgia = visited > 0 ? 'ნამყოფია' : 'არაა ნამყოფი'
    }

    // ჯამში დახარჯული თანხა თითოეული ტურისტის მიერ
    let moneySpent = tourists[i].money
    let sum = 0
    for (let x = 0; x < moneySpent.length; x++) {
        tourists[i].sumOfSpent = sum += moneySpent[x];
        // საშუალოდ დახარჯული თანხა თითოეული ტურისტის მიერ
        tourists[i].avgOfSpent = tourists[i].sumOfSpent / moneySpent.length
    }
}

// ყველაზე მხარჯველი
let mostSpending = 0
let max = 0
for (let i = 0; i < tourists.length; i++) {
    if (tourists[i].sumOfSpent > max) {
        max = tourists[i].sumOfSpent
        mostSpending = tourists[i].personalInfo.firstName
    }
}

console.log(tourists)
console.log(`ყველაზე მხარჯველი არის: ${mostSpending}, ${max}$-ით`)