let head
let _done = false
let eventName = 'app-loaded'

function init() {
    head = document.getElementsByTagName('head')[0]  
}

const services = {
    plain: { prop: 'name', value: 'content' },
    twitter: { prop: 'name', value: 'content' },
    og: { prop: 'property', value: 'content' },
}

export function meta(prop, value) {
    if (_done) return false
    if (!head) init()

    propToProps(prop).forEach(_prop => {
        const match = _prop.match(/(.+)\:/)
        const serviceName = match && match[1] || 'plain'
        const service = services[serviceName]
        const propName = service.prop
        const valueName = service.value
        const oldElement = document.querySelector(`meta[${propName}='${_prop}']`)
        if (oldElement) oldElement.remove()

        const newElement = document.createElement('meta')
        newElement.setAttribute(propName, _prop)
        newElement.setAttribute(valueName, value)        
        head.appendChild(newElement)
    })
}

export function done() { _done = true }

window.addEventListener(eventName, () => done())

function propToProps(prop) {
    const props = [prop]
    if (!prop.match(':'))
        props.push('og:' + prop)
    return props
}

