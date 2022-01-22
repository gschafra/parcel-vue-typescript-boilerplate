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
import { Options, Vue } from 'vue-class-component';
import { State } from 's-vuex-class';

@Options({
  name: "Essential",
})
export default class Essential extends Vue
{
	@State('essential') public list: any[];
}
</script>

<style lang="scss" scoped>
.essential {
	a {
		color: tomato;
	}
}
</style>
