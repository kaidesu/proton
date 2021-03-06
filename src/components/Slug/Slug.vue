<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <input
            class="form__control"
            :class="{'font-mono': monospaced, 'form__error': hasError}"
            :id="name"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            v-model.lazy="model"
            ref="input"
            @blur="onBlur"
        >

        <div class="form__control--meta" v-if="help || errorMessage">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-slug',

        data() {
            return {
                shouldSlugify: false,
            }
        },

        computed: {
            model: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', this.slugify(value))
                }
            }
        },

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: '',
            },
            type: {
                type: String,
                default: 'text',
            },
            required: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            monospaced: {
                type: Boolean,
                default: false,
            },
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
            autocomplete: {
                required: false,
                type: String,
                default: '',
            },
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            },
            delimiter: {
                required: false,
                type: String,
                default: '-',
            },
            watch: {
                required: false,
                type: String,
                default: '',
            },
        },

        watch: {
            watch(value) {
                if (this.shouldSlugify) {
                    this.model = this.slugify(value)
                }

                this.updateState()
            },

            value(value) {
                this.model = value

                this.updateState()
            },
        },

        methods: {
            updateState() {
                let modelIsNull = this.model === null
                let modelEqualsWatch = this.model === this.slugify(this.watch)

                this.shouldSlugify = modelIsNull || modelEqualsWatch
            },

            slugify(text) {
                if (text) {
                    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
                    const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
                    const p = new RegExp(a.split('').join('|'), 'g')
    
                    return text.toString().toLowerCase().trim()
                    .replace(p, c =>                                                    // Replace special characters
                        b.charAt(a.indexOf(c)))
                    .replace(/&+/gi, 'and')                                              // Replace 1 or more & characters with the word 'and'
                    .replace(/\s+/g, this.delimiter)                                     // Convert spaces with delimiter
                    .replace(/[^\w\-]+/g, '')                                            // Remove all non-word chars
                    .replace(new RegExp(this.delimiter + '{2,}', 'g'), this.delimiter);  // Replace multiple delimiters with a single one
                }

                return null
            },

            onBlur() {
                if (this.model == null) {
                    this.model = this.slugify(this.watch)
                }
            }
        },

        mounted() {
            this.model = this.value

            this.updateState()
        }
    }
</script>
