<template>
    <div class="bg-white fixed w-full z-10 pin-t shadow">
        <nav class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0 px-6">
            <div class="w-1/2 pl-2 md:pl-0">
                <a href="/" class="text-black text-base xl:text-xl no-underline hover:no-underline font-bold">
                    Proton
                </a>
            </div>
            
            <div class="w-1/2 pr-0">
                <div class="flex relative inline-block float-right">
                    <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                        <li class="mr-6 my-2 md:my-0">
                            <a href="https://github.com/efellemedia/proton" exact class="text-black text-sm no-underline hover:no-underline font-bold">
                                <i class="fab fa-github text-black pr-3"></i>
                                GitHub
                            </a>
                        </li>

                        <li class="mr-6 my-2 md:my-0">
                            <a href="https://twitter.com/seattlewebsites" exact class="text-black text-sm no-underline hover:no-underline font-bold">
                                <i class="fab fa-twitter text-blue pr-3"></i>
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="W-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 z-20">
                <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                    <li class="mr-6 my-2 md:my-0">
                        <router-link to="/" exact class="block py-1 md:py-3 pl-1 align-middle text-grey no-underline hover:text-black border-b-2 border-white hover:border-teal">
                            <i class="fas fa-home pr-3"></i>
                            Home
                        </router-link>
                    </li>

                    <li class="mr-6 my-2 md:my-0">
                        <router-link to="/documentation" class="block py-1 md:py-3 pl-1 align-middle text-grey no-underline hover:text-black border-b-2 border-white hover:border-teal">
                            <i class="fas fa-book pr-3"></i>
                            Documentation
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import routes from '@/data/routes'
    
    export default {
        props: {
            breadcrumb: Array,
            title: String,
            subtitle: String,
        },

        data() {
            return {
                routes
            }
        }
    }
</script>
