<template>
	<div v-if="show" class="modal">
		<span @keyup.esc="closeModal" class="close" @click="closeModal">×</span>

		<div class="">
			<span class="prev z-20" @click="prevImage">&#10094;</span>
			<span class="next z-20" @click="nextImage">&#10095;</span>
		</div>

		<div
			class="flex justify-center items-center pt-8 pr-8 pb-0 pl-8 sm:justify-center md:max-h-[80%]">
			<div class="md:max-w-[80%]">
				<img :src="selectedPhotoURL" alt="photo" class="md:max-h-[75vh]" />
				<LikeBtn class="p-2 w-10 h-10" />
			</div>
		</div>

		<div class="flex pl-10 pr-10">
			<div class="sm:ml-0 mt-4">
				<p class="text-white text-md mb-1">
					{{ info.fio }}
				</p>
				<p class="text-white text-sm mb-1">
					{{ info.age }}
				</p>
				<p class="text-white text-sm mb-1 w-max-[200px]">
					{{ info.info }}
				</p>
				<p class="text-white text-sm">
					{{ info.nomination }}
				</p>
				<p class="text-white text-sm">
					{{ info.city }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	nextImage: Function,
	prevImage: Function,
	closeModal: Function,
	show: Boolean,
	selectedPhotoURL: String,
	info: Object,
});

const emit = defineEmits('prevImage', 'nextImage');
</script>

<style scoped>
.modal {
	overflow: auto;
	position: fixed;
	z-index: 20;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.9);
}

.close {
	position: absolute;
	top: 0px;
	right: 0px;
	color: #aaaaaa;
	font-size: 52px;
	font-weight: bold;
	cursor: pointer;
}

.close:hover,
.close:focus {
	color: #f4a6a6;
	text-decoration: none;
	cursor: pointer;
}

.prev,
.next {
	position: absolute;
	top: 50%;
	width: auto;
	margin-top: -22px;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 20px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	user-select: none;
	cursor: pointer;
}

.prev {
	left: 0;
}

.next {
	right: 0;
}

.prev:hover,
.next:hover {
	background-color: rgba(0, 0, 0, 0.8);
}
</style>
