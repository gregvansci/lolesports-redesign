<script lang="ts">
    import { darkMode } from '../../store';

    import ScheduleNewDay from '../ScheduleNewDay.svelte';
    import ScheduleGame from '../ScheduleGame.svelte';
    import LiveGame from '../LiveGame.svelte';
    import RegionSelector from './RegionSelector.svelte';

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

    // If any of the items in the array after the 0th index are true, the 0th index is true
    let international = [ true ];               // All international tournaments
    let korea = [ true, true, false ];          // Any, LCK, LCK Challengers
    let china = [ false, false, false ];        // Any, LPL, LDL
    let europe = [ false, false, false ];       // Any, LEC, EMEA Masters
    let northAmerica = [ true, true, false ];   // Any, LCS, LCS Academy
    let minorRegions = [ false ];               // Placeholder

    let regionDropdown = [ false, false, false, false, false ];    // If true, dropdown is open. Only one dropdown can be open at a time

    // NEEDS TO BE REFACTORED
    function handleToggleDropdown(region: string) {
        switch (region) {
            case "Korea":
                if (regionDropdown[0]) {
                    regionDropdown[0] = false;
                } else {
                    regionDropdown = [ false, false, false, false, false ];
                    regionDropdown[0] = true;
                }
                break;
            case "China":
                if (regionDropdown[1]) {
                    regionDropdown[1] = false;
                } else {
                    regionDropdown = [ false, false, false, false, false ];
                    regionDropdown[1] = true;
                }
                break;
            case "Europe":
                if (regionDropdown[2]) {
                    regionDropdown[2] = false;
                } else {
                    regionDropdown = [ false, false, false, false, false ];
                    regionDropdown[2] = true;
                }
                break;
            case "N America":
                if (regionDropdown[3]) {
                    regionDropdown[3] = false;
                } else {
                    regionDropdown = [ false, false, false, false, false ];
                    regionDropdown[3] = true;
                }
                break;
        }
    }

    // NEEDS TO BE REFACTORED
    function handleRegionInput(region: string, index: number) {
        switch (region) {
            case "Korea":
                if (!regionDropdown[0] && korea[0]) {
                    korea = [ false, false, false ];
                } else if (!regionDropdown[0] && !korea[0]) {
                    korea = [ true, true, false ];
                }
                else if (regionDropdown[0] && korea[index]) {
                    korea[index] = false;
                } else if (regionDropdown[0] && !korea[index]) {
                    korea[index] = true;
                }
                korea[0] = korea[1] || korea[2];
                break;
            case "China":
                if (!regionDropdown[1] && china[0]) {
                    china = [ false, false, false ];
                } else if (!regionDropdown[1] && !china[0]) {
                    china = [ true, true, false ];
                }
                else if (regionDropdown[1] && china[index]) {
                    china[index] = false;
                } else if (regionDropdown[1] && !china[index]) {
                    china[index] = true;
                }

                china[0] = china[1] || china[2];
                break;
            case "Europe":
                if (!regionDropdown[2] && europe[0]) {
                    europe = [ false, false, false ];
                } else if (!regionDropdown[2] && !europe[0]) {
                    europe = [ true, true, false ];
                }
                else if (regionDropdown[2] && europe[index]) {
                    europe[index] = false;
                } else if (regionDropdown[2] && !europe[index]) {
                    europe[index] = true;
                }

                europe[0] = europe[1] || europe[2];
                break;
            case "N America":
                if (!regionDropdown[3] && northAmerica[0]) {
                    northAmerica = [ false, false, false ];
                } else if (!regionDropdown[3] && !northAmerica[0]) {
                    northAmerica = [ true, true, false ];
                }
                else if (regionDropdown[3] && northAmerica[index]) {
                    northAmerica[index] = false;
                } else if (regionDropdown[3] && !northAmerica[index]) {
                    northAmerica[index] = true;
                }

                northAmerica[0] = northAmerica[1] || northAmerica[2];
                break;
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
            <!-- <div class="w-[80px] absolute -left-[128px] flex rounded-full top-4  py-1
                bg-black dark:bg-gray-700
                text-blue-50">
                <h2 class="m-auto">Today</h2>
            </div> -->
            <ScheduleGame {showSpoilers} team0="Dplus Kia" team0Score="0W-1L" team1="Hanwha Life Esports" team1Score="1W-0L" gameScore={[1,3]} 
                region="LCK" season="Spring" stage="Playoffs" bestOf={5} past={true}
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
                        on:click = {() => {international[0] = !international[0];}} 
                        class="flex flex-row justify-between bg-gray-50 dark:bg-gray-800 border-2  shadow-sm  rounded-full p-[10px] px-4
                        hover:bg-gray-100 dark:hover:bg-gray-700
                        {international[0] ? "border-highlight" : "border-gray-100 dark:border-gray-700"}"
                    >
                        <h2 class="m-auto text-sm">International</h2>
                    </button>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["Korea", "LCK", "LCK CL"]} leaguesActive={korea} dropdown={regionDropdown[0]}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["China", "LPL", "LDL"]} leaguesActive={china} dropdown={regionDropdown[1]}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["Europe", "LEC", "EMEA Masters"]} leaguesActive={europe} dropdown={regionDropdown[2]}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} regionInput={handleRegionInput} leagues={["N America", "LCS", "NACL"]} leaguesActive={northAmerica} dropdown={regionDropdown[3]}/>
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