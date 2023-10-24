<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>
			<button @click="add">
				+
			</button>
			<button @click="subtract">
				-
			</button>
		</div>
		<div>State;: {{ count }}</div>
		<div>Getter;: {{ getCount }}</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { Action, Getter, State } from 'vuex-facing-decorator';

@Component
class Counter extends Vue {
	public msg!: string;

	@State public count: number = 0;

	@Getter public getCount!: () => number;

	@Action public add!: () => Promise<void>;

	@Action public subtract!: () => Promise<void>
}

export default toNative(Counter)
</script>
