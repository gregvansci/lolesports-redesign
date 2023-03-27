<script lang="ts">
    import { onMount } from 'svelte';

    import chat from '$lib/images/chat.svg';
    import hideHeader from '$lib/images/hide-header.svg';
    import options from '$lib/images/options.svg';

    // export let darkMode = false;

    let streamId = "lec";

    let optionsTooltip = false;
    let expandTooltip = false;
    let sidebarTooltip = false;

    let showOptions = false;
    let showHeader = true;
    let showSidebar = true;
</script>

<div class="pt-[60px]  w-full h-full flex text-blue-50">
    <div class="flex flex-row w-full h-full">
        <div class="flex flex-col h-full w-full">
            <div class="h-full w-full bg-black">
                <iframe
                    title="Target iframe page"
                    src="https://player.twitch.tv/?channel={streamId}&parent=streamernews.example.com&muted=false"
                    height="100%"
                    width="100%"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="flex flex-row justify-between w-full h-12 px-4 bg-[#18181B]">
                <div class="flex flex-row h-full gap-2">
                    <img class="h-10 m-auto" src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819523085_t1-2021-worlds.png" alt="Logo">
                    <div class="m-auto pb-1">
                        <h2 class="font-bold">T1 vs D Plus</h2>
                    </div>
                    <img class="h-10 m-auto" src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1673260049703_DPlusKIALOGO11.png" alt="Logo">
                </div>
                <div class="flex flex-row">
                    <div
                        on:pointerenter={() => {optionsTooltip = true}} 
                        on:pointerleave={() => {optionsTooltip = false}} 
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={options} class="h-6 m-auto cursor-pointer" alt="Options" />
                        <div class="absolute bg-gray-800 bottom-[130%] rounded-md z-50 left-[50%] -ml-[60px] w-[120px] py-1 {optionsTooltip ? "inline" : "hidden"}">
							<h2 class="text-center">Options</h2>
						</div>
						<div class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 dark:bg-gray-800 transform rotate-45 {optionsTooltip ? "inline" : "hidden"}"></div>
                    </div>
                    <div 
                        on:pointerenter={() => {expandTooltip = true}} 
                        on:pointerleave={() => {expandTooltip = false}}
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={hideHeader} class="h-6 m-auto cursor-pointer" alt="Hide Header" />
                        <div class="absolute bg-gray-800 bottom-[130%] rounded-md z-50 left-[50%] -ml-[60px] w-[120px] py-1 {expandTooltip ? "inline" : "hidden"}">
							<h2 class="text-center">Expand Page</h2>
						</div>
						<div class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 dark:bg-gray-800 transform rotate-45 {expandTooltip ? "inline" : "hidden"}"></div>
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        on:pointerenter={() => {sidebarTooltip = true}} 
                        on:pointerleave={() => {sidebarTooltip = false}}
                        on:click={() => {showSidebar = !showSidebar}} 
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={chat} class="h-6 m-auto cursor-pointer" alt="Show Chat" />
                        <div class="absolute bg-gray-800 bottom-[130%] rounded-md z-50 {showSidebar ? "left-[50%] -ml-[60px]" : "right-0"}  w-[120px] py-1 {sidebarTooltip ? "inline" : "hidden"}">
							<h2 class="text-center">Show Sidebar</h2>
						</div>
						<div class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 dark:bg-gray-800 transform rotate-45 {sidebarTooltip ? "inline" : "hidden"}"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-full w-[400px] flex-col {showSidebar ? "flex" : "hidden"}">
            <div class="h-16 w-full flex flex-row bg-[#18181B]">
                <input class="h-6 rounded-md m-auto px-2 bg-gray-400 align-middle focus:outline-none" placeholder="Add Live View Channel">
            </div>
            <iframe 
                title="Target iframe page"
                src="https://www.twitch.tv/embed/{streamId}/chat?darkpopout&parent=streamernews.example.com"
                height="100%"
                width="100%">
            </iframe>
        </div>
    </div>
</div>

<style>
    input {
        text-align: center;
    }
    ::placeholder {
        color: #F2F5F8;
        text-align: center;
    }
	.svg-filter-dark img {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
	img {
		-webkit-user-drag: none;
	}
</style>