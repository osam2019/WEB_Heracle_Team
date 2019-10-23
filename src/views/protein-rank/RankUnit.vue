<template>
  <div class="unit-container">
    <el-row class="unit-header">
      <el-col :span="20">
        <div>
          <p>
            <b>{{ data.subtitle }}</b>
          </p>
          <p>{{ data.title }}</p>
        </div>
      </el-col>
      <el-col :span="1">
        <div>
          <el-button icon="el-icon-search" circle />
        </div>
      </el-col>
    </el-row>
    <div class="unit-body">
      <ul>
        <li v-for="(product, idx) of data.ranker" :key="product.id" class="unit-li">
          <RankUnitItem :product="product" :idx="idx" />
          <hr>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import RankUnitItem from './RankUnitItem'

export default {
  components: {
    RankUnitItem
  },
  props: ['data']
}
</script>
<style scoped>
.unit-header {
  background: greenyellow;
  padding: 5px;
}
.unit-li {
  list-style-type: none;
}
</style>
