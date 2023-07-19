<script>
    import { CircleInfoSolid, PenToSquareSolid, QuestionSolid, HandHoldingHandSolid, BugSolid, ExclamationSolid } from 'svelte-awesome-icons';

    export const section = '#terminology';
    let isOnTerminology = false;
    let isOnBasicUses = false;
    let isOnOptionals = false;
    let isOnIssues = false;
    let isOnIntegrations= false;
    let isOnCons = false;

    if (section == '#terminology') {
        isOnTerminology = true;
    } else if (section == '#basic-uses') {
        isOnBasicUses = true;
    } else if (section == '#optionals') {
        isOnOptionals= true;
    } else if (section == '#issues') {
        isOnIssues = true;
    } else if (section == '#integrations') {
        isOnIntegrations = true;
    } else if (section == '#cons') {
        isOnCons = true;
    }
</script>


<button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
</button>

<aside id="separator-sidebar" class="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mx-16" aria-label="Sidebar">
<div class="h-full px-3 py-8 overflow-y-auto">
    <ul class="space-y-2 font-medium">
        <li>
        <a id="terminology" class:isOnTerminology href="/documentation" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CircleInfoSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="ml-3">Terminology</span>
        </a>
        </li>
        <li>
            <a id="basic-uses" class:isOnBasicUses href="/basic-uses" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <PenToSquareSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="ml-3">Basic Uses</span>
            </a>
        </li>
        <li>
            <a id="optionals" class:isOnOptionals href="/optionals" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <QuestionSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="flex-1 ml-3 whitespace-nowrap">Optional Parameters</span>
            </a>
        </li>
        <li>
            <a id="issues" class:isOnIssues href="/issues" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <BugSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="flex-1 ml-3 whitespace-nowrap">Issues & Bugs</span>
            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-semibold text-slate-950 bg-teal-800 rounded-full">2</span>
            </a>
        </li>
        <li>
            <a id="integrations" class:isOnIntegrations href="/integrations" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <HandHoldingHandSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="flex-1 ml-3 whitespace-nowrap">Integrations</span>
            </a>
        </li>
    <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        <li>
            <a id="cons" class:isOnCons href="/cons" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <ExclamationSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="ml-4">Cons</span>
            </a>
        </li>
    </ul>
</div>
</aside>
