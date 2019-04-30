<template>
    <main>
        <the-navbar></the-navbar>

        <main class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16" style="margin-top: 110px;">
            <the-sidebar :data="menu"></the-sidebar>
            
            <div class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 bg-white border border-grey-light rounded">
                <the-header v-bind="meta"></the-header>

                <router-view></router-view>
            </div>
        </main>
    </main>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar'
    import TheHeader from '@/components/TheHeader'
    import TheSidebar from '@/components/TheSidebar'
    import menuData from '@/data/menu'

    export default {
        data() {
            return {
                menu: [],
                meta: {},
            }
        },

        components: {
            TheNavbar,
            TheHeader,
            TheSidebar,
        },

        methods: {
            setMeta(meta) {
                this.meta = meta
                this.menu = menuData[this.meta.menu]
            },
        },

        mounted() {
            this.setMeta(this.$router.currentRoute.meta)
        }
    }
</script>

<style>
    article > p {
        line-height: 2;
        
    }
</style>
