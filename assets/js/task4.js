
function ElectronicDevice(name, typeDevice, warranty, modelDevice, power) {
    this.name = name,
        this.typeDevice = typeDevice,
        this.warranty = warranty,
        this.modelDevice = modelDevice,
        this.power = power
}

ElectronicDevice.prototype.shutdownDevice = function () {
    return 'shutdown'
}
ElectronicDevice.prototype.enabledDevice = function () {
    return 'enabled'
}

function TableLamp(color, typeLightSource, countLightSource, statusActivation) {
    this.color = color,
        this.typeLightSource = typeLightSource,
        this.countLightSource = countLightSource,
        this.statusActivation = statusActivation,
        this.getChangeActivation = function () {
            if (document.getElementById('clickEnSHTL').innerText.toString() === 'Включить') {
                tableLamp.statusActivation = ElectronicDevice.prototype.enabledDevice()
                document.getElementById('tableLamp').innerHTML = ''
                document.getElementById('tableLamp').innerHTML = "<span>Название модели: " + tableLamp.name + "</span><br>" + tableLamp.modelDevice + '<br>' + tableLamp.color + '<br>' + tableLamp.statusActivation + '<br>'
                document.getElementById('clickEnSHTL').innerText = 'Выключить'
            } else if (document.getElementById('clickEnSHTL').innerText.toString() === 'Выключить') {
                tableLamp.statusActivation = ElectronicDevice.prototype.shutdownDevice()
                document.getElementById('tableLamp').innerHTML = ''
                document.getElementById('tableLamp').innerHTML = "<span>Название модели: " + tableLamp.name + "</span><br>" + tableLamp.modelDevice + '<br>' + tableLamp.color + '<br>' + tableLamp.statusActivation + '<br>'
                document.getElementById('clickEnSHTL').innerText = 'Включить'
            }
            console.log('checking button', electricKettle)
        }
}

function ElectricKettle(volume, thermoregulator, delStart, statusActivation) {
    this.volume = volume,
        this.thermoregulator = `${thermoregulator}`,
        this.delStart = `${delStart}`,
        this.statusActivation = statusActivation,
        this.getChangeActivation = function () {
            if (document.getElementById('clickEnSHEK').innerText.toString() === 'Включить') {
                electricKettle.statusActivation = ElectronicDevice.prototype.enabledDevice()
                document.getElementById('electricKettle').innerHTML = ''
                document.getElementById('electricKettle').innerHTML = electricKettle.name + "<br>" + electricKettle.modelDevice + '<br>' + electricKettle.delStart + '<br>' + electricKettle.statusActivation + '<br>'
                document.getElementById('clickEnSHEK').innerText = 'Выключить'
            } else if (document.getElementById('clickEnSHEK').innerText.toString() === 'Выключить') {
                electricKettle.statusActivation = ElectronicDevice.prototype.shutdownDevice()
                document.getElementById('electricKettle').innerHTML = ''
                document.getElementById('electricKettle').innerHTML = electricKettle.name + "<br>" + electricKettle.modelDevice + '<br>' + electricKettle.delStart + '<br>' + electricKettle.statusActivation + '<br>'
                document.getElementById('clickEnSHEK').innerText = 'Включить'
            }
            console.log('checking button', electricKettle)
        }
}

TableLamp.prototype = new ElectronicDevice('Настольный светильник Xiaomi Mi Smart LED Desk Lamp 1S белый',
    'настольный светильник', '12 мес', 'Xiaomi Mi Smart LED Desk Lamp 1S', '9 Вт')
ElectricKettle.prototype = new ElectronicDevice('Электрочайник Econ ECO-1781KE бежевый',
    'электрочайник', '12 мес', 'Econ ECO-1781KE', '1500 Вт')

tableLamp = new TableLamp('белый', 'LED', '1', ElectronicDevice.prototype.shutdownDevice())
electricKettle = new ElectricKettle('1.8л', 'нет', 'нет', ElectronicDevice.prototype.shutdownDevice())

document.getElementById('tableLamp').innerHTML = "<span>Название модели: " + tableLamp.name + "</span><br>" + tableLamp.modelDevice + '<br>' + tableLamp.color + '<br>' + tableLamp.statusActivation + '<br>'

document.getElementById('electricKettle').innerHTML = electricKettle.name + "<br>" + electricKettle.modelDevice + '<br>' + electricKettle.delStart + '<br>' + electricKettle.statusActivation + '<br>'

document.getElementById('clickEnSHEK').addEventListener('click', function () {
    electricKettle.getChangeActivation()
})
document.getElementById('clickEnSHTL').addEventListener('click', function () {
    tableLamp.getChangeActivation()
})

