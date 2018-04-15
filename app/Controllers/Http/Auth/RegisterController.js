'use strict'

class RegisterController {
    index ({ view }) {
        return view.render('auth.register')
    }

    register ({ request }) {
        const { email, username, password } = request.all()

        return request.all()
    }
}

module.exports = RegisterController
