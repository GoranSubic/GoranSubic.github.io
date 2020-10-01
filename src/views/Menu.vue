<template>
    <div id="menu-wrapper">
        <div class="menu">
            <ul id="app-menu">
                <items-list v-for="item in menu_array"
                            v-bind:items="item"
                            v-bind:key="item.lst">
                </items-list>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        data() {
            return {
                menu_array: [
                    { lst: 'Home' },
                    { lst: 'About' },
                    { lst: 'Contact' }
                ]
            }
        }
};
</script>

<style>
    .menu-wrapper {
        position: fixed;
        top: 215px;
        left: 15px;
        width: 50px;
        height: 50px;
        box-sizing: border-box;
    }

    .menu {
        text-align: center;
        color: green;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.5;
        width: 100%;
        height: 0;
        overflow: visible;
        /*background: rgba(25, 25, 25, 0.85);*/
        z-index: 1;
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .menu ul li {
        display: inline-block;
        width: 100px;
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

    .menu ul li:hover {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }

    .menu-wrapper .toggle:checked + .menu {
        opacity: 1;
        width: 100vw;
        height: 100vh;
    }

</style>