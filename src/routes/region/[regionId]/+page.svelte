<script lang="ts">
    import RegionSelector from './RegionSelector.svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    let regionDropdown = [ false, false, false, false, false, false ]; 

    // get params
    let regionId = convertRegion($page.params.regionId);
    let stages: string[] = [];
    let activeStage = 0;

    onMount(() => {
        updateRegion(regionId);
    })

    function handleToggleDropdown(region: number) {
        if (regionDropdown[region]) {
            regionDropdown[region] = false;
        } else {
            regionDropdown.fill(false);
            regionDropdown[region] = true;
        }
    }

    function convertRegion(region: string) {
        // set all characters to upper
        // if the region has a dash, replace it with a space
        if (region.toLowerCase().includes("masters")) {
            return "EMEA Masters";}
        return region.toUpperCase().replace("-", " ");
    }

    function updateRegion(region: string) {
        regionId = convertRegion(region);
        if (regionId == "LEC") {
            stages = ["Season", "Groups", "Playoffs"];
        } else if (regionId == "MSI") {
            stages = ["Playin", "Bracket"];
        } else if (regionId == "EMEA Masters") {
            stages = ["Playin", "Main Event"];
        } else {
            stages = ["Season", "Playoffs"];
        }
    }

    function setStage(stage: number) {
        if (activeStage != stage) {
            activeStage = stage;
        }
    }
</script>

<div class="mt-[60px] w-full flex">
    <div class="flex flex-row mx-auto pr-[248px]">
        <div class="flex flex-col w-[900px]">
            <div class="mx-auto">
                <h1 class="font-semibold text-3xl pt-4 pb-3">{regionId} {regionId == "MSI" ? "" : "Spring"} 2023</h1>
            </div>
            <div class="flex flex-row justify-center h-[30px]">
                {#each stages as stage, i}
                    <button on:click={() => setStage(i)} class="{activeStage == i ? "bg-gray-50 dark:gray-800 border-[2px] border-gray-100 dark:border-steel-700" : ""} hover:bg-gray-100 dark:hover:gray-700 rounded-lg w-[130px] h-[45px] flex box-border">
                        <h2 class="text-xl m-auto pb-2">{stage}</h2>
                    </button>
                {/each}
            </div>
            <div class="bg-gray-50 dark:gray-800 mt-1 h-full flex">
                <h2 class="m-auto text-lg">Coming Soon</h2>
            </div>
        </div>
        <div class="select-none">
            <div class="absolute pl-12 top-[10vh] flex flex-col w-[248px]">
                <h2 class="mb-4 font-semibold pl-4 opacity-50">Regions</h2>
                <div class="flex flex-col gap-6">
                    <a
                        href="./msi" on:click={() => updateRegion("msi")}
                        class="flex flex-row justify-between bg-gray-50 dark:bg-steel-800 border-2  shadow-sm  rounded-full p-[10px] px-4
                        hover:bg-gray-100 dark:hover:bg-steel-700 border-gray-100 dark:border-steel-700"
                    >
                        <h2 class="my-auto text-sm">International</h2>
                    </a>
                    <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["Korea", "LCK", "LCK CL"]} links={["", "lck", "lck-cl"]} dropdown={regionDropdown[1]} {updateRegion}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["China", "LPL", "LDL"]} links={["", "lpl", "ldl"]} dropdown={regionDropdown[2]} {updateRegion}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["Europe", "LEC", "EMEA Masters"]} links={["", "lec", "emea-masters"]} dropdown={regionDropdown[3]} {updateRegion}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["N America", "LCS", "NACL"]} links={["", "lcs", "nacl"]} dropdown={regionDropdown[4]} {updateRegion}/>
                    <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["Minor", "PCS", "VCS", "LJL", "CBLOL", "LLA", "LCO"]} links={["", "#", "pcs", "vcs", "ljl", "cblol", "lla", "lco"]} dropdown={regionDropdown[5]} {updateRegion} minor={true}/>
                </div>
            </div>
        </div>
    </div>
</div>