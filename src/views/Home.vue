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
            <v-btn depressed color="#fff"> about </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main class="main">
            <v-container class="">
                <TCalendarImages :images="images" :cols="cols" :nums="nums" />

                <TDividers :color="dividerColor" />

                <div class="text-center">
                    <v-pagination v-model="page" :length="6"></v-pagination>
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
            page: 1,
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
            dividerColor: "#4285f4"
        };
    },
    created: function() {
        this.axios
            .get(
                "https://5fbdcaf4-4e9a-484d-98a8-d588a6c42d3d.mock.pstmn.io/getImages"
            )
            .then(result => {
                console.log(result.data);
            });
    },
    mouted: function() {},
    watch: {
        page: function() {
            // console.log("page:" + this.page);
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
