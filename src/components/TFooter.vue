<template>
    <div>
        <!-- 页脚 -->
        <v-divider></v-divider>
        <v-footer padless color="white">
            <v-container>
                <v-row
                    justify="space-between"
                    style="margin-left: 1%;margin-right: 1%"
                >
                    <v-col cols="3" align="left">
                        <div>
                            <h3>BING2</h3>
                            <br />
                            <p>
                                本站所有图片均来自
                                <a href="https://cn.bing.com/" target="_blank">
                                    必应搜索。
                                </a>
                                <br />
                                All pictures on this site are from
                                <a href="https://cn.bing.com/" target="_blank">
                                    Bing search.
                                </a>
                            </p>
                        </div>
                    </v-col>
                    <v-col cols="4" align="left">
                        <v-row>
                            <v-col cols="4">
                                <div style="margin-left: 10%">
                                    <h3>Discover</h3>
                                    <br />
                                    <ul>
                                        <li>Blog</li>
                                        <li>GitHub</li>
                                    </ul>
                                </div>
                            </v-col>
                            <v-col cols="4">
                                <div style="margin-left: 10%">
                                    <h3>Connect</h3>
                                    <br />
                                    <ul>
                                        <li>
                                            Github Issue
                                        </li>
                                        <li>
                                            About
                                        </li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row style="margin-left: 1%;margin-right: 1%">
                    <v-col cols="3" align="left">
                        <router-link to="https://imtzz.com">
                            <p>
                                <a href="https://imtzz.com"
                                    >Copyright ©2020 IMTZZ.
                                </a>
                            </p>
                        </router-link>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </div>
</template>

<script>
export default {
    name: "TFooter"
};
</script>

<style></style>
