<script>
    import Head from '$lib/components/Head.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>


<html lang="en">
    <Head page="Conventions | " />

    <body>
        <Navbar getStarted="/#get-started" />

        <main>
            <div id="message" class="flex flex-col justify-center items-center text-4xl pt-8 pr-4">
                <p class="bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">There is always the quick and easy way of doing things. And then there is the </p>
                <p class="bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">more "responsible" way.</p>
            </div>
            <div id="conclusion" class="flex flex-col justify-center items-center text-xl pt-12 pr-4 text-teal-600">
                <p>If you are a solo developer, you are mostly free to make your own rules and customs. But if you are in</p>
                <p>a group or use Chasse regularly in your projects, exercising a few customs would ease your development even more.</p>
                <p class="pt-8 text-emerald-500">After all, conventions are what we make so that we can be sufficiently lazy at work without messing up...</p>
                <p class="pt-16 text-gray-500 text-base">Conventions can only be understood if we know what we are dealing with. Especially terminology.</p>
                <p class="pt-4 text-gray-500 text-base">If not done already, have a look at the <a href="/documentation" class="underline underline-offset-4 text-gray-400">documentation</a>.</p>
                
            </div>
            <hr />

            <div id="recommendations" class="w-[92%] flex flex-col text-teal-600 mx-auto items-center justify-center">
                <p class="text-4xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Our Recommendations</p>
                <ul class="list-disc text-xl w-[90%] mx-auto pt-8 space-y-8">
                    <li>
                        <b class="text-2xl bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Folder Structure</b>
                        <ul class="list-decimal w-[88%] mx-auto pt-4">
                            <li><b>CSS:</b> Generally kept in the <code class="text-base">styles</code> directory at root (if any). Preprocessors like Sass or Less act in the same directory.</li>
                            <li><b>JS:</b> Generally kept in the <code class="text-base">scripts</code> directory at root (if any).</li>
                            <li><b>Usable HTML:</b> Generally stored in the base directory (for the most part, historically). Routes are allotted their own directories.</li>
                            <li><b>Child Chasse Files:</b> <i>Should be</i> stored in a <code class="text-base">src</code> directory at root (if any). Routes can be allotted their own directories (within <code class="text-base">src</code>).</li>
                            <li><b>Parent Chasse Files:</b> <i>May be</i> stored in <code class="text-base">src</code> along the child files. However, as project grows larger with different sections to it, parent Chasse files <i>should go in</i> <code class="text-base">src/parents</code> (this is the recommended convention). Use the option <code class="text-base">-p</code> to specify the parent path during the conversions into resultant files.</li>
                        </ul>
                    </li>
                    <li>
                        <b class="text-2xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">File Names</b>
                        <ul class="list-decimal w-[88%] mx-auto pt-4">
                            <li><b>Usable HTML:</b> Generally named in <code class="text-base">kebab-case</code> according to the URL route.</li>
                            <li><b>Chasse Files:</b> <i>Must be</i> named with the extension <code class="text-base">.chasse.html</code>. It is a requirement, not a convention (made to separate resultant files from these files).</li>
                            <li><b>Child Chasse Files:</b> <i>Should be</i> named exactly similar to the usable HTML files (because after direct conversion, the names remain the same).</li>
                            <li><b>Parent Chasse Files:</b> <i>Should not be</i> loosely named as <code class="text-base">parent.chasse.html</code>. It should clearly describe the purpose it addresses. In case of multiple reusable components, <i>do not</i> club them up into a single file. Make different parent Chasse files and separate them (inheriting from multiple parent files are supported). You <i>cannot have </i> same component names across the entire application (even if it is in different files).</li>
                        </ul>
                    </li>
                    <li>
                        <b class="text-2xl bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Defining Components</b>
                        <ul class="list-decimal w-[88%] mx-auto pt-4">
                            <li><b>General:</b> In general, we use components for reusability. So items like <b>footers</b>, <b>navbars</b>, <b>menus</b>, <b>meta tags</b> are fair game.</li>
                            <li><b>Lean Development:</b> This means that the developer wants to work with less verbose and clean code (which also means shipping of bulk HTML code as components in parent Chasse files). Define multiple parent Chasse files in this case, each corresponding to a child file.</li>
                            <li><b>Bulky Text:</b> In case we have too much of text in an HTML element that makes the file look clumsy or bulky, ship 'em as components!!</li>
                            <li><b>Extreme Customizations:</b> Have a highly customized element? It might be simple in general, but has many CSS framework (like Tailwind...?) classes attached to it. Ship 'em as components!!</li>
                        </ul>
                    </li>
                    <li>
                        <b class="text-2xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Example Filesystem</b>
                        <ul class="list-decimal w-[88%] mx-auto pt-4">
                            <li>This seeks to illustrate how to establish a filesystem corresponding to all conventions. There is no hard and fast rule to follow it to the teeth, of course.</li>
                            <li><b>General:</b> We move general components like <b>footers</b>, <b>navbars</b> and <b>meta tags</b> any other component that <i>can be common across the entire app</i> into <code>src/parents/root.chasse.html</code>.</li>
                            <li><b>Lean Components:</b> These components are specific to every child Chasse file and will contain the bulk of HTML of its corresponding child. So if a child is named as <code>src/index.chasse.html</code>, the lean components would go in <code>src/parents/index.chasse.html</code>.</li>
                            <li><b>Bulky Text:</b> We may choose to store these components in <code>src/parents/text.chasse.html</code>.</li>
                            <li><b>Extreme Customizations:</b> This is a rather general point that cannot have a specific convention to along with all cases. There may be many different custom elements, many similar custom elements, few heavily custom elements that are all different. So there is quite a bit of leeway here as to the standards.</li>
                        </ul>
                    </li>
                    <li>
                        <b class="text-2xl bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Version Control</b>
                        <ul class="list-decimal w-[88%] mx-auto pt-4">
                            <li><b>Solo:</b> You can choose to commit or not commit the Chasse files into version control, since you are the only developer here.</li>
                            <li><b>Teams:</b> It is strongly recommended to check in your Chasse files into version control, for collaboration between all developers.</li>
                            <li><b>Branches:</b> It is good to have separate <code class="text-base">development</code> (this contains the Chasse files) and <code class="text-base">production</code> (this does not, because the less the clutter - the better) branches. If there is a <code class="text-base">testing</code> or a <code class="text-base">staging</code> branch, the Chasse files <i>should be</i> kept out of it.</li>
                        </ul>
                    </li>
                    <li>
                        <b class="text-2xl bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">Practices</b>
                        <ul class="list-decimal w-[88%] mx-auto pt-4">
                            <li><b>JS Frameworks:</b> All JS frameworks already have utilities to deal with components. Hence, use of Chasse with any framework is <i>highly discouraged</i>.</li>
                            <li><b>Development:</b> Chasse encourages lean development (shipping off HTML as components parent files) so that the child files look clean and tidy. That said, it can also be used for just the generally reusable elements.</li>
                            <li><b>Leave the Resultant Files Alone:</b> It is encouraged to <i>always</i> develop and code on the Chasse files. Leave the generated HTML files alone for the browser to interpret. Touching it would also mean corrections in the Chasse files. Remember to use relative paths for scripts, assets and stylesheets <i>with respect to the directory where resultant files would live</i>.</li>
                            <li><b>Overusing Components:</b> Unnecessary use of components is <i>highly discouraged</i>. In fact, it undoes the entire solution. Examples include script and style components (just use JS or CSS files in <code>script</code> and <code>styles</code>), micro-components (just use regular HTML), multiple similar components for different situations or child files (break up the large ones into smaller reusable components), etc.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>

        <Footer />
    </body>
</html>
