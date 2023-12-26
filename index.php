<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API using youtube</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body class="text-white font-normal">
    <header>
        <nav class="navbar p-3 bg-slate-950 text-white grid grid-cols-3 items-center rounded-lg m-3">
            <div class="logo">
                <a class="logo flex items-center justify-start" href="">
                    <span class="inline-block mx-2"><i class="fa-solid fa-play text-orange-600 text-2xl"></i></span>
                    <h2 class="text-base">YouTube Video Info</h2>
                </a>
            </div>
            <div class="searchbar flex items-center justify-center">
                <div class="rounded bg-orange-600">
                    <input class="p-2 rounded rounded-r-none text-slate-950 outline-0 font-light" type="text" id="videoLink" placeholder="Paste YouTube Video Link" name="link">
                    <button class="p-2 rounded bg-orange-600 text-white font-medium" id="cta">Add</button>
                </div>
                <span id="videoInfo"></span>
            </div>
            <div class="flex items-center justify-end">
                <div><a class="flex flex-col text-center text-orange-600 px-3" href=""><i class="fa-solid fa-user bg-white p-2 rounded-full"></i><span class="inline-block text-xs">sign-up</span></a></div>
            </div>
        </nav>
    </header>

    <!-- table section -->
    <section class="table-sec py-10 flex justify-center" style="height: 60vh;">
        <div class="container">
            <!-- video details container tabel -->
            <div class="video-table">
                <table id="video-link-table" class="bg-slate-800 p-3">
                    <thead class="font-normal">
                        <th><button id="deleteBtn" class="flex flex-col items-center"><i class="fa-sharp fa-solid fa-trash"></i><span class="inline-block text-xs">Delete</span></button></th>
                        <th class="title">Title</th>
                        <th>Publis Date</th>
                        <th>Views</th>
                        <th>Likes</th>
                        <th>Comments</th>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>
            </div>
    </div>
    </section>
    
    <!-- footer section -->
    <footer class="rounded-lg shadow m-4 bg-slate-700">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="inline-block mx-2"><i class="fa-solid fa-play text-orange-600 text-2xl"></i></span>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YouTube Video Info</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-slate-950 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">YouTube Video Info™</a>. All Rights Reserved.</span>
        </div>
    </footer>


    <script src="script2.js"></script>
</body>
</html>