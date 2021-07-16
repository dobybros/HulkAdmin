<template>
  <div>
    <el-row>
      <el-col :span="4" style="margin: 10px">
        <el-button type="primary" @click="addNewApp">{{$t("views.versions.title.add")}}</el-button>
      </el-col>
    </el-row>
    <el-row v-for="(appList, project) in apps">
      <el-table
          :data="appList"
          :title="project"
          border
          style="width: 100%">
        <el-table-column
            :label="project"
            align="center">
          <el-table-column
              prop="name"
              :label="$t('views.versions.title.name')"
              width="140">
          </el-table-column>
          <el-table-column
              prop="appId"
              :label="$t('views.versions.title.appId')"
              width="250">
          </el-table-column>
          <el-table-column
              prop="minBuild"
              :label="$t('views.versions.title.minBuild')">
          </el-table-column>
          <el-table-column :label="$t('views.versions.title.actions')">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="editAppInfo(scope.row)">{{$t('views.versions.title.editApp')}}
              </el-button>
              <el-button
                  size="mini"
                  @click="deleteApp(scope.row, scope.$index)">{{$t('views.deploy.delete')}}
              </el-button>
              <!--              <el-button-->
              <!--                  size="mini"-->
              <!--                  @click="currentEditApp=scope.row">{{$t('views.versions.title.addBuild')}}-->
              <!--              </el-button>-->
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>

    </el-row>
    <el-dialog size="medium" :title="isCreate ? $t('views.versions.title.create') : currentEditApp.name"
               :visible.sync="showEditModal"
               ref="editDialog">
      <el-form ref="form" :model="currentEditApp" label-width="130px">
        <el-tabs>
          <el-tab-pane :label="$t('views.versions.title.infos')">
            <el-form-item :label="$t('views.versions.title.appNumber')">
              <el-input v-model="currentEditApp.appNumber"></el-input>
            </el-form-item>
            <el-form-item :label="$t('views.versions.title.name')">
              <el-input v-model="currentEditApp.name"></el-input>
            </el-form-item>
            <el-form-item :label="$t('views.versions.title.appId')">
              <el-input v-model="currentEditApp.appId"></el-input>
            </el-form-item>
            <el-form-item :label="$t('views.versions.title.project')">
              <el-input v-model="currentEditApp.project"></el-input>
            </el-form-item>
            <el-form-item :label="$t('views.versions.title.deviceType')">
              <el-input v-model="currentEditApp.deviceType"></el-input>
            </el-form-item>
            <el-form-item :label="$t('views.versions.title.deviceReg')">
              <el-input v-model="currentEditApp.deviceRegular"></el-input>
            </el-form-item>
            <el-form-item :label="$t('views.versions.title.minBuild')">
              <el-input v-model="currentEditApp.minBuild"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane :label="$t('views.versions.title.builds')">
            <div style="text-align: center; margin-bottom: 10px">
              <el-button @click="addBuild" type="primary" icon="el-icon-plus" circle></el-button>
            </div>
            <el-card style="margin-bottom: 15px;" v-for="(build,idx) in currentEditApp.builds" class="box-card">
              <el-form label-width="130px" :model="build">
                <el-form-item :label="$t('views.versions.title.version')">
                  <el-input v-model="build.version"></el-input>
                </el-form-item>
                <el-form-item :label="$t('views.versions.title.buildNumber')">
                  <el-input v-model="build.buildNumber"></el-input>
                </el-form-item>
                <el-form-item :label="$t('views.versions.title.type')">
                  <el-input v-model="build.type"></el-input>
                </el-form-item>
                <el-form-item :label="$t('views.versions.title.releaseNotes')">
                  <el-select style="width: 100%;" v-model="build.releaseNotes"
                             :no-data-text="$t('views.versions.title.inputReleaseNotes')"
                             multiple
                             filterable
                             default-first-option
                             allow-create
                             :placeholder="$t('views.versions.title.inputReleaseNotes')"
                  >
                  </el-select>
                </el-form-item>
                <el-upload
                    class="upload-demo"
                    style="text-align: center;"
                    drag
                    v-if="!build.resourceId"
                    :action="uploadUrl"
                    :limit="1"
                    :auto-upload="true"
                    :on-success="uploadSuccess(build)"
                    multiple>
                  <i class="el-icon-upload"></i>
                </el-upload>
                <div style="text-align: center;">
                  <el-button @click="deleteBuild(idx)" type="danger" icon="el-icon-delete"
                             circle></el-button>
                </div>
              </el-form>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <el-button @click="save" style="position: fixed;right: 20%;width: 60px;height: 60px;bottom: 150px;" type="success"
                 icon="el-icon-check" circle></el-button>
    </el-dialog>
  </div>
</template>

<script>
  import {GetAllApp, PutApp, DeleteApp} from "../../../api/versions.api";

  export default {
    name: "Version",
    data() {
      return {
        showEditModal: false,
        currentEditApp: {},
        apps: {},
        isCreate: false
      }
    },
    created() {
      this.updateAllApps()
    },
    computed: {
      uploadUrl() {
        // return process.env.VUE_APP_RESOURCE_HOST + 'rest/resource/upload'
        return process.env.VUE_APP_RESOURCE_HOST + 'rest/resource/upload'
      }
    },
    methods: {
      updateAllApps() {
        GetAllApp().then(resp => {
          const newApp = {}
          resp.forEach(app => {
            let project = app.project || 'others'
            if (!newApp[project]) {
              newApp[project] = []
            }
            newApp[project].push(app)
          })
          this.apps = newApp
        })
      },
      deleteApp(app, index) {
        console.log(app)
        this.$confirm('Do you want to delete?', 'Tips', {
          confirmButtonText: 'Done',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          const appNumber = app.appNumber
          DeleteApp(appNumber).then((data) => {
            console.log(this)
            this.$message.success('Successfully');
            this.updateAllApps()
          }).catch(err => {
            console.error(err)
          })
        });

      },
      editAppInfo(app) {
        this.isCreate = false
        this.currentEditApp = JSON.parse(JSON.stringify(app))
        this.showEditModal = true
      },
      addNewApp() {
        this.isCreate = true
        this.currentEditApp = {}
        this.showEditModal = true
      },
      addBuild() {
        if (!this.currentEditApp.builds) {
          this.$set(this.currentEditApp, 'builds', [])
        }
        const newBuild = {
          buildNumber: 0
        }
        if (this.currentEditApp.builds.length) {
          const latest = this.currentEditApp.builds[0]
          newBuild.buildNumber = latest.buildNumber || 0 + 1
          newBuild.type = latest.type
        }
        this.currentEditApp.builds.unshift(newBuild)
      },
      uploadSuccess(build) {
        return (resp) => {
          if (resp.code === 1) {
            this.$set(build, 'resourceId', resp.data.file.rid)
          }
        }
      },
      save() {
        const app = this.currentEditApp
        PutApp(app).finally(() => {
          this.updateAllApps()
          this.showEditModal = false
        })
      },
      deleteBuild(index) {
        const deleteBuild = this.currentEditApp.builds[index]
        if (deleteBuild && deleteBuild.id) {
          if (!this.currentEditApp.deleteBuilds) {
            this.$set(this.currentEditApp, 'deleteBuilds', [])
          }
          this.currentEditApp.deleteBuilds.unshift(deleteBuild.id)
        }
        this.currentEditApp.builds.splice(index, 1)

        //this.$delete(currentEditApp.builds, index)
      }
    }
  }
</script>

<style scoped>
  .red-star {
    color: red;
  }
</style>
