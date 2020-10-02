<template>
    <aside id="mysidenav">
        <div id="my-img">
            <img class="my-img" alt="My image" src="../assets/GoranSubic.png">
        </div>
    </aside>
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
        max-width: 12rem;
        max-height: 12rem;
        border: 0.5rem solid rgb(65, 184, 131);
        display: block;
        margin: 0 auto;
        border-radius: 25%;
    }
</style>