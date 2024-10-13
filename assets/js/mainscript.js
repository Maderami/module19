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
        this.statusActivation = statusActivation
}

function ElectricKettle(volume, thermoregulator, delStart, statusActivation) {
    this.volume = volume,
        this.thermoregulator = `${thermoregulator}`,
        this.delStart = `${delStart}`,
        this.statusActivation = statusActivation
}

TableLamp.prototype = new ElectronicDevice('Настольный светильник Xiaomi Mi Smart LED Desk Lamp 1S белый',
    'настольный светильник', '12 мес', 'Xiaomi Mi Smart LED Desk Lamp 1S', '9 Вт')
ElectricKettle.prototype = new ElectronicDevice('Электрочайник Econ ECO-1781KE бежевый',
    'электрочайник', '12 мес', 'Econ ECO-1781KE', '1500 Вт')

tableLamp = new TableLamp('белый', 'LED', '1', ElectronicDevice.prototype.shutdownDevice())
electricKettle = new ElectricKettle('1.8л', 'нет', 'нет', ElectronicDevice.prototype.shutdownDevice())

console.log(tableLamp)
console.log(electricKettle)

document.getElementById('tableLamp').innerHTML = tableLamp.name + "<br>" + tableLamp.modelDevice + '<br>' + tableLamp.color + '<br>' + tableLamp.statusActivation + '<br>'

document.getElementById('electricKettle').innerHTML = electricKettle.name + "<br>" + electricKettle.modelDevice + '<br>' + electricKettle.delStart + '<br>' + electricKettle.statusActivation + '<br>'

document.getElementById('clickEnSHTL').addEventListener('click', function () {
    tableLamp.statusActivation = ElectronicDevice.prototype.enabledDevice()
    console.log('checking button', tableLamp)
})