<script>
    import Icon from "$lib/assets/chasse.png";
    import { GithubBrand, BarsSolid } from 'svelte-awesome-icons';

    export let getStarted = '#get-started';
</script>


<header>
    <nav class="flex items-center justify-between w-[92%] mx-auto">
        <div>
            <img class="w-48" src={ Icon } alt="Chasse logo." />
        </div>
        <div class="absolute top-[-100%] w-full flex md:static md:min-h-fit md:w-auto ">
            <ul class="flex md:flex-row flex-col md:items-end text-teal-600 gap-16 text-xl">
                <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Documentations</a></li>
                <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Conventions</a></li>
                <li class="hover:underline underline-offset-32 decoration-2 hover:text-teal-500"><a href="www">Get Involved</a></li>
            </ul>
        </div>
        <div class="flex items-center gap-6">
            <a href="https://github.com/Diptonil/chasse"><GithubBrand class="text-gray-500 h-10 w-10" /></a>
            <a href="/install"><button class="bg-slate-950 text-teal-600 px-5 py-2 rounded-full border-2 border-teal-600 hover:text-teal-500 hover:border-teal-500 shadow-sm hover:shadow-teal-600">Install</button></a>
            <a href="{ getStarted }"><button class="bg-teal-600 text-slate-950 px-5 py-2 rounded-full hover:bg-teal-500 shadow-sm hover:shadow-teal-600">Get Started</button></a>
            <BarsSolid class="text-teal-600 text-4xl cursor-pointer md:hidden" name="menu-outline" />
        </div>
    </nav>
</header>
