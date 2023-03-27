<script lang="ts">
    import { onMount } from 'svelte';
    import { darkMode } from '../../store';

    import ScheduleNewDay from '../ScheduleNewDay.svelte';
    import ScheduleGame from '../ScheduleGame.svelte';
    import LiveGame from '../LiveGame.svelte';

    import expandArrow from '$lib/images/expand-arrow.svg';

    let darkModeValue: boolean;

    darkMode.subscribe(value => {
        darkModeValue = value;
    });

    // create a variable of tomorrows date
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    let showFollowingLeft = false;
    let showFollowing = false;
    let showSpoilersLeft = false;
    let showSpoilers = false;
</script>

<section class="mt-[60px] w-full overflow-y-scroll">
    <div class="w-full justify-center flex flex-row pl-[128px] pr-[248px]">
        <div class="w-[900px] flex flex-col h-auto relative pt-4">
            <!-- <div class="w-[80px] absolute -left-[128px] flex rounded-full top-4  py-1
                bg-black dark:bg-gray-700
                text-blue-50">
                <h2 class="m-auto">Today</h2>
            </div> -->
            <ScheduleGame {showSpoilers} team0="Dplus Kia" team0Score="0W-1L" team1="Hanwha Life Esports" team1Score="1W-0L" gameScore={[1,3]} region="LCK" season="Spring" stage="Playoffs" bestOf={5} past={true}
                team0img="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/73/Dplus_KIAlogo_square.png"
                team0imgInvert = {true}
                team1img="https://am-a.akamaihd.net/image?resize=72:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819564399_hle-2021-worlds.png"
            />
            <ScheduleNewDay date={new Date()}/>
            <LiveGame showLive={true}/>
            <LiveGame />
            <ScheduleGame team0="Thunder Talk Gaming" team1="Edward Gaming Hycan" region="LPL" season="Spring" bestOf={3}/>
            <ScheduleGame team0="T1" team1="KT Rolster" region="LCK" season="Spring" stage="Playoffs" bestOf={5} 
                team0img="https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819523085_t1-2021-worlds.png"
                team1img="https://am-a.akamaihd.net/image?resize=140:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fkt_darkbackground.png"
            />
            <ScheduleGame region="EMEA Masters" season="Spring" bestOf={1}/>
            <ScheduleNewDay date={tomorrow}/>
            <ScheduleGame region="LCK" season="Spring" stage="Regional Qualifier" bestOf={1}/>
            <ScheduleGame region="LPL" season="Spring" stage="" bestOf={1}/>
            <ScheduleGame />
        </div>
        <div class="select-none">
            <div class="pl-12 absolute top-[10vh] flex flex-col gap-6">
                <div class="flex flex-col gap-6">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => {showFollowing = !showFollowing; showFollowingLeft = true}} class="flex flex-row justify-between cursor-pointer w-[200px]">
                        <h2>Show Following</h2>
                        <div class="{ showFollowing ? "bg-highlight" : "bg-gray-100 dark:bg-gray-700"} rounded-full w-12 flex transition ease-in-out duration-300">
                            <div class="bg-white rounded-full w-5 h-5 my-auto ml-[2px] transition ease-in-out duration-300 {showFollowing ? "animate-right" : showFollowingLeft ? "animate-left" : ""}"/>
                        </div>
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => {showSpoilers = !showSpoilers; showSpoilersLeft = true}} class="flex flex-row justify-between cursor-pointer w-[200px]">
                        <h2>Show Spoilers</h2>
                        <div class="{ showSpoilers ? "bg-highlight" : "bg-gray-100 dark:bg-gray-700"} rounded-full w-12 flex transition ease-in-out duration-300">
                            <div class="bg-white rounded-full w-5 h-5 my-auto ml-[2px] transition ease-in-out duration-300 {showSpoilers ? "animate-right" : showSpoilersLeft ? "animate-left" : ""}"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-highlight rounded-full p-[10px] px-4 cursor-pointer">
                        <h2 class="m-auto text-sm">International</h2>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-highlight rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LCS</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkModeValue ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LEC</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkModeValue ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-highlight rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LCK</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkModeValue ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LPL</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkModeValue ? "svg-filter-dark" : "svg-filter"}">
                            <img src={expandArrow} class="m-auto h-5" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">Minor</h2>
                        <div class="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto {darkModeValue ? "svg-filter-dark" : "svg-filter"}">
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
    .animate-right {
        animation: slide-right 0.2s ease forwards;
    }
    .animate-left {
        animation: slide-left 0.2s ease forwards;
    }
    @keyframes slide-right {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(24px);
        }
    }
    @keyframes slide-left {
        0% {
            transform: translateX(24px);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>