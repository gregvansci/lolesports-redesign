<script lang="ts">
    import { auth } from '../store'
    import { darkMode } from '../store';
    import defaultTeam from '$lib/images/lolesports-icon.png';
    import newTab from '$lib/images/new-tab.svg';

    export let matchDate = "";
    export let team1 = "Team 1";
    export let team1Score = 0;
    let team1History = "0-0";
    export let team2 = "Team 2";
    export let team2Score = 0;
    let team2History = "0-0";
    export let region = "";
    export let season = "";
    export let stage = "";
    export let bestOf = 1;
    
    export let showSpoilers = false;
    export let past = false;

    export let team1img = {
        link: "",
        invert: true,
        outline: false
    };
    export let team2img = {
        link: "",
        invert: true,
        outline: false
    };

    let firstTo = bestOf / 2 + 0.5;
    let darkModeValue: boolean;

    darkMode.subscribe(value => {
        darkModeValue = value;
    });

    let authValue: boolean;

    auth.subscribe(value => {
        authValue = value;
    });

    function getHour(mD: string) {
        let date = new Date(mD);
        let hour = date.getHours();
        if (hour == 0) return 12;
        return hour > 12 ? hour - 12 : hour;
    }

    function getMeridian(mD: string) {
        let date = new Date(mD);
        let hour = date.getHours();
        return hour > 12 ? "PM" : "AM";
    }

    export let leftOpen = false;
    export let rightOpen = false;

    let team1Followed = false;
    let team2Followed = false;

    export let handleFollow: (region: string, team: string) => void = () => {};
    export let handleUnfollow: (region: string, team: string) => void = () => {};
    export let checkFollowing: (region: string, team: string) => boolean = () => {return false};

</script>

