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
    import twitch from '$lib/images/twitch-icon.svg';

    let optionsTooltip = false;
    let liveViewerTooltip = false;
    let expandTooltip = false;
    let sidebarTooltip = false;

    let showOptions = false;
    let showLiveViewer = false;
    let showHeaderValue = true;
    let showSidebar = true;

    let liveViewer = "";
    let liveViewerValue = "";
    let isInputFocused = false;

    showHeader.subscribe((value) => {
		showHeaderValue = value;
	});

    function toggleHeader() {
        showHeader.update(n => !n);
    }

    function toggleLiveViewer() {
        if (showLiveViewer) {
            liveViewer = "";
            if (chatShown == "Live Viewer") {
                chatShown = "Broadcast";
                chat = region;
            }
        }
        showLiveViewer = !showLiveViewer;
    }

    function handleChatChange(event: Event) {
        const selectedOption = (event.target as HTMLSelectElement).value;
        if (selectedOption == "Broadcast") {
            chatShown = "Broadcast";
            chat = region;
        } else if (selectedOption == "Live Viewer") {
            chatShown = "Live Viewer";
            chat = liveViewer;
        } else if (selectedOption == "None") {
            chatShown = "None";
            chat = "";
        }
    }

    export let data;
    const region = data.regionId;

    let chatShown = "Broadcast";
    let chat = region;

    let useTwitch = true;

</script>

<svelte:head>
	<title>Live</title>
	<meta name="description" content="Live page" />
</svelte:head>

