<template>
	<div class="waping-tabs">
		<div class="waping-tabs-nav">
			<div
				class="waping-tabs-nav-item"
				v-for="(title, index) in titles"
				@click="select(title)"
				:class="{ selected: selected === title }"
				:key="index"
			>
				{{ title }}
			</div>
		</div>
		<div class="waping-tabs-content">
			{{ current }}
			<component class="waping-tabs-content-item" :is="current"></component>
		</div>
	</div>
</template>
<script lang="ts">
import { computed } from "vue";
import Tab from "./Tab.vue";
export default {
	props: {
		selected: {
			type: String,
			default: "",
		},
	},
	setup(props, context) {
		const defaults = context.slots.default();
		defaults.forEach((item) => {
			if (item.type !== Tab) {
				throw new Error("Tabs子标签必须是Tab");
			}
		});
		const current = computed(() => {
			console.log("重新return");
			return defaults.filter((item) => {
				return item.props.title === props.selected;
			})[0];
		});
		const select = (title: string) => {
			context.emit("update:selected", title);
		};
		const titles = defaults.map((item) => {
			return item.props.title;
		});
		return {
			defaults,
			titles,
			current,
			select,
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
	}
	&-content {
		padding: 8px 0;
	}
}
</style>