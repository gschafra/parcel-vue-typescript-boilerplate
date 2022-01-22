<template>
  <ul class="ecosystem">
    <li
      v-for="item in list"
      :key="item.label"
    >
      <a
        :href="item.link"
        target="_blank"
      >{{ item.label }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { State } from 's-vuex-class';

@Options({
  name: "Ecosystem",
})
export default class Ecosystem extends Vue
{
	@State('ecosystem') public list: any[] = [];
}
</script>

<style lang="scss" scoped>
.ecosystem {
	a {
		color: purple;
	}
}
</style>
