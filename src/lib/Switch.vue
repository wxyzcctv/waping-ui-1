<template>
	<button
		class="waping-switch"
		:class="[{ 'waping-checked': value }, { 'disabled-click': disabled }]"
		:disabled="disabled"
		@click="toggle"
	>
		<span></span>
	</button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
	props: {
		value: Boolean,
		disabled: Boolean,
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
.waping-switch {
	height: $h;
	width: $h * 2;
	border: none;
	background: #bfbfbf;
	border-radius: $h / 2;
	position: relative;
	cursor: pointer;
	> span {
		position: absolute;
		top: 2px;
		left: 2px;
		height: $h2;
		width: $h2;
		border-radius: $h2 / 2;
		background: white;
		transition: all 250ms;
	}
	&:focus {
		outline: none;
	}
	&.disabled-click {
		cursor: not-allowed;
	}
	&.waping-checked {
		background: #1890ff;

		> span {
			left: calc(100% - #{$h2} - 2px);
		}
	}
	&:active {
		> span {
			width: $h2 + 4px;
		}
	}
	&.waping-checked:active {
		> span {
			width: $h2 + 4px;
			margin-left: -4px;
		}
	}
}
</style>