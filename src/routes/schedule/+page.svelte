<script lang="ts">
    import { onMount } from 'svelte';
    import { darkMode } from '../../store';
    
    import lck from '$lib/data/lck.json';
    import lpl from '$lib/data/lpl.json';
    import lec from '$lib/data/lec.json';
    import lcs from '$lib/data/lcs.json';
    import ScheduleNewDay from '../ScheduleNewDay.svelte';
    import ScheduleGame from '../ScheduleGame.svelte';
    import LiveGame from '../LiveGame.svelte';
    import RegionSelector from './RegionSelector.svelte';
    import teamImage from '$lib/data/teamImage.json';
    
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

    let regionShown = [ 
        [ false ],                                           // International
        [ true, true, false ],                              // Korea, LCK, LCK CL
        [ true, true, false ],                            // China, LPL, LDL
        [ false, false, false ],                            // Europe, LEC, EMEA Masters
        [ false, false, false ],                              // North America, LCS, NACL
        [ false, false, false, false, false, false, false ] // Minor Regions, PCS, VCS, LJL, CBLOL, LLA, LCO
    ];
    let regionsShown: number;
    onMount(() => {
        countRegionsShown();
    })
    function countRegionsShown() {
        // count all regions except 0th index for all but 0th
        regionsShown = 0;
        if (regionShown[0][0]) regionsShown = 1;
        for (let i = 1; i < regionShown.length; i++) {
            for (let j = 1; j < regionShown[i].length; j++) {
                if (regionShown[i][j]) regionsShown++;
            }
        }
    }
    let regionName = [
        [ 'International' ],
        [ 'Korea', 'LCK', 'LCK CL' ],
        [ 'China', 'LPL', 'LDL' ],
        [ 'Europe', 'LEC', 'EMEA Masters' ],
        [ 'North America', 'LCS', 'NACL' ],
        [ 'Minor Regions', 'PCS', 'VCS', 'LJL', 'CBLOL', 'LLA', 'LCO' ]
    ];

    let pastMatches: Match[] = [];
    let futureMatches: Match[] = [];

    // go through regions, if selected, add all matches to pastMatches and futureMatches
    addRegion(lck);
    addRegion(lpl);
    addRegion(lec);
    addRegion(lcs);

    // sort pastMatches and futureMatches by date
    // sort pastMatches by date, newest first
    pastMatches.sort((a, b) => new Date(b.matchDate).getTime() - new Date(a.matchDate).getTime());
    // sort futureMatches by date, oldest first
    futureMatches.sort((a, b) => new Date(a.matchDate).getTime() - new Date(b.matchDate).getTime());
    
    // call getFutureMatches() to fill shownFutureMatches
    let shownPastMatches: Match[] = [];
    let shownFutureMatches: Match[] = [];
    getFutureMatches(10);
    getPastMatches(10);

    // to start, add all matches from regions selected to pastMatches and futureMatches
    // then order them by date, call 

    // function to add all matches that are initially selected - fillmatches()
    // function to add all matches from a new region - addRegion()
    // when regions are unselected, they remain in the array but are removed from the shownMatches array

    // past
    // function to add as scrolling up - handleScroll(), getPastMatches(numMatches: number = 10), removeFutureMatches()
    //      - go through pastMatches and find the 
    // function to add when region is selected / unselected - updateRegionShown()
    //      - 

    // future
    // function to add as scrolling down - handleScroll(), getFutureMatches(numMatches: number = 10), removePastMatches()
    //      - go through futureMatches and add to shownFuture until numMatches is hit
    // function to add when region is selected / unselected - updateRegionShown()
    //      - if selected, get the matchDate of the last match in shownFuture, add all matches from that region before that date
    //      - if unselected, go through shownMatches and remove all matches from that region

    // if shownMatches of one side total goes over 100 when adding, remove matches from the other side
    // when following, add a filter in the #each loop to only show matches with the a followed team in it

    onMount(() => {
        const container = document.getElementById('schedule-container');
        var live = document.getElementById('live-games');
        var topPos = live?.offsetTop;
        if (container && topPos) {
            container.scrollTo(0, topPos);
        }
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
    })
    
    function handleScroll() {
        const container = document.getElementById('schedule-container');
        if (container) {
            if (container.scrollTop < 1000)
                getPastMatches();
            else if (container.scrollTop > container.scrollHeight - container.offsetHeight - 200)
                getFutureMatches();
        }
    }

    function addRegion(region: { past: Match[], future: Match[] }) {
        // if server, dont run this code
        if (typeof window === 'undefined') return;
        region.past.forEach(match => {
            pastMatches.unshift({
                matchId: match.matchId,
                matchDate: new Date(match.matchDate).toLocaleString(),
                team1: match.team1,
                team1Score: match.team1Score,
                team2: match.team2,
                team2Score: match.team2Score,
                region: match.region,
                season: match.season,
                stage: match.stage,
                bestOf: match.bestOf
            })
        })

        region.future.forEach(match => {
            futureMatches.push({
                matchId: match.matchId,
                matchDate: new Date(match.matchDate).toLocaleString(),
                team1: match.team1,
                team1Score: match.team1Score,
                team2: match.team2,
                team2Score: match.team2Score,
                region: match.region,
                season: match.season,
                stage: match.stage,
                bestOf: match.bestOf
            })
        });
    }

    function getPastMatches(numMatches: number = 30) {
        let temp = shownPastMatches;
        let matchesAdded = 0;
        let i = temp.length;
        while (matchesAdded < numMatches && i < pastMatches.length) {
            if (isRegionShown(pastMatches[i].region)) {
                temp.unshift(pastMatches[i]);
                matchesAdded++;
            }
            i++;
        }
        shownPastMatches = temp;
    }

    function getFutureMatches(numMatches: number = 10) {
        let matchesAdded = 0;
        let i = shownFutureMatches.length;
        while (matchesAdded < numMatches && i < futureMatches.length) {
            if (isRegionShown(futureMatches[i].region)) {
                shownFutureMatches.push(futureMatches[i]);
                matchesAdded++;
            }
            i++;
        }
    }

    function addRegionShown(region: number, index: number) {
        let i;
        let temp;
        if (shownPastMatches.length !== 0) {
            let min = new Date(shownPastMatches[0].matchDate);
            i = 0;
            temp = shownPastMatches;
            if (index === 0) {
                while (i < pastMatches.length && new Date(pastMatches[i].matchDate) > min) {
                    for (let j = 0; j < regionName[region].length; j++) {
                        if (pastMatches[i].region === regionName[region][j]) {
                            temp.unshift(pastMatches[i]);
                        }
                    }
                    i++;
                }
            } else {
                while (i < pastMatches.length && new Date(pastMatches[i].matchDate) > min) {
                    if (pastMatches[i].region === regionName[region][index]) {
                        temp.unshift(pastMatches[i]);
                    }
                    i++;
                }
            }
            temp.sort((a, b) => new Date(a.matchDate).getTime() - new Date(b.matchDate).getTime());
            shownPastMatches = temp;
            
        } else {
            getPastMatches(10);
        }
        console.log(shownPastMatches)
        let max = new Date(shownFutureMatches[shownFutureMatches.length - 1].matchDate);
        i = 0;
        temp = shownFutureMatches;
        if (index === 0) {
            while (i < futureMatches.length && new Date(futureMatches[i].matchDate) < max) {
                for (let j = 0; j < regionName[region].length; j++) {
                    if (futureMatches[i].region === regionName[region][j]) {
                        temp.push(futureMatches[i]);
                    }
                }
                i++;
            }
        } else {
            while (i < futureMatches.length && new Date(futureMatches[i].matchDate) < max) {
                if (futureMatches[i].region === regionName[region][index]) {
                    temp.push(futureMatches[i]);
                }
                i++;
            }
        }
        // sort temp
        temp.sort((a, b) => new Date(a.matchDate).getTime() - new Date(b.matchDate).getTime());
        shownFutureMatches = temp;
    }

    async function removeRegionShown(region: number, index: number) {
        let temp: Match[] = [];
        if (index === 0) {
            shownPastMatches.forEach(match => {
                for (let i = 0; i < regionName[region].length; i++) {
                    if (match.region !== regionName[region][i]) {
                        temp.push(match);
                    }
                }
            })
        } else {
            shownPastMatches.forEach(match => {
                if (match.region !== regionName[region][index]) {
                    temp.push(match);
                }
            })
        }
        shownPastMatches = temp;

        // if index is 0, remove all matches from that region row
        // if index is greater than 0, remove just the region row index value
        temp = [];
        if (index === 0) {
            shownFutureMatches.forEach(match => {
                for (let i = 0; i < regionName[region].length; i++) {
                    if (match.region !== regionName[region][i]) {
                        temp.push(match);
                    }
                }
            })
        } else {
            shownFutureMatches.forEach(match => {
                if (match.region !== regionName[region][index]) {
                    temp.push(match);
                }
            })
        }
        shownFutureMatches = temp;
    }


    let showFollowingLeft = false;
    let showFollowing = false;
    let showSpoilersLeft = false;
    let showSpoilers = false;
    

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
                    if (regionsShown === 1) return;
                    regionShown[region].fill(false);
                    removeRegionShown(region, index);
                } else {
                    regionShown[region].fill(true);
                    addRegionShown(region, index);
                }
            } else {
                if (regionShown[region][index]) {
                    if (regionsShown === 1) return;
                    regionShown[region][index] = false;
                    removeRegionShown(region, index);
                } else {
                    regionShown[region][index] = true;
                    addRegionShown(region, index);
                }
            }
        } else {
            if (region === 5) {
                if (regionShown[region][0]) {
                    regionShown[region].fill(false);
                    if (regionsShown === 1) return;
                    removeRegionShown(region, index);
                } else {
                    regionShown[region].fill(true);
                    addRegionShown(region, index);
                }
            } else {
                if (regionShown[region][0]) {
                    if (regionsShown === 1) return;
                    regionShown[region] = [ false, false, false ];
                    removeRegionShown(region, index);
                } else {
                    regionShown[region] = [ true, true, false ];
                    addRegionShown(region, index);
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
        countRegionsShown();
    }

    const imageMap = teamImage as { [key: string]: { link: string, invert: boolean, outline: boolean} };

    function getTeamImage(team: string): { link: string, invert: boolean, outline: boolean} {
        if (team in imageMap) {
            return imageMap[team];
        } else {
            return { link: "", invert: true, outline: false};
        }
    }
</script>

<svelte:head>
	<title>Schedule</title>
	<meta name="description" content="Schedule page" />
</svelte:head>

<section id="schedule-container" class="anchor mt-[60px] w-full overflow-y-scroll">
    <div class="w-full justify-center flex flex-row pl-[128px] pr-[248px]">
        <div class="w-[900px] flex flex-col h-auto relative pt-4">
            {#each shownPastMatches as match, i}
                {#if i == 0}
                    <ScheduleNewDay date={new Date(match.matchDate)}/>
                {/if}
                {#if i > 0 && new Date(match.matchDate).getDate() != new Date(shownPastMatches[i - 1].matchDate).getDate()}
                    <ScheduleNewDay date={new Date(match.matchDate)}/>
                {/if}
                <ScheduleGame matchDate={match.matchDate} team1={match.team1} team1Score={match.team1Score} team1img={getTeamImage(match.team1)} team2={match.team2} team2Score={match.team2Score} team2img={getTeamImage(match.team2)} region={match.region} season={match.season} stage={match.stage} bestOf={match.bestOf} {showSpoilers}/>
            {/each}
            {#if shownPastMatches[shownPastMatches.length - 1].matchDate != new Date().toISOString()}
                <ScheduleNewDay date={new Date()}/>
            {/if}
            <div id="live-games">
                <LiveGame showLive={true}/>
                <LiveGame />
            </div>

            {#each shownFutureMatches as match, i}
                {#if i == 0 && new Date(match.matchDate).getDate() != new Date().getDate()}
                    <ScheduleNewDay date={new Date(match.matchDate)}/>
                {/if}
                {#if i > 0 && new Date(match.matchDate).getDate() != new Date(shownFutureMatches[i-1].matchDate).getDate()}
                    <ScheduleNewDay date={new Date(match.matchDate)}/>
                {/if}
                <!-- <h1>{match.matchDate}</h1> -->
                <ScheduleGame matchDate={match.matchDate} team1={match.team1} team1Score={match.team1Score} team1img={getTeamImage(match.team1)} team2={match.team2} team2Score={match.team2Score} team2img={getTeamImage(match.team2)} region={match.region} season={match.season} stage={match.stage} bestOf={match.bestOf} showSpoilers={showSpoilers} past={false}/> 
            {/each}
            <div class="h-[94vh]">

            </div>
        </div>
        <div class="select-none">
            <div class="pl-12 absolute top-[10vh] flex flex-col gap-6">
                <div class="flex flex-col">
                    <h2 class="font-semibold opacity-50 mb-4">Filters</h2>
                    <button on:click={() => {showFollowing = !showFollowing; showFollowingLeft = true}} class="mb-6 flex flex-row justify-between w-[200px]">
                        <h2>Show Following</h2>
                        <div class="{ showFollowing ? "bg-highlight" : "bg-gray-100 dark:bg-steel-700"} rounded-full w-12 flex transition ease-in-out duration-300">
                            <div class="bg-white rounded-full w-5 h-5 m-[2px] transition ease-in-out duration-300 {showFollowing ? "animate-right" : showFollowingLeft ? "animate-left" : ""}"/>
                        </div>
                    </button>
                    <button on:click={() => {showSpoilers = !showSpoilers; showSpoilersLeft = true}} class="flex flex-row justify-between w-[200px]">
                        <h2>Show Spoilers</h2>
                        <div class="{ showSpoilers ? "bg-highlight" : "bg-gray-100 dark:bg-steel-700"} rounded-full w-12 flex transition ease-in-out duration-300">
                            <div class="bg-white rounded-full w-5 h-5 m-[2px] transition ease-in-out duration-300 {showSpoilers ? "animate-right" : showSpoilersLeft ? "animate-left" : ""}"/>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col gap-6">
                    <button
                        on:click = {() => {regionShown[0][0] = !regionShown[0][0];}} 
                        class="flex flex-row justify-between bg-gray-50 dark:bg-steel-800 border-2  shadow-sm  rounded-full p-[10px] px-4
                        hover:bg-gray-100 dark:hover:bg-steel-700
                        {regionShown[0][0] ? "border-highlight" : "border-gray-100 dark:border-steel-700"}"
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
    .anchor {
        overflow-anchor: auto;
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