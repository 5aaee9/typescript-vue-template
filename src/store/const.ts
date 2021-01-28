
import { getModule } from 'vuex-module-decorators'
import { namespace } from 'vuex-class'
import store from './index'

import Auth from './modules/auth'

export const AuthModule = getModule(Auth, store)

export const AuthNamespace = namespace('auth')
