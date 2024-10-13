let tStart
let tEnd

function ElectronicD(name, typeDevice, warranty, modelDevice, power) {
    this.name = name,
        this.typeDevice = typeDevice,
        this.warranty = warranty,
        this.modelDevice = modelDevice,
        this.power = power,
        this.powerPotreb = 0
}

ElectronicD.prototype.shutdownDevice = function () {
    return 'shutdown'
}
ElectronicD.prototype.enabledDevice = function () {
    return 'enabled'
}

function TableL(color, typeLightSource, countLightSource, statusActivation) {
    this.color = color,
        this.typeLightSource = typeLightSource,
        this.countLightSource = countLightSource,
        this.statusActivation = statusActivation,
        this.getChangeActivation = function () {

            if (document.getElementById('clickESTL').innerText.toString() === 'Включить') {
                tableL.statusActivation = ElectronicD.prototype.enabledDevice()
                document.getElementById('tableL').innerHTML = ''
                document.getElementById('tableL').innerHTML = "<span>Название устройства: " + tableL.name + "</span><br>" + "<span>Название модели: " + tableL.modelDevice + '</span><br>' + "<span>Статус включения: " + tableL.statusActivation + '</span><br>' +
                    '<span>Гарантия: ' + tableL.warranty + '</span><br>' + '<span>Тип устройства: ' + tableL.typeDevice + '</span><br>' + "<span>Дополнительное описание: <br>" + tableL.getInfoDevice() + '</span>'
                document.getElementById('clickESTL').innerText = 'Выключить'
                tStart = new Date()
            } else if (document.getElementById('clickESTL').innerText.toString() === 'Выключить') {
                tableL.statusActivation = ElectronicD.prototype.shutdownDevice()
                tEnd = new Date()

                let diffTimeSE = tEnd.getTime() - tStart.getTime()
                let hDiff = diffTimeSE / (3600 * 1000);
                tableL.powerPotreb = (tableL.power * hDiff) / 1000

                document.getElementById('tableL').innerHTML = ''
                document.getElementById('tableL').innerHTML = "<span>Название устройства: " + tableL.name + "</span><br>" +  "<span>Название модели: " + tableL.modelDevice + '</span><br>'  +  "<span>Статус включения: "+ tableL.statusActivation + '</span><br>' + "<span>Общая мощность ватт: "+ tableL.power + '</span><br>'
                    + "<span>Затраченная мощность за период включения в кл. ватт: "+ tableL.powerPotreb + '</span><br>'
                document.getElementById('clickESTL').innerText = 'Включить'
            }

        },
        this.getInfoDevice = function(){
        return '<span>Основной цвет: ' + this.color +  '</span><br>' + '<span>Тип источника света: ' + this.typeLightSource + '</span><br>' + '<span>Количество источников света: ' + this.countLightSource + '</span><br>'
        }
}

function ElectricK(volume, thermoregulator, delStart, statusActivation) {
    this.volume = volume,
        this.thermoregulator = `${thermoregulator}`,
        this.delStart = `${delStart}`,
        this.statusActivation = statusActivation,
        this.getChangeActivation = function () {
            if (document.getElementById('clickESEK').innerText.toString() === 'Включить') {
                electricK.statusActivation = ElectronicD.prototype.enabledDevice()
                document.getElementById('electricK').innerHTML = ''
                document.getElementById('electricK').innerHTML = "<span>Название устройства: " + electricK.name + "</span><br>" + "<span>Название модели: " + electricK.modelDevice + '</span><br>' + "<span>Статус включения: " + electricK.statusActivation + '</span><br>' +
                    '<span>Гарантия: ' + electricK.warranty + '</span><br>' + '<span>Тип устройства: ' + electricK.typeDevice + '</span><br>' + "<span>Дополнительное описание: <br>" + electricK.getInfoDevice() + '</span>'
                document.getElementById('clickESEK').innerText = 'Выключить'
                tStart = new Date()
            } else if (document.getElementById('clickESEK').innerText.toString() === 'Выключить') {
                electricK.statusActivation = ElectronicD.prototype.shutdownDevice()

                tEnd = new Date()

                let diffTimeSE = tEnd.getTime() - tStart.getTime()
                let hDiff = diffTimeSE / (3600 * 1000);
                electricK.powerPotreb = (electricK.power * hDiff) / 1000
                document.getElementById('electricK').innerHTML = ''
                document.getElementById('electricK').innerHTML = "<span>Название устройства: " + electricK.name + "</span><br>" +  "<span>Название модели: " + electricK.modelDevice + '</span><br>'  +  "<span>Статус включения: "+ electricK.statusActivation + '</span><br>' + "<span>Общая мощность ватт: "+ electricK.power + '</span><br>'
                    + "<span>Затраченная мощность за период включения в кл. ватт: "+ electricK.powerPotreb + '</span><br>'
                document.getElementById('clickESEK').innerText = 'Включить'
            }
        },
        this.getInfoDevice = function(){
        return '<span>Объем: ' + this.volume +  '</span><br>' + '<span>Терморегулятор: ' + this.thermoregulator +  '</span><br>' + '<span>Отложенный старт: ' + this.delStart +  '</span><br>'
    }
}

TableL.prototype = new ElectronicD('Настольный светильник Xiaomi Mi Smart LED Desk Lamp 1S белый',
    'настольный светильник', '12 мес', 'Xiaomi Mi Smart LED Desk Lamp 1S', '9')
ElectricK.prototype = new ElectronicD('Электрочайник Econ ECO-1781KE бежевый',
    'электрочайник', '12 мес', 'Econ ECO-1781KE', '1500')

tableL = new TableL('белый', 'LED', '1', ElectronicD.prototype.shutdownDevice())
electricK = new ElectricK('1.8л', 'нет', 'нет', ElectronicD.prototype.shutdownDevice())

document.getElementById('tableL').innerHTML = "<span>Название устройства: " + tableL.name + "</span><br>" +  "<span>Название модели: " + tableL.modelDevice + '</span><br>'  +  "<span>Статус включения: " + tableL.statusActivation + '</span><br>' + "<span>Общая мощность ватт: " + tableL.power + '</span><br>'

document.getElementById('electricK').innerHTML = "<span>Название устройства: " + electricK.name + "</span><br>" +  "<span>Название модели: " + electricK.modelDevice + '</span><br>'  +  "<span>Статус включения: " + electricK.statusActivation + '</span><br>' + "<span>Общая мощность ватт: "+ electricK.power + '</span><br>'

document.getElementById('clickESEK').addEventListener('click', function () {
    electricK.getChangeActivation()
})
document.getElementById('clickESTL').addEventListener('click', function () {
    tableL.getChangeActivation()
})

