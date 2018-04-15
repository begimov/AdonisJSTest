'use strict'

class RegisterController {
    index ({ view }) {
        return view.render('auth.register')
    }

    register ({ request }) {
        const { email, username, password } = request.all()

        const rules = {
            email: 'required|email|unique:users,email',
            username: 'required|unique:users,username',
            password: 'required'
        }
    }
}

module.exports = RegisterController