<div class="h-[85px] w-full flex flex-row justify-between select-none border-y-[1px] border-gray-100 dark:border-steel-800 transition ease-in-out duration-300">
    <div class="my-auto ml-4 w-[80px] text-blue-gray-400 dark:text-blue-200 font-bold text-3xl flex flex-row transition ease-in-out duration-300">{getHour(matchDate)}<span class="text-sm pt-[3px] pl-[2px]">{getMeridian(matchDate)}</span></div>
    <div class="flex m-auto h-full text-blue-gray-500 dark:text-blue-50 transition ease-in-out duration-300">
        <div class="relative w-[325px] h-full flex justify-end">
            <button 
                on:click={() => {if (team1 === "TBD") return; team1Followed = checkFollowing(region, team1); leftOpen = !leftOpen;}} 
                on:pointerleave={() => {leftOpen = false;}}
                class="{leftOpen ? "open bg-gray-50 dark:bg-steel-800" : "closed"} top-[9px] z-10 hover:z-20 overflow-hidden absolute h-[67px] flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-steel-800 rounded-lg cursor-pointer"
            >
                <div class="flex flex-row gap-2 mt-[6px] px-4">
                    <div class="my-auto">
                        <h2 class="font-semibold text-xl">{team1}</h2>
                        <!-- <h2 class="flex justify-start text-sm">{past && showSpoilers ? team1History : ""}</h2> -->
                    </div>
                    <div class="my-auto h-[55px] flex">
                        <img class="w-[55px] m-auto {!darkModeValue ? team1img["invert"] ? "teamLogoInvert" : "" : ""} {!darkModeValue && team1img["outline"] ? "img-outline" : ""} transition ease-in-out duration-300" src={team1img["link"] == "" ? defaultTeam : team1img["link"]} alt={team1}>
                    </div>
                </div>
                {#if leftOpen && team1 !== "TBD"}
                    <div class="flex flex-col mx-auto z-30 gap-1">
                        <a 
                            href="https://lol.fandom.com/wiki/{team1}"
                            target="_blank"
                            class="flex flex-row gap-1 justify-center border-2 border-gray-100 dark:border-steel-700 hover:bg-gray-100 dark:hover:bg-steel-700 w-[105px] rounded-lg {darkModeValue ? "svg-filter-dark" : "svg-filter" }">
                            <h2 class="my-[2px]">Wiki</h2>
                            <img class="w-4 my-auto" src={newTab} alt="new tab">
                        </a>
                        <button on:click|stopPropagation={() => {team1Followed ? handleUnfollow(region, team1) : handleFollow(region, team1); team1Followed = !team1Followed}} class="flex border-2 border-gray-100 dark:border-steel-700 hover:bg-gray-100 dark:hover:bg-steel-700 w-[105px] rounded-lg {darkModeValue ? "svg-filter-dark" : "svg-filter" } transition ease-in-out duration-300 ">
                            <h2 class="mx-auto my-[2px]">{team1Followed ? "Unfollow" : "Follow"}</h2>
                        </button>
                    </div>
                {/if}
            </button>  
        </div>
        <div class="m-auto mx-2 text-lg font-medium w-[28px] flex">
            <div class="m-auto flex flex-row">
                <span class="{past && showSpoilers ? 'hidden' : 'block'}">vs</span>
                <span class="{past && showSpoilers ? team1Score === firstTo ? 'block text-blue-gray-700 dark:text-blue-gray-100 transition ease-in-out duration-300' : 'block text-blue-gray-400 dark:text-blue-gray-300 transition ease-in-out duration-300' : 'hidden'}">{team1Score}</span>
                <span class="{past && showSpoilers ? 'block px-[1px]' : 'hidden'}">-</span>
                <span class="{past && showSpoilers ? team2Score === firstTo ? 'block text-blue-gray-700 dark:text-blue-gray-100 transition ease-in-out duration-300' : 'block text-blue-gray-400 dark:text-blue-gray-300 transition ease-in-out duration-300' : 'hidden'}">{team2Score}</span>
            </div>
        </div>
        <div class="relative w-[325px] flex justify-start">
            <button 
                on:click={() => {if (team2 === "TBD") return; team2Followed = checkFollowing(region, team2); rightOpen = !rightOpen;}} 
                on:pointerleave={() => {rightOpen = false;}}
                class="{rightOpen ? "open bg-gray-50 dark:bg-steel-800" : "closed"} top-[9px] z-10 hover:z-20 overflow-hidden absolute h-[67px] flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-steel-800 rounded-lg cursor-pointer"
            >
                <div class="flex flex-row gap-2 mt-[6px] px-4">
                    <div class="my-auto h-[55px] flex">
                        <img class="w-[55px] m-auto {!darkModeValue ? team2img["invert"] ? "teamLogoInvert" : "" : ""} {!darkModeValue && team2img["outline"] ? "img-outline" : ""} transition ease-in-out duration-300" src={team2img["link"] == "" ? defaultTeam : team2img["link"]} alt={team2}>
                    </div>
                    <div class="my-auto">
                        <h2 class="font-semibold text-xl">{team2}</h2>
                        <!-- <h2 class="flex justify-start text-sm">{past && showSpoilers ? team2History : ""}</h2> -->
                    </div>
                </div>
                {#if rightOpen && team2 !== "TBD"}
                    <div class="flex flex-col mx-auto z-30 gap-1">
                        <a 
                            href="https://lol.fandom.com/wiki/{team2}"
                            target="_blank"
                            class="flex flex-row gap-1 justify-center border-2 border-gray-100 dark:border-steel-700 hover:bg-gray-100 dark:hover:bg-steel-700 w-[105px] rounded-lg {darkModeValue ? "svg-filter-dark" : "svg-filter" }">
                            <h2 class="my-[2px]">Wiki</h2>
                            <img class="w-4 my-auto" src={newTab} alt="new tab">
                        </a>
                        <button on:click|stopPropagation={() => {team2Followed ? handleUnfollow(region, team2) : handleFollow(region, team2); team2Followed = !team2Followed}} class="flex border-2 border-gray-100 dark:border-steel-700 hover:bg-gray-100 dark:hover:bg-steel-700 w-[105px] rounded-lg {darkModeValue ? "svg-filter-dark" : "svg-filter" } transition ease-in-out duration-300 ">
                            <h2 class="mx-auto my-[2px]">{team2Followed ? "Unfollow" : "Follow"}</h2>
                        </button>
                    </div>
                {/if}
            </button>
        </div>
    </div> 
    <div class="whitespace-nowrap text-center flex flex-col my-auto w-[80px] mr-4 font-medium text-sm text-blue-gray-400 dark:text-blue-200 transition ease-in-out duration-300">
        <div class="flex justify-center">
            <h2 class="break-normal"><span class="text-blue-gray-600 dark:text-blue-gray-100 transition ease-in-out duration-300">{region}</span> {season}</h2>
        </div>
        <div class="flex justify-center">
            <h2 class="break-normal]">{stage}</h2>
        </div>
        <div class="flex justify-center">
            <h2>Best of {bestOf}</h2>
        </div>
    </div>
</div>

<style>
	img {
		-webkit-user-drag: none;
	}   
    .teamLogoInvert {
        filter: invert(1);
    }    
    .img-outline {
        -webkit-filter: drop-shadow(2px 1px 0 #A3A3A3)
                        drop-shadow(-1px -1px 0 #A3A3A3);
        filter: drop-shadow(1px 1px 0 #A3A3A3) 
                drop-shadow(-1px -1px 0 #A3A3A3);
    }
    .open {
        z-index: 30;
        height: 145px;
        transition: height 0.3s ease;
    }
    .closed {
        height: 67px;
        transition: height 0.3s ease;
    }
    .svg-filter img {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter-dark img {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
</style>