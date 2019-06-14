<template>
  <el-container>
    <el-header>
      <el-button type="primary" @click="newApp();showModal()">
        <i class="el-icon-plus el-icon--left"></i>
        {{$t("views.pushnoti.new-app")}}
      </el-button>
    </el-header>
    <el-main>
      <el-table
          :data="apps"
          style="width: 100%">
        <el-table-column
            prop="appId"
            :label="$t('views.pushnoti.title.app-id')"
            width="180">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-table :data="scope.row.platforms">
              <el-table-column prop="type" :label="$t('views.pushnoti.title.platform')"/>
              <el-table-column prop="bundle" :label="$t('views.pushnoti.title.bundle-id')"/>
              <el-table-column prop="file" :label="$t('views.pushnoti.title.keychain')"/>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
            :label="$t('views.pushnoti.title.platforms')">
          <template slot-scope="scope">
            {{scope.row.platforms.length}}
          </template>
        </el-table-column>
        <el-table-column
            width="180"
            :label="$t('views.pushnoti.title.actions')">
          <template slot-scope="scope">
            <el-button @click="showDetail(scope.row)">{{$t("views.pushnoti.detail")}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-dialog :visible.sync="dialogVisible">
      <el-row type="flex" justify="center">
        <el-upload
            :action="resPath" drag
            :on-remove="fileChanged"
            :on-success="uploadedFile"
            multiple>
          <i class="el-icon-upload"></i>
          <div>{{$t('views.pushnoti.uploadFileHere')}}</div>
        </el-upload>
      </el-row>
      <el-row>
        <el-col class="model-title">{{$t('views.pushnoti.title.app-id')}}</el-col>
        <el-col>
          <el-input v-model="editingApp.appId" clearable></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col class="model-title" :span="6">{{$t('views.pushnoti.title.platforms')}}</el-col>
      </el-row>
      <el-card v-for="(platform, index) in editingApp.platforms" :key="platform.id" style="margin-top: 5px">
        <el-row>
          <el-col :span="6">{{$t('views.pushnoti.title.platform')}}</el-col>
          <el-col :span="18">
            <el-autocomplete
                v-model="platform.type"
                :fetch-suggestions="suggestions"
                clearable/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="model-title">{{$t('views.pushnoti.title.bundle-id')}}</el-col>
          <el-col :span="18">
            <el-input v-model="platform.bundle" clearable></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">{{$t('views.pushnoti.title.keychain')}}</el-col>
          <el-col :span="18">
            <el-autocomplete
                v-model="platform.file"
                :fetch-suggestions="uploadedFileFilter"
                clearable>
            </el-autocomplete>
          </el-col>
        </el-row>
        <el-row>
          <el-button style="width: 100%" size="mini" type="danger" round icon="el-icon-delete"
                     @click="removePlatform(index)"
          ></el-button>
        </el-row>
      </el-card>
      <el-row class="add-btn">
        <el-button style="margin-top: 10px" icon="el-icon-plus" circle @click="addPlatform"></el-button>
      </el-row>

      <el-row>
        <el-button style="width: 100%; margin-top: 15px"
                   type="primary"
                   round
                   @click="saveApp">
          {{$t('views.pushnoti.title.save')}}
        </el-button>
      </el-row>
    </el-dialog>
  </el-container>
</template>
<script>
  import {GetAllApps, SaveApp} from "@api/noti.api";

  const platforms = [
    {value: "ios_apn"},
    {value: "android_fcm"},
    {value: "android_mi"}
  ]

  const emptyPlatform = () => {

    return {
      bundle: "",
      type: "",
      file: null,
      id: (Math.random() + '').substring(2)
    }
  }

  const emptyApp = () => {
    return {
      appId: "",
      platforms: []
    }
  }

  const transToUiObject = function (app) {
    const tempA = {}
    tempA.appId = app.appId
    tempA.platforms = []
    app.platforms.forEach(plt => {
      const tempP = {}
      tempP.file = plt.fileFullName
      tempP.type = plt.platform
      tempP.bundle = plt.namespace
      tempA.platforms.push(tempP)
    })
    return tempA
  }
  export default {
    data() {
      return {
        resPath: process.env.VUE_APP_RESOURCE_HOST + 'rest/resource/upload',
        filesMap: {},
        editingApp: emptyApp(),
        apps: [{
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
        }],
        dialogVisible: false,
      }
    }
    ,
    created() {
      GetAllApps()
        .then(resp => {
          this.$message.success("Updated!")
          const apps = []
          resp.forEach(app => {
            apps.push(transToUiObject(app))
          })
          this.apps = apps
        })
        .catch(err => {
          this.$message.error(err);
        })
    }
    ,
    methods: {
      newApp() {
        this.editingApp = emptyApp()
      },
      showDetail(app) {
        this.editingApp = app
        this.showModal()
      },
      checkValidity() {
        const checkedApp = {}
        const editing = this.editingApp
        if (!editing.appId) throw new Error("App Id can not be null")
        if (!editing.platforms || !editing.platforms.length) throw new Error("One platform at least")

        checkedApp.appId = editing.appId
        checkedApp.platforms = []
        editing.platforms.forEach(p => {
            const tempP = {}
            if (!p.type) throw new Error("Platform type is required")
            if (!p.file) throw new Error("Keychain file is required")
            const fileRid = this.filesMap[p.file]
            if (!fileRid) throw new Error("No updated keychain is found")

            tempP.namespace = p.bundle
            tempP.platform = p.type
            tempP.fileFullName = p.file
            const uri = process.env.VUE_APP_RESOURCE_HOST + 'rest/' + this.filesMap[p.file]
            tempP.keychainUri = uri
            tempP.keychainRid = fileRid
            checkedApp.platforms.push(tempP)
          }
        )
        return checkedApp
      },
      showModal() {
        this.dialogVisible = true
      },
      fileChanged(file, fileList) {
        this.$delete(this.filesMap, file.name)
      },
      uploadedFile(response, file, fileList) {
        this.$set(this.filesMap, file.name, response.data.file.rid)
      },
      uploadedFileFilter(str, cb) {
        const files = Object.keys(this.filesMap).map(
          filename => {
            return {value: filename}
          }
        )
        const result = str ? files.filter(f => f.value.indexOf(str) !== -1) : files
        cb(result)
      },
      suggestions(str, cb) {
        const results = str ? platforms.filter(p => p.value.indexOf(str) !== -1) : platforms
        cb(results)
      },
      addPlatform() {
        this.editingApp.platforms.push(emptyPlatform())
      },
      removePlatform(index) {
        this.editingApp.platforms.splice(index, 1)
      },
      saveApp() {
        try {
          SaveApp(this.checkValidity())
            .then(() => {
              this.dialogVisible = false
            })
            .catch(err => {
              this.$message.error(err)
            })
        } catch (e) {
          this.$message.error(e.message)
        }
      }
    },
  }

</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    line-height: 60px;
  }

  .el-row {
    line-height: 45px;
  }

  .add-btn {
    text-align: center;
  }

  .el-autocomplete {
    width: 100%;
  }

  .el-upload {
    width: 100%;
  }

  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .rid {
    font-size: 12px;
    color: #b4b4b4;
  }

</style>
