<script>
    import { WindowsBrand, LinuxBrand } from 'svelte-awesome-icons';
    
    import Head from '$lib/components/Head.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>


<html lang="en">
    <Head />

    <body>
        <Navbar />

        <main class="pb-32">
            <div id="message" class="flex flex-col justify-center items-center text-2xl">
                <p class="text-teal-600"><b class="text-emerald-600">Chasse</b> is an open-source CLI utility to facilitate using components in HTML.</p>
                <p class="text-teal-600 text-lg">(Distributions for MacOS are currently unavailable, but we are working on releasing a build soon...!)</p>
                <p class="text-emerald-600 pt-4">Version: Ballet (v1.0.0)</p>
                <p class="text-base text-teal-600">View <a class="underline text-teal-500" href="https://github.com/Diptonil/chasse/blob/main/CHANGELOG.md">changelog</a>.</p>
            </div>
            <div id="downloads" class=" text-teal-600 flex items-center justify-center gap-64 w-[92%] mx-auto pt-16">
                <div>
                    <WindowsBrand class="pb-4 pl-4 w-32 h-32" />
                    <a href="/src/lib/binaries/linux/chasse.zip" download="Chasse v1.0.0"><button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-md hover:bg-teal-500 shadow-sm hover:shadow-teal-600 my-4">Get for Windows</button></a>
                </div>
                <div>
                    <LinuxBrand class="pb-4 w-32 h-32" />
                    <a href="/src/lib/binaries/linux/chasse.zip" download="Chasse v1.0.0"><button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-md hover:bg-teal-500 shadow-sm hover:shadow-teal-600 my-4">Get for Linux</button></a>
                </div>
            </div>
        </main>

        <Footer />
    </body>
</html>
