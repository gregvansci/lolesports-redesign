<script lang="ts">
    import { darkMode } from "../../store";
    import google from "$lib/images/google.svg";
    import twitch from "$lib/images/twitch.svg";

    let darkModeValue: Boolean;
    darkMode.subscribe((value) => {
        darkModeValue = value;
    });
</script>

<div class="z-50 h-full w-full flex bg-white dark:bg-steel-900">
    <div class="bg-gray-50 m-auto dark:bg-steel-800 flex flex-col w-[500px] h-[450px] {darkModeValue ? "svg-filter-dark" : "svg-filter" }">
        <h1 class="m-auto text-2xl font-semibold">Log In With OAuth</h1>
        <button class="mx-auto flex gap-2 flex-row justify-center h-[50px] w-[300px] bg-gray-100 dark:bg-steel-700 rounded-lg hover:bg-gray-200 dark:hover:bg-steel-600">
            <img class="h-8 my-auto" src={google} alt="Google" />
            <h2 class="my-auto text-2xl font-semibold">Google</h2>
        </button>
        <button class="mx-auto mt-16 mb-auto flex gap-2 flex-row justify-center h-[50px] w-[300px] bg-gray-100 dark:bg-steel-700 hover:bg-gray-200 dark:hover:bg-steel-600 rounded-lg">
            <img class="h-6 pr-1 my-auto" src={twitch} alt="Twitch" />
            <h2 class="my-auto text-2xl font-semibold">Twitch</h2>
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
</style>