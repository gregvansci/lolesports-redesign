<script lang="ts">
    import { darkMode } from '../../store';

    import dropdownOpen from '$lib/images/dropdown-open.svg';
    import dropdownClose from '$lib/images/dropdown-close.svg';
    import checked from '$lib/images/checked.svg';
    import unchecked from '$lib/images/unchecked.svg';

    export let leagues = [ "Korea", "LCK", "LCK CL" ];
    export let leaguesActive = [ false, false, false ];
    export let dropdown = false;
    
    let darkModeValue: boolean;

    darkMode.subscribe(value => {
        darkModeValue = value;
    });

    // export toggle dropdown
    export let toggleDropdown = (region: string) => {};
    export let regionInput = (region: string, league: number) => {};

    function handleToggleDropdown() {
        toggleDropdown(leagues[0]);
    }

    function handleRegionInput(region: string, league: number) {
        regionInput(region, league);
    }

</script>


<div class="flex flex-col bg-gray-50 dark:bg-gray-800 h-full rounded-[22px] border-2 overflow-hidden box-border 
    {leaguesActive[0] ? "border-highlight" : "border-gray-100 dark:border-gray-700"}"
>
    <button on:click={() => {dropdown ? handleToggleDropdown() : {}}} class="flex flex-row justify-between h-full 
        {dropdown ? "hover:bg-gray-100 dark:hover:bg-gray-700" : ""}"
    >
        <button 
            on:click = {() => handleRegionInput(leagues[0], 0)} 
            class="w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
            <h2 class="my-auto w-full text-left pl-4  ">{dropdown ? leagues[0] : leagues[1]}</h2>
        </button>
        <div class="h-[25px] border-[1px] m-auto border-gray-100 dark:border-gray-700 {dropdown ? "hidden" : "block"}" />
        <button 
            on:click|stopPropagation = {() => handleToggleDropdown()} 
            class="w-full h-[40px] py-auto flex rounded-sm
            hover:bg-gray-100 dark:hover:bg-gray-700
            {darkModeValue ? "svg-filter-dark" : "svg-filter"}"
        >
            <img src={dropdown ? dropdownClose : dropdownOpen} class="m-auto mr-0 h-6 pr-4" alt="Open"/>
        </button>
    </button>
    <div class="flex-col {dropdown ? "flex" : "hidden"}">
        <div class="w-full border-[1px] border-gray-100/50 dark:border-gray-700/50"></div>
        <button
            on:click={() => handleRegionInput(leagues[0], 1)} 
            class="flex flex-row justify-between p-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700
            {leaguesActive[1] ? "checked" : darkModeValue ? "unchecked-dark" : "unchecked"}"
        >
            <h2>{leagues[1]}</h2>
            <img class="h-6" src={leaguesActive[1] ? checked : unchecked} alt={leaguesActive[1] ? "Checked" : "Unchecked"}/>
        </button>
        <button
            on:click={() => handleRegionInput(leagues[0], 2)} 
            class="flex flex-row justify-between p-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700
            {leaguesActive[2] ? "checked" : darkModeValue ? "unchecked-dark" : "unchecked"}"
        >
            <h2>{leagues[2]}</h2>
            <img class="h-6" src={leaguesActive[2] ? checked : unchecked} alt={leaguesActive[2] ? "Checked" : "Unchecked"}/>
        </button>
    </div>
</div>

<style>
    .svg-filter img {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter-dark img {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
    .unchecked img {
        filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
    }
    .unchecked-dark img {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
    .checked img {
        filter: invert(58%) sepia(92%) saturate(3440%) hue-rotate(145deg) brightness(106%) contrast(101%);
    }  
</style>