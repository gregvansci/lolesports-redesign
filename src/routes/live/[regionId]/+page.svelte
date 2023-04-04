<script lang="ts">
    import { showHeader } from '../../../store';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    import expandPage from '$lib/images/hide-header.svg';
    import shrinkPage from '$lib/images/show-header.svg';
    import options from '$lib/images/options.svg';
    import sidebar from '$lib/images/sidebar.svg';
    import plus from '$lib/images/plus.svg';
    import minus from '$lib/images/minus.svg';

    let optionsTooltip = false;
    let liveViewerTooltip = false;
    let expandTooltip = false;
    let sidebarTooltip = false;

    let showOptions = false;
    let showLiveViewer = false;
    let showHeaderValue = true;
    let showSidebar = true;

    let liveViewer = "";

    showHeader.subscribe((value) => {
		showHeaderValue = value;
	});

    function toggleHeader() {
        showHeader.update(n => !n);
    }

    function toggleLiveViewer() {
        showLiveViewer = !showLiveViewer;
    }

    export let data;
    const region = data.regionId;
    console.log(region)

    let useTwitch = true;

</script>

<svelte:head>
	<title>Live</title>
	<meta name="description" content="Live page" />
</svelte:head>

<div class="{showHeaderValue ? "pt-[60px]" : "pt-0"} w-full h-full flex text-blue-50">
    <div class="flex flex-col tablet:flex-row w-full h-full">
        <div class="flex flex-col h-full w-full select-none">
            <div class="h-full w-full bg-black">
                <iframe
                    title="Target iframe page"
                    src="https://player.twitch.tv/?channel={region}&parent=streamernews.example.com&muted=false"
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
                        <div class="absolute bg-gray-50 bottom-[130%] rounded-md z-50 left-[50%] -ml-[60px] w-[120px] py-1 {optionsTooltip ? "inline" : "hidden"}">
							<h2 class="text-center text-blue-gray-500">Options</h2>
						</div>
						<div class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 transform rotate-45 {optionsTooltip ? "inline" : "hidden"}"></div>
                    </div>
                    <button
                        on:pointerenter={() => {liveViewerTooltip = true}} 
                        on:pointerleave={() => {liveViewerTooltip = false}} 
                        on:click={() => {toggleLiveViewer()}}
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={showLiveViewer ? minus : plus} class="h-6 m-auto cursor-pointer" alt="Options" />
                        <div class="absolute bg-gray-50 bottom-[130%] rounded-md z-50 left-[50%] -ml-[60px] w-[140px] py-1 {liveViewerTooltip ? "inline" : "hidden"}">
							<h2 class="text-center text-blue-gray-500">{showLiveViewer ? "Hide Live Viewer" : "Add Live Viewer"}</h2>
						</div>
						<div class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 transform rotate-45 {liveViewerTooltip ? "inline" : "hidden"}"></div>
                    </button>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div 
                        on:pointerenter={() => {expandTooltip = true}} 
                        on:pointerleave={() => {expandTooltip = false}}
                        on:click={() => {toggleHeader()}}
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={showHeaderValue ? expandPage : shrinkPage} class="h-6 m-auto cursor-pointer" alt="Hide Header" />
                        <div class="absolute bg-gray-50 bottom-[130%] rounded-md z-50 left-[50%] -ml-[60px] w-[120px] py-1 {expandTooltip ? "inline" : "hidden"}">
							<h2 class="text-center text-blue-gray-500">{showHeaderValue ? "Hide Header" : "Show Header"}</h2>
						</div>
						<div class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 transform rotate-45 {expandTooltip ? "inline" : "hidden"}"></div>
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        on:pointerenter={() => {sidebarTooltip = true}} 
                        on:pointerleave={() => {sidebarTooltip = false}}
                        on:click={() => {showSidebar = !showSidebar}} 
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={sidebar} class="h-6 m-auto cursor-pointer" alt="Show Chat" />
                        <div class="absolute bg-gray-50 bottom-[130%] rounded-md z-50 {showSidebar ? "right-0 tablet:right-auto tablet:left-[50%] tablet:-ml-[60px]" : "right-0"}  w-[120px] py-1 {sidebarTooltip ? "inline" : "hidden"}">
							<h2 class="text-center text-blue-gray-500">{showSidebar ? "Hide Sidebar" : "Show Sidebar"}</h2>
						</div>
						<div class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 transform rotate-45 {sidebarTooltip ? "inline" : "hidden"}"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tablet:hidden border-b-[1px] border-[#35353B]" />
        <div class="h-full w-full tablet:w-[400px] flex-row tablet:flex-col {showSidebar ? "flex" : "hidden"}">
            <div class="{showLiveViewer ? "w-1/2" : "hidden"} tablet:w-full h-full tablet:h-[233px] bg-[#18181B] tablet:border-b-[1px] tablet:border-[#35353B]">
                <div class="{liveViewer == "" ? "flex flex-col" : "hidden"}">

                </div>
                <div class="h-full w-full {liveViewer != "" ? "flex flex-col" : "hidden"}">
                    <iframe
                        title="Target iframe page"
                        src="https://player.twitch.tv/?channel={liveViewer}&parent=streamernews.example.com&muted=false"
                        height="100%"
                        width="100%"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="tablet:hidden h-full border-r-[1px] border-[#35353B]" />
            <div class="{showLiveViewer ? "w-1/2" : "w-full"} h-full tablet:w-full">
                <iframe
                    title="Target iframe page"
                    src="https://www.twitch.tv/embed/{region}/chat?darkpopout&parent=streamernews.example.com"
                    height="100%"
                    width="100%">
                </iframe>
            </div>
        </div>
    </div>
</div>

<style>
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