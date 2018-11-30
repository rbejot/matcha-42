module.exports = (elements) => {
    delete elements['password']
    delete elements['confirmed']
    delete elements['confirmation_code']
    delete elements['create_date']
    elements['completed'] = true
    // handle location when front
    for (elem in elements) {
        if (elements[elem] === null)
            elements['completed'] = false
    }
    return elements
}