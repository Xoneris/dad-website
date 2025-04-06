<script>
    import NavLink from "./NavLink.svelte";
    let hideSidebar = false
</script>

<nav class="{hideSidebar !== true ? "-translate-x-0 min-w-[300px] max-w-[300px] p-4" : "-translate-x-full max-w-0 p-0" } min-h-full flex flex-col border rounded-r-2xl text-gray-300 border-stone-950 bg-neutral-900 overflow-hidden transition-all">

    <div class="flex flex-col gap-4 mt-12 w-full">

        <NavLink
            title="Home"
            link="/"
        />
        <NavLink
            title="Lebenslauf"
            link="/Lebenslauf"
        />
        <NavLink
            title="Kompra (Standortbestimmung und Kompetenzeinschätzung)"
            link="/Kompra1"
        />
        <NavLink
            title="Organisieren Schützen und Teilen digitaler. Ressourcen 2.3"
            link="/Organisieren"
        />
        <NavLink
            title="Aktive Einbindung der Lernenden 5.3"
            link="/Einbindung"
        />
        <NavLink
            title="Feedback und Planung 4.3"
            link="/Feedback"
        />
        <NavLink
            title="Hospitalisation vom 10. Januar 2025"
            link="/Hospitalisation1"
        />
        <NavLink
            title="Unterrichtsbesuch bei einer erfahrenen Lehrperson"
            link="/Unterrichtsbesuch"
        />
        <NavLink
            title="WLI-Check"
            link="/WLI"
        />
        <NavLink
            title="Kompra (Standortbestimmung 2 und Kompetenzeinschätzung)"
            link="/Kompra2"
        />

    </div>

    <div class="w-full mt-32">
        <button on:click={() => hideSidebar = true}>

            Hide Sidebar
        </button>
    </div>
</nav>

<button 
    class="{ hideSidebar === true ? "" : "hidden" } fixed w-[100px] border left-0 top-3/4 bg-amber-700 z-50"
    on:click={() => hideSidebar = false}
>
    Show Sidebar
</button>