import { Store } from 'vuex'
import merge from 'deepmerge'

const KEY = 'vuex'

export default function <State> (): (store: Store<State>) => void {
    return function (store: Store<State>) {
        const data: string | null = localStorage.getItem(KEY)

        if (data) {
            store.replaceState(merge(store.state, JSON.parse(data)))
        }

        store.subscribe((_, state) => {
            localStorage.setItem(KEY, JSON.stringify(state))
        })
    }
}
