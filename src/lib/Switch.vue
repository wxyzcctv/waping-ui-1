<template>
	<button :class="{ checked: value }" @click="toggle"><span></span></button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
	props: {
		value: Boolean,
	},
	setup(props, context) {
		const toggle = () => {
			context.emit("update:value", !props.value);
		};
		return { toggle };
	},
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
	height: $h;
	width: $h * 2;
	border: none;
	background: grey;
	border-radius: $h/2;
	position: relative;
}
button:focus {
	outline: none;
}
span {
	position: absolute;
	top: 2px;
	left: 2px;
	height: $h2;
	width: $h2;
	border-radius: $h2 / 2;
	background: white;
	transition: left 250ms;
}
button.checked {
	background: blue;
}
button.checked > span {
	left: calc(100% - #{$h2} - 2px);
}
</style>