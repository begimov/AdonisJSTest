'use strict'

class LoginController {

    index ({ view }) {
        return view.render('auth.login')
    }

    login({ request, response, session }) {
        const { email, password } = request.all()

        const rules = {
            email: 'required|email',
            password: 'required'
        }
    }

}

module.exports = LoginController
