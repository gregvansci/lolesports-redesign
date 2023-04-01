<script lang="ts">
    import { darkMode } from '../../store';

    import dropdownOpen from '$lib/images/dropdown-open.svg';
    import dropdownClose from '$lib/images/dropdown-close.svg';
    import checked from '$lib/images/checked.svg';
    import unchecked from '$lib/images/unchecked.svg';

    export let leagues = [ "Korea", "LCK", "LCK CL" ];
    export let leaguesActive = [ false, false, false ];
    export let dropdown = false;
    export let minor = false;
    
    let darkModeValue: boolean;

    darkMode.subscribe(value => {
        darkModeValue = value;
    });

    // export toggle dropdown
    export let toggleDropdown = (region: number) => {};
    export let regionInput = (region: number, league: number) => {};

    function handleToggleDropdown() {
        switch(leagues[0]) {
            case "International":
                toggleDropdown(0);
                break;
            case "Korea":
                toggleDropdown(1);
                break;
            case "China":
                toggleDropdown(2);
                break;
            case "Europe":
                toggleDropdown(3);
                break;
            case "N America":
                toggleDropdown(4);
                break;
            case "Minor":
                toggleDropdown(5);
                break;
            default:
                console.log("Error: Region not found")
                break;
        }
    }

    function handleRegionInput(league: number) {
        switch(leagues[0]) {
            case "International":
                regionInput(0, league);
                break;
            case "Korea":
                regionInput(1, league);
                break;
            case "China":
                regionInput(2, league);
                break;
            case "Europe":
                regionInput(3, league);
                break;
            case "N America":
                regionInput(4, league);
                break;
            case "Minor":
                dropdown ? regionInput(5, league) : regionInput(5, 0);
                break;
            default:
                console.log("Error: Region not found")
                break;
        }     
    }

</script>


<div class="flex flex-col bg-gray-50 dark:bg-steel-800 h-full rounded-[22px] border-2 overflow-hidden box-border 
    {leaguesActive[0] ? "border-highlight" : "border-gray-100 dark:border-steel-700"}"
>
    <button class="flex flex-row justify-between h-full"
    >
        <button 
            on:click = {() => { dropdown ? handleRegionInput(0) : handleRegionInput(1)}} 
            class="w-full py-2 hover:bg-gray-100 dark:hover:bg-steel-700"
        >
            <h2 class="my-auto w-full text-left pl-4  ">{!dropdown && !minor ? leagues[1] : leagues[0]}</h2>
        </button>
        <div class="h-[25px] border-[1px] m-auto border-gray-100 dark:border-steel-700" />
        <button 
            on:click|stopPropagation = {() => handleToggleDropdown()} 
            class="w-full h-[40px] py-auto flex rounded-sm
            hover:bg-gray-100 dark:hover:bg-steel-700
            {darkModeValue ? "svg-filter-dark" : "svg-filter"}"
        >
            <img src={dropdown ? dropdownClose : dropdownOpen} class="m-auto mr-0 h-6 pr-4" alt="Open"/>
        </button>
    </button>
    <div class="flex-col {dropdown ? "flex" : "hidden"}">
        <div class="w-full border-[1px] border-gray-100/50 dark:border-steel-700/50"></div>
        <!-- for each league in leagues after the 0th,  -->
        {#each leagues.slice(1) as league, i}
            <button
                on:click={() => handleRegionInput(i+1)} 
                class="flex flex-row justify-between p-2 px-4 hover:bg-gray-100 dark:hover:bg-steel-700
                {leaguesActive[i+1] ? "checked" : darkModeValue ? "unchecked-dark" : "unchecked"}"
            >
                <h2>{league}</h2>
                <img class="h-6" src={leaguesActive[i+1] ? checked : unchecked} alt={leaguesActive[i+1] ? "Checked" : "Unchecked"}/>
            </button>
        {/each}
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