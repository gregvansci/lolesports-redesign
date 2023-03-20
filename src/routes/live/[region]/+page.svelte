<script lang="ts">
    import { onMount } from 'svelte';

    import chat from '$lib/images/chat.svg';
    import hideHeader from '$lib/images/hide-header.svg';
    import options from '$lib/images/options.svg';

    let darkMode: boolean;

    onMount(() => {
        if (localStorage.theme === "dark") {
            darkMode = true;
        } else {
            darkMode = false;
        }
    });
</script>

<div class="pt-[60px] w-full h-full flex text-blue-50">
    <div class="flex flex-row w-full h-full">
        <div class="flex flex-col h-full w-full">
            <div class="h-full w-full">
                <iframe
                    title="Target iframe page"
                    src="https://player.twitch.tv/?channel=challengersleague&parent=streamernews.example.com"
                    height="100%"
                    width="100%"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="flex flex-row justify-between w-full h-12 px-4 bg-gray-900">
                <div class="flex flex-row h-full gap-2">
                    <img class="h-10 m-auto" src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819523085_t1-2021-worlds.png" alt="Logo">
                    <div class="m-auto pb-1">
                        <h2 class="font-bold">T1 vs D Plus</h2>
                    </div>
                    <img class="h-10 m-auto" src="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1673260049703_DPlusKIALOGO11.png" alt="Logo">
                </div>
                <div class="flex flex-row">
                    <img src={options} class="h-7 m-auto px-3 py-auto svg-filter-dark cursor-pointer" alt="Options" />
                    <img src={hideHeader} class="h-7 m-auto px-3 py-auto svg-filter-dark cursor-pointer" alt="Hide Header" />
                    <img src={chat} class="h-7 m-auto px-3 py-auto svg-filter-dark cursor-pointer" alt="Show Chat" />
                </div>
            </div>
        </div>
        <div class="h-full w-[400px] flex flex-col">
            <div class="h-16 w-full flex flex-row bg-[#18181B]">
                <input class="h-6 rounded-md m-auto px-2 bg-gray-400 align-middle focus:outline-none" placeholder="Add Live View Channel">
            </div>
            <iframe 
                title="Target iframe page"
                src="https://www.twitch.tv/embed/challengersleague/chat?darkpopout&parent=streamernews.example.com"
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
    .svg-filter-dark {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
	.svg-filter-dark:hover {
		filter: invert(58%) sepia(92%) saturate(3440%) hue-rotate(145deg) brightness(106%) contrast(101%);
	}
</style>