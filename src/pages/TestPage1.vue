<template>
  <div class="about">
    <img src="./rasm/about-dec.png" alt="" />

    <div class="about-text">
      <h3 style="padding-left: 5rem">About Me</h3>
      <h5 style="padding-left: 2rem">
        Hello, my name is Farrukh. I am a web developer. I have 2 years of
        experience. You can follow me on my website. My web site:
        <a href="https://founder-uz.netlify.app/">founder.uz</a>
        <br />
        <hr />
        Follow my instagram page for full details:
        <a href="https://www.instagram.com/farrux_life/">farrux_life</a>
      </h5>

      <div class="q-pa-md q-gutter-sm" style="padding: 2rem">
        <q-btn label="CLick" color="primary" @click="basic = true" />

        <q-dialog
          v-model="basic"
          transition-show="rotate"
          transition-hide="rotate"
        >
          <q-card>
            <q-card-section>
              <div class="text-h6">Terms of Agreement</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <p v-for="n in 5" :key="n">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </p>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Decline" color="primary" v-close-popup />
              <q-btn flat label="Accept" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      basic: ref(false),
      fixed: ref(false),
    };
  },
};
</script>

<style>

.about {
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
  font-family: cursive;
}
</style>
