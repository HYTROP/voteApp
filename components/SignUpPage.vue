<template>
	<div class="bg-gray-100 flex h-full items-center py-16">
		<main class="w-full max-w-md mx-auto p-6">
			<div class="mt-7 border border-gray-300 rounded-xl shadow-lg">
				<div class="p-4 sm:p-7">
					<div class="text-center">
						<h1 class="block text-2xl font-bold text-gray-800">Регистрация</h1>
						<p class="mt-2 text-sm text-gray-600">
							Уже зарегистрированы?
							<NuxtLink
								to="/loginpage"
								class="text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:ring-1 focus:ring-indigo-200">
								Войти здесь &rarr;
							</NuxtLink>
						</p>
					</div>

					<div class="mt-5">
						<!-- Form -->
						<form>
							<div class="grid gap-y-4">
								<!-- Form Group -->
								<div>
									<label for="email" class="block text-sm text-black mb-2"
										>Email адрес</label
									>
									<div class="relative">
										<input
											type="email"
											id="email"
											name="email"
											class="py-3 px-4 block w-full rounded-lg text-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-1 text-gray-800"
											required
											aria-describedby="email-error" />
										<div
											class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
											<svg
												class="size-5 text-red-500"
												width="16"
												height="16"
												fill="currentColor"
												viewBox="0 0 16 16"
												aria-hidden="true">
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
											</svg>
										</div>
									</div>
									<p class="hidden text-xs text-red-600 mt-2" id="email-error">
										Please include a valid email address so we can get back to
										you
									</p>
								</div>
								<!-- End Form Group -->

								<!-- Form Group -->
								<div>
									<label for="password" class="block text-sm mb-2 text-black"
										>Придумайте пароль
									</label>
									<div class="relative">
										<input
											type="password"
											id="password"
											name="password"
											class="py-3 px-4 block w-full rounded-lg text-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-1 text-gray-800"
											required
											aria-describedby="password-error" />
										<div
											class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
											<svg
												class="size-5 text-red-500"
												width="16"
												height="16"
												fill="currentColor"
												viewBox="0 0 16 16"
												aria-hidden="true">
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
											</svg>
										</div>
									</div>
									<p
										class="hidden text-xs text-red-600 mt-2"
										id="password-error">
										8+ characters required
									</p>
								</div>
								<!-- End Form Group -->

								<!-- Form Group -->
								<div>
									<label
										for="confirm-password"
										class="block text-sm mb-2 text-black"
										>Подтвердите пароль</label
									>
									<div class="relative">
										<input
											type="password"
											id="confirm-password"
											name="confirm-password"
											class="py-3 px-4 block w-full rounded-lg text-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-1 text-gray-800"
											required
											aria-describedby="confirm-password-error" />
										<div
											class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
											<svg
												class="size-5 text-red-500"
												width="16"
												height="16"
												fill="currentColor"
												viewBox="0 0 16 16"
												aria-hidden="true">
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
											</svg>
										</div>
									</div>
									<p
										class="hidden text-xs text-red-600 mt-2"
										id="confirm-password-error">
										Password does not match the password
									</p>
								</div>
								<!-- End Form Group -->

								<button
									type="submit"
									class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">
									Зарегистрироваться
								</button>
							</div>
						</form>
						<!-- End Form -->
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
useHead({
	title: 'Палитра талантов | Регистрация',
	meta: [
		{
			name: 'description',
			content: 'Регистрация',
		},
	],
});
</script>
