<script lang="ts">
    import { darkMode } from '../store';
    import defaultTeam from '$lib/images/lolesports-icon.png';

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

    // get date hour, if it's past 12, subtract 12 and add PM, else add AM
    // 
    let date = new Date(matchDate);
    let hour = date.getHours();
    let convertedHour = hour > 12 ? hour - 12 : hour;
    let AM = hour > 12 ? "PM" : "AM";

</script>

<div class="h-[85px] w-full flex flex-row justify-between border-y-[1px] border-gray-100 dark:border-steel-800 transition ease-in-out duration-300">
    <div class="my-auto ml-4 w-[80px] text-blue-gray-400 dark:text-blue-200 font-bold text-3xl flex flex-row transition ease-in-out duration-300">{convertedHour}<span class="text-sm pt-[3px] pl-[2px]">{AM}</span></div>
    <div class="flex m-auto text-blue-gray-500 dark:text-blue-50 transition ease-in-out duration-300">
        <div class="w-[325px] flex justify-end">
            <div class="flex flex-row gap-2 justify-end hover:bg-gray-50 dark:hover:bg-steel-800 rounded-lg px-4 py-[6px] cursor-pointer">
                <div class="my-auto">
                    <h2 class="font-semibold text-xl">{team2}</h2>
                    <h2 class="flex justify-end text-sm">{past && showSpoilers ? team2History : ""}</h2>
                </div>
                <div class="my-auto">
                    <img class="w-[55px] {!darkModeValue && team2img["invert"] ? "teamLogoInvert" : ""} {!darkModeValue && team2img["outline"] ? "img-outline" : ""} transition ease-in-out duration-300" src={team2img["link"] == "" ? defaultTeam : team2img["link"]} alt={team2}>
                </div>
            </div>        
        </div>
        <div class="m-auto mx-2 text-lg font-medium w-[28px] flex">
            <div class="m-auto flex flex-row">
                <span class="{past && showSpoilers ? 'hidden' : 'block'}">vs</span>
                <span class="{past && showSpoilers ? team2Score === firstTo ? 'block text-blue-gray-700 dark:text-blue-gray-100 transition ease-in-out duration-300' : 'block text-blue-gray-400 dark:text-blue-gray-300 transition ease-in-out duration-300' : 'hidden'}">{team1Score}</span>
                <span class="{past && showSpoilers ? 'block px-[1px]' : 'hidden'}">-</span>
                <span class="{past && showSpoilers ? team1Score === firstTo ? 'block text-blue-gray-700 dark:text-blue-gray-100 transition ease-in-out duration-300' : 'block text-blue-gray-400 dark:text-blue-gray-300 transition ease-in-out duration-300' : 'hidden'}">{team2Score}</span>
            </div>
        </div>
        <div class="w-[325px] flex justify-start">
            <div class="flex flex-row gap-2 hover:bg-gray-50 dark:hover:bg-steel-800 rounded-lg px-4 cursor-pointer">
                <div class="my-auto">
                    <img class="w-[55px] {!darkModeValue ? team1img["invert"] ? "teamLogoInvert" : "" : ""} {!darkModeValue && team1img["outline"] ? "img-outline" : ""} transition ease-in-out duration-300" src={team1img["link"] == "" ? defaultTeam : team1img["link"]} alt={team1}>
                </div>
                <div class="my-auto">
                    <h2 class="font-semibold text-xl">{team1}</h2>
                    <h2 class="flex justify-start text-sm">{past && showSpoilers ? team1History : ""}</h2>
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
    .img-outline {
        -webkit-filter: drop-shadow(2px 1px 0 black)
                        drop-shadow(-1px -1px 0 black);
        filter: drop-shadow(1px 1px 0 black) 
                drop-shadow(-1px -1px 0 black);
    }
</style>