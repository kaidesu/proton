<template>
    <header class="mb-10 py-6 border-b-2 border-grey-lighter">
        <nav>Breadcrumbs</nav>

        <h1 v-html="title" class="font-sans break-normal text-black pt-6 pb-2 text-4xl"></h1>
        <h2 v-html="subtitle" class="font-sans break-normal text-grey-dark font-normal text-xl"></h2>
    </header>
</template>

<script>
    export default {
        props: {
            breadcrumb: Array,
            title: String,
            subtitle: String,
        }
    }
</script>

