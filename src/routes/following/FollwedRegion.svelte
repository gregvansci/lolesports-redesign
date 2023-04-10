<script lang="ts">
    import dropdownOpen from '$lib/images/dropdown-open.svg';
    import dropdownClose from '$lib/images/dropdown-close.svg';
    import { darkMode } from "../../store";

    let darkModeValue: boolean;
    darkMode.subscribe((value) => {
        darkModeValue = value;
    });

    export let region = "";
    export let teams: string[] = [];

    export let unfollowRegion: (region: string) => void = () => {};
    export let unfollowTeam: (region: string, team: string) => void = () => {};

    let expanded = true;

</script>

<div class="w-full flex flex-col px-4 mb-10">
    <div class="flex flex-row justify-between border-b-2 border-gray-100 dark:border-steel-800 pb-2">
        <div class="flex flex-row gap-4">
            <button on:click={() => expanded = !expanded} class="h-8 w-8 flex hover:bg-gray-50 dark:hover:bg-steel-800 rounded-md {darkModeValue ? "svg-filter-dark" : "svg-filter"}">
                <img class="h-6 m-auto" src={expanded ? dropdownClose : dropdownOpen} alt="expand" />
            </button>
            <h1 class="text-xl font-semibold m-auto">{region}</h1>
        </div>
        <button on:click={() => unfollowRegion(region)} class="flex rounded-lg border-2 h-full box-border bg-gray-50 dark:bg-steel-800 border-gray-100 dark:border-steel-700 hover:bg-gray-100 dark:hover:bg-steel-700">
            <h2 class="text-base m-auto py-[2px] px-2 font-semibold ">Unfollow Region</h2>
        </button>
    </div>
    {#if expanded}
        {#each teams as team}
            <div class="flex flex-row justify-between w-full pt-2">
                <h2 class="font-semibold tracking-wide text-lg ml-12">{team}</h2>
                <button on:click={() => unfollowTeam(region, team)} class="flex rounded-lg border-2 h-full box-border bg-gray-50 dark:bg-steel-800 border-gray-100 dark:border-steel-700 hover:bg-gray-100 dark:hover:bg-steel-700">
                    <h2 class="text-base m-auto py-[2px] px-2 font-semibold ">Unfollow</h2>
                </button>
            </div>
        {/each}
    {/if}
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