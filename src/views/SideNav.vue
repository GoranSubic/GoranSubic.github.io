<template>
    <div id="mysidenav">
        <div id="my-img">
            <img class="my-img" alt="My image" src="../assets/goran.png">
        </div>
    </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
      msgSideNav: String
  }
}
</script>

<style>
    .my-img {
        position: fixed;
        display: block;
        width: 100%;
        max-width: 230px;
        margin: 0 auto;
        left: 5px;
        border-radius: 25%;
        border: 10px solid rgb(65, 184, 131);
    }
</style>