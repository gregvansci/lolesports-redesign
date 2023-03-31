<script lang="ts">
    import { darkMode } from '../../store';
    import lck from '$lib/data/curSplit/lck.json';
    import lpl from '$lib/data/curSplit/lpl.json';
    import lec from '$lib/data/curSplit/lec.json';
    import lcs from '$lib/data/curSplit/lcs.json';

    import ScheduleNewDay from '../ScheduleNewDay.svelte';
    import ScheduleGame from '../ScheduleGame.svelte';
    import LiveGame from '../LiveGame.svelte';
    import RegionSelector from './RegionSelector.svelte';
    import { onMount } from 'svelte';

    let darkModeValue: boolean;

    darkMode.subscribe(value => {
        darkModeValue = value;
    });

    // create an interface for matches
    interface Match {
        matchId: string;
        matchDate: string;
        team1: string;
        team1Score: number;
        team2: string;
        team2Score: number;
        region: string;
        season: string;
        stage: string;
        bestOf: number;
    }



    let showFollowingLeft = false;
    let showFollowing = false;
    let showSpoilersLeft = false;
    let showSpoilers = false;

    // If any of the items in the array after the 0th index are true, the 0th index is true
    let regionShown = [ 
        [ true ],                                           // International
        [ true, true, false ],                              // Korea, LCK, LCK CL
        [ false, false, false ],                            // China, LPL, LDL
        [ false, false, false ],                            // Europe, LEC, EMEA Masters
        [ true, true, false ],                              // North America, LCS, NACL
        [ false, false, false, false, false, false, false ] // Minor Regions, PCS, VCS, LJL, CBLOL, LLA, LCO
    ];

    function isRegionShown(region: string): boolean {
        if (region === 'LCK') return regionShown[1][1];
        if (region === 'LPL') return regionShown[2][1];
        if (region === 'LEC') return regionShown[3][1];
        if (region === 'LCS') return regionShown[4][1];
        return false;
    }
    
    // If true, dropdown is open. Only one dropdown can be open at a time
    let regionDropdown = [ false, false, false, false, false, false ];    

    function handleToggleDropdown(region: number) {
        if (regionDropdown[region]) {
            regionDropdown[region] = false;
        } else {
            regionDropdown.fill(false);
            regionDropdown[region] = true;
        }

    }

    function handleRegionInput(region: number, index: number) {
        if (regionDropdown[region]) {
            if (index == 0) {
                if (regionShown[region][0]) {
                    regionShown[region].fill(false);
                } else {
                    regionShown[region].fill(true);
                }
            } else {
                if (regionShown[region][index]) {
                    regionShown[region][index] = false;
                } else {
                    regionShown[region][index] = true;
                }
            }
        } else {
            if (region == 5) {
                if (regionShown[region][0]) {
                    regionShown[region].fill(false);
                } else {
                    regionShown[region].fill(true);
                }
            } else {
                if (regionShown[region][0]) {
                    regionShown[region] = [ false, false, false ];
                } else {
                    regionShown[region] = [ true, true, false ];
                }
            }
        }

        // if any after 0th are true, then set 0th to true
        // otherwise set 0th to false
        if (regionShown[region].slice(1).some((value) => value)) {
            regionShown[region][0] = true;
        } else {
            regionShown[region][0] = false;
        }
    }
</script>

<svelte:head>
	<title>Schedule</title>
	<meta name="description" content="Schedule page" />
</svelte:head>

<section class="mt-[60px] w-full overflow-y-scroll">
    <div class="w-full justify-center flex flex-row pl-[128px] pr-[248px]">
        <div class="w-[900px] flex flex-col h-auto relative pt-4">
            <ScheduleNewDay date={new Date()}/>
            <LiveGame showLive={true}/>
            <LiveGame />
            <!-- Add future matches as scheduleGame's -->
            <!-- {#each shownFutureMatches as match, i}
                {#if i == 0 && new Date(match.matchDate).getDate() != new Date().getDate()}
                    <ScheduleNewDay date={new Date(match.matchDate)}/>
                {/if}
                {#if i != 0 && new Date(match.matchDate).getDate() != new Date(shownFutureMatches[i-1].matchDate).getDate()}
                    <ScheduleNewDay date={new Date(match.matchDate)}/>
                {/if}
                <ScheduleGame matchDate={match.matchDate} team1={match.team1} team1Score={match.team1Score} team2={match.team2} team2Score={match.team2Score} region={match.region} season={match.season} stage={match.stage} bestOf={match.bestOf} {showSpoilers} past={false}/> 
            {/each} -->
        </div>
        <div class="select-none">
            <div class="pl-12 absolute top-[10vh] flex flex-col gap-6">
                <div class="flex flex-col gap-6">
                    <button on:click={() => {showFollowing = !showFollowing; showFollowingLeft = true}} class="flex flex-row justify-between w-[200px]">
                        <h2>Show Following</h2>
                        <div class="{ showFollowing ? "bg-highlight" : "bg-gray-100 dark:bg-gray-700"} rounded-full w-12 flex transition ease-in-out duration-300">
                            <div class="bg-white rounded-full w-5 h-5 m-[2px] transition ease-in-out duration-300 {showFollowing ? "animate-right" : showFollowingLeft ? "animate-left" : ""}"/>
                        </div>
                    </button>
                    <button on:click={() => {showSpoilers = !showSpoilers; showSpoilersLeft = true}} class="flex flex-row justify-between w-[200px]">
                        <h2>Show Spoilers</h2>
                        <div class="{ showSpoilers ? "bg-highlight" : "bg-gray-100 dark:bg-gray-700"} rounded-full w-12 flex transition ease-in-out duration-300">
                            <div class="bg-white rounded-full w-5 h-5 m-[2px] transition ease-in-out duration-300 {showSpoilers ? "animate-right" : showSpoilersLeft ? "animate-left" : ""}"/>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col gap-6">
                    <button
                        on:click = {() => {regionShown[0][0] = !regionShown[0][0];}} 
                        class="flex flex-row justify-between bg-gray-50 dark:bg-gray-800 border-2  shadow-sm  rounded-full p-[10px] px-4
                        hover:bg-gray-100 dark:hover:bg-gray-700
                        {regionShown[0][0] ? "border-highlight" : "border-gray-100 dark:border-gray-700"}"
                    >
                        <h2 class="m-auto text-sm">International</h2>
                    </button>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["Korea", "LCK", "LCK CL"]} leaguesActive={regionShown[1]} dropdown={regionDropdown[1]}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["China", "LPL", "LDL"]} leaguesActive={regionShown[2]} dropdown={regionDropdown[2]}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["Europe", "LEC", "EMEA Masters"]} leaguesActive={regionShown[3]} dropdown={regionDropdown[3]}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["N America", "LCS", "NACL"]} leaguesActive={regionShown[4]} dropdown={regionDropdown[4]}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["Minor", "PCS", "VCS", "LJL", "CBLOL", "LLA", "LCO"]} leaguesActive={regionShown[5]} dropdown={regionDropdown[5]} minor={true}/>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
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

<!-- <div class="w-[80px] absolute -left-[128px] flex rounded-full top-4  py-1
    bg-black dark:bg-gray-700
    text-blue-50">
    <h2 class="m-auto">Today</h2>
</div> -->