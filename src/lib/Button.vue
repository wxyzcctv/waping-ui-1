<template>
	<button class="waping-button" :class="{ [`waping-theme-${theme}`]: theme }">
		<slot />
	</button>
</template>
<script lang="ts">
export default {
	inheritAttrs: false,
	props: {
		theme: {
			type: String,
			default: "button",
		},
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
}
</style>