<script>
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { codeGeneralParent, codeTextParent, codeBalletChild, codeDocsCommand, codeDocsCommandParentFlag, codeDocsCommandVerboseFlag, codeDocsCommandOutputPath, codeDocsResult} from '$lib/stores.js';

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
            <DocsSidebar section="#basic-uses" />

            <div id="docs" class="p-4 ml-96">
                <div class="text-teal-600 text-xl">
                    <b class="font-medium text-4xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Basic Uses</b>
                    <p class="pt-8">This section would demonstrate an example with respect to the use of Chasse, as well as all rules to keep in mind.</p>
                    <p class="pt-2 pb-8">
                        First we see the reference, then we move on to the rules and then discuss the command flags and outputs.
                    </p>
                    <b class="font-medium text-3xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Inheriting from Multiple Parents</b>
                    <ul class="list-disc py-8 space-y-8 mx-auto w-[90%] text-lg">
                        <li>Assume we have, in the <b>same</b> directory, three files: <code>ballet.chasse.html</code> (the child file), <code>general.chasse.html</code> <br /> (parent file with reusable components like navbar, metadata, footer, et cetera) & <code>text.chasse.html</code> (parent file <br /> containing components that are too bulky and text-heavy). The directory also contains an <code>assets</code> folder that <br /> contains the Bootstrap CSS and JS source.</li>
                        <li>
                            <code>general.chasse.html</code>:
                            <div class="justify-center hover:select-text w-[80%] pt-4 text-base">
                                <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-xs" rounded="rounded-xl" code="{ $codeGeneralParent }"></CodeBlock>
                            </div>
                        </li>
                        <li>
                            <code>text.chasse.html</code>:
                            <div class="justify-center hover:select-text w-[80%] pt-4 text-base">
                                <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-xs" rounded="rounded-xl" code="{ $codeTextParent }"></CodeBlock>
                            </div>
                        </li>
                        <li>
                            <code>ballet.chasse.html</code>:
                            <div class="justify-center hover:select-text w-[80%] pt-4 text-base">
                                <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-xs" rounded="rounded-xl" code="{ $codeBalletChild }"></CodeBlock>
                            </div>
                        </li>
                    </ul>
                    <b class="font-medium text-3xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Rules to Remember</b>
                    <ul class="list-disc py-8 space-y-8 mx-auto w-[90%] text-lg">
                        <li>It is <i>mandatory</i> for the Chasse files to have <code>.chasse.html</code> extension, otherwise it won't work.</li>
                        <li>Components must be named in <code>PascalCase</code>.</li>
                        <li>Parent file names should be all <code>lowercase</code>, followed by the extension.</li>
                        <li>The parent declarations should <i>mandatorily</i> have the <code>lowercase</code> parent file name.</li>
                        <li>It is <i>mandatory</i> to have two exclamation points right after the component name (no whitespace expected) in  <br />a component definition.</li>
                        <li>A component definition ends with <code>/Component!!</code> and not <code>/ Component!!</code> (with the brackets).</li>
                        <li>The parents files must be defined starting from the very first line, without any line breaks in between. This is a <br />feature limitation in the current version which would soon be addressed.</li>
                        <li>A component is plugged in as <code>Component!! /</code> instead of <code>Component!!/</code> (with the brackets). Future <br />releases would address this issue.</li>
                        <li>It is assumed that an uniform indentation of 4 spaces is used while writing HTML code, which is the standard <br />observed for most of the IDEs out there.</li>
                    </ul>
                    <b class="font-medium text-3xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Results & Optionals</b>
                    <ul class="list-disc py-8 space-y-8 mx-auto w-[90%] text-lg">
                        <li>There are two positionals - the <i>child Chasse file </i>and the <i>path where the resultant HTML files get generated</i>.</li>
                        <li>It is assumed that the parents are in the same directory as the child Chasse file. However, this is conventionally <br /> not a good practice. We can specify paths where the parents live (check below for the <code>-p</code> option).</li>
                        <li>
                            Assuming that we are to generate the files in the <i>same</i> directory, we use the command as:
                            <div class="justify-center hover:select-text w-[80%] pt-4 text-base">
                                <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-xs" rounded="rounded-xl" code="{ $codeDocsCommand }"></CodeBlock>
                            </div>
                        </li>
                        <li>
                            If we are at generate the files <i>in some other folder</i>, we use the command as:
                            <div class="justify-center hover:select-text w-[80%] pt-4 text-base">
                                <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-xs" rounded="rounded-xl" code="{ $codeDocsCommandOutputPath }"></CodeBlock>
                            </div>
                        </li>
                        <li>
                            When we run the command, if all is well, we get a success message. However, at times we run into issues <br /> by using the command wrongly by mistake and we get an error message. In all such cases, it helps to see <br /> a more detailed output. To see more <i>verbose and low-level logs of the operation</i>, use the <code>-l</code> or <code>--logs</code> <br /> optional.
                            <div class="justify-center hover:select-text w-[80%] pt-4 text-base">
                                <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-xs" rounded="rounded-xl" code="{ $codeDocsCommandVerboseFlag }"></CodeBlock>
                            </div>
                        </li>
                        <li>
                            Assuming that we had the <i>parents in a different directory</i> (say in <code>/src/parents</code>), we use the optional <br /> <code>-p</code> or <code>--parent-path</code>:
                            <div class="justify-center hover:select-text w-[80%] pt-4 text-base">
                                <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-xs" rounded="rounded-xl" code="{ $codeDocsCommandParentFlag }"></CodeBlock>
                            </div>
                        </li>
                        <li>
                            We can now see the output file named as <code>ballet.html</code>, which looks ready - the data in the components<br /> are in place...
                            <div class="justify-center hover:select-text w-[80%] pt-4 text-base">
                                <CodeBlock language="HTML" background="bg-zinc-950 pl-8 py-5" color="text-gray-300" buttonCopied="Copied!!" button="px-5 py-8 text-teal-600 rounded-full" text="text-xs" rounded="rounded-xl" code="{ $codeDocsResult }"></CodeBlock>
                            </div>
                        </li>
                        <li>We see a small bug - the resultant files also carry the parent declarations. This bug shall not be a part of the <br /> application from release 1.0.1. This leads us to the <a href="/documentation/issues" class="underline underline-offset-2 text-teal-500">next</a> section - a list of unresolved isses and bugs.</li>
                    </ul>
                </div>
            </div>
        </main>

        <Footer />
    </body>
</html>
