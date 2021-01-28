import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
    name: 'auth',
    namespaced: true,
})
export default class Auth extends VuexModule {
    token: string = ''

    @Mutation
    setToken(token: string) {
        this.token = token
    }
}
