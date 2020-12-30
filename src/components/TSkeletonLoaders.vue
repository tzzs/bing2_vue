<template>
    <div id="tCalendarImages">
        <v-row v-for="row in rowsNumber" :key="row">
            <v-col v-for="col in cols" :key="col" cols="4">
                <v-hover v-slot:default="{ hover }">
                    <v-skeleton-loader
                        v-bind="attrs"
                        type="image, article"
                        :elevation="hover ? 4 : 0"
                    ></v-skeleton-loader>
                </v-hover>
            </v-col>
        </v-row>
        <v-row v-if="lastColNumber > 0">
            <v-col v-for="col in lastColNumber" :key="col" cols="4">
                <v-hover v-slot:default="{ hover }">
                    <v-skeleton-loader
                        v-bind="attrs"
                        type="image, article"
                        :elevation="hover ? 4 : 0"
                    ></v-skeleton-loader>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "TskeletonLoaders",
    props: {
        cols: Number,
        nums: Number
    },
    data: () => ({
        attrs: {
            class: "mb-6 mx-auto",
            boilerplate: true
        }
    }),
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
