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
                <div class="library-headline"></div>
                <v-row>
                    <v-col cols="4">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                class="mx-auto"
                                width=""
                                max-width="344"
                                :elevation="hover ? 4 : 0"
                            >
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    height="200px"
                                ></v-img>

                                <v-card-title> BLOG </v-card-title>

                                <v-card-subtitle>
                                    my personal blog
                                </v-card-subtitle>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="4">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                class="mx-auto"
                                width=""
                                max-width="344"
                                :elevation="hover ? 4 : 0"
                            >
                                <v-img
                                    src="/img/sunshine.jpg"
                                    height="200px"
                                ></v-img>

                                <v-card-title>
                                    Top western road trips
                                </v-card-title>

                                <v-card-subtitle>
                                    1,000 miles of wonder
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn color="orange lighten-2" text>
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    <v-btn icon @click="show = !show">
                                        <v-icon>{{
                                            show
                                                ? "mdi-chevron-up"
                                                : "mdi-chevron-down"
                                        }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            I'm a thing. But, like most
                                            politicians, he promised more than
                                            he could deliver. You won't have
                                            time for sleeping, soldier, not with
                                            all the bed making you'll be doing.
                                            Then we'll go with that data file!
                                            Hey, you add a one and two zeros to
                                            that or we walk! You're going to do
                                            his laundry? I've got to find a way
                                            to escape.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="4">
                        <v-card class="mx-auto" width="" max-width="344">
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px"
                            ></v-img>

                            <v-card-title>
                                Top western road trips
                            </v-card-title>

                            <v-card-subtitle>
                                1,000 miles of wonder
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn color="orange lighten-2" text>
                                    Explore
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn icon @click="show = !show">
                                    <v-icon>{{
                                        show
                                            ? "mdi-chevron-up"
                                            : "mdi-chevron-down"
                                    }}</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                        I'm a thing. But, like most politicians,
                                        he promised more than he could deliver.
                                        You won't have time for sleeping,
                                        soldier, not with all the bed making
                                        you'll be doing. Then we'll go with that
                                        data file! Hey, you add a one and two
                                        zeros to that or we walk! You're going
                                        to do his laundry? I've got to find a
                                        way to escape.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                </v-row>
                <div class="library-headline"></div>
                <v-row>
                    <v-col v-for="n in 3" :key="n" cols="4">
                        <v-hover v-slot:default="{ hover }">
                            <v-card height="200" :elevation="hover ? 4 : 0"
                                >IM FUN</v-card
                            >
                        </v-hover>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <div class="library-headline"></div>
                <v-row>
                    <v-col cols="4">
                        <TCard :image="images[0]" />
                    </v-col>
                    <v-col cols="4">
                        <TCard :image="images[0]" />
                    </v-col>
                    <v-col cols="4">
                        <TCard :image="images[0]" />
                    </v-col>
                </v-row>
                <div class="library-headline"></div>

                <v-row v-for="row in rowsNumber" :key="row">
                    <v-col v-for="col in 3" :key="col" cols="4">
                        <TCard :image="images[today - 3 * (row - 1) - col]" />
                    </v-col>
                </v-row>
                <v-row v-if="lastCol > 0">
                    <v-col v-for="col in lastCol" :key="col" cols="4">
                        <TCard
                            :image="images[today - 3 * rowsNumber - lastCol]"
                        />
                    </v-col>
                </v-row>

                <div class="library-headline"></div>
                <div class="text-center">
                    <v-pagination v-model="page" :length="6"></v-pagination>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import TCard from "@/components/TCard";
// @ is an alias to /src
export default {
    name: "Home",
    components: {
        TCard
    },
    data: function() {
        return {
            show: false,
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
            today: 1,
            page: 1,
            cols: 3,
            rows: Number,
            lastCol: Number
        };
    },
    computed: {
        rowsNumber: function() {
            console.log("rowsNumber:" + parseInt(this.today / 3));
            return parseInt(this.today / 3);
        },
        lastColNumber: function() {
            let lastCol;
            if (this.today <= 3) {
                lastCol = 0;
            }
            lastCol = this.today % 3;
            console.log("lastColNumber:" + lastCol);
            return lastCol;
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
