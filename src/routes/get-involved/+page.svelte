<script>
    import Head from '$lib/components/Head.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>


<html lang="en">
    <Head />

    <body>
        <Navbar getStarted="/#get-started" />

        <main class="pb-32">
            <div id="message" class="flex flex-col justify-center items-center text-4xl pt-8 pr-4 text-teal-600">
                <p><b>Chasse</b> is an <b class="bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">open-source</b> endeavour to aid creative developers who choose to make</p>
                <p>customizable static websites using HTML and no external frameworks.</p>
            </div>
            <div id="conclusion" class="flex flex-col justify-center items-center text-xl pt-8 pr-4 text-teal-600">
                <p>That said, there is always room for improvements and additions. The project is in its infancy and would greatly benefit if</p>
                <p>it gathers more support in development.</p>
                <p class="pt-4">Help us improve and add more functionality to the utility by contributing to our <a href="https://github.com/Diptonil/chasse" class="underline underline-offset-4 text-teal-500">repository</a>!!</p>
                <p class="pt-4">Have a new feature request? Raise an <a href="https://github.com/Diptonil/chasse/issues" class="underline underline-offset-4 text-teal-500">issue</a>.</p>
                <p class="pt-24 text-gray-500 text-lg">Chasse welcomes each and every member to contribute to the project, except those who are unwelcoming.</p>
                <p class="pt-4 text-gray-500 text-lg">Currently, we do not have any major or minor corporate backing, and we intend to keep things that way for a while.</p>
                <p class="pt-4 text-gray-500 text-lg">Please read the <a href="https://github.com/Diptonil/chasse/blob/main/CODE_OF_CONDUCT.md" class="underline underline-offset-4 text-gray-400">Code of Conduct</a> and <a href="https://github.com/Diptonil/chasse/issues" class="underline underline-offset-4 text-gray-400">Contribution Guide</a> if you wish to collaborate.</p>
            </div>
        </main>

        <Footer />
    </body>
</html>