'use strict'

class RegisterController {
    index ({ view }) {
        return view.render('auth.register')
    }

    register () {
        //
    }
}

module.exports = RegisterController
