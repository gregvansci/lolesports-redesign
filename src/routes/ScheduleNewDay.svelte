<script lang="ts">
    export let date = new Date();
    // create a boolean variable to check if the date matches todays date
    let dayOfTheWeek = date.getDay();
    let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = daysOfTheWeek[dayOfTheWeek];
    if (isYesterday(date))
        dayOfWeek = "Yesterday";
    if (isToday(date))
        dayOfWeek = "Today";
    if (isTomorrow(date))
        dayOfWeek = "Tomorrow";

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    

    function isYesterday(date: Date) {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        return date.getDate() == yesterday.getDate() &&
            date.getMonth() == yesterday.getMonth() &&
            date.getFullYear() == yesterday.getFullYear()
    }

    function isToday(date: Date) {
        const today = new Date()
        return date.getDate() == today.getDate() &&
            date.getMonth() == today.getMonth() &&
            date.getFullYear() == today.getFullYear()
    }
    // check if the date is tomorrow
    // if the date is the first day of the month, check if
    // the current day is greater than 27 and the day of the week is the next day of the week
    function isTomorrow(date: Date) {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        return date.getDate() == tomorrow.getDate() &&
            date.getMonth() == tomorrow.getMonth() &&
            date.getFullYear() == tomorrow.getFullYear()
    }
</script>

<div class="relative h-[60px] w-full flex flex-col justify-end text-blue-gray-500 dark:text-blue-50 border-y-[1px] border-gray-100 dark:border-steel-800 transition ease-in-out duration-300">
    <h2 class="ml-4 mb-2 text-xl font-semibold">{dayOfWeek} - {monthNames[date.getMonth()]} {date.getDate()}</h2>
    <div class="{isToday(date) ? "block" : "hidden"}">
        <div class="w-[80px] absolute -left-[128px] flex rounded-full   py-1
            bg-black dark:bg-steel-700
            text-blue-50">
            <h2 class="m-auto">Now</h2>
        </div>
    </div>
</div>