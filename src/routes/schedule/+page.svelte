<script lang="ts">
    import expandArrow from '$lib/images/expand-arrow.svg';
</script>

<section class="mt-[60px] w-full overflow-y-scroll">
    <div class="w-full justify-center flex flex-row">
        <div class="w-[800px] flex flex-col gap-8 h-auto relative pt-4">
            <div class="w-[80px] absolute -left-[128px] flex rounded-full bg-black text-white top-4  py-1">
                <h2 class="m-auto">Today</h2>
            </div>
            <div class="bg-gray-50 h-[150px]">
                
            </div>
            <div class="bg-gray-50 h-[150px]">
                
            </div>
            <div class="bg-gray-50 h-[150px]">
                
            </div>
            <div class="bg-gray-50 h-[150px]">
                
            </div>
            <div class="bg-gray-50 h-[150px]">
                
            </div>
            <div class="bg-gray-50 h-[150px]">
                
            </div>
            <div class="bg-gray-50 h-[150px]">
                
            </div>
        </div>
        <div class="">
            <div class="pl-12 absolute top-[10vh] flex flex-col gap-6">
                <div class="flex flex-col gap-6">
                    <div class="flex flex-row justify-between w-[200px]">
                        <h2>Show Following</h2>
                        <div class="bg-gray-100  rounded-full w-12 flex">
                            <div class="bg-white rounded-full w-5 h-5 my-auto ml-[2px]"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between w-[200px]">
                        <h2>Show Spoilers</h2>
                        <div class="bg-gray-100 rounded-full w-12 flex">
                            <div class="bg-white rounded-full w-5 h-5 my-auto ml-[2px]"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-row justify-between bg-gray-100 border-2 border-highlight rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="m-auto text-sm">International</h2>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 border-2 border-highlight rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LCS</h2>
                        <div class="bg-gray-200 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto">
                            <img src={expandArrow} class="m-auto w-4 h-4" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LEC</h2>
                        <div class="bg-gray-200 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto">
                            <img src={expandArrow} class="m-auto w-4 h-4" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LCK</h2>
                        <div class="bg-gray-200 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto">
                            <img src={expandArrow} class="m-auto w-4 h-4" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">LPL</h2>
                        <div class="bg-gray-200 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto">
                            <img src={expandArrow} class="m-auto w-4 h-4" alt="Open"/>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between bg-gray-100 border-2 border-transparent rounded-full p-2 px-4 cursor-pointer">
                        <h2 class="my-auto">Minor</h2>
                        <div class="bg-gray-200 hover:bg-gray-300/50 cursor-pointer flex rounded-sm w-5 h-5 my-auto">
                            <img src={expandArrow} class="m-auto w-4 h-4" alt="Open"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>