<template>
    <div class="toggle-switch" @click="toggle">
        <span id="toggle-switch-circle" :active="toggled"></span>
        <fa :icon="faMoon" :active="!toggled"></fa>
        <fa :icon="faSun" :active="toggled"></fa>
    </div>
</template>

<script>
    import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

    export default {
        data: function() {
            return {
                faMoon,
                faSun
            }
        },
        computed: {
            toggled: {
                get: function() {
                    return this.$colorMode.value == "light";
                }
            }
        },
        mounted: function() {
            this.setLocalStorage();
        },
        methods: {
            setLocalStorage: function() {
                // library's local storage isn't working so this is a workaround
                if (process.browser) {
                    localStorage.setItem("color-mode", this.$colorMode.value);
                }
            },
            toggle: function(event) {
                event.preventDefault();
                this.$colorMode.value = (this.toggled) ? "dark" : "light";
                this.setLocalStorage();
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .toggle-switch {
        padding: 4px 4px !important;
        background: #0e0e0e;
        color: #ffffff;
        border-radius: 50px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;

        z-index: 0;

        & > * {
            border-radius: 15px;
            padding: 4px 4px;

            font-size: 24px;
            transition: color 150ms ease;

            z-index: 2;

            &[active] {
                color: #0e0e0e;
            }

            &:not(:last-child) {
                margin-right: 8px;
            }
        }

        & #toggle-switch-circle {
            position: absolute;
            left: 0;
            margin: 2px;
            
            padding: 14px;
            background: #fff;
            color: #0e0e0e;

            z-index: 1;

            transition: left 150ms ease;

            &[active] {
                // HACK: This may not always be the correct position, but it's smooth
                left: calc(100% - 32px);
            }
        }
    }

    html.dark-mode .toggle-switch {
        background: #FFFFFF;
        color: #0E0E0E;

        & #toggle-switch-circle {
            color: #FFFFFF;
            background: #0E0E0E;
        }

        & > *[active] {
            color: #FFFFFF;
        }
    }
</style>