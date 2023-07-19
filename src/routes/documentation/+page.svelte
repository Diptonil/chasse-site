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
			<DocsSidebar />

			<div id="docs" class="p-4 ml-96">
				<div class="text-teal-600 text-xl">
				<b class="font-medium text-4xl bg-gradient-to-r from-emerald-600 to-teal-900 bg-clip-text text-transparent">Terminology</b>
				<p class="pt-8">This documentation is written for the most recent release of Chasse (Ballet: v1.0.0).</p>
				<p class="pt-2">
					Here is the minimal terminology that is used across the entire utility. These terms also recur in the other sections of <br /> 
					the documentation.
				</p>
				<ul class="list-disc pt-8 space-y-8 mx-auto w-[90%] text-lg">
					<li><b>Resultant (or Generated) HTML Files:</b> The files that get produced after the <code>chasse</code> command is run. These files are only <br /> for use by the browser and (conventionally) not meant to be developed on.</li>
					<li><b>Components:</b> Blocks of reusable (or overly bulky & messy) HTML code. Sometimes we may also define components that <br /> are not reusable but are too bulky to put into the child Chasse files (see below).</li>
					<li><b>Chasse Files:</b> These files are where we write development code, create and inherit components, etc. They have a mandatory <br /> extension of <code>.chasse.html</code>.</li>
					<li><b>Parent Chasse (or Parent) Files:</b> These files are where we define components. These files are never directly converted into <br /> Resultant HTML files. Their components are inherited by the Child Files.</li>
					<li><b>Child Chasse (or Child) Files:</b> These files are the ones that get directly converted into Resultant HTML files. They inherit <br /> and use components defined in the parent Chasse files.</li>
					<li><b>Parent Declaration: </b>The act of specifying, at the start of the child file, the parents that would be inherited from.</li>
					<li><b>Component Inheritance:</b> The act of the child files inheriting components from the parent files.</li>
					<li><b>Lean Development:</b> The act of defining components that are <i>not</i> reusable, but are too bulky to be put into the <br /> development files. This may be done in order to keep the child files tidy and shift load to parents.</li>
					<li><b>Optionals:</b> Arguments that are optional to execute the command.</li>
					<li><b>Positionals:</b> Positional arguments that are compulsory to execute the command.</li>
				</ul>
				<p class="pt-8">
					The <a href="/documentation/basic-uses" class="underline underline-offset-2 text-teal-500">next</a> section deals with basic use-cases of using the utility to its full potential.
				</p>
				</div>
			</div>             
		</main>

		<Footer />
	</body>
</html>



