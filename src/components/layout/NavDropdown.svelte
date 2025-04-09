<script>
    export let title
    export let linkOfChildren
    export let currentPage

    let openNavDropdown = false

    $: if(linkOfChildren.includes(currentPage)) {
        openNavDropdown = true
    } else {
        openNavDropdown = false
    }
    
</script>

<div 
    class="{ openNavDropdown ? "pl-2" : "hover:pl-2 hover:pr-0 "} { linkOfChildren.includes(currentPage) ? "text-orange-300 border-orange-text-orange-300" : "" }  w-full border-b transition-all hover:cursor-pointer " 
    on:click={() => openNavDropdown = !openNavDropdown}
>
    {title}
</div>

<div class="{openNavDropdown ? "max-h-[200px]" : "max-h-0" } flex flex-col gap-2 -mt-2 -mb-2 overflow-hidden ml-4 transition-all">
    <slot/>
</div>