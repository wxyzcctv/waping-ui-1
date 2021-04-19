<template>
    <div v-for="(title,index) in titles" :key="index">{{title}}</div>
    <component v-for="(con,index) in defaults" :is="con" :key="index"></component>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
export default {
	setup(props, context) {
		const defaults = context.slots.default();
		defaults.forEach((item) => {
			if (item.type !== Tab) {
				throw new Error("Tabs子标签必须是Tab");
			}
		});
        const titles = defaults.map(item => {
            return item.props.title
        })
		return {
			defaults,
            titles
		};
	},
};
</script>