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

import { Component, Vue, toNative } from 'vue-facing-decorator';
import { Link } from '../models/link.type';

@Component
class Essential extends Vue
{
	public list: Link[] = [{ label: 'Core Docs', link: 'https://vuejs.org' },
		{ label: 'Forum', link: 'https://forum.vuejs.org' },
		{ label: 'Community Chat', link: 'https://chat.vuejs.org' },
		{ label: 'Twitter', link: 'https://twitter.com/vuejs' }];

	created () {
		console.log('Essential created');
	}
}

export default toNative(Essential);
</script>

<style lang="scss" scoped>
.essential {
	a {
		color: tomato;
	}
}
</style>
