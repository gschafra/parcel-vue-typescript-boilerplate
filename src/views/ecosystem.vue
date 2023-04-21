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
import { State } from 's-vuex-class';
import { Component, Vue } from 'vue-facing-decorator';

@Component
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
