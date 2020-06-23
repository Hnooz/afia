<template>
    <div id="contact" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
        <div class="container mx-auto m-16">
            <!-- <div class=""> -->
                <div class="md:flex md:w-full md:px-16">
                    <div class="border-b-2 border-teal-500 mb-10 mx-5 pb-10 md:w-1/2 md:border-none">
                        <h1 class="font-semibold mb-10 text-teal-500 text-xl md:mb-8">Contact Details</h1>
                        <div class="flex items-center mx-2 md:pt-3">
                            <svg class="h-6 w-6 text-teal-500 mr-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <a href="#" class="font-light hover:text-blue-500 text-gray-700">afia.info@gmail.com</a>
                        </div>

                        <div class="flex items-center mx-2 my-6 md:pt-3">
                            <svg class="h-6 w-6 text-teal-500 mr-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span class="font-light hover:text-blue-500 text-gray-700">Khartoum 2, NorthEast of Qurashi</span>
                        </div>

                        <div class="flex items-center mx-2 md:pt-3">
                            <svg class="h-6 w-6 text-teal-500 mr-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span class="font-light hover:text-blue-500 text-gray-700">6248</span>
                        </div>
                    </div>
                    <div class="mx-5 md:w-1/2">
                        <h1 class="font-semibold mb-10 text-teal-500 text-xl">Contact Form</h1>
                        <form action="#">
                            <input type="text" class="border-2 border-teal-500 focus:outline-none p-1 placeholder-teal-500 px-4 rounded text-gray-600 w-full" placeholder="Name">
                            <input type="email" class="my-6 border-2 border-teal-500 focus:outline-none p-1 placeholder-teal-500 px-4 rounded text-gray-600 w-full" placeholder="E-mail">
                            <textarea class="border-2 border-teal-500 focus:outline-none p-1 placeholder-teal-500 px-4 rounded text-gray-600 w-full" cols="10" placeholder="Message"></textarea>
                            <input type="submit" class="my-4 bg-teal-500 border-2 border-teal-500 focus:outline-none hover:bg-transparent hover:text-teal-500 px-3 rounded text-white text-xl" value="Send">
                        </form>
                    </div>
                </div>
            <!-- </div> -->
        </div>
        <footer class="bg-teal-500 flex font-medium justify-center py-6 text-white text-sm">
            Build By <a href="https://twitter.com/7noOz" class="ml-1">@HnoOz</a>
        </footer>  
    </div>
</template>

<script>
export default {
    name:'Contact'
}
</script>
