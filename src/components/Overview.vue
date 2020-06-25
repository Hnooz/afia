<template>
    <section id="overview" class="container mx-auto py-32 px-6 md:px-12 border-b-2 border-teal-500" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <div>
            <h1 class="font-semibold mb-2 text-2xl text-center text-teal-500">{{$t('About Afia')}}</h1>
            <p class="font-light text-center text-gray-700">{{$t('About_Afia_content')}}
            </p>
        </div>

        <div class="md:flex items-center justify-between mt-20">
            <div class="mb-10 md:mb-0 border-b-2 border-teal-500 shadow-2xl mx-6">
                <div class="flex px-1 pt-2">
                    <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                    <h1 class="font-mono text-teal-500 text-xl">{{$t('Who We Are')}}</h1>
                </div>
                
                <p class="font-light p-1 px-3 text-gray-700 text-sm">{{$t('Who_We_Are_content')}}</p>
            </div>

            <div class="mb-10 md:mb-0 border-b-2 border-teal-500 shadow-2xl mx-6">
                <div class="flex px-1 pt-2">
                    <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   <h1 class="font-mono text-teal-500 text-xl">{{$t('Our Mession')}}</h1> 
                </div>
                
                <p class="font-light p-1 px-3 text-gray-700 text-sm">{{$t('Our_Mession_content')}}</p>
            </div>

            <div class="mb-10 md:mb-0 border-b-2 border-teal-500 shadow-2xl mx-6">
                <div class="flex px-1 pt-2">
                    <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    <h1 class="font-mono text-teal-500 text-xl">{{$t('Our Vision')}}</h1>
                </div>
                
                <p class="font-light p-1 px-3 text-gray-700 text-sm">{{$t('Our_Vision_content')}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Overview'
}
</script>