<template>
    <v-app id="home">
        <v-app-bar app elevate-on-scroll>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <v-toolbar-title style="margin-left: 5%">
                <router-link to="/">
                    <h2>BING2</h2>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn depressed @click.stop="dialog = true" color="#fff">
                <h3>
                    月份选择
                </h3>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn depressed color="#fff">
                <a target="_blank" href="https://imtzz.com">
                    ABOUT
                </a>
            </v-btn>
            <v-btn icon disabled> </v-btn>
        </v-app-bar>

        <v-main class="main">
            <v-container>
                <v-dialog v-model="dialog" max-width="290">
                    <v-date-picker
                        v-model="date"
                        type="month"
                        :min="min"
                        :max="max"
                        :show-current="currentMonth"
                        scrollable
                    ></v-date-picker>
                </v-dialog>

                <TCalendarImages
                    v-show="loaded"
                    :images="images"
                    :cols="cols"
                    :nums="nums"
                />

                <TSkeletonLoaders v-show="!loaded" :cols="cols" :nums="nums" />

                <!-- <TDividers :color="dividerColor" /> -->

                <div class="text-center">
                    <!-- <v-pagination v-model="years" :length="6"></v-pagination> -->
                </div>

                <!-- 返回顶部 -->
                <div v-if="scroll > 20">
                    <v-btn
                        class="mx-2"
                        elevate
                        fab
                        fixed
                        large
                        dark
                        right
                        bottom
                        color="primary"
                        title="滚动页面至顶部"
                        aria-label="滚动页面至顶部"
                        @click="backToTop"
                    >
                        <v-icon dark>
                            mdi-chevron-up
                        </v-icon>
                    </v-btn>
                </div>
            </v-container>

            <TFooter />
        </v-main>
    </v-app>
</template>

<script>
import TCalendarImages from "@/components/TCalendarImages";
import TFooter from "@/components/TFooter";
import TSkeletonLoaders from "@/components/TSkeletonLoaders";

// @ is an alias to /src
export default {
    name: "Home",
    components: {
        TCalendarImages,
        TFooter,
        TSkeletonLoaders
    },
    data: function() {
        return {
            years: Number,
            images: [],
            cols: 3,
            dividerColor: "#4285f4",
            date:
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1).toString().padStart(2, 0),
            min:
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1).toString().padStart(2, 0),
            max:
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1).toString().padStart(2, 0),
            dialog: false,
            scroll: 0,
            loaded: false,
            nums: parseInt(new Date().getDate()),
            // apiUrl: "https://5fbdcaf4-4e9a-484d-98a8-d588a6c42d3d.mock.pstmn.io/getImages",
            apiUrl: this.$global.getUrl
        };
    },
    mounted: function() {
        window.addEventListener("scroll", this.handleScroll, true);
        // console.log("请求开始");

        let _this = this;
        setTimeout(() => {
            _this.getImages();
        }, 1000);
    },
    watch: {
        date: function() {
            // console.log("date:" + this.date.split("-").join(""));

            // 切换月份后，更新显示图片，重新拉起请求
            this.getImages();
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
        // nums: function() {
        //     // console.log("nums:" + this.images.length);
        //     return this.images.length;
        // },
        // 计算月份选择器的当前月份
        currentMonth: function() {
            var date = new Date();
            return date.getFullYear() + "-" + (date.getMonth() + 1);
        }
    },
    methods: {
        allowedMonths: val => {
            return parseInt(val.split("-")[1], 10) % 2 === 0 ? true : false;
        },
        backToTop: function() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        },
        handleScroll: function() {
            this.scroll =
                document.body.scrollTop ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
        },
        getImages: function() {
            let time = new Date().getTime();
            let str = time + "bing2.imtzz.com";

            let sign = this.MD5(str);
            sign = this.MD5(sign + str);

            // console.log(str, "*", sign);
            // console.log(this.date)

            this.axios
                .get(this.apiUrl, {
                    params: {
                        month: this.date.split("-").join(""),
                        sign: sign,
                        sault: str
                    }
                })
                .then(result => {
                    // console.log(result.data);
                    let data = result.data;
                    this.years = data.years;
                    this.images = data.images;
                    this.nums = data.images.length;

                    let minMonth = data.minMonth;
                    let maxMonth = data.maxMonth;
                    this.min =
                        minMonth.substring(0, 4) + "-" + minMonth.substring(4);
                    this.max =
                        maxMonth.substring(0, 4) + "-" + maxMonth.substring(4);

                    // 更新组件
                    this.loaded = true;
                    // console.log("请求结束");
                });
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
    width: 100%;
}

.v-card {
    box-shadow: none;
}
</style>
