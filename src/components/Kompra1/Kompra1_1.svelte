<script>
    import { fly } from "svelte/transition";
    let open = false

</script>

<div class="flex flex-col">
    <button 
        class="border p-2 rounded-lg w-full flex justify-between"
        on:click={() => open = !open}
        aria-hidden
    >
        <p>1.5 Kommentar zur Standortbestimmung 1.</p>
        <p>{open === true ? "▼" : "▶"}</p>
    </button>

    {#if open === true}
        <div 
            transition:fly="{{y: 5, duration: 400}}"
            class=" bg-gray-600 border border-red-600"
        >
            Die Kompra-Analyse hat mir eine gute Standortbestimmung ermöglicht und aufgezeigt, wo ich derzeit als Lehrperson stehe, über welche Fähigkeiten und Kompetenzen ich verfüge und in welchen Bereichen ich mein Potenzial noch weiterentwickeln kann.
            Mir war die Bedeutung der eigenen Reflexion nicht bewusst, obwohl ich sicherlich auch unbewusst immer wieder reflektiert habe.
            Die erforderlichen Kenntnisse über die administrativen Anforderungen sowie die Organisation der Unterrichtsvorbereitung und -durchführung habe ich eindeutig unterschätzt. Auch der Einsatz moderner technischer Möglichkeiten erfordert eine Anpassung meinerseits.
            Besonders überrascht hat mich das weitreichende und übergreifende Zusammenspiel in der Berufsausbildung zwischen Verbänden, Lehrbetrieben, Schulen, Bund, Kantonen und Lehrpersonen. Diese Zusammenhänge waren mir bisher nicht in diesem Ausmaß bewusst oder wurden mir noch nie so klar vor Augen geführt.
            Nicht verwunderlich ist, dass ich mich selbst nur selten nach dem Unterricht reflektiert habe. Entsprechend fanden in den Bereichen Vorbereitung und Reflexion nur begrenzt Prozesse statt.
            Umso mehr freue ich mich, dass ich mich für diese Schulung entschieden habe.

        </div>
    {/if}
</div>