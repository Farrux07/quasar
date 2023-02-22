<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Farrukh Mukhammadkulov
        </q-toolbar-title>

        <q-btn flat round dense icon="instagram " /> 2023
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item to="/" exact>
          <q-item-section avatar>
            <i class="fa-solid fa-house"></i>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">HOME </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/testpage1">
          <q-item-section avatar>
            <i class="fa-sharp fa-solid fa-address-card"></i>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">ABOUT ME</q-item-label>
            <q-item-label caption>about Me (litte)</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/testpage2">
          <q-item-section avatar>
            <i class="fa-sharp fa-solid fa-image"></i>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">GALLERY</q-item-label>
            <q-item-label caption>view the picture</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/testpage3">
          <q-item-section avatar>
            <i class="fa-sharp fa-solid fa-video"></i>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">VIDEO</q-item-label>
            <q-item-label caption>watch the video</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/testpage4">
          <q-item-section avatar>
            <i class="fa-sharp fa-solid fa-address-book"></i>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">CONTACT</q-item-label>
            <q-item-label caption>if you want to apply</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <EssentialLink />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.q-item-section {
  font-family: cursive;
}
</style>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
