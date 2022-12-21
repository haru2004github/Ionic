let logo = document.querySelector('.logo');



const amazing = document.querySelectorAll('.amazing')
const amazingItem = document.querySelectorAll(".amazing-item");
const icons = document.querySelectorAll(".icon");
const showMmobildMenuBox = document.querySelector('.show-mobile-menu-box')
// const menuIcon = document.querySelector(".menu-icon");

amazing.forEach((ee,index) => {
  ee.addEventListener("click", () => {
    amazingItem[index].classList.toggle("hidden");
    amazingItem[index].classList.toggle("opacity-0");
    ee.classList.toggle('bg-slate-100')
    icons[index].classList.toggle("rotate-180");  
  });
})

const menuIcon = () => {
  showMmobildMenuBox.classList.toggle("hidden");
}

let  changeOne = document.getElementById("changeOne");
let  changeTwo = document.getElementById("changeTwo");
let  changeThree = document.getElementById("changeThree");
let  phoneImg = document.getElementById("phoneImg");
let  andriodBtn = document.getElementById("andriodBtn");
let  coustomBtn = document.getElementById("coustomBtn");
let  iosBtn = document.getElementById("iosBtn");


phoneImg.innerHTML= `<img class="ml-10 md:ml-0 w-full scale-125 z-10" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/blue.png" alt="">
                    <img class="ml-10 md:ml-0 w-full scale-125 translate-y-20 -translate-x-20" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/4c10a0cb-0644-462d-ba21-a583e048bb21_ionic-io-framework-android-music-light.png" alt="">`


iosBtn.addEventListener('click',()=>{
  phoneImg.innerHTML= `<img class="ml-10 md:ml-0 w-full scale-125 z-10" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/android.png" alt="">
                    <img class="ml-10 md:ml-0 w-full scale-125 translate-y-20 -translate-x-20" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/4c10a0cb-0644-462d-ba21-a583e048bb21_ionic-io-framework-android-music-light.png" alt="">`
})

andriodBtn.addEventListener('click',()=>{
  phoneImg.innerHTML= `<img class="ml-10 md:ml-0 w-full scale-125 z-10" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/blue.png" alt="">
                    <img class="ml-10 md:ml-0 w-full scale-125 translate-y-20 -translate-x-20" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/android-phone.png" alt="">`
})

coustomBtn.addEventListener('click',()=>{
  phoneImg.innerHTML= `<img class="ml-10 md:ml-0 w-full scale-125 z-10" src="../dist/img/Ionic_ Enterprise App Development & Delivery Platform_files/green-rate.png" alt="">
                    <img class="ml-10 md:ml-0 w-full scale-125 translate-y-20 -translate-x-20" src="https://ionic.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fionicframeworkcom%2F204343b9-99e3-493a-9057-13e970d6ce96_ionic-io-framework-custom-music-light.png&w=384&q=75" alt="">`
})

changeOne.addEventListener("click",()=>{

  changeOne.classList.add("bg-slate-900","text-slate-50");
  changeThree.classList.remove("bg-slate-900","text-slate-50");
  changeTwo.classList.remove("bg-slate-900","text-slate-50");
  changeTwo.classList.add("bg-slate-300","text-slate-400");
  changeThree.classList.add("bg-slate-300","text-slate-400");


});
changeTwo.addEventListener("click",()=>{
  changeTwo.classList.remove("bg-slate-300","text-slate-400");
  changeTwo.classList.add("bg-slate-900","text-slate-50");
  changeOne.classList.add("bg-slate-300","text-slate-400");
  changeThree.classList.add("bg-slate-300","text-slate-400");
  changeOne.classList.remove("bg-slate-900","text-slate-50");
  changeThree.classList.remove("bg-slate-900","text-slate-50");




});
changeThree.addEventListener("click",()=>{
  changeThree.classList.remove("bg-slate-300","text-slate-400");
  changeThree.classList.add("bg-slate-900","text-slate-50");
  changeTwo.classList.remove("bg-slate-900","text-slate-50");
  changeOne.classList.remove("bg-slate-900","text-slate-50");
  changeTwo.classList.add("bg-slate-300","text-slate-400");
  changeOne.classList.add("bg-slate-300","text-slate-400");

});


