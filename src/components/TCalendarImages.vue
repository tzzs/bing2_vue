<template>
    <div id="tCalendarImages">
        <v-row v-for="row in rowsNumber" :key="row">
            <v-col v-for="col in cols" :key="col" cols="4">
                <TCard :image="images[nums - cols * (row - 1) - col]" />
            </v-col>
        </v-row>
        <v-row v-if="lastColNumber > 0">
            <v-col v-for="col in lastColNumber" :key="col" cols="4">
                <TCard :image="images[nums - cols * rowsNumber - col]" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import TCard from "@/components/TCard";

export default {
    name: "TCalendarImages",
    components: {
        TCard
    },
    props: {
        images: Array,
        cols: Number,
        nums: Number
    },
    data: function() {
        return {};
    },
    watch: {
        nums: function() {

        }
    },
    computed: {
        rowsNumber: function() {
            // console.log("rowsNumber:" + parseInt(this.nums / this.cols));
            return parseInt(this.nums / this.cols);
        },
        lastColNumber: function() {
            let lastCol;
            if (this.nums <= this.cols) {
                lastCol = 0;
            }
            lastCol = this.nums % this.cols;
            // console.log("lastColNumber:" + lastCol);
            return lastCol;
        }
    }
};
</script>

<style></style>
