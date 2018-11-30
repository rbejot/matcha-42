module.exports = (elements) => {
    delete elements['password']
    delete elements['confirmed']
    delete elements['confirmation_code']
    delete elements['create_date']
    delete elements['forgot']
    delete elements['mail']
    // handle location when front
    return elements
}