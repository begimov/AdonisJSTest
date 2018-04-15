'use strict'

class LoginController {

    index ({ view }) {
        return view.render('auth.login')
    }

}

module.exports = LoginController
