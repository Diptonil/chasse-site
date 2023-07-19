<script>
    import { issueCount } from '$lib/stores.js';

    import Head from '$lib/components/Head.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import DocsSidebar from '$lib/components/DocsSidebar.svelte';
    import Footer from '$lib/components/Footer.svelte';

    const issues = ['Unit tests.', 'MacOS builds.', 'New optionals.', 'And more...'];
</script>
 
 
<html lang="en">
    <Head page="Documentation | " />

    <body>
        <Navbar getStarted="/#get-started" />

        <main>
            <DocsSidebar section="#issues" />
            
            <div id="docs" class="p-4 ml-96">
                <div class="text-teal-600 text-xl">
                    <b class="font-medium text-4xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Issues and Bugs</b>
                    <p class="pt-8">As such, there are { $issueCount }+ open issues we need help with.</p>
                    <p class="pt-8">Chasse has been built as a simple <code>argparse</code> application in Python. It primarily features three components: a <br /> singleton logger, a file parser and a file writer. The biggest challenge in development is to continue maintaining <br /> the application in a way that <i>extends</i> the existing code instead of constantly <i>modifying</i> it (SOLID, basically).</p>
                    <p class="pt-8">Head over to the <a href="https://github.com/Diptonil/chasse/issues" class="underline underline-offset-2">issues</a> and check them out, if interested. If something seems to not work, feel free to raise one.</p>
                    <p class="pt-8">Currently, we need help with things like:</p>
                    <ul class="list-disc py-6 space-y-4 mx-auto w-[90%] text-lg">
                    {#each issues as issue}
                        <li>{ issue }</li>
                    {/each} 
                    </ul>
                </div>
            </div>
        </main>

        <Footer />
    </body>
</html>
