<template>
    <v-hover v-slot:default="{ hover }">
        <v-card class="mx-auto" width="" :elevation="hover ? 4 : 0">
            <v-img class="white--text align-end" v-bind:src="image.url">
            </v-img>

            <v-card-title class=""> {{ image.title }} </v-card-title>
            <v-row>
                <v-col cols="8">
                    <v-card-subtitle align="left">
                        <a
                            :href="
                                'https://cn.bing.com/search?q=' + image.subtitle
                            "
                            target="_blank"
                        >
                            {{ image.subtitle }}
                        </a>
                        <br />
                        {{ image.text }}
                    </v-card-subtitle>
                </v-col>
                <v-col cols="4">
                    <v-card-subtitle
                        style="right: 18px; bottom: 28px; position: absolute"
                    >
                        <br />
                        #{{ image.date }}
                    </v-card-subtitle>
                </v-col>
            </v-row>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    name: "TCard",
    // "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    props: {
        image: {
            type: Object
        }
    }
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
    padding: 16px 0 0 0;
}

.v-card__subtitle {
    padding: 0;
}

a {
    text-decoration: none;
    color: black !important;
}

/* v-card-title 水平居中 */
/* .v-card__title {
    justify-content: center;
} */
</style>
