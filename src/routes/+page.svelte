<script>
    import { BootstrapBrand, SassBrand, WindSolid, CodeSolid, Html5Brand, ScrewdriverWrenchSolid, StarSolid, Css3Brand } from 'svelte-awesome-icons';
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { codeCommand, codeChildFile, codeParentFile } from '../lib/stores.js'

    import Head from '../lib/components/Head.svelte';
    import Navbar from '../lib/components/Navbar.svelte';
    import Footer from '../lib/components/Footer.svelte';
</script>


<html lang="en">
    <Head />

    <body>
        <Navbar />

        <main class="pb-32">
            <div id="hero-header" class="flex flex-col justify-center items-center text-6xl pt-8 pr-4">
                <p class="bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent antialiased">The Simplicity of HTML.</p>
                <p class="bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Without the Boilerplate.</p>
            </div>
            <div id="hero-subheader" class="text-teal-600 flex flex-col justify-center items-center text-lg pt-8 pr-4">
                <p>Define your components in HTML. Reuse them wherever you want to.</p>
                <p>Build static websites the classic way - no frameworks, no learning curves.</p>
                <p>Write and ship sites like a pro - all in a simple command.</p>
            </div>
            <div id="hero-call-to-action" class="flex flex-col justify-center items-center text-xl pt-8 pr-4">
                <button class="bg-gradient-to-r shadow-sm from-emerald-600 to-teal-900 hover:from-teal-900 hover:to-emerald-600 hover:shadow-teal-600 text-slate-950 px-5 py-2 rounded-full">Get Started</button>
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

            <div id="get-started" class="w-[92%] text-teal-600 mx-auto">
                <p class="text-4xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Quickly Get Started</p>
                <ol class="list-disc text-xl w-[90%] mx-auto pt-4 space-y-4">
                    <li><a href="www" class="text-teal-500 underline">Install</a> the Chasse binary on your system. The installation section shall walk you through the whole process.</li>
                    <li>
                        Create a <i>parent Chasse file</i>, named as <code class="text-base">template.chasse.html</code>:
                        <div class="justify-center hover:select-text w-[80%] pt-4">
                            <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!" button="px-5 py-8 text-teal-600 rounded-full" text="text-sm" rounded="rounded-xl" code="{ $codeParentFile }"></CodeBlock>
                        </div>
                    </li>
                    <li>
                        Create a <i>child Chasse file</i>, named as <code class="text-base">child.chasse.html</code> (declare the parent files to import from, then use the components in the file):
                        <div class="justify-center hover:select-text w-[80%] pt-4">
                            <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!" button="px-5 py-8 text-teal-600 rounded-full" text="text-sm" rounded="rounded-xl" code="{ $codeChildFile }"></CodeBlock>
                        </div>
                    </li>
                    <li>
                        The first argument is the file that needs to be converted. The second argument is the <i>relative path</i> to the folder where the generated HTML files are to be kept. Run this commmand, and you will get all your HTML files in one place:
                        <div class="justify-center hover:select-text w-[80%] pt-4">
                            <CodeBlock language="Shell" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!" button="px-5 py-8 text-teal-600 rounded-full" text="text-sm" rounded="rounded-xl" code="{ $codeCommand }"></CodeBlock>
                        </div>
                    </li>
                    <li>Glance through the code again to notice the use of exclamation points while declaring and using components. It is <b>mandatory</b> to follow all conventions (the <code class="text-base">.chasse.html</code> extension, spaces between words and exclamations (and trailing slashes), capitalized component names), et cetera.</li>
                    <li>There are much more customizations, features, recommendations and development magic available in the <a href="www" class="text-teal-500 underline">documentations</a>. Check it out first!</li>
                </ol> 
            </div>
        </main>

        <Footer />
    </body>
</html>
