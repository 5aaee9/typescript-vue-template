<template>
    <h1>Hello, World</h1>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {} from '@/store/const'

@Component({})
export default class IndexRoute extends Vue {

}
</script>


<style lang="scss" scoped>
    h1 {
        color: rgb(255, 93, 93) !important;
    }
</style>
