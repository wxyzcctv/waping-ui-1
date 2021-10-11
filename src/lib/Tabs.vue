<template>
	<div class="waping-tabs">
		<div class="waping-tabs-nav" ref="container">
			<div
				class="waping-tabs-nav-item"
				v-for="(title, index) in titles"
				:ref="
					(el) => {
						if (title === selected) selectedItem = el;
					}
				"
				@click="select(title)"
				:class="{ selected: title === selected }"
				:key="index"
			>
				{{ title }}
			</div>
			<div class="waping-tabs-nav-indicator" ref="indicator"></div>
		</div>
		<div class="waping-tabs-content">
			<component :is="current" :key="current.props.title" />
		</div>
	</div>
</template>
<script lang="ts">
import { computed, onMounted, onUpdated, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
	props: {
		selected: {
			type: String,
			default: "",
		},
	},
	setup(props, context) {
		const selectedItem = ref<HTMLDivElement>(null);
		const indicator = ref<HTMLDivElement>(null);
		const container = ref<HTMLDivElement>(null);

		const x = () => {
			const { width } = selectedItem.value.getBoundingClientRect();
			indicator.value.style.width = width + "px";
			const { left: left1 } = container.value.getBoundingClientRect();
			const { left: left2 } = selectedItem.value.getBoundingClientRect();
			const left = left2 - left1;
			indicator.value.style.left = left + "px";
		};
		onMounted(() => {
			watchEffect(
				() => {
					const { width } =
						selectedItem.value.getBoundingClientRect();
					indicator.value.style.width = width + "px";
					const { left: left1 } =
						container.value.getBoundingClientRect();
					const { left: left2 } =
						selectedItem.value.getBoundingClientRect();
					const left = left2 - left1;
					indicator.value.style.left = left + "px";
				},
				{ flush: "post" }
			);
		});
		// onUpdated(x);

		const defaults = context.slots.default();
		defaults.forEach((item) => {
			// @ts-ignore
			if (item.type.name !== Tab.name) {
				throw new Error("Tabs子标签必须是Tab");
			}
		});
		const current = computed(() => {
			return defaults.find((item) => item.props.title === props.selected);
		});
		const select = (title: string) => {
			context.emit("update:selected", title);
		};
		const titles = defaults.map((item) => {
			return item.props.title;
		});
		return {
			current,
			defaults,
			titles,
			select,
			selectedItem,
			indicator,
			container,
		};
	},
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.waping-tabs {
	&-nav {
		display: flex;
		color: $color;
		border-bottom: 1px solid $border-color;
		position: relative;

		&-item {
			padding: 8px 0;
			margin: 0 16px;
			cursor: pointer;

			&:first-child {
				margin-left: 0;
			}
			&.selected {
				color: $blue;
			}
		}
		&-indicator {
			position: absolute;
			height: 3px;
			width: 100px;
			background: $blue;
			left: 0;
			bottom: -1px;
			transition: all 250ms;
		}
	}
	&-content {
		padding: 8px 0;
	}
}
</style>