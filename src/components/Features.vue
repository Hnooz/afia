<template>
    <section id="Features" class="md:flex container border-b-2 border-teal-500 mx-auto px-12 py-20" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <div class="lg:w-1/2 md:w-3/4 w-full">
           <img src="../assets/images/feature.png" class="md:h-auto md:min-h-full  min-h-full rounded" alt="">
        </div>

        <div class="items-center justify-between mt-10 md:mt-0">
            <h1 class="font-semibold mb-6 text-teal-500 text-xl md:mx-6">{{ $t('Afia Features') }}</h1>
            <div class="mb-10 md:mb-0 md:mx-6">
                <div class="flex px-1">
                    <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                   
                    <h1 class="font-mono text-teal-500">{{ $t('Safe delivery') }}</h1>
                </div>
                
                <p class="font-thin mx-5 p-1 text-gray-700 text-sm">{{ $t('Features_1_content') }}</p>
            </div>

            <div class="mb-10 md:mb-0 md:mx-6 mt-4">
                <div class="flex px-1">
                    <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                   
                    <h1 class="font-mono text-teal-500">{{ $t('Pay on delivery') }}</h1>
                </div>
                
                <p class="font-thin mx-5 p-1 text-gray-700 text-sm">{{ $t('Features_2_content') }}</p>
            </div>

             <div class="mb-10 md:mb-0 md:mx-6 mt-4">

                <div class="flex px-1">
                    <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   
                    <h1 class="font-mono text-teal-500">{{ $t('Easy to use application') }}</h1>
                </div>
                
                <p class="font-thin mx-5 p-1 text-gray-700 text-sm">{{ $t('Features_3_content') }}</p>
            </div>

            <div class="mb-10 md:mb-0 md:mx-6 mt-4">

                <div class="flex px-1">
                    <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <h1 class="font-mono text-teal-500">{{ $t('Schedule of monthly medication delivery') }}</h1>
                </div>
                
                <p class="font-thin mx-5 p-1 text-gray-700 text-sm">{{ $t('Features_4_content') }}</p>
            </div>

            <div class="md:mx-6 mt-4">

                <div class="flex px-1">
                    
                   <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>

                    <h1 class="font-mono text-teal-500">{{ $t('Send the prescription and receive your order') }}</h1>
                </div>
                
                <p class="font-thin mx-5 p-1 text-gray-700 text-sm">{{ $t('Features_5_content') }}</p>
            </div>

            <div class="md:mx-6 mt-4">

                <div class="flex px-1">
                    
                   
                    <svg class="h-6 w-5 text-teal-500 mx-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    <h1 class="font-mono text-teal-500">{{ $t('Health insurance services') }}</h1>
                </div>
                
                <p class="font-thin mx-5 p-1 text-gray-700 text-sm">{{ $t('Features_6_content') }}</p>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name:'Features'
}
</script>

