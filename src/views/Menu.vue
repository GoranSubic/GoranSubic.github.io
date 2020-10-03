<template>
    <nav id="menu-wrapper">
        <div class="menu">
            <ul id="app-menu">
                <my-menu v-for="item in menu_array"
                        v-bind:menu_array="item"
                        v-bind:key="item.lst">
                </my-menu>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'mymenu',
        data() {
            return {
                isHidden: false,
                menu_array: [
                    { lst: "about" },
                    { lst: "education" },
                    { lst: "experience" }
                ]
            }
        },
        methods: {
            showSection: function (liElement) {
                var data = liElement.firstChild.innerHTML + "-data";
                var x = document.getElementById(data);
                var main = x.parentNode;
                var node = main.firstChild;
                while (node) {
                    if (node !== x && node.nodeType === Node.ELEMENT_NODE)
                        node.style.display = "none";
                    node = node.nextElementSibling || node.nextSibling;
                }
                x.style.display = "block";
            },
        },
        props: {
            msgMenu: String
        },
        created() {
            window.showSection = this.showSection;
        },
    };
</script>

<style>
    #menu-wrapper {
        width: 100vh;
        height: auto;
        top: 0;
        position: fixed;
        box-sizing: border-box;
    }

    .menu {
        text-align: center;
        position: fixed;
        background-color: rgb(214, 212, 217);
        top: 0;
        opacity: 0.75;
        width: 100vh;
        overflow: visible;
        z-index: 1;
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-content: center;
    }

        .menu ul li {
            text-transform: uppercase;
            display: inline-block;
            width: auto;
            padding: 5px;
            margin: 5px;
            color: var(--light);
            font-size: 20px;
            list-style-type: none;
            text-align: center;
            margin: 0;
            cursor: pointer;
            box-sizing: border-box;
            border-bottom: 2px solid transparent;
        }

            .menu ul li a {
                color: rgb(65, 184, 131);
                text-decoration: none;
            }
        
        /*.menu ul li:hover {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }

    .menu-wrapper .toggle:checked + .menu {
        opacity: 1;
        width: 100vw;
        height: 100vh;
    }*/

</style>