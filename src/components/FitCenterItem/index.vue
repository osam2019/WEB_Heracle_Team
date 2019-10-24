<template>
  <div class="item">
    <div class="hori">
      <span class="item-name">{{ center.name }}</span>
      <span style="display: flex">
        <el-alert
          v-if="center.promote"
          class="noti"
          title="광고"
          type="success"
          effect="dark"
          :closable="false"
        />
        <el-alert
          v-if="center.new"
          class="noti"
          title="신규"
          type="warning"
          effect="dark"
          :closable="false"
        />
      </span>
    </div>

    <span class="item-address">{{ center.address }}</span>
    <el-rate v-model="center.grade" disabled show-score />
  </div>
</template>
<script>
export default {
  props: ['center']
}
</script>
<style lang="scss" scoped>
.noti {
  width: auto;
  vertical-align: middle;
  margin-left: 10px;
}
.hori {
  display: table;
  margin-bottom: 10px;
}
.item {
  background: white;
  border-bottom: 3px solid #f0f2f5;
  padding: 15px;
  &:hover {
    cursor: pointer;
  }

  span {
    display: block;
  }
  .item-name {
    font-size: 19px;
    color: black;
    height: auto;
    display: table-cell;
    vertical-align: middle;
  }
  .item-address {
    color: #999999;
    margin-bottom: 10px;
  }
}
</style>
