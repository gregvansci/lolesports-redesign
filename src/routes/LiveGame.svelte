<script lang="ts">
    import { onMount } from 'svelte';
    import { darkMode } from '../store';

    import defaultTeam from '$lib/images/lolesports-icon-black.png';
    import defaultTeamDark from '$lib/images/lolesports-icon-white.png';
    import live from '$lib/images/live.svg';

    let date = new Date();
    export let team0 = "Left Team";
    export let team0img = "";
    export let team0imgInvert = team0img ? false : true;
    export let team0Score = "0-0";
    export let team1 = "Right Team";
    export let team1img = "";
    export let team1imgInvert = team1img ? false : true;
    export let team1Score: string | undefined = "0-0";
    export let gameScore: Array<Number> = [0, 0];
    export let region = "";
    export let season = ""
    export let stage = "";
    export let bestOf = 1;
    export let showLive = false;
    let firstTo = bestOf / 2 + 0.5;
    export let past: boolean | undefined = false;


    // things to have: date, time, team1, team2, team images, region, best of, ? split info (LPL Spring (Playoffs))
    // past games have a max score equal to best of number
    // live games have date after now but less than max games won
    // all other are future games

    // when adding a game, unless there is a game above with the same date, add a space with the date
    // live games are taller
    // today markers follows top of live games or top of future games

    let darkModeValue: boolean;
    darkMode.subscribe(value => {
        darkModeValue = value;
    });

</script>

<div class="h-[115px] w-full flex flex-row justify-between bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-300 cursor-pointer">
    <div class="{showLive ? "visible" : "invisible"} my-auto ml-4 w-[80px] text-blue-gray-400 dark:text-blue-200 font-semibold text-xl flex flex-row transition ease-in-out duration-300">
        <img src={live} alt="Live SVG" class="my-auto w-[20px] h-[20px] svg-filter-red">
        <h2 class="pb-[1px] pl-[6px]">LIVE</h2>
    </div>
    <div class="flex m-auto text-blue-gray-500 dark:text-blue-50 transition ease-in-out duration-300">
        <div class="w-[325px] flex justify-end">
            <div class="flex flex-row gap-2 justify-end hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg px-4 py-[6px] cursor-pointer">
                <div class="my-auto">
                    <h2 class="font-semibold text-xl">{team0}</h2>
                    <h2 class="flex justify-end text-sm">{past ? team0Score : ""}</h2>
                </div>
                <div class="my-auto">
                    <img class="w-[55px] {darkModeValue ? team0imgInvert ? "teamLogoInvert" : "" : ""} transition ease-in-out duration-300" src={team0img === "" ? defaultTeam : team0img} alt={team0}>
                </div>
            </div>        
        </div>
        <div class="m-auto mx-2 text-lg font-medium w-[28px] flex">
            <div class="m-auto flex flex-row">
                <span class="{past ? 'hidden' : 'block'}">vs</span>
                <span class="{past ? gameScore[0] === firstTo ? 'block text-blue-gray-700 dark:text-blue-gray-100 transition ease-in-out duration-300' : 'block text-blue-gray-400 dark:text-blue-gray-300 transition ease-in-out duration-300' : 'hidden'}">{gameScore[0]}</span>
                <span class="{past ? 'block px-[1px]' : 'hidden'}">-</span>
                <span class="{past ? gameScore[1] === firstTo ? 'block text-blue-gray-700 dark:text-blue-gray-100 transition ease-in-out duration-300' : 'block text-blue-gray-400 dark:text-blue-gray-300 transition ease-in-out duration-300' : 'hidden'}">{gameScore[1]}</span>
            </div>
        </div>
        <div class="w-[325px] flex justify-start">
            <div class="flex flex-row gap-2 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg px-4 cursor-pointer">
                <div class="my-auto">
                    <img class="w-[55px] {darkModeValue ? team1imgInvert ? "teamLogoInvert" : "" : ""} transition ease-in-out duration-300" src={team1img === "" ? defaultTeam : team1img} alt={team1}>
                </div>
                <div class="my-auto">
                    <h2 class="font-semibold text-xl">{team1}</h2>
                    <h2 class="flex justify-start text-sm">{past ? team1Score : ""}</h2>
                </div>
            </div>
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
    .teamLogoInvert {
        filter: invert(1);
    }    
    .svg-filter-red {
		filter: invert(8%) sepia(52%) saturate(7276%) hue-rotate(350deg) brightness(110%) contrast(108%);
	}
</style>