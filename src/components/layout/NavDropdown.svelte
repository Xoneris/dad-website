<script>
    export let title
    let openNavDropdown = false
</script>

<div class="w-full border-b transition-all pr-2 hover:pl-2 hover:pr-0" on:click={() => openNavDropdown = !openNavDropdown}>
    {title}
</div>

<div class="{openNavDropdown ? "max-h-[200px]" : "max-h-0" } flex flex-col gap-2 -mt-2 -mb-2 overflow-hidden ml-4 transition-all">
    <slot/>
</div>