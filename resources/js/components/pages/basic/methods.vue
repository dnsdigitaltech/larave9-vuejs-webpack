<template>
    <div>
        <h1>Podemos ver alguns dados aqui: {{ views }}</h1>
        <button @click="updateCounter(1)">+</button> <button @click="updateCounter(-1)">-</button>
        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.post }}</p>
        </div>
        <hr>
        <div>
            <h1 v-if="showItem">
                Exibir esse item se "showItem" for verdadeiro
            </h1>
            <h1 v-else>
                Exibir esse item se "showItem" for falso
            </h1>
            <button @click="showItem = !showItem">Checar Verdadeiro|Falso</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            views: 0,
            blogs: [],
            showItem: false
        }
    },

    methods: {
        updateCounter(number){
            this.views +=number
        },
        // changeShowItem(){
        //     this.showItem = !this.showItem
        // }
    },

    created(){
        this.views = 100
        //obtem as visualizações dos posts
        let posts = [{title: 'Titulo do blob 1', post: 'Conteúdo do blog 1', id: 1},
            {title: 'Titulo do blob 2', post: 'Conteúdo do blog 2', id: 2},
            {title: 'Titulo do blob 3', post: 'Conteúdo do blog 3', id: 3},
            {title: 'Titulo do blob 4', post: 'Conteúdo do blog 4', id: 4},
            {title: 'Titulo do blob 5', post: 'Conteúdo do blog 5', id: 5},
            {title: 'Titulo do blob 6', post: 'Conteúdo do blog 6', id: 6},
        ]
        this.blogs = posts
    }
}
</script>