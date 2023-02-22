<template>
  <div class="contact">
    <div class="q-pa-md q-gutter-sm">
      <q-carousel animated v-model="slide" infinite>
        <q-carousel-slide name="Motivation">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/k6A6AAYpLdE?start=2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </q-carousel-slide>

        <q-carousel-slide name="Rich and Poor">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0jGG7DTISg4?start=2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </q-carousel-slide>

        <q-carousel-slide name="Founder">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TOcKVwuMYZI?start=2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </q-carousel-slide>
      </q-carousel>

      <div class="row justify-center">
        <q-btn-toggle
          glossy
          v-model="slide"
          :options="[
            { label: 'Motivation', value: 'Motivation' },
            { label: 'Rich and Poor', value: 'Rich and Poor' },
            { label: 'Founder', value: 'Founder' },
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("Rich and Poor"),
    };
  },
};
</script>

<style>
.contact {
  font-family: cursive;
}
</style>
