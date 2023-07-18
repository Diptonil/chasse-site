<script>
    import { WindowsBrand, LinuxBrand } from 'svelte-awesome-icons';
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { codeWindowsPathCommand, codeLinuxPathCommand, codeInstallationCheck } from '$lib/stores.js'

    import Head from '$lib/components/Head.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>


<html lang="en">
    <Head />

    <body>
        <Navbar getStarted="/#get-started" />

        <main class="pb-32">
            <div id="message" class="flex flex-col justify-center items-center text-2xl">
                <p class="text-teal-600"><b class="text-emerald-600">Chasse</b> is an open-source CLI utility to facilitate using components in HTML.</p>
                <p class="text-teal-600 text-lg">(Distributions for MacOS are currently unavailable, but we are working on releasing a build soon...!)</p>
                <p class="text-emerald-600 pt-8">Version: Ballet (v1.0.0 LTS)</p>
                <p class="text-base text-teal-600">View <a class="underline underline-offset-4 text-teal-500" href="https://github.com/Diptonil/chasse/blob/main/CHANGELOG.md">changelog</a>.</p>
            </div>
            <div id="downloads" class=" text-teal-600 flex items-center justify-center gap-96 w-[92%] mx-auto pt-16">
                <div>
                    <WindowsBrand class="pb-4 pl-4 w-32 h-32" />
                    <a href="/src/lib/binaries/linux/chasse.zip" download="chassev1.0.0"><button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-md hover:bg-teal-500 shadow-sm hover:shadow-teal-600 my-4">Get for Windows</button></a>
                </div>
                <div>
                    <LinuxBrand class="pb-4 w-32 h-32" />
                    <a href="/src/lib/binaries/linux/chasse.zip" download="chassev1.0.0"><button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-md hover:bg-teal-500 shadow-sm hover:shadow-teal-600 my-4">Get for Linux</button></a>
                </div>
            </div>
            <hr class="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700">

            <div id="instructions" class="w-[92%] flex flex-col text-teal-600 mx-auto items-center justify-center">
                <p class="text-4xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Setting It Up</p>
                <ul class="list-disc text-xl pt-8 space-y-4">
                    <li>Unzip the downloaded file and place it in an appropriate path as per convenience.</li>
                    <li>Add the folder <code>chassev1.0.0</code> (not the binary inside) to the system PATH. To do that:</li>
                    <div class="hover:select-text w-[80%] pt-4">
                        <CodeBlock language="Windows Command Prompt" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-sm" rounded="rounded-xl" code="{ $codeWindowsPathCommand }"></CodeBlock>
                    </div>
                    <div class="hover:select-text w-[80%] pt-4">
                        <CodeBlock language="Linux Shell" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-sm" rounded="rounded-xl" code="{ $codeLinuxPathCommand }"></CodeBlock>
                    </div>
                    <li>Restart all terminals. Now verify installation by:</li>
                    <div class="hover:select-text w-[80%] pt-4">
                        <CodeBlock language="Terminal" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-sm" rounded="rounded-xl" code="{ $codeInstallationCheck }"></CodeBlock>
                    </div>
                    <li>All is done if the corresponding software version is displayed. You can now start using the command!!</li>
                </ul>

            </div>
        </main>

        <Footer />
    </body>
</html>
