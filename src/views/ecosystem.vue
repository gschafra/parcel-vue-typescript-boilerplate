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
import { Link } from '@/models/link.type';
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { State } from 'vuex-facing-decorator';

@Component
class Ecosystem extends Vue
{
	@State('ecosystem') public list: Link[] = [];
}

export default toNative(Ecosystem);
</script>

<style lang="scss" scoped>
.ecosystem {
	a {
		color: purple;
	}
}
</style>
