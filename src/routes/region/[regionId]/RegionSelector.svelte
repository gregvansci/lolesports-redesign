<script lang="ts">
    import { darkMode } from '../../../store';

    import dropdownOpen from '$lib/images/dropdown-open.svg';
    import dropdownClose from '$lib/images/dropdown-close.svg';
    
    export let leagues = [ "Korea", "LCK", "LCK CL" ]; 
    export let links = [ "", "lck", "lck-cl"]
    export let dropdown = false;
    export let minor = false;
    
    let darkModeValue: boolean;

    darkMode.subscribe(value => {
        darkModeValue = value;
    });

    export let updateRegion = (region: string) => {};

    export let toggleDropdown = (region: number) => {};

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

</script>

<div 
    class="flex flex-col h-full rounded-[22px] border-2 overflow-hidden box-border 
    bg-gray-50 dark:bg-steel-800 
    border-gray-100 dark:border-steel-700"
>
    <button class="flex flex-row justify-between h-full"
    >
    <!-- link tag that goes to links[1]. if minor is true, make the link tag do nothing -->
        <a
            href={links[1]} on:click={minor ? (e) => e.preventDefault() : () => {updateRegion(leagues[1])}}
            class="w-full py-2 hover:bg-gray-100 dark:hover:bg-steel-700"
        >
            <h2 class="my-auto w-full text-left pl-4  ">{minor ? leagues[0] : leagues[1]}</h2>
        </a>
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
        {#if !minor}
            {#each leagues.slice(2) as league, i}
                <a
                    href={"./"+links[i+2]} on:click={() => {updateRegion(leagues[i+2])}}
                    class="flex flex-row justify-between p-2 px-4 hover:bg-gray-100 dark:hover:bg-steel-700"
                >
                    <h2>{league}</h2>
                </a>
            {/each}
        {:else}
            {#each leagues.slice(1) as league, i}
                <a
                    href={"./"+links[i+2]} on:click={() => {updateRegion(leagues[i+1])}}
                    class="flex flex-row justify-between p-2 px-4 hover:bg-gray-100 dark:hover:bg-steel-700"
                >
                    <h2>{league}</h2>
                </a>
            {/each}
        {/if}
        
    </div>
</div>

<style>
    .svg-filter img {
		filter: invert(49%) sepia(10%) saturate(960%) hue-rotate(176deg) brightness(88%) contrast(86%);
	}
	.svg-filter-dark img {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	} 
</style>
