<template>
    <aside class="w-full lg:w-1/5 lg:px-6 text-xl">
        <template v-for="(items, index) in data">
            <p :key="items.category" class="font-bold">
                {{ items.category }}
            </p>

            <ul :key="index">
                <li v-for="item in normalizedData(items.pages)" :key="item.path">
                    <router-link v-if="item.title" :to="item.path">
                        <span>{{ item.title }}</span>
                    </router-link>

                    <template v-else>
                        <p>{{ item.category }}</p>
                        <ul>
                            <li v-for="subItem in normalizedData(item.pages)" :key="subItem.title">
                                <router-link :to="subItem.path">
                                    <span>{{ subItem.title }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </template>
                </li>
            </ul>
        </template>
    </aside>
</template>

<script>
    import routes from '@/data/routes'

    export default {
        props: {
            data: Array,
        },

        methods: {
            normalizedData(items) {
                return items.map((item) => {
                    return typeof item === 'string'
                        ? routes[item]
                        : item
                })
            },
        },
    }
</script>
