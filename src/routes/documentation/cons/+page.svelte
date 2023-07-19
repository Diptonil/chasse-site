<script>
    import Head from '$lib/components/Head.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import DocsSidebar from '$lib/components/DocsSidebar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>
 
 
<html lang="en">
    <Head page="Documentation | " />

    <body>
        <Navbar getStarted="/#get-started" />

        <main>
            <DocsSidebar section="#cons" />

            <div id="docs" class="p-4 ml-96">
                <div class="text-teal-600 text-xl">
                    <b class="font-medium text-4xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Cons</b>
                    <p class="pt-8">This section speaks about the disadvantages of using Chasse.</p>
                    <ul class="list-disc py-8 space-y-6 mx-auto w-[90%] text-lg">
                        <li><b>Too Young:</b> The utility is still in its infancy, with a possibility of latent bugs.</li>
                        <li><b>Binary Size:</b> The application, even with its minimal features - stands at around 6.5 MB of space, which is a lot, given its <br /> limited capabilities (technically, this is a con for using Python as the programming language for this project. There are <br /> plans to make a shift in terms of the language to eliminate issues like this).</li>
                        <li><b>Less Functionality:</b> It lacks support for a lot of expected features, with a possibility of more inclusions. However, this <br />issue is expected to go be eliminated as the system grows and matures.</li>
                        <li><b>Contributions:</b> The project is new and lacks exposure. When contributions start flowing in, the system would surely <br /> become more robust, useful and broader in scope.</li>
                    </ul>
                </div>
            </div>
        </main>

        <Footer />
    </body>
</html>
