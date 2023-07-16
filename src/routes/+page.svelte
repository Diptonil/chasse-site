<script>
    import Icon from "$lib/assets/chasse.png";
    import { BootstrapBrand, SassBrand, WindSolid } from 'svelte-awesome-icons';

    let clicked = false;
</script>


<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chasse: Simplifying HTML Boilerplates</title>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </head>

    <body>
        <header>
            <nav class="flex items-center justify-between w-[92%] mx-auto">
                <div>
                    <img class="w-48" src={ Icon } alt="Chasse logo." />
                </div>
                <div class="absolute top-[-100%] w-full flex md:static md:min-h-fit md:w-auto ">
                    <ul class="flex md:flex-row flex-col md:items-end text-teal-600 gap-16 text-xl">
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Learn</a></li>
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Conventions</a></li>
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Get Involved</a></li>
                    </ul>
                </div>
                <div class="flex items-center gap-6">
                    <button class="bg-slate-950 text-teal-600 px-5 py-2 rounded-full border-2 border-teal-600 hover:text-teal-500 hover:border-teal-500 shadow-md hover:shadow-teal-600">Install</button>
                    <button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-full hover:bg-teal-500 shadow-md hover:shadow-teal-600">Get Started</button>
                    <ion-icon on:click={ clicked = !clicked } class:top-[9%]={ clicked } class="text-teal-600 text-4xl cursor-pointer md:hidden" name="menu-outline"></ion-icon>
                </div>
            </nav>
        </header>

        <main>
            <div id="hero-header" class="flex flex-col justify-center items-center text-6xl pt-8 pr-4">
                <p class="bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">The Simplicity of HTML.</p>
                <p class="bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Without the Boilerplate.</p>
            </div>
            <div id="hero-subheader" class="text-teal-600 flex flex-col justify-center items-center text-xl pt-8 pr-4">
                <p>Define your components in HTML. Reuse them wherever you want to.</p>
                <p>Build static websites the classic way - no frameworks, no learning curves.</p>
                <p>Write and ship sites like a pro.</p>
            </div>
            <div id="hero-call-to-action" class="flex flex-col justify-center items-center text-xl pt-8 pr-4">
                <button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-full hover:bg-teal-500 shadow-md hover:shadow-teal-600">Get Started</button>
            </div>
            <div id="hero-conclusion" class="text-gray-500 flex flex-col justify-center items-center text-md pt-16 pr-4">
                <p>Works seamlessly with your favourite IDE, frameworks and utilities...</p>
                <br />
                <span class="flex gap-8">
                    <BootstrapBrand class="text-gray-500 h-8 w-8" />
                    <SassBrand class="text-gray-500 h-8 w-8" />
                    <WindSolid class="text-gray-500 h-8 w-8" />
                </span>
            </div>
        </main>
    </body>
</html>
