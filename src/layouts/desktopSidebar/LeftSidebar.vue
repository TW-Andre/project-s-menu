<script setup>
import {RouterLink} from "vue-router";
import { userStore } from "@/stores/authStore";
import {useSidebarStore} from "@/stores/sidebar";
import MenuItems from "@/components/layouts/MenuItems.vue";

let user    = userStore();
let sidebar = useSidebarStore();
</script>

<template>
	<v-navigation-drawer
		v-model="sidebar.Sidebar_drawer"
		class="border-none vertical-menu position-fixed"
		:rail="sidebar.Rail_drawer"
		elevation="1"
	>
		<v-list-item
			class="list-title-user py-5"
			prepend-icon="mdi-account"
			:title="user.getUser()"
			slim
			nav
		></v-list-item>
		
		<v-divider></v-divider>
		
<!--		<MenuItems />-->
		
		<v-list class="side-bar-list" density="compact" nav>
			<RouterLink to="/">
				<v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
			</RouterLink>
			
			<v-list-subheader
				class="smallCap text-uppercase mt-1"
				:class="[sidebar.Rail_drawer ? 'hide-header' : '']"
			>
				<span class="mini-text">Projetos</span>
			</v-list-subheader>
			
			<RouterLink to="/projetos/menurestaurante">
				<v-list-item prepend-icon="mdi-silverware" title="Menu de Restaurante" value="restaurantmenu"></v-list-item>
			</RouterLink>
			<RouterLink to="/projetos/projeto2">
				<v-list-item prepend-icon="mdi-wrench-clock" title="Projeto 2" value="projeto2"></v-list-item>
			</RouterLink>
			
			<v-list-subheader
				class="smallCap text-uppercase mt-1"
				:class="[sidebar.Rail_drawer ? 'hide-header' : '']"
			>
				<span class="mini-text">sistema</span>
			</v-list-subheader>
			
			<RouterLink to="/login">
				<v-list-item
					title="Logout"
					value="logout"
					prepend-icon="mdi-login"
					@click="user.logout()"
				></v-list-item>
			</RouterLink>
		</v-list>
	</v-navigation-drawer>

</template>

<style scoped lang="scss">

</style>
