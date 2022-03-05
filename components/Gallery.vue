<template>
  <div class="flex">
    <div class="left">
      Left
    </div>

    <div class="right">
      Right
    </div>
  </div>
</template>

<style lang="scss" scoped>

.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;

}

.left {
  background-color: red;
  flex: 1 1 0px;
}

.right {
  background-color: green;
  flex: 1 1 0px;
}

</style>