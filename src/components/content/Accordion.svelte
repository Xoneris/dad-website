<script>
    export let title 
    let open = false

    const titleWithoutNumbers = title.replace(/^\d+(\.\d+)*\s*/, "")
</script>

<div id="accordion" class="flex flex-col border rounded-lg bg-white">
    <button 
        class="{ open === true ? "border-b" : "delay-[400ms]" } p-2 rounded-lg w-full flex justify-between items-center transition-all text-neutral-800 bg-neutral-300 cursor-pointer"
        on:click={() => open = !open}
        aria-hidden=true
    >
        <p>{titleWithoutNumbers}</p>
         <img
            src={open ? "/icon-chevron-down.svg" : "/icon-chevron-up.svg"}
            alt="chevron-icon"
            class="w-3"
         />
    </button>

    <div class="{ open === true ? "max-h-[5000px] p-2" : "max-h-0 p-0" } flex flex-col overflow-hidden rounded-lg gap-2 transition-all duration-500 ">
        <slot/>
    </div>
</div>