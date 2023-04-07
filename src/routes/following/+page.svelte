<script lang="ts">
    import help from '$lib/images/help.svg'
    import { darkMode } from '../../store'
    import FollwedRegion from './FollwedRegion.svelte';

    let darkModeValue: boolean;

	darkMode.subscribe(value => {
		darkModeValue = value;
	});

    let helpTooltip = false;

    let followedTeams : {
        [key: string]: string[]
    } = {
        "LCK": [ "T1", "KT Rolster" ],
        "LPL": [ "JD Gaming", "LNG Esports", "EDward Gaming" ],
        "LCS": [ "Golden Guardians", "FlyQuest" ]
    }

    let noFollowedTeams = false;

    function unfollowAll() {
        if (noFollowedTeams == true) {
            return;
        } else {
            console.log("Unfollowed All Teams")
        }
    }

    // syncFollowedTeams() // if logged in, sync with database, else sync with localStorage
    // syncFollowedTeams any time followedTeams is changed


</script>
<svelte:head>
    <title>Following</title>
</svelte:head>

<div class="mt-[60px] w-full pt-10 select-none overflow-y-scroll">
    <div class="flex flex-col w-[800px] mx-auto">
        <div class="flex flex-row w-full justify-between border-b-2 border-gray-100 dark:border-steel-800 pb-4">
            
            <div class="flex flex-row gap-4">
                <h1 class="text-2xl m-auto font-semibold">Followed Teams</h1>
                <button on:click={() => helpTooltip = !helpTooltip} class="relative flex h-10 w-10 rounded-md hover:bg-gray-50 dark:hover:bg-steel-800 {darkModeValue ? "svg-filter-dark" : "svg-filter"}">
                    <img class="h-8 m-auto" src={help} alt="help" />
                    <div class="absolute bg-steel-800 dark:bg-gray-50 top-[120%] shadow-md rounded-md z-50 left-[50%] -ml-[125px] py-1 px-2 m-auto w-[250px] {helpTooltip ? "inline" : "hidden"}">
                        <p class="w-full text-center text-blue-50 dark:text-blue-gray-500">
                            Logging in is not required to follow teams. However, your followed teams will be reset if you clear your localStorage.
                        </p>
                    </div>
                    <div class="absolute top-[110%] z-40 left-[50%] -ml-[6px] m-auto w-[12px] h-[12px] bg-steel-800 dark:bg-gray-100 transform rotate-45 {helpTooltip ? "inline" : "hidden"}"/>
                </button>
            </div>
            <button on:click={unfollowAll} class="flex rounded-lg box-border border-2 border-gray-100 bg-gray-50 dark:bg-steel-800 dark:border-steel-700 hover:bg-gray-100 dark:hover:bg-steel-700">
                <h2 class="text-lg m-auto px-4 font-semibold">Unfollow All</h2>
            </button>
        </div>
        <div>
            {#if noFollowedTeams}
                <div class="flex flex-col w-full justify-center items-center mt-8">
                    <h1 class="text-2xl font-semibold">You are not following any teams.</h1>
                    <h2 class="text-lg font-semibold">Follow teams to see their upcoming matches.</h2>
                </div>
            {:else}
                <div class="flex flex-col w-full mt-8">
                    {#each Object.keys(followedTeams) as region}
                        <FollwedRegion region={region} teams={followedTeams[region]}/>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    img {
		-webkit-user-drag: none;
	}
    .svg-filter img {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter:hover img {
		filter: invert(58%) sepia(92%) saturate(3440%) hue-rotate(145deg) brightness(106%) contrast(101%);
	}
	.svg-filter-dark img {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
	.svg-filter-dark:hover img {
		filter: invert(58%) sepia(92%) saturate(3440%) hue-rotate(145deg) brightness(106%) contrast(101%);
	}
</style>