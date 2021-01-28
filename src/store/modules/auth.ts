import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
    name: 'auth',
    namespaced: true,
})
export default class Auth extends VuexModule {
    token = ''

    @Mutation
    setToken(token: string): void {
        this.token = token
    }
}
