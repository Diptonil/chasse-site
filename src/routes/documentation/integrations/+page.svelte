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
            <DocsSidebar section="#integrations" />
            <div id="docs" class="p-4 ml-96">
                <div class="text-teal-600 text-xl">
                    <b class="font-medium text-4xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Integrations</b>
                    <p class="pt-8">Using it with regular CSS is straightforward, and if you use any of these mentioned frameworks, there is support<br /> for them as well.</p>
                    <p>This guide does not discuss the option of use of package managers like <code>npm</code> with the frameworks because their <br />use is counter-productive to the use of this tool (which is made to avoid dependencies). That said, it is not <br />impossible, of course.</p>
                    <p class="pb-8">These guides here do not provide end-to-end steps to integrate the two, but an outline to make things work.</p>
                    <b class="font-medium text-3xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Sass & Less</b>
                    <ul class="list-disc py-8 space-y-4 mx-auto w-[90%] text-lg">
                        <li>Use the preprocessors exactly the way you would use during regular development. Usually, this means them acting <br />on the <code>styles</code> directory.</li>
                        <li>This leaves you to use Chasse the regular way you would. Just be mindful of linking the styleshets correctly so that <br />the generated HTML files work (link with respect to the directory containing the resultant files, not the one containing<br /> the Chasse files).</li>
                    </ul>
                    <b class="font-medium text-3xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Bootstrap</b>
                    <ul class="list-disc py-8 space-y-4 mx-auto w-[90%] text-lg">
                        <li>If you are using the CDN, no further configuration needed to use Chasse.</li>
                        <li>If the downloaded compiled CSS and JS are being used, add links to the stylesheets correctly, with respect to the <br />generated HTML directory.</li>
                    </ul>
                    <b class="font-medium text-3xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Tailwind CSS</b>
                    <ul class="list-disc py-8 space-y-4 mx-auto w-[90%] text-lg">
                        <li>Prepare the workspace for use of Tailwind the usual way, as mentioned in their docs.</li>
                        <li>Make sure your IDE extension for Tailwind is enabled and configurations for PostCSS & Tailwind are ready.</li>
                        <li>Now the Tailwind utility classes can be used anywhere in any HTML file. Continue using Chasse the usual way.</li>
                    </ul>
                    <b class="font-medium text-3xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">UIKit</b>
                    <ul class="list-disc py-8 space-y-4 mx-auto w-[90%] text-lg">
                        <li>This works exactly similar to how Bootstrap works.</li>
                        <li>For more convenience and ease with integration, use the IDE plugins (available for Atom, VSCode & Sublime).</li>
                    </ul>
                    <b class="font-medium text-3xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Bulma CSS</b>
                    <ul class="list-disc py-8 space-y-4 mx-auto w-[90%] text-lg">
                        <li>Unlike most other CSS frameworks, Bulma CSS recommends the use of its CDN in its docs.</li>
                        <li>This too can be integrated similar to how Bootstrap is.</li>
                    </ul>
                    <p class="pt-8">More integrations to come soon...!</p>
                </div>
            </div>
        </main>

        <Footer />
    </body>
</html>
