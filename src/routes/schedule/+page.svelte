<script lang="ts">
    import { onMount } from 'svelte';

    import expandArrow from '$lib/images/expand-arrow.svg';

    let darkMode: boolean;

	onMount(() => {
		if (localStorage.theme === "dark") {
			darkMode = true;
		} else {
			darkMode = false;
		}
	});
</script>

<section class="mt-[60px] w-full overflow-y-scroll">
    <div class="w-full justify-center flex flex-row">
        <div class="w-[800px] flex flex-col gap-8 h-auto relative pt-4">
            <div class="w-[80px] absolute -left-[128px] flex rounded-full top-4  py-1
                bg-black dark:bg-gray-700
                text-blue-50">
                <h2 class="m-auto">Today</h2>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 h-[150px] transition ease-in-out duration-300">
                
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 h-[150px] transition ease-in-out duration-300">
                
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 h-[150px] transition ease-in-out duration-300">
                
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 h-[150px] transition ease-in-out duration-300">
                
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 h-[150px] transition ease-in-out duration-300">
                
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 h-[150px] transition ease-in-out duration-300">
                
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 h-[150px] transition ease-in-out duration-300">
                
            </div>
        </div>
        <div class="">
            <div class="pl-12 absolute top-[10vh] flex flex-col gap-6">
                <div class="flex flex-col gap-6">
                    <div class="flex flex-row justify-between w-[200px]">
                        <h2>Show Following</h2>
                        <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-12 flex transition ease-in-out duration-300">
                            <div class="bg-white dark:bg-gray-900 rounded-full w-5 h-5 my-auto ml-[2px] transition ease-in-out duration-300"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between w-[200px]">
                        <h2>Show Spoilers</h2>
                        <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-12 flex transition ease-in-out duration-300">
                            <div class="bg-white dark:bg-gray-900 rounded-full w-5 h-5 my-auto ml-[2px] transition ease-in-out duration-300"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-highlight rounded-full p-[10px] px-4 cursor-pointer">
                        <h2 class="m-auto text-sm">International</h2>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-highlight rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LCS</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkMode ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LEC</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkMode ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-highlight rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LCK</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkMode ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LPL</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkMode ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">Minor</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkMode ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .svg-filter img {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter-dark img {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
</style>