<script>
    import Icon from "$lib/assets/chasse.png";
    import { BootstrapBrand, SassBrand, WindSolid, GithubBrand, BarsSolid, CodeSolid, Html5Brand, ScrewdriverWrenchSolid, StarSolid, Css3Brand } from 'svelte-awesome-icons';
</script>


<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chasse: Simplifying HTML Boilerplates</title>
    </head>

    <body>
        <header>
            <nav class="flex items-center justify-between w-[92%] mx-auto">
                <div>
                    <img class="w-48" src={ Icon } alt="Chasse logo." />
                </div>
                <div class="absolute top-[-100%] w-full flex md:static md:min-h-fit md:w-auto ">
                    <ul class="flex md:flex-row flex-col md:items-end text-teal-600 gap-16 text-xl">
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">About</a></li>
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Documentation</a></li>
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Conventions</a></li>
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Get Involved</a></li>
                    </ul>
                </div>
                <div class="flex items-center gap-6">
                    <a href="https://github.com/Diptonil/chasse"><GithubBrand class="text-gray-500 h-10 w-10" /></a>
                    <button class="bg-slate-950 text-teal-600 px-5 py-2 rounded-full border-2 border-teal-600 hover:text-teal-500 hover:border-teal-500 shadow-sm hover:shadow-teal-600">Install</button>
                    <button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-full hover:bg-teal-500 shadow-sm hover:shadow-teal-600">Get Started</button>
                    <BarsSolid class="text-teal-600 text-4xl cursor-pointer md:hidden" name="menu-outline" />
                </div>
            </nav>
        </header>

        <main>
            <div id="hero-header" class="flex flex-col justify-center items-center text-6xl pt-8 pr-4">
                <p class="bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">The Simplicity of HTML.</p>
                <p class="bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Without the Boilerplate.</p>
            </div>
            <div id="hero-subheader" class="text-teal-600 flex flex-col justify-center items-center text-lg pt-8 pr-4">
                <p>Define your components in HTML. Reuse them wherever you want to.</p>
                <p>Build static websites the classic way - no frameworks, no learning curves.</p>
                <p>Write and ship sites like a pro - all in a simple command.</p>
            </div>
            <div id="hero-call-to-action" class="flex flex-col justify-center items-center text-xl pt-8 pr-4">
                <button class="transition duration-500 bg-gradient-to-r shadow-sm from-emerald-600 to-teal-900 hover:from-teal-900 hover:to-emerald-600 hover:shadow-teal-600 text-slate-950 px-5 py-2 rounded-full">Get Started</button>
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
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

            <div class="text-teal-600 flex items-center justify-between w-[92%] mx-auto pt-8">
                <div>
                    <CodeSolid class="pb-4 w-8 h-8" />
                    <b class="text-2xl bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Static Websites?</b>
                    <p class="w-64 pt-4">Many static websites can be shipped efficiently without the use of package managers or static site generators with their own jargon. Run a simple command and be good to go.</p>
                </div>
                <div>
                    <Html5Brand class="pb-4 w-8 h-8" />
                    <b class="text-2xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">HTML-Only</b>
                    <p class="w-64 pt-4">Chasse puts a slight spin to the good old HTML syntax by introducing components, which are all handled by the parser. So no plugins or IDE extensions needed.</p>
                </div>
                <div>
                    <SassBrand class="pb-4 w-8 h-8" />
                    <b class="text-2xl bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Similar Use to Sass</b>
                    <p class="w-64 pt-4">Usage of Chasse (hear the rhyme?) derives from Sass, just to keep things similar. Define a parent file, run a command and convert to browser-usable HTML files. That's all!</p>
                </div>
            </div>
            <div class="text-teal-600 flex items-center justify-between w-[92%] mx-auto pt-16">
                <div>
                    <ScrewdriverWrenchSolid class="pb-4 w-8 h-8" />
                    <b class="text-2xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Not Another Tool to Learn</b>
                    <p class="w-64 pt-4">Learning new things is frustrating when all you want is to quickly get the job done. This is not a framework or library to wrap your head around, but a CLI parser to ease things.</p>
                </div>
                <div>
                    <StarSolid class="pb-4 w-8 h-8" />
                    <b class="text-2xl bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Inspired from the Greats</b>
                    <p class="w-64 pt-4">Chasse is inspired from React components, Django template inheritance and Sass mixins. Use components like React & borrowing into files like Django templates.</p>
                </div>
                <div>
                    <Css3Brand class="pb-4 w-8 h-8" />
                    <b class="text-2xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">CSS Frameworks</b>
                    <p class="w-64 pt-4">Chasse integrates well with most of the CSS frameworks out there that utilize classes within HTML for styling. For custom CSS, it is handled the usual way, or with Sass or Less.</p>
                </div>
            </div>
            <hr class="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700">

            <div id="quote" class="flex flex-col justify-center items-center text-4xl pt-4 pr-4">
                <p class="bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">"Moving away from the basic and boxing yourself</p>
                <p class="bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">into a site generating framework is easy, until</p>
                <p class="bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">you start running out of patience to learn all</p>
                <p class="bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">customizations and feel the box closing in..."</p>
            </div>
            <div id="quote-explanation" class="flex flex-col justify-center items-center text-lg pt-8 pr-4 text-teal-600">
                <p>Most static sites are general enough to be taken care of by static site generators. But at times the cons might just be too overwhelming</p>
                <p>for a particular project. Dependency management, package installations, learning the framework, managing SEO and accessibility separately.</p>
                <p>It's easy to choose a static site generator and spend hours at it. But often there is no one size-fits-all solution for everything.</p>
                <p class="pt-4 text-emerald-500">Sometimes, all you need is HTML - with superpowers...</p>
            </div>
            <hr class="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700">

            <div id="about" class="text-teal-600 text-lg w-[92%] mx-auto ">
                <b class="text-teal-500 text-xl">Chasse</b> is a CLI command 
            </div>
        </main>
        <footer class="flex flex-col justify-center items-center py-4 bg-black text-gray-500">
            <p>Released under the <b>MIT License</b>.</p>
            <p>Copyright © Diptonil Roy.</p>
        </footer>
    </body>
</html>
