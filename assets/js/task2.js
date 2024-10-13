function getPerson1(property, person) {
    console.log('Результат выполнения второго задания: ')
    for (let key in person) {
        if (key === property) {
            console.log(true)
            return true
        }else {
            console.log(false)
            return false
        }
    }
}

getPerson1('name', Person)