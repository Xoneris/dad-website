<script>
    import { onMount } from 'svelte';
    import NavLink from "./NavLink.svelte";
    import NavDropdown from "./NavDropdown.svelte"

    let hideSidebar = false
    let currentPath = '';

    onMount(() => {
        currentPath = window.location.pathname;
        window.addEventListener('popstate', () => {
        currentPath = window.location.pathname;
        });
    });
    
</script>

<nav class="{ hideSidebar !== true ? "-translate-x-0 min-w-[300px] max-w-[300px]" : "-translate-x-full max-w-0" } fixed min-h-full flex flex-col border rounded-r-2xl text-gray-300 border-stone-950 bg-neutral-900 overflow-hidden transition-all">

    <div class="flex flex-col gap-4 mt-12 w-full p-4">

        <NavLink
            title="Home"
            link="/"
            currentPage={currentPath}
        />
        <NavLink
            title="Lebenslauf"
            link="/Lebenslauf"
            currentPage={currentPath}
        />
        <NavLink
            title="Standortbestimmung 1 und Zielvereinbarung"
            link="/Kompra1"
            currentPage={currentPath}
        />
        <NavLink
            title="Unterrichtsbesucht in eigenem Unterricht durch Lehrbegleitung"
            link="/Hospitalisation2"
            currentPage={currentPath}
        />
        <NavLink
            title="Unterrichtsbesuch bei einer erfahrenen Lehrperson"
            link="/Unterrichtsbesuch"
            currentPage={currentPath}
        />
        <NavLink
            title="Unterrichtsbesuch durch Dozent*in des Regionalteams"
            link="/Hospitalisation1"
            currentPage={currentPath}
        />
        <NavDropdown
            title={"Reflexion Medienwerkstatt"}
            linkOfChildren={[
                "/Organisieren",
                "/Einbindung",
                "/Feedback",
            ]}
            currentPage={currentPath}
        >
            <NavLink
                title="Organisieren Schützen und Teilen digitaler. Ressourcen 2.3"
                link="/Organisieren"
                currentPage={currentPath}
            />
            <NavLink
                title="Aktive Einbindung der Lernenden 5.3"
                link="/Einbindung"
                currentPage={currentPath}
            />
            <NavLink
                title="Feedback und Planung 4.3"
                link="/Feedback"
                currentPage={currentPath}
            />
        </NavDropdown> 
        <NavLink
            title="Standortbestimmung 2 und persönlicher Lernzuwachs"
            link="/Kompra2"
            currentPage={currentPath}
        />
        <NavLink
            title="WLI-Check"
            link="/WLI"
            currentPage={currentPath}
        />
        <button class="w-full flex gap-4 items-center mt-32 hover:cursor-pointer p-2" on:click={() => hideSidebar = true}>
            <img
                src={"/icon-hide-sidebar.svg"}
                alt={"ausblenden"}
                class="w-5 h-5"
            />
            <p>
                Navigation ausblenden
            </p>
        </button>
    </div>
</nav>

<div class="{ hideSidebar === false ? "min-w-[300px]" : "min-w-0 mr-10"} transition-all">
</div>

<button 
    class="{ hideSidebar === true ? "" : "hidden p-0" } fixed flex justify-end items-center border w-13 h-13 left-0 top-5/6 bg-neutral-900 rounded-r-full z-50 hover:cursor-pointer  hover:w-[68px] transition-all"
    on:click={() => hideSidebar = false}
>
    <img
        src={"/icon-show-sidebar.svg"}
        alt={"einblenden"}
        class="min-w-5 min-h-5 pr-3"
    />
</button>