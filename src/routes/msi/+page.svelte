<script>

    import msiBg from '$lib/images/msi-bg.jpg'
</script>

<div class="w-full h-full relative flex">
    <img src={msiBg} class="h-full z-0 mx-auto absolute top-0 left-1/2 transform -translate-x-1/2" alt="BG">
    
    <div class="z-10 w-full h-full overflow-y-scroll">
        <div class="z-20 w-[900px] rounded-xl mx-auto mt-[60vh] flex flex-col frosted-glass backdrop-filter backdrop-blur-2xl">
            <div class="text-center pt-16 pb-6 h-[40vh] flex flex-col text-white">
                <h1 class=" font-msi-title text-6xl tracking-wide mb-2">MSI 2023</h1>
                <h2 class="font-msi-title text-5xl mb-10">DEFY</h2>
                <h2 class="font-msi-body font-bold text-4xl mb-10">LONDON MAY 2-21</h2>
                <h2 class="font-msi-body font-semibold">SPOILERS BELOW</h2>
            </div>
        </div>
    </div>
</div>

<style>
    .frosted-glass {
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    }
</style>