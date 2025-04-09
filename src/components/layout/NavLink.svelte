<script>
    export let title
    export let link
    export let currentPage
</script>


<p class="{ currentPage === link ? "text-orange-300 border-orange-text-orange-300 pl-2" : "hover:pl-2 hover:pr-0"} w-full border-b transition-all">
    <a href={link}>
        {title}
    </a>
</p>