<template>
    <div>
        <h1 ref="myref">Hooks tutorial</h1>
        <h2>Meu nome {{name}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'Davi'
        }
    },
    beforeCreate() {
        console.log('beforeCreate', this.name)
    },
    created() {
        console.log('created', this.name)
    },
    mounted() {
        console.log('mounted', this.$refs.myref)
    },
}
</script>