<div class="{showHeaderValue ? "pt-[60px]" : "pt-0"} w-full h-full flex text-blue-50">
    <div class="flex flex-col tablet:flex-row w-full h-full">
        <div class="flex flex-col h-full w-full select-none">
            <div class="h-full w-full bg-black relative">
                <iframe
                    title="Target iframe page"
                    src="https://player.twitch.tv/?channel={region}&parent=streamernews.example.com&muted=false"
                    height="100%"
                    width="100%"
                    allowfullscreen>
                </iframe>
                <div class="{showOptions ? "flex flex-col gap-0 m-auto" : "hidden"} absolute p-8 pt-6 bottom-0 right-0 bg-[#18181B] border-[1px] border-[#35353B] w-[360px]">
                    <h2 class="text-lg font-semibold pb-1">Options</h2>
                    <div class="flex flex-row justify-between border-t-[1px] border-b-[1px] border-[#35353B] py-2">
                        <h2 class="my-auto">Stream Provider</h2>
                        <select class="cursor-pointer bg-[#18181B] border-[1px] border-[#35353B] w-32 h-8 rounded-lg pl-2">
                            <option>Twitch</option>
                            <option>Youtube(Soon)</option>
                        </select>
                    </div>
                    <div class="flex flex-row justify-between border-b-[1px] border-[#35353B] py-2">
                        <h2 class="my-auto">Chat Shown</h2>
                        <select bind:value={chatShown} on:change={handleChatChange} class="cursor-pointer bg-[#18181B] border-[1px] border-[#35353B] w-32 h-8 rounded-lg pl-2">
                            <option value="Broadcast">Broadcast</option>
                            <option value="Live Viewer" class="{liveViewer == "" ? "hidden" : ""}">Live Viewer</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-between w-full h-12 px-4 bg-[#18181B]">
                <div class="flex flex-row h-full gap-2">
                    <img class="h-10 m-auto" src="https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1641292031788_Team_BDSlogo_square.png" alt="Logo">
                    <div class="m-auto pb-1">
                        <h2 class="font-bold">Team BDS vs KOI</h2>
                    </div>
                    <img class="h-10 m-auto" src="https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1673718797685_image.webp" alt="Logo">
                </div>
                <div class="flex flex-row">
                    <button
                        on:pointerenter={() => {optionsTooltip = true}} 
                        on:pointerleave={() => {optionsTooltip = false}} 
                        on:click={() => {showOptions = !showOptions}}
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={options} class="h-6 m-auto cursor-pointer" alt="Options" />
                        <div 
                            class="absolute bg-gray-50 bottom-[130%] rounded-md z-50 left-[50%] -ml-[60px] w-[120px] py-1 
                            {optionsTooltip ? "inline" : "hidden"}"
                        >
							<h2 class="text-center text-blue-gray-500">{showOptions ? "Hide Options" : "Show Options"}</h2>
						</div>
						<div 
                            class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 transform rotate-45 
                            {optionsTooltip ? "inline" : "hidden"}"
                        />
                    </button>
                    <button
                        on:pointerenter={() => {liveViewerTooltip = true}} 
                        on:pointerleave={() => {liveViewerTooltip = false}} 
                        on:click={() => {toggleLiveViewer()}}
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={showLiveViewer ? minus : plus} class="h-6 m-auto cursor-pointer" alt="Options" />
                        <div class="absolute bg-gray-50 bottom-[130%] rounded-md z-50 left-[50%] -ml-[60px] w-[140px] py-1 {liveViewerTooltip ? "inline" : "hidden"}">
							<h2 class="text-center text-blue-gray-500">{showLiveViewer ? "Hide Live Viewer" : "Add Live Viewer"}</h2>
						</div>
						<div 
                            class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 transform rotate-45 
                            {liveViewerTooltip ? "inline" : "hidden"}" 
                        />
                    </button>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div 
                        on:pointerenter={() => {expandTooltip = true}} 
                        on:pointerleave={() => {expandTooltip = false}}
                        on:click={() => {toggleHeader()}}
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={showHeaderValue ? expandPage : shrinkPage} class="h-6 m-auto cursor-pointer" alt="Hide Header" />
                        <div 
                            class="absolute bg-gray-50 bottom-[130%] rounded-md z-50 left-[50%] -ml-[60px] w-[120px] py-1 
                            {expandTooltip ? "inline" : "hidden"}"
                        >
							<h2 class="text-center text-blue-gray-500">{showHeaderValue ? "Hide Header" : "Show Header"}</h2>
						</div>
						<div 
                            class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 transform rotate-45 
                            {expandTooltip ? "inline" : "hidden"}"
                        />
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        on:pointerenter={() => {sidebarTooltip = true}} 
                        on:pointerleave={() => {sidebarTooltip = false}}
                        on:click={() => {showSidebar = !showSidebar}} 
                        class="relative svg-filter-dark hover:bg-gray-800 m-auto p-[5px] rounded-md">
                        <img src={sidebar} class="h-6 m-auto cursor-pointer" alt="Show Chat" />
                        <div 
                            class="absolute bg-gray-50 bottom-[130%] rounded-md z-50 w-[120px] py-1
                            {showSidebar ? "right-0 tablet:right-auto tablet:left-[50%] tablet:-ml-[60px]" : "right-0"}   
                            {sidebarTooltip ? "inline" : "hidden"}"
                        >
							<h2 class="text-center text-blue-gray-500">{showSidebar ? "Hide Sidebar" : "Show Sidebar"}</h2>
						</div>
						<div 
                            class="absolute bottom-[120%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-gray-50 transform rotate-45 
                            {sidebarTooltip ? "inline" : "hidden"}"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="tablet:hidden border-b-[1px] border-[#35353B]" />
        <div class="h-full w-full tablet:w-[400px] flex-row tablet:flex-col {showSidebar ? "flex" : "hidden"}">
            <div class="{showLiveViewer ? "w-1/2 flex" : "hidden"} tablet:w-full h-full tablet:h-[233px] bg-[#18181B] tablet:border-b-[1px] tablet:border-[#35353B]">
                <div class="{liveViewer == "" ? "flex flex-col" : "hidden"} gap-6 m-auto pb-4">
                    <h2 class="font-semibold text-lg">
                        <img src={twitch} class="h-4 inline-block" alt="Twitch" />
                        Live Viewer
                    </h2>
                    <div class="relative">
                        <input 
                            on:focus={() => isInputFocused = true} on:blur={() => isInputFocused = false} type="text" bind:value={liveViewerValue}  
                            on:keydown={(event) => {if (event.key === "Enter") {liveViewer = liveViewerValue}}}
                            class="px-2 bg-transparent text-sm outline-none h-8 rounded-sm border-2 border-white" 
                        />
                        <span 
                            class="absolute left-[2px] px-[6px] text-sm bottom-5 bg-[#18181B]
                            {isInputFocused ? "-translate-y-4" : ""}" 
                            style="transition: all 0.2s ease-in-out;"
                        >
                            Twitch Channel
                        </span>
                    </div>
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
                {#if chatShown != "None"}
                <iframe
                    class="{chatShown == "None" ? "hidden" : "flex"}}"
                    title="Target iframe page"
                    src="https://www.twitch.tv/embed/{chat}/chat?darkpopout&parent=streamernews.example.com"
                    height="100%"
                    width="100%">
                </iframe>
                {:else}
                <div class="h-full w-full bg-[#18181B] flex">
                    <h2 class="m-auto font-semibold text-lg">No Chat Shown</h2>
                </div>
                {/if}
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