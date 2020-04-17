<template>
    <div>
        Please see kibana!!!
    </div>
</template>
<script>
    import {GetKibanaUrl} from "@api/deploy.api";

    export default {
        data() {
            return {
                kibanaUrl: ''
            };
        },//{"key":1,"value":1}, {"key":1,"value":1}, {"key":1,"value":1}, {"key":1,"value":1}
        created() {
            GetKibanaUrl()
                .then(resp => {
                    this.kibanaUrl = resp
                    window.open(this.kibanaUrl,"_blank");
                })
                .catch(err => {
                    this.$message.error(err);
                })
        }
    };
</script>