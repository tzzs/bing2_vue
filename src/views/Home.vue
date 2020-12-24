<template>
    <v-app id="home">
        <v-app-bar app elevate-on-scroll>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <v-toolbar-title style="margin-left: 5%">
                <router-link to="/">
                    <h2>bing2</h2>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn depressed color="#fff"> ABOUT </v-btn>
            <v-btn icon disabled>
            </v-btn>
        </v-app-bar>
        <v-main class="main">
            <v-container class="">
                <v-btn
                    depressed
                    @click.stop="dialog = true"
                    block
                    elevation="5"
                    color="primary"
                >
                    MONTH
                </v-btn>

                <v-dialog v-model="dialog" max-width="290">
                    <v-date-picker
                        v-model="date"
                        :allowed-dates="allowedMonths"
                        type="month"
                        class="mt-4"
                        :min="min"
                        :max="max"
                    ></v-date-picker>
                </v-dialog>

                <TCalendarImages :images="images" :cols="cols" :nums="nums" />

                <TDividers :color="dividerColor" />

                <div class="text-center">
                    <!-- <v-pagination v-model="years" :length="6"></v-pagination> -->
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import TCalendarImages from "@/components/TCalendarImages";
import TDividers from "@/components/TDividers";

// @ is an alias to /src
export default {
    name: "Home",
    components: {
        TCalendarImages,
        TDividers
    },
    data: function() {
        return {
            show: false,
            years: 1,
            images: [
                {
                    title: "BLOG",
                    subtitle: "this is my personl blog.",
                    url: "/images/sunshine.jpg",
                    text: "@powerd by imtzz",
                    date: "2020/12/22"
                },
                {
                    title: "BLOG",
                    subtitle: "this is my personl blog.",
                    url: "/images/sunshine.jpg",
                    text: "@powerd by imtzz",
                    date: "2020/12/22"
                },
                {
                    title: "BLOG",
                    subtitle: "this is my personl blog.",
                    url: "/images/sunshine.jpg",
                    text: "@powerd by imtzz",
                    date: "2020/12/22"
                }
            ],
            cols: 3,
            dividerColor: "#4285f4",
            date: "2020-01",
            min: "2020-01",
            max: "2020-10",
            dialog: false
        };
    },
    created: function() {
        this.axios
            .get(
                "https://5fbdcaf4-4e9a-484d-98a8-d588a6c42d3d.mock.pstmn.io/getImages"
            )
            .then(result => {
                console.log(result.data);

                let data = result.data;
                this.years = data.years;
                this.images = data.images;
            });
    },
    mouted: function() {},
    watch: {
        page: function() {
            // console.log("page:" + this.page);
        },
        date: function() {
            // console.log("date:" + this.date);
        }
    },
    computed: {
        rowsNumber: function() {
            // console.log("rowsNumber:" + parseInt(this.nums / 3));
            return parseInt(this.nums / 3);
        },
        lastColNumber: function() {
            let lastCol;
            if (this.nums <= 3) {
                lastCol = 0;
            }
            lastCol = this.nums % 3;
            // console.log("lastColNumber:" + lastCol);
            return lastCol;
        },
        nums: function() {
            // console.log("nums:" + this.images.length);
            return this.images.length;
        }
    },
    methods: {
        allowedMonths: val => {
            return parseInt(val.split("-")[1], 10) % 2 === 0 ? true : false;
        }
    }
};
</script>

<style scoped>
.home {
    text-align: center;
}

.main {
    margin: 0 auto;
    text-align: center;
    /* width: 66%; */
}

.v-card {
    box-shadow: none;
}
</style>
