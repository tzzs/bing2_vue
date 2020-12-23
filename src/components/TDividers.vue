<template>
    <div id="tdividers" :style="{ borderTop: '4px solid ' + color }"></div>
</template>

<script>
export default {
    name: "TDividers",
    props: {
        color: String
    }
};
</script>

<style scoped>
/* 分隔符 */
#tdividers {
    width: auto;
    /* border-top: 4px solid #4285f4; */
    /*margin: 0 32px;*/
}
</style>
