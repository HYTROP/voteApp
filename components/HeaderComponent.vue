<template>
	<header
		class="flex flex-wrap sm:justify-start sm:flex-nowrap z-10 w-full bg-indigo-600/90 text-sm py-3 sm:py-0 sticky top-0">
		<nav
			class="relative w-full mx-auto px-4 sm:flex sm:items-center sm:px-6 lg:px-8"
			aria-label="Global">
			<div class="flex items-center justify-between">
				<NuxtLink to="/" class="flex-none text-xl font-semibold text-white"
					>Палитра талантов 2024
				</NuxtLink>
				<!-- бургер -->
				<div class="sm:hidden">
					<button
						@click="toggleMenu"
						:class="!isMenuOpen ? 'open' : ''"
						type="button"
						class="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
						data-hs-collapse="#navbar-collapse-with-animation"
						aria-controls="navbar-collapse-with-animation"
						aria-label="Toggle navigation">
						<svg
							class="hs-collapse-open:hidden flex-shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<line x1="3" x2="21" y1="6" y2="6" />
							<line x1="3" x2="21" y1="12" y2="12" />
							<line x1="3" x2="21" y1="18" y2="18" />
						</svg>
						<svg
							class="hs-collapse-open:block hidden flex-shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
				<!-- бургер end -->
			</div>
			<div
				@click="closeMenu"
				:class="!isMenuOpen ? 'open' : 'hidden'"
				id="navbar-collapse-with-animation"
				class="hs-collapse overflow-hidden transition-all duration-500 basis-full grow">
				<div
					class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
					<NuxtLink
						to="/"
						class="sm:flex font-medium text-white/[.8] hover:text-white sm:py-6"
						>ГАЛЕРЕЯ</NuxtLink
					>
					<NuxtLink
						to="/favorites"
						class="font-medium text-white/[.8] hover:text-white sm:py-6"
						>ИЗБРАННОЕ</NuxtLink
					>
					<NuxtLink
						to="/results"
						class="font-medium text-white/[.8] hover:text-white sm:py-6"
						>РЕЗУЛЬТАТЫ</NuxtLink
					>
					<!-- LOGGING -->
					<!-- <a
						class="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
						href="#">
						<svg
							class="flex-shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
							<circle cx="12" cy="7" r="4" />
						</svg>
						Log in
					</a> -->
				</div>
			</div>
		</nav>
	</header>
</template>
<script setup>
const isMenuOpen = ref(true);
// const isMenuOpen = reactive(true);
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
	isMenuOpen.value = false;
};
</script>

<style scoped>
@media (min-width: 640px) {
	#navbar-collapse-with-animation {
		display: block;
	}
}
</style>
