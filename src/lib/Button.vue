<template>
	<button class="waping-button" :class="classes">
		<slot />
	</button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
	inheritAttrs: false,
	props: {
		theme: {
			type: String,
			default: "button",
		},
		size: {
			type: String,
			default: "",
		},
	},
	setup(props) {
		const { theme, size } = props;
		const classes = computed(() => {
			return {
				[`waping-theme-${theme}`]: theme,
				[`waping-size-${size}`]: size,
			};
		});
		return { classes };
	},
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.waping-button {
	box-sizing: border-box;
	height: $h;
	padding: 0 12px;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	background: white;
	color: $color;
	border: 1px solid $border-color;
	border-radius: $radius;
	box-shadow: 0 1px 0 fade-out(black, 0.95);
	& + & {
		margin-left: 8px;
	}
	&:hover,
	&:focus {
		color: $blue;
		border-color: $blue;
	}
	&:focus {
		outline: none;
	}
	&::-moz-focus-inner {
		border: 0;
	}
	&.waping-theme-text {
		border-color: transparent;
		box-shadow: none;
		color: inherit;
		&:hover,
		&:focus {
			background: darken(white, 5%);
		}
	}
	&.waping-theme-link {
		border-color: transparent;
		color: $blue;
		box-shadow: none;
		&:hover,
		&:focus {
			color: lighten($blue, 10%);
		}
	}
	&.waping-size-big {
		font-size: 24px;
		height: 48px;
		padding: 0 16px;
	}
	&.waping-size-small {
		font-size: 12px;
		height: 20px;
		padding: 0 4px;
	}
}
</style>