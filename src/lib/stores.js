import { readable } from 'svelte/store';


const command = `chasse child.chasse.html src`;

const parentFile = 
`<Navbar!!>
    <nav>
        <ul>
            <li>About</li>
            <li>Contact</li>
            ...
        </ul>
    </nav>
</Navbar!!>

<Footer!!>
    <footer>
        All rights reserved.
    </footer>
</Footer!!> />`

const childFile  =
`<template!!>

<!DOCTYPE HTML5>
<html>
    ...
    <Navbar!! />
    ...
    <UniversalFooter!! />
</html>`

const windowsPathCommand = `pathman /au c:path\\to\\directory`;

const linuxPathCommand = `sudo echo "export PATH=$PATH:/path/to/dir" >> /etc/profile`;

const installationCheck = `chasse -v`;


export const codeCommand = readable(command);
export const codeParentFile = readable(parentFile);
export const codeChildFile = readable(childFile);
export const codeWindowsPathCommand = readable(windowsPathCommand);
export const codeLinuxPathCommand = readable(linuxPathCommand);
export const codeInstallationCheck = readable(installationCheck);
