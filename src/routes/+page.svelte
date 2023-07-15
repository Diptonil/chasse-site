<script>
    import Icon from "$lib/assets/chasse.png";

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
                </div>6
                <div class="absolute top-[-100%] w-full flex md:static md:min-h-fit md:w-auto ">
                    <ul class="flex md:flex-row flex-col md:items-end text-teal-600 gap-16 text-lg">
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Learn</a></li>
                        <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Conventions</a></li>
                        <li class="justify-end hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Get Involved</a></li>
                    </ul>
                </div>
                <div class="flex items-center gap-6 pr-8">
                    <button class="bg-slate-950 text-teal-600 px-5 py-2 rounded-full border-2 border-teal-600 hover:text-teal-500 hover:border-teal-500 shadow-md hover:shadow-teal-600">Install</button>
                    <button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-full hover:bg-teal-500 shadow-md hover:shadow-teal-600">Get Started</button>
                    <ion-icon on:click={ clicked = !clicked } class:top-[9%]={ clicked } class="text-teal-600 text-4xl cursor-pointer md:hidden" name="menu-outline"></ion-icon>
                </div>
            </nav>
        </header>
    </body>
</html>
