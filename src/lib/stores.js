import { readable } from 'svelte/store';


const command = `chasse child.chasse.html src`;

const parentFile = `<Navbar!!>
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
</Footer!!> />`;

const childFile = `<template!!>

<!DOCTYPE HTML5>
<html>
    ...
    <Navbar!! />
    ...
    <UniversalFooter!! />
</html>`;

const windowsPathCommand = `pathman /au c:path\\to\\directory`;

const linuxPathCommand = `sudo echo "export PATH=$PATH:/path/to/dir" >> /etc/profile`;

const installationCheck = `chasse -v`;

const generalParent = `<Head!!>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="...">
        <meta name="description" content="...">

        <title>Example Website</title>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/style.css">

        <!--FONTAWESOME STARTS HERE-->
        <link href="assets/fontawesome/css/all.css" rel="stylesheet">
    </head>
</Head!!>


<Footer!!>
    <footer>
        <div class="col-md-6">
            <ul class="list-inline text-right">
                <li class="list-inline-item">
                    <a href="#home">Home</a>
                </li>
                <li class="list-inline-item">
                    <a href="#about">About</a>
                </li>
                <li class="list-inline-item">
                    <a href="#services">Services</a>
                </li>
                <li class="list-inline-item">
                    <a href="#blogs">Blogs</a>
                </li>
                <li class="list-inline-item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </footer>
</Footer!!>


<Scripts!!>
    <script src="assets/js/jquery-3.3.1.min.js"></script>
    <script src="assets/js/popper.min.js" integrity="..." crossorigin="...">
    </script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/custom.js"></script>
</Scripts!!>`;

const textParent = `<PlotlessBallets!!>
    <p>
        Plotless ballets have no storyline. Instead they use the movement
        of the body and theatrical elements to interpret music, create an
        image or express or provoke emotion. Choreographer George Balanchine
        was a prolific creator of plotless ballets.
    </p>
</PlotlessBallets!!>`

const balletChild = `<text!!>
<general!!>
<!DOCTYPE html>
<html lang="en">
    <Head!! />

    <body>
        ...
        <div>
            <PlotlessBallets!! />
            ...
        </div>
        ...
        
        <Footer!! />

        <Scripts!! />
    </body>
</html>`

const docsResult = `<text!!>
<general!!>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="...">
        <meta name="description" content="...">

        <title>Example Website</title>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/style.css">

        <!--FONTAWESOME STARTS HERE-->
        <link href="assets/fontawesome/css/all.css" rel="stylesheet">
    </head>

    <body>
        ...
        <div>
            <p>
                Plotless ballets have no storyline. Instead they use the
                movement of the body and theatrical elements to interpret
                music, create an image or express or provoke emotion. 
                Choreographer George Balanchine was a prolific creator 
                of plotless ballets.
            </p>
            ...
        </div>
        ...

        <footer>
            <div class="col-md-6">
                <ul class="list-inline text-right">
                    <li class="list-inline-item">
                        <a href="#home">Home</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#about">About</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#services">Services</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#blogs">Blogs</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

        <script src="assets/js/jquery-3.3.1.min.js"></script>
        <script src="assets/js/popper.min.js" integrity="..."
        crossorigin="..."></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/custom.js"></script>
    </body>
</html>`

const docsCommand = `chasse ballet.chasse.html .`;

const docsCommandParentFlag = `chasse ballet.chasse.html . -p src/parents`;

const docsCommandVerboseFlag = `chasse ballet.chasse.html . -l`;

const docsCommandOutputPath = `chasse ballet.chasse.html relative/path/to/directory`;


export const codeCommand = readable(command);
export const codeParentFile = readable(parentFile);
export const codeChildFile = readable(childFile);
export const codeWindowsPathCommand = readable(windowsPathCommand);
export const codeLinuxPathCommand = readable(linuxPathCommand);
export const codeInstallationCheck = readable(installationCheck);
export const codeGeneralParent = readable(generalParent);
export const codeTextParent = readable(textParent);
export const codeBalletChild = readable(balletChild);
export const codeDocsCommand = readable(docsCommand);
export const codeDocsCommandParentFlag = readable(docsCommandParentFlag);
export const codeDocsCommandVerboseFlag = readable(docsCommandVerboseFlag);
export const codeDocsCommandOutputPath = readable(docsCommandOutputPath);
export const codeDocsResult = readable(docsResult);
