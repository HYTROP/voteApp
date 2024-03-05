<script setup>
import { ref, onMounted, reactive, watch } from 'vue';
import axios from 'axios';
import { params } from '../API/Api';
import { paramsSheets } from '../API/Api';

import { _API_KEY, _GOOGLE_SHEETS_KEY, sheetRange } from '../API/Api';

const recordsArr = ref([]);
const filteredDataArr = ref([]);
const photosDrive = ref([]);

const showModal = ref(false);
const selectedPhotoURL = ref('');
const currentIndex = ref(0);
const personInfo = ref([]);

const filters = reactive({
	all: 'Все',
	draw: 'Живопись',
	paint: 'Рисунок',
	photo: 'Фото',
	dpi: 'ДПИ',
});
const selectedFilters = ref('Все');

// ---------------------

const fetchDriveItems = async () => {
	try {
		// -------------------- Google Drive
		const responseDrive = await axios.get(
			'https://www.googleapis.com/drive/v3/files',
			{ params }
		);
		photosDrive.value = responseDrive.data.files;
	} catch (error) {
		console.error('Ошибка при получении записей из Google DRIVE:', error);
	}
};

const fetchSheetsItems = async () => {
	try {
		// -------------------- Google Sheets
		const responseSheets = await axios.get(
			`https://sheets.googleapis.com/v4/spreadsheets/${_GOOGLE_SHEETS_KEY}/values/${sheetRange}?key=${_API_KEY}`,
			{ paramsSheets }
		);

		// преобразование ссылки на фото
		recordsArr.value = responseSheets.data.values.map((item) => {
			const result = item;
			const separate = result[6].split('/');
			const nameUrl = decodeURIComponent(separate[separate.length - 1]);

			const obj = photosDrive.value.find((photo) => photo.name === nameUrl);

			result[6] = getPhotoUrl(obj.id);

			return result;
		});
	} catch (error) {
		console.error('Ошибка при получении записей из Google SHEETS:', error);
	}
};

const getPhotoUrl = (id) => {
	return `https://lh3.googleusercontent.com/d/${id}=s1620`;
};

onMounted(async () => {
	// const localStorageFavorites = localStorage.getItem('favourites');
	// favorites.value = localStorageFavorites
	// 	? JSON.parse(localStorageFavorites)
	// 	: [];

	await fetchDriveItems();
	await fetchSheetsItems();

	const convertToObjects = (arr) => {
		const keys = [
			'fio',
			'email',
			'phone',
			'age',
			'nomination',
			'info',
			'photo',
			'bio',
			'city',
		];
		const arrayOfObjects = arr.map((subArray) => {
			const obj = {};
			subArray.forEach((value, index) => {
				obj[keys[index]] = value;
			});
			return obj;
		});
		return arrayOfObjects;
	};

	recordsArr.value = convertToObjects(recordsArr.value);
	filteredDataArr.value = recordsArr.value;
});

const filterOptions = [
	'Все',
	'Живопись',
	'Рисунок',
	'Фотография',
	'ДПИ (Декоративно-прикладное искусство)',
];

const filterData = () => {
	filteredDataArr.value = recordsArr.value.filter((item) => {
		if (selectedFilters.value === 'Все') {
			return recordsArr.value;
		} else {
			return item.nomination === selectedFilters.value;
		}
	});
};

const openModal = (recordURL, index) => {
	showModal.value = true;
	selectedPhotoURL.value = recordURL;

	currentIndex.value = index; // получаем индекс текущей фотографии

	const findPerson = filteredDataArr.value.find(
		(item) => item.photo === recordURL
	);
	personInfo.value = findPerson;

	document.body.style.overflow = 'hidden';
};

const closeModal = () => {
	showModal.value = false;
	selectedPhotoURL.value = null;

	document.body.style.overflow = 'auto';
};

const nextImage = () => {
	if (currentIndex.value < filteredDataArr.value.length - 1) {
		currentIndex.value++;
	} else {
		currentIndex.value = 0;
	}
	selectedPhotoURL.value = filteredDataArr.value[currentIndex.value].photo;
	personInfo.value = filteredDataArr.value[currentIndex.value];
};

const prevImage = () => {
	if (currentIndex.value > 0) {
		currentIndex.value--;
	} else {
		currentIndex.value = filteredDataArr.value.length - 1;
	}
	selectedPhotoURL.value = filteredDataArr.value[currentIndex.value].photo;
	personInfo.value = filteredDataArr.value[currentIndex.value];
};

watch(filters, fetchSheetsItems);

useHead({
	title: 'Палитра талантов | Галерея',
	meta: [
		{
			name: 'description',
			content: 'Галерея',
		},
	],
});
</script>

<template>
	<div>
		<h1 class="text-xl font-bold m-2 lg:flex md:grid-cols-2 md:m-2">
			ГАЛЕРЕЯ / {{ selectedFilters }}
		</h1>

		<!-- selector -->
		<select
			v-model="selectedFilters"
			@change="filterData"
			class="w-[150px] bg-neutral-200/0 m-2 border-2 p-1 border-indigo-400 rounded-lg truncate">
			<option v-for="option in filterOptions" :key="option">
				{{ option }}
			</option>
		</select>

		<!-- grid -->
		<div
			class="grid grid-flow-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:m-2 gap-8 sm:m-3"
			v-auto-animate>
			<div
				v-for="(record, index) in filteredDataArr"
				:key="record.id"
				class="overflow-hidden border p-2 border-neutral-300 rounded-lg shadow-md flex flex-col justify-between max-h-[283px]">
				<div
					@click="openModal(record.photo, index)"
					class="sm:max-h-[223px] sm:max-w-[317px] mb-8 cursor-pointer md:hover:scale-110 transition duration-500 overflow-hidden">
					<img :src="record.photo" alt="photo" class="justify-items-stretch" />
				</div>
				<div class="flex justify-between">
					<div>
						<p class="text-sm text-neutral-700 max-w-[160px]">
							{{ record.fio }}
						</p>
						<p class="text-sm text-neutral-500 max-w-[136px] truncate">
							{{ record.nomination }}
						</p>
					</div>
					<LikeBtn
						class="m-2 relative right-0 z-20 w-6 h-6 cursor-pointer hover:scale-125 transition duration-500 ease-in-out" />
				</div>
			</div>

			<ModalPhoto
				:info="personInfo"
				:show="showModal"
				:selectedPhotoURL="selectedPhotoURL"
				:closeModal="closeModal"
				:prevImage="prevImage"
				:nextImage="nextImage" />
		</div>
	</div>
</template>

<style scoped></style>
