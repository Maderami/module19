class ElectronicDevice {
    timeStart;
    timeEnd;
    constructor(name, typeDevice, warranty, modelDevice, power) {
        this.name = name,
            this.typeDevice = typeDevice,
            this.warranty = warranty,
            this.modelDevice = modelDevice,
            this.power = power
            this.powerPotreb = 0
    }
    setShutdownDevice() {
        return 'shutdown'
    }
    setEnabledDevice() {
        return 'enabled'
    }



    getChangeActivation(elementID, deviceName, buttonID) {


        if (document.getElementById(`${buttonID}`).innerText.toString() === 'Включить') {
            deviceName.prototype.statusActivation = this.setEnabledDevice()
            document.getElementById(`${elementID}`).innerHTML = ''
            document.getElementById(`${elementID}`).innerHTML = "<span>Название устройства: " + deviceName.prototype.name + "</span><br>" + "<span>Название модели: " + deviceName.prototype.modelDevice + '</span><br>' +"<span>Статус включения: "+ deviceName.prototype.statusActivation + '</span><br>' +
                '<span>Гарантия: ' + deviceName.prototype.warranty + '</span><br>' + '<span>Тип устройства: '+ deviceName.prototype.typeDevice + '</span><br>' + "<span>Дополнительное описание: <br>" + deviceName.getInfoDevice() + '</span>'
            document.getElementById(`${buttonID}`).innerText = 'Выключить'
            this.timeStart = new Date()

        } else if (document.getElementById(`${buttonID}`).innerText.toString() === 'Выключить') {
            deviceName.prototype.statusActivation = this.setShutdownDevice()
            document.getElementById(`${elementID}`).innerHTML = ''
            this.timeEnd = new Date()
            let diffTimeSE = this.timeEnd.getTime() - this.timeStart.getTime()
            let hDiff = diffTimeSE / (3600 * 1000);
            deviceName.prototype.powerPotreb = (deviceName.prototype.power * hDiff) / 1000
            document.getElementById(`${elementID}`).innerHTML = "<span>Название устройства: " + deviceName.prototype.name + "</span><br>" +  "<span>Название модели: " + deviceName.prototype.modelDevice + '</span><br>'  +  "<span>Статус включения: "+ deviceName.prototype.statusActivation + '</span><br>' + "<span>Общая мощность ватт: "+ deviceName.prototype.power + '</span><br>'
            + "<span>Затраченная мощность за период включения: "+ deviceName.prototype.powerPotreb + '</span><br>'
            document.getElementById(`${buttonID}`).innerText = 'Включить'
        }
        console.log('checking button', this.deviceName)
    }
}

class TableLamp{
    constructor(color, typeLightSource, countLightSource, statusActivation) {
        this.color = color,
            this.typeLightSource = typeLightSource,
            this.countLightSource = countLightSource,
            this.statusActivation = statusActivation

    }
    getInfoDevice(){
        return '<span>Основной цвет: ' + this.color +  '</span><br>' + '<span>Тип источника света: ' + this.typeLightSource + '</span><br>' + '<span>Количество источников света: ' + this.countLightSource + '</span><br>'
    }
}

class ElectricKettle {
    constructor(volume, thermoregulator, delStart, statusActivation) {
        this.volume = volume,
            this.thermoregulator = `${thermoregulator}`,
            this.delStart = `${delStart}`,
            this.statusActivation = statusActivation
    }

    getInfoDevice(){
        return '<span>Объем: ' + this.volume +  '</span><br>' + '<span>Терморегулятор: ' + this.thermoregulator +  '</span><br>' + '<span>Отложенный старт: ' + this.delStart +  '</span><br>'
    }

}

let electroDev = new ElectronicDevice()
let tableLamp = new TableLamp()
let electricKettle = new ElectricKettle()

tableLamp = new TableLamp('белый', 'LED', '1', electroDev.setShutdownDevice())
electricKettle = new ElectricKettle('1.8л', 'нет', 'нет', electroDev.setShutdownDevice())

tableLamp.prototype = new electroDev.constructor('Настольный светильник Xiaomi Mi Smart LED Desk Lamp 1S белый',
    'настольный светильник', '12 мес', 'Xiaomi Mi Smart LED Desk Lamp 1S', '9')
electricKettle.prototype = new electroDev.constructor('Электрочайник Econ ECO-1781KE бежевый',
    'электрочайник', '12 мес', 'Econ ECO-1781KE', '1500')
console.log(electricKettle)

document.getElementById('tableLamp').innerHTML = "<span>Название устройства: " + tableLamp.prototype.name + "</span><br>" +  "<span>Название модели: " + tableLamp.prototype.modelDevice + '</span><br>'  +  "<span>Статус включения: " + tableLamp.statusActivation + '</span><br>' + "<span>Общая мощность ватт: "+ tableLamp.prototype.power + '</span><br>'

document.getElementById('electricKettle').innerHTML = "<span>Название устройства: " + electricKettle.prototype.name + "</span><br>" +  "<span>Название модели: " + electricKettle.prototype.modelDevice + '</span><br>'  +  "<span>Статус включения: " + electricKettle.statusActivation + '</span><br>' + "<span>Общая мощность ватт: "+ electricKettle.prototype.power + '</span><br>'

document.getElementById('clickEnSHEK').addEventListener('click', function () {
    electroDev.getChangeActivation('electricKettle', electricKettle, 'clickEnSHEK')
})
document.getElementById('clickEnSHTL').addEventListener('click', function () {
    electroDev.getChangeActivation('tableLamp', tableLamp, 'clickEnSHTL')
})

