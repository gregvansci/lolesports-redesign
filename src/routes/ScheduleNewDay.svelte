<script>
    export let date = new Date();
    // create a boolean variable to check if the date matches todays date
    let today = new Date();
    let isToday = date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    // create a variable for the day of the week. if the day is today, set it to "Today" or if the date is tomorrow, set it to "Tomorrow"
    // if the day is not today or tomorrow, set it to the day of the week
    let day = date.getDay();
    let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = daysOfTheWeek[day];
    if (dayOfWeek == daysOfTheWeek[new Date().getDay()]) {
        dayOfWeek = "Today";
    } else if (dayOfWeek == daysOfTheWeek[new Date().getDay() + 1]) {
        dayOfWeek = "Tomorrow";
    }
</script>

<div class="relative h-[60px] w-full flex flex-col justify-end text-blue-gray-500 dark:text-blue-50 border-y-[1px] border-gray-100 dark:border-gray-800 transition ease-in-out duration-300">
    <h2 class="ml-4 mb-2 text-xl font-semibold">{dayOfWeek} - {monthNames[date.getMonth()]} {date.getDate()}</h2>
    <div class="{isToday ? "block" : "hidden"}">
        <div class="w-[80px] absolute -left-[128px] flex rounded-full   py-1
            bg-black dark:bg-gray-700
            text-blue-50">
            <h2 class="m-auto">Now</h2>
        </div>
    </div>
</div>