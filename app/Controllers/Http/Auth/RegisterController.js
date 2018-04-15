'use strict'

class RegisterController {
    index ({ view }) {
        return view.render('auth.register')
    }

    register () {
        return 'REGISTER POST'
    }
}

module.exports = RegisterController
