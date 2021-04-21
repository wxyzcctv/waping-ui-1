<template>
	<button class="waping-button" :class="classes" :disabled="disabled">
		<span v-if="loading" class="waping-loadingIndicator"></span>
		<slot />
	</button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
	props: {
		theme: {
			type: String,
			default: "button",
		},
		size: {
			type: String,
			default: "",
		},
		level: {
			type: String,
			default: "normal",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		beat: {
			type: String,
			default: "",
		},
	},
	setup(props) {
		const { theme, size, level, beat } = props;
		const classes = computed(() => {
			return {
				[`waping-theme-${theme}`]: theme,
				[`waping-size-${size}`]: size,
				[`waping-level-${level}`]: level,
				[`waping-beat-${beat}`]: beat,
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
$red: #f56c6c;
$yellow: #e6a23c;
$green: #67c23a;
$grey: grey;
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
	transition: background 250ms;
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
	&.waping-beat-up {
		position: relative;
        cursor: pointer;
        border-radius: 5px;
        animation: rotateU 1s linear infinite;
		&::before {
			content: "";
			height: 8px;
			width: 100%;
			background: #000;
			opacity: 0.2;
			border-radius: 50%;
			position: absolute;
			top: -16px;
			left: 0;
			animation: shadowU 1s linear infinite;
		}
	}
	&.waping-beat-down {
		position: relative;
        cursor: pointer;
        border-radius: 5px;
        animation: rotateD 1s linear infinite;
		&::before {
			content: "";
			height: 8px;
			width: 100%;
			background: #000;
			opacity: 0.2;
			border-radius: 50%;
			position: absolute;
			top: 36px;
			left: 0;
			animation: shadowD 1s linear infinite;
		}
	}
	&.waping-beat-left {
		position: relative;
        border-radius: 5px;
        animation: rotateL 1s linear infinite;
		&::before {
			content: "";
			height: 100%;
			width: 8px;
			background: #000;
			opacity: 0.2;
			border-radius: 50%;
			position: absolute;
			top: 0;
			left: -12px;
			animation: shadowL 1s linear infinite;
		}
	}
	&.waping-beat-right {
		position: relative;
        border-radius: 5px;
        animation: rotateR 1s linear infinite;
		&::before {
			content: "";
			height: 100%;
			width: 8px;
			background: #000;
			opacity: 0.2;
			border-radius: 50%;
			position: absolute;
			top: 0;
			right: -12px;
			animation: shadowL 1s linear infinite;
		}
	}
	&.waping-theme-button {
		&.waping-level-main {
			background: $blue;
			color: white;
			border-color: $blue;
			&:hover,
			&:focus {
				background: darken($blue, 10%);
				border-color: darken($blue, 10%);
			}
		}
		&.waping-level-safe {
			background: $green;
			border-color: $green;
			color: white;
			&:hover,
			&:focus {
				background: darken($green, 10%);
				border-color: darken($green, 10%);
			}
		}
		&.waping-level-warning {
			background: $yellow;
			border-color: $yellow;
			color: white;
			&:hover,
			&:focus {
				background: darken($yellow, 10%);
				border-color: darken($yellow, 10%);
			}
		}
		&.waping-level-danger {
			background: $red;
			border-color: $red;
			color: white;
			&:hover,
			&:focus {
				background: darken($red, 10%);
				border-color: darken($red, 10%);
			}
		}
	}
	&.waping-theme-link,
	&.waping-theme-text {
		&.waping-level-main {
			color: $blue;
			&:hover,
			&:focus {
				color: darken($blue, 10%);
			}
		}
		&.waping-level-safe {
			color: $green;
			&:hover,
			&:focus {
				color: darken($green, 10%);
			}
		}
		&.waping-level-warning {
			color: $yellow;
			&:hover,
			&:focus {
				color: darken($yellow, 10%);
			}
		}
		&.waping-level-danger {
			color: $red;
			&:hover,
			&:focus {
				color: darken($red, 10%);
			}
		}
	}
	&.waping-theme-button {
		&[disabled] {
			cursor: not-allowed;
			color: $grey;
			&:hover {
				border-color: $border-color;
			}
		}
	}
	&.waping-theme-link,
	&.waping-theme-text {
		&[disabled] {
			cursor: not-allowed;
			color: $grey;
		}
	}
	> .waping-loadingIndicator {
		width: 14px;
		height: 14px;
		display: inline-block;
		margin-right: 4px;
		border-radius: 8px;
		border-color: #a6d7ff #73c0ff #40a9ff transparent;
		border-style: solid;
		border-width: 2px;
		animation: waping-spin 1s infinite linear;
	}
}
@keyframes waping-spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes shadowU {
	0%,
	100% {
		transform: scaleX(0.8);
	}
	50% {
		transform: scaleX(1.2);
	}
}
@keyframes shadowD {
	0%,
	100% {
		transform: scaleX(0.8);
	}
	50% {
		transform: scaleX(1.2);
	}
}
@keyframes shadowL {
	0%,
	100% {
		transform: scaleY(1.2);
	}
	50% {
		transform: scaleY(0.8);
	}
}
@keyframes rotateU {
	0% {
		transform: translateY(20px) scale(1.1, 0.9);
	}
	25% {
		transform: translateY(10px);
	}
	50% {
		transform: translateY(0);
	}
	75% {
		transform: translateY(10px);
	}
	100% {
		transform: translateY(20px) scale(1.1, 0.9);
	}
}
@keyframes rotateD {
	0% {
		transform: translateY(0);
	}
	25% {
		transform: translateY(10px);
	}
	50% {
		transform: translateY(20px) scale(1.1, 0.9);
	}
	75% {
		transform: translateY(10px);
	}
	100% {
		transform: translateY(0);
	}
}
@keyframes rotateL {
	0% {
		transform: translateX(0);
	}
	25% {
		transform: translateX(10px);
	}
	50% {
		transform: translateX(20px) scale(1.1, 0.9);
	}
	75% {
		transform: translateX(10px);
	}
	100% {
		transform: translateX(0);
	}
}
@keyframes rotateR {
	0% {
		transform: translateX(20px) scale(1.1, 0.9);
	}
	25% {
		transform: translateX(10px);
	}
	50% {
		transform: translateX(0);
	}
	75% {
		transform: translateX(10px);
	}
	100% {
		transform: translateX(20px) scale(1.1, 0.9);
	}
}
</style>