ScrollReveal().reveal('.headline',{
  origin: 'bottom',
  distance: '60px' ,
  duration : 650,
  interval: 200,
  delay:200,
//   reset : true,
 
 });

//  code

 let code = document.querySelector(".code");
 let react = document.getElementById('react')
 let angular = document.getElementById("angular")
 let vue = document.getElementById("vue")
 let js = document.getElementById("js")
 let demo = document.getElementById("demo")
 let codeText = document.getElementById('codeText')
 let lang = document.getElementById('lang');

 codeText.addEventListener('click',()=>{
  lang.classList.remove('hidden');
  codeText.classList.remove('bg-slate-800','text-slate-100')
  codeText.classList.add('text-slate-800','bg-slate-100')
  demo.classList.remove('bg-slate-100','text-slate-800')
  demo.classList.add('text-slate-100')
  

  code.innerHTML = `<pre class="text-slate-100 mt-10 ml-3 md:ml-8 max-w-[300px] overflow-x-scroll">
  1  &#60;h4&#62;Discover&#60;/h4&#62;
  2  &#60;h2&#62;Top albums&#60;/h2&#62;
  3  &#60;IonList&#62;
  4   {albums.<span class="text-orange-500">map</span>(album <span class="text-green-300"> =></span>
  5     &#60;IonList <span class="text-purple-400"> key </span>={album.id}>
  6      &#60;IonThumbnail <span class="text-purple-400"> slot </span>= <span class="text-green-300"> "start"</span></IonThumbnail>
  7        &#60;img <span class="text-purple-400"> src </span>={album.artwork} />
  8      &#60;/IonThumbnail>
  9     &#60;IonLabel>
  10   &#60;h2&#62;{album.title}&#60;/h2&#62;
  10  &#60;p&#62;{album.artist}, {album.year}}&#60;/p&#62;
  11 &#60;/IonLabel>
  12 &#60;/IonItem>
  13 &#60;/IonList&#62;
  )}
  </pre>`;
 })


  demo.addEventListener('click',()=>{
  demo.classList.remove('text-slate-100')
  demo.classList.add('bg-slate-100','text-slate-800')
  codeText.classList.remove('bg-slate-100','text-slate-800')
  codeText.classList.add('text-slate-100','bg-slate-800')

  lang.classList.add('hidden')

  code.innerHTML = `
  <div class="bg-slate-100 md:mx-0 mx-10 rounded-2xl p-5 mt-10">
        <h1>Discover</h1>
        <h1 class="text-3xl font-bold ">Top albums</h1>
        <div class="mt-6 h-[400px] overflow-y-scroll">
            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/dawn-fm-the-weeknd.png" alt="">
                <div class="">
                    <h1>Dawn FM</h1>
                    <h2 class="mt-1 text-sm">The Weekend</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/planet-her-doja-cat.png" alt="">
                <div class="">
                    <h1>Planet Her</h1>
                    <h2 class="mt-1 text-sm">Doja Cat</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/sour-olivia-rodrigo.png" alt="">
                <div class="">
                    <h1>SOUR</h1>
                    <h2 class="mt-1 text-sm">Olivia Rodrigo</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/montero-lil-nas-x.png" alt="">
                <div class="">
                    <h1>MONTERO</h1>
                    <h2 class="mt-1 text-sm">Lil Nas X</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/yhlqmdlg-bad-bunny.png" alt="">
                <div class="">
                    <h1>YHLQMDLG
                    </h1>
                    <h2 class="mt-1 text-sm">Bad Bunny

                    </h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/future-nostalgia-dua-lipa.png" alt="">
                <div class="">
                    <h1>Future Nostalgia</h1>
                    <h2 class="mt-1 text-sm">Dua Lipa</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/30-adele.png" alt="">
                <div class="">
                    <h1>30</h1>
                    <h2 class="mt-1 text-sm">Adele</h2>
                </div>
            </div>
        </div>
    </div>`
 });





 code.innerHTML = `<pre class="text-slate-100 mt-10 ml-3 md:ml-8 w-[300px] md:w-full overflow-x-scroll md:overflow-x-visible">
 1  &#60;h4&#62;Discover&#60;/h4&#62;
 2  &#60;h2&#62;Top albums&#60;/h2&#62;
 3  &#60;IonList&#62;
 4   {albums.<span class="text-orange-500">map</span>(album <span class="text-green-300"> =></span>
 5     &#60;IonList <span class="text-purple-400"> key </span>={album.id}>
 6      &#60;IonThumbnail <span class="text-purple-400"> slot </span>= <span class="text-green-300"> "start"</span></IonThumbnail>
 7        &#60;img <span class="text-purple-400"> src </span>={album.artwork} />
 8      &#60;/IonThumbnail>
 9     &#60;IonLabel>
 10   &#60;h2&#62;{album.title}&#60;/h2&#62;
 10  &#60;p&#62;{album.artist}, {album.year}}&#60;/p&#62;
 11 &#60;/IonLabel>
 12 &#60;/IonItem>
 13 &#60;/IonList&#62;
 )}
 </pre>`;

 react.addEventListener('click',()=>{
  code.innerHTML = `<pre class="text-slate-100 mt-10 ml-3 md:ml-8 w-[300px] md:w-full overflow-x-scroll md:overflow-x-visible">
  1  &#60;h4&#62;Discover&#60;/h4&#62;
  2  &#60;h2&#62;Top albums&#60;/h2&#62;
  3  &#60;IonList&#62;
  4   {albums.<span class="text-orange-500">map</span>(album <span class="text-green-300"> =></span>
  5     &#60;IonList <span class="text-purple-400"> key </span>={album.id}>
  6      &#60;IonThumbnail <span class="text-purple-400"> slot </span>= <span class="text-green-300"> "start"</span></IonThumbnail>
  7        &#60;img <span class="text-purple-400"> src </span>={album.artwork} />
  8      &#60;/IonThumbnail>
  9     &#60;IonLabel>
  10   &#60;h2&#62;{album.title}&#60;/h2&#62;
  10  &#60;p&#62;{album.artist}, {album.year}}&#60;/p&#62;
  11 &#60;/IonLabel>
  12 &#60;/IonItem>
  13 &#60;/IonList&#62;
  )}
  </pre>`;
 });

 angular.addEventListener("click",()=>{
  code.innerHTML= `<pre class="text-slate-100 mt-10 ml-3 md:ml-8 w-[300px] md:w-full overflow-x-scroll md:overflow-x-visible">
 1  &#60;h4>Discover&#60;/h4>
 2  &#60;h2>Top albums&#60;/h2>
 3  &#60;ion-list>
 4    &#60;ion-item <span class="text-purple-400">*ngFor</span><span class="text-green-300">
        </span>trackBy:trackAlbums">
 5      &#60;ion-thumbnail <span class="text-purple-400"> slot </span>="start">
 7        &#60;img <span class="text-purple-400"> [src] </span>="album.artwork" />
 8      &#60;/ion-thumbnail>
 9      &#60;ion-label>
 10       &#60;h2>{{ album.title }}</h2>
 11        &#60;p>{{ album.artist }}&#60;/p>
 12     &#60;/ion-label>
 13    &#60;/ion-item>
 14  &#60;/ion-list>
  </pre>`
 })

 vue.addEventListener("click",()=>{
  code.innerHTML= `<pre class="text-slate-100 mt-10 ml-3 md:ml-8 w-[300px] md:w-full overflow-x-scroll md:overflow-x-visible">
 1  &#60;h4>Discover&#60;/h4>
 2  &#60;h2>Top albums&#60;/h2>
 3  &#60;ion-list>
 4    &#60;ion-item <span class="text-purple-400">*vFor</span><span class="text-green-300">
        </span>trackBy:trackAlbums">
 5      &#60;ion-thumbnail <span class="text-purple-400"> slot </span>="start">
 7        &#60;img <span class="text-purple-400">:src </span>="album.artwork" />
 8      &#60;/ion-thumbnail>
 9      &#60;ion-label>
 10       &#60;h2>{{ album.title }}</h2>
 11        &#60;p>{{ album.artist }}&#60;/p>
 12     &#60;/ion-label>
 13    &#60;/ion-item>
 14  &#60;/ion-list>
  </pre>`
 })

 js.addEventListener("click",()=>{
  code.innerHTML= `<pre class="text-slate-100 mt-10 ml-3 md:ml-8 w-[300px] md:w-full overflow-x-scroll md:overflow-x-visible">
 1  &#60;h4>Discover&#60;/h4>
 2  &#60;h2>Top albums&#60;/h2>
 3  &#60;ion-list>
 4    &#60;ion-item <span class="text-purple-400">*ngFor</span><span class="text-green-300">
        </span>trackBy:trackAlbums">
 5      &#60;ion-thumbnail <span class="text-purple-400"> slot </span>="start">
 7        &#60;img <span class="text-purple-400"> [src] </span>="album.artwork" />
 8      &#60;/ion-thumbnail>
 9      &#60;ion-label>
 10       &#60;h2>Dawn FM</h2>
 11        &#60;p>The Weeknd&#60;/p>
 12     &#60;/ion-label>
 13    &#60;/ion-item>
 14   <! --- etc --->
 15  &#60;/ion-list>
  </pre>`
 })


 demo.addEventListener('click',()=>{

  lang.classList.add('hidden')

  code.innerHTML = `
  <div class="bg-slate-100 md:mx-0 mx-10 rounded-2xl p-5 mt-10">
        <h1>Discover</h1>
        <h1 class="text-3xl font-bold ">Top albums</h1>
        <div class="mt-6 h-[400px] overflow-y-scroll">
            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/dawn-fm-the-weeknd.png" alt="">
                <div class="">
                    <h1>Dawn FM</h1>
                    <h2 class="mt-1 text-sm">The Weekend</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/planet-her-doja-cat.png" alt="">
                <div class="">
                    <h1>Planet Her</h1>
                    <h2 class="mt-1 text-sm">Doja Cat</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/sour-olivia-rodrigo.png" alt="">
                <div class="">
                    <h1>SOUR</h1>
                    <h2 class="mt-1 text-sm">Olivia Rodrigo</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/montero-lil-nas-x.png" alt="">
                <div class="">
                    <h1>MONTERO</h1>
                    <h2 class="mt-1 text-sm">Lil Nas X</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/yhlqmdlg-bad-bunny.png" alt="">
                <div class="">
                    <h1>YHLQMDLG
                    </h1>
                    <h2 class="mt-1 text-sm">Bad Bunny

                    </h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/future-nostalgia-dua-lipa.png" alt="">
                <div class="">
                    <h1>Future Nostalgia</h1>
                    <h2 class="mt-1 text-sm">Dua Lipa</h2>
                </div>
            </div>

            <div class="flex items-center gap-3 py-3 border-b-2 border-b-slate-200">
                <img class="w-16" src="https://ionic.io/img/index/code-tabs/30-adele.png" alt="">
                <div class="">
                    <h1>30</h1>
                    <h2 class="mt-1 text-sm">Adele</h2>
                </div>
            </div>
        </div>
    </div>`
 });


 //button

 const darkSwitchIcon = document.querySelector("#dark-switch-icon");
 const darkSwitch = document.querySelector("#dark-switch")
 const darkText = document.querySelector("#dark-text")
