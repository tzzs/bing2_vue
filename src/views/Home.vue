<template>
  <v-app id="home">
    <v-app-bar
        app
        elevate-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main">
      <v-container class="">
        <v-row>
          <v-col
              v-for="n in 3"
              :key="n"
              cols="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card

                  height="200"
                  :elevation="hover ? 4 : 0"
              ></v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div class="library-headline"></div>
        <v-row>
          <v-col cols="4">
            <v-card
                class="mx-auto v-card"
                hover
                width=""
            >
              <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
              ></v-img>

              <v-card-title>
                Exploring Color on Google Maps
              </v-card-title>

              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>

              <v-card-actions>
                <div>
                  Editorial
                </div>
              </v-card-actions>
            </v-card>
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
                  <v-btn
                      color="orange lighten-2"
                      text
                  >
                    Explore
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn
                      icon
                      @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time
                      for
                      sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                      Hey, you
                      add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way
                      to
                      escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-hover>

          </v-col>
          <v-col cols="4">
            <v-card
                class="mx-auto"
                width=""
                max-width="344"
            >
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
                <v-btn
                    color="orange lighten-2"
                    text
                >
                  Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                    for
                    sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                    Hey, you
                    add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way
                    to
                    escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data: function () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.main {
  margin: 0 auto;
  text-align: center;
  width: 66%;
}

.v-card {
  box-shadow: none;
}

.library-headline {
  width: auto;
  border-top: 4px solid #4285f4;
  /*margin: 0 32px;*/
}

</style>
