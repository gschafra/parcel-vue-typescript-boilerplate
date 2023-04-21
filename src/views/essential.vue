<template>
  <div>
    <h1>Essential</h1>
    <ul class="essential">
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
  </div>
</template>
<script lang="ts">
// import { State } from 's-vuex-class';
import { Component, Vue } from 'vue-facing-decorator';
import { Link } from '../models/link.type';

@Component
export default class Essential extends Vue
{
	public list: Link[] = [{ label: 'Core Docs', link: 'https://vuejs.org' },
		{ label: 'Forum', link: 'https://forum.vuejs.org' },
		{ label: 'Community Chat', link: 'https://chat.vuejs.org' },
		{ label: 'Twitter', link: 'https://twitter.com/vuejs' }];

	created () {
		console.log('Essential created');
	}
}
</script>

<style lang="scss" scoped>
.essential {
	a {
		color: tomato;
	}
}
</style>
