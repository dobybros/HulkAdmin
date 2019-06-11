<template>
  <el-container>
    <el-header>
      <el-button type="primary">
        <i class="el-icon-plus el-icon--left"></i>
        {{$t("views.pushnoti.new-app")}}
      </el-button>
    </el-header>
    <el-main>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="date"
            :label="$t('views.pushnoti.title.app-id')"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            :label="$t('views.pushnoti.title.bundle-id')">
        </el-table-column>
        <el-table-column
            width="180"
            :label="$t('views.pushnoti.title.actions')">
          <el-button>{{$t("views.pushnoti.detail")}}</el-button>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
  import {GetAllApps} from "@api/noti.api";

  export default {
    methods: {
    },
    created() {
      GetAllApps()
        .then(resp => {
          this.$message.success("Updated!")
        })
        .catch(err => {
          this.$message.error(err);
        })
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }

</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    line-height: 60px;
  }

</style>
