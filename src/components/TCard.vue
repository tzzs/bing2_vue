<template>
    <v-lazy transition="scale-transition">
        <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" width="" :elevation="hover ? 4 : 0">
                <v-img
                    class="white--text align-end"
                    v-bind:src="baseUrl + image.thumbnailpath"
                    lazySrc="/images/sunshine_GaussianBlur.jpg"
                    :alt="image.title"
                >
                </v-img>
                <v-card-text>
                    <div align="left">#{{ image.date }}</div>
                    <p align="left" class="display-1 text--primary"></p>
                    <p align="left">
                        <a
                            :href="
                                bingUrl + image.copyrightlink
                            "
                            target="_blank"
                        >
                            {{ image.text }}
                        </a>
                    </p>
                    <div class="text--primary" align="left">
                        {{ image.copyright }}
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
    </v-lazy>
</template>

<script>
export default {
    name: "TCard",
    // "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    data: function() {
        return {
            baseUrl: this.$global.serverUrl,
            bingUrl: this.$global.bingUrl
        };
    },
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

.v-sheet.v-card {
    border-radius: 1px !important;
    padding: 5%;
}

/* v-card-title 水平居中 */
/* .v-card__title {
    justify-content: center;
} */
</style>
