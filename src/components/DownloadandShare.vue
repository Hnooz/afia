<template>
    <section id="DownloadandShare" class="container mx-auto mt-16 border-teal-500 border-b-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <h1 class="font-semibold text-center text-teal-500 text-xl">{{$t('Download Afia Mobile Application Now')}}</h1>
        <div class="md:flex md:justify-center mt-10">
            <a href="#" class="bg-black border-2 flex hover:bg-transparent hover:border-black hover:text-black items-center justify-center md:mx-0 md:px-2 md:whitespace-no-wrap mx-24 my-10 py-2 rounded text-white whitespace-no-wrap">
                <span class="mt-1 mx-1"><ion-icon id="apple" class="h-6 w-5" name="logo-apple"></ion-icon></span>
                {{$t('Apple Store')}}
            </a>
            
            <a :class="currentPage == 'en' ? 'md:ml-32' : 'md:mr-32'" href="https://play.google.com/store/apps/details?id=com.sideeg.afia_user&gl=TR" class="bg-green-600 border-2 flex items-center hover:bg-transparent hover:border-gray-500 hover:border-green-500 hover:text-green-600 justify-center md:mx-0 md:my-10 md:px-2 md:whitespace-no-wrap mt-10 mx-24 py-2 rounded text-white whitespace-no-wrap">
                <span class="mt-1 mx-1"><ion-icon class="h-6 w-5" name="logo-google-playstore"></ion-icon></span>
                {{$t('Play Store')}}
            </a>
        </div>

        <div class="my-16">
            <h1 class="font-semibold text-center text-teal-500 text-xl mb-16">{{$t('Share Afia Mobile Application whit Your Friends')}}</h1>
            <div class="sharethis-inline-share-buttons"></div>
        </div>
    </section>
</template>

<script>
import i18n from "../i18n";

export default {
    name: 'DownloadandShare',
    computed: {
        currentPage() {
            return i18n.locale;
        }
    },
}
</script>