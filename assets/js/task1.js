const Person = {
    name: 'Ярослав',
    secondName: 'Сергеевич',
    lastName: 'Стадник',
    agePerson:'27',
    city: 'Омск'
}

function getPerson(person){
    console.log('Результат выполнения первого задания: ')
    for(let key in person){
        console.log(key + ': ' + person[key])
    }
}

getPerson(Person)