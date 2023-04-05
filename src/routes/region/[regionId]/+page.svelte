<script lang="ts">
    import RegionSelector from './RegionSelector.svelte';

    let regionDropdown = [ false, false, false, false, false, false ]; 

    function handleToggleDropdown(region: number) {
        if (regionDropdown[region]) {
            regionDropdown[region] = false;
        } else {
            regionDropdown.fill(false);
            regionDropdown[region] = true;
        }
    }
</script>

<div class="mt-[60px] w-full flex">
    <div class="flex flex-row mx-auto pr-[248px]">
        <div class="flex flex-col w-[900px] ">
            REGION
        </div>
        <div class="select-none">
            <div class="absolute pl-12 top-[10vh] flex flex-col w-[248px] gap-6">
                <a
                    href="./msi"
                    class="flex flex-row justify-between bg-gray-50 dark:bg-steel-800 border-2  shadow-sm  rounded-full p-[10px] px-4
                    hover:bg-gray-100 dark:hover:bg-steel-700 border-gray-100 dark:border-steel-700"
                >
                    <h2 class="m-auto text-sm">International</h2>
                </a>
                <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["Korea", "LCK", "LCK CL"]} links={["", "lck", "lck-cl"]} dropdown={regionDropdown[1]}/>
                <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["China", "LPL", "LDL"]} links={["", "lpl", "ldl"]} dropdown={regionDropdown[2]}/>
                <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["Europe", "LEC", "EMEA Masters"]} links={["", "lec", "emea-masters"]} dropdown={regionDropdown[3]}/>
                <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["N America", "LCS", "NACL"]} links={["", "lcs", "nacl"]} dropdown={regionDropdown[4]}/>
                <RegionSelector toggleDropdown={handleToggleDropdown} leagues={["Minor", "PCS", "VCS", "LJL", "CBLOL", "LLA", "LCO"]} links={["", "#", "pcs", "vcs", "ljl", "cblol", "lla", "lco"]} dropdown={regionDropdown[5]} minor={true}/>
            </div>
        </div>
    </div>
</div>