//  const darkChangeText = document.querySelector("#dark-text-change")
 const html = document.documentElement;
 let isDarkMode = false;

 // Switch theme function
 const toggleTheme = () => {
     isDarkMode = !isDarkMode;
     switchTheme()
 }

 const toDark = () => {

    
    logo.innerHTML= 
    `  <svg width="90" height="30" viewBox="0 0 698 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M669.427 141.898C666.143 150.728 657.949 155.628 647.824 155.628C632.797 155.628 620.616 143.451 620.616 128.43C620.616 113.409 632.797 101.232 647.824 101.232C657.95 101.232 665.892 105.55 669.428 114.963H697.177C692.581 90.8263 672.505 75.3333 647.824 75.3333C618.488 75.3333 594.707 99.1054 594.707 128.43C594.707 157.754 618.488 181.526 647.824 181.526C672.505 181.526 693.84 164.193 697.176 141.898H669.427Z" fill="white"/>
    <path d="M555.15 78.0007H584.042V179.649H555.15V78.0007Z" fill="white"/>
    <path d="M586.949 53.4355C586.949 63.0649 579.14 70.871 569.507 70.871C559.874 70.871 552.065 63.0649 552.065 53.4355C552.065 43.8061 559.874 36 569.507 36C579.14 36 586.949 43.8061 586.949 53.4355Z" fill="white"/>
    <path d="M472.392 90.441C477.237 81.6971 488.247 75.7277 504.103 75.7277C529.736 75.7277 543.301 92.0385 543.301 116.252V179.646H514.409V119.279C514.409 107.424 509.124 99.269 496.351 99.269C482.346 99.269 474.594 107.845 474.594 121.381V179.562H445.702V77.9978H472.392V90.441Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M383.239 155.628C398.264 155.628 410.445 143.451 410.445 128.432C410.445 113.412 398.264 101.235 383.239 101.235C368.213 101.235 356.032 113.412 356.032 128.432C356.032 143.451 368.213 155.628 383.239 155.628ZM383.239 181.526C412.573 181.526 436.354 157.755 436.354 128.432C436.354 99.1082 412.573 75.337 383.239 75.337C353.904 75.337 330.124 99.1082 330.124 128.432C330.124 157.755 353.904 181.526 383.239 181.526Z" fill="white"/>
    <path d="M291.086 78.0007H319.978V179.649H291.086V78.0007Z" fill="white"/>
    <path d="M322.885 53.4355C322.885 63.0649 315.076 70.871 305.443 70.871C295.809 70.871 288 63.0649 288 53.4355C288 43.8061 295.809 36 305.443 36C315.076 36 322.885 43.8061 322.885 53.4355Z" fill="white"/>
    <path d="M28.8 120C28.8 69.6316 69.6316 28.8 120 28.8C140.276 28.8 158.996 35.4057 174.143 46.6017C178.116 37.2507 186.122 30.0268 195.978 27.1135C175.295 10.1784 148.828 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240C186.274 240 240 186.274 240 120C240 106.13 237.641 92.7867 233.296 80.3656C227.385 88.3578 218.082 93.6899 207.514 94.2366C209.912 102.396 211.2 111.039 211.2 120C211.2 170.368 170.368 211.2 120 211.2C69.6316 211.2 28.8 170.368 28.8 120Z" fill="url(#paint0_angular)"/>
    <path opacity="0.3" d="M237.533 95.687C236.454 90.4492 235.034 85.3335 233.296 80.3654C227.385 88.3576 218.082 93.6896 207.514 94.2364C209.21 100.008 210.351 106.021 210.874 112.218C222.003 110.85 231.624 104.605 237.533 95.687Z" fill="black"/>
    <path d="M120 172.5C148.927 172.5 172.5 148.972 172.5 120C172.5 91.0734 148.972 67.5001 120 67.5001C91.0283 67.5001 67.5 91.0734 67.5 120C67.5 148.927 91.0733 172.5 120 172.5Z" fill="white"/>
    <path d="M198.75 75.0001C213.247 75.0001 225 63.2475 225 48.7501C225 34.2526 213.247 22.5001 198.75 22.5001C184.253 22.5001 172.5 34.2526 172.5 48.7501C172.5 63.2475 184.253 75.0001 198.75 75.0001Z" fill="white"/>
    <defs>
    <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120 120) rotate(-20.2249) scale(91.1181 92.3752)">
    <stop stop-color="white" stop-opacity="0.8"/>
    <stop offset="0.114583" stop-color="white"/>
    <stop offset="1" stop-color="white"/>
    </radialGradient>
    </defs>
    </svg>`
   


     darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
     darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
    //  darkChangeText.innerText = 'Dark'
     darkSwitch.classList.remove('bg-slate-800')
     darkSwitch.classList.add('bg-slate-100')
     localStorage.setItem('data-theme', 'dark')
     html.classList.add('dark')
     darkText.classList.add('-translate-x-7')
     darkText.innerText = 'ON'
 }

 const toLight = () => {

    logo.innerHTML =`
    <svg width="90" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.1 16.555c-.383 1.03-1.34 1.602-2.52 1.602a3.174 3.174 0 110-6.347c1.18 0 2.107.504 2.52 1.603h3.237c-.536-2.816-2.878-4.624-5.758-4.624a6.196 6.196 0 100 12.39c2.88 0 5.369-2.023 5.758-4.624H78.1zM64.767 9.1h3.371v11.86h-3.37V9.1zM68.477 6.234a2.035 2.035 0 11-4.069 0 2.035 2.035 0 014.07 0zM55.112 10.552c.566-1.02 1.85-1.717 3.7-1.717 2.99 0 4.573 1.903 4.573 4.728v7.396h-3.37v-7.043c0-1.383-.617-2.335-2.107-2.335-1.634 0-2.539 1.001-2.539 2.58v6.788H52V9.099h3.113v1.453z" fill="#001A3A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.711 18.157a3.174 3.174 0 10.001-6.347 3.174 3.174 0 000 6.347zm0 3.021a6.195 6.195 0 100-12.388 6.196 6.196 0 100 12.388z" fill="#001A3A"></path><path d="M33.96 9.1h3.37v11.86h-3.37V9.1zM37.67 6.234a2.035 2.035 0 11-4.07 0 2.035 2.035 0 014.07 0zM3.36 14C3.36 8.124 8.124 3.36 14 3.36c2.366 0 4.55.77 6.317 2.077a4.01 4.01 0 012.547-2.274A13.948 13.948 0 0014 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14c0-1.618-.275-3.175-.782-4.624a3.995 3.995 0 01-3.008 1.618c.28.952.43 1.96.43 3.006 0 5.876-4.764 10.64-10.64 10.64S3.36 19.876 3.36 14z" fill="#001A3A"></path><path d="M27.712 11.164a13.894 13.894 0 00-.494-1.788 3.995 3.995 0 01-3.008 1.618c.198.674.331 1.375.392 2.098a4.374 4.374 0 003.11-1.928zM14 20.125A6.132 6.132 0 0020.125 14 6.132 6.132 0 0014 7.875 6.132 6.132 0 007.875 14 6.135 6.135 0 0014 20.125zM23.188 8.75a3.062 3.062 0 100-6.125 3.062 3.062 0 000 6.125z" fill="#001A3A"></path></svg>`



     darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
    //  darkChangeText.innerText = 'Light'
     darkSwitch.classList.remove('bg-slate-100')
     darkSwitch.classList.add('bg-slate-800')
     localStorage.removeItem('data-theme')
     html.classList.remove('dark')
     darkText.classList.remove('-translate-x-7')
     darkText.innerText = 'FF'
     darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
     setTimeout(() => {
         darkSwitchIcon.classList.remove('rotate-[360deg]')
     }, 200)
 }

 const switchTheme = () => {
     isDarkMode ? toDark() : toLight()

 }



 const dataTheme = localStorage.getItem('data-theme')

 dataTheme === 'dark' ? toDark() : toLight();




