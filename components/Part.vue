<template>
  <div class="">
    <div :id="id" class="pb-8 pt-5">
      <h3
        class="border-b-2 border-sombre text-xl w-fit mx-auto pb-3 col-white font-semibold"
      >
        {{ title }}
      </h3>
    </div>
    <div
      v-if="id === 'aboutme'"
      class="flex flex-col space-y-10 lg:px-30 md:px-15"
    >
      <div
        v-for="(i, j) in contents"
        :key="j"
        class="flex h-fit sm:space-x-5 space-x-3"
      >
        <div
          class="flex items-center sm:flex-row sm:space-y-0 space-y-3 flex-col"
        >
          <div class="h-fulls flex flex-col items-center space-y-2">
            <span
              class="bg-sombre font-semibold w-fit h-fit p-2 border-2 border-sombre rounded-full"
              >{{ j + 1 }}</span
            >
          </div>
        </div>
        <div class="sombre-text text-base">
          {{ i }}
        </div>
      </div>
    </div>
    <div v-if="id === 'hobbies'" class="flex flex-col space-y-10">
      <div>
        <span class="sombre-text block w-fit mx-auto">
          <svg width="96" height="96" xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                id="canvas_background"
                fill="none"
                height="98"
                width="98"
                y="-1"
                x="-1"
              />
            </g>
            <g>
              <path
                id="svg_1"
                stroke="null"
                fill="currentColor"
                d="m95.186005,74.137683c0.017831,-1.093873 -0.023774,-2.201811 -0.120356,-3.334751c-1.108463,-18.781804 -9.35953,-26.834274 -9.35953,-26.834274l-0.004458,0.001563c-2.830593,-3.072221 -6.791937,-4.991187 -11.187157,-4.991187c-2.395231,0 -4.646333,0.603193 -6.670095,1.626746l-0.029718,-0.017189c0,0 -0.221395,0.129702 -0.588407,0.339101c-0.142644,0.079696 -0.295689,0.140641 -0.436847,0.228151l-0.007429,-0.001563c0,0 -0.016345,0.012501 -0.020802,0.014064c-0.031203,0.018752 -0.059435,0.04063 -0.090638,0.062507c-1.741446,0.936043 -5.312005,2.664363 -9.347643,3.622283c-2.79196,0.701642 -3.060904,-1.676751 -3.075762,-2.312761l0,-1.214199c-0.10104,-1.301709 -0.745909,-3.716044 -3.994033,-4.252042l0,-15.139206c0.004458,0.001563 0.007429,0.004688 0.011887,0.004688l0.016345,-5.28497c0,0 -0.358096,-4.981811 1.7147,-6.96641c0.066864,-0.07032 0.127785,-0.142204 0.19465,-0.206273c0.028232,-0.025003 0.046062,-0.057819 0.074294,-0.076571c0.014859,-0.009376 0.026746,-0.009376 0.035661,-0.020315c1.377407,-1.26108 3.157485,-1.46579 4.210971,-1.461102c0.276373,0.014064 4.860299,0.382856 4.860299,7.041418l0,9.238541l0.013373,0c0.074294,4.959934 3.904881,8.957259 8.637394,8.957259c4.09953,0 7.472468,-3.01909 8.356564,-7.046106c0.014859,-0.039067 0.032689,-0.053131 0.046062,-0.096886c0.193164,-0.61882 0.208023,-1.103249 0.175333,-1.520484c0,-0.006251 0.004458,-0.014064 0.004458,-0.02344c0,-0.025003 -0.014859,-0.048443 -0.014859,-0.075008c-0.031203,-0.260967 -0.063893,-0.476616 -0.123328,-0.643823c-0.023774,-0.060944 -0.037147,-0.115638 -0.065379,-0.171894c-0.078751,-0.179708 -0.147102,-0.300034 -0.147102,-0.300034l-0.031203,0.018752c-0.362554,-0.564126 -0.947989,-0.95792 -1.643378,-0.95792c-0.946503,0 -1.684983,0.704767 -1.903406,1.626746c-0.020802,0.07032 -0.05052,0.153142 -0.078751,0.232839l-0.022288,0c0,0 0.001486,0.043755 0.001486,0.062507c-0.341751,1.011051 -1.007424,2.68624 -1.796423,3.140979c-0.86478,0.64226 -2.219898,1.272018 -3.687943,0.521934c-1.729559,-0.987611 -2.93609,-2.862823 -2.93609,-5.08026c0,-0.160956 0.031203,-0.307847 0.04309,-0.464115l-0.04309,0l0,-6.419473l0,-4.191097l0,-0.425048c0,-1.828331 -0.991079,-3.681665 -1.748875,-4.836482c-0.031203,-0.051568 -0.066864,-0.101574 -0.10104,-0.153142c-0.153045,-0.225025 -0.294203,-0.429736 -0.408616,-0.586004l-0.047548,0c-1.916779,-2.526847 -4.835039,-4.181721 -8.147055,-4.181721c-4.592841,0 -8.442745,3.133166 -9.837982,7.466466c-0.255571,1.042305 -0.616638,3.50352 -0.616638,9.102588l0,18.830247c-3.577988,0.214087 -3.973231,3.269118 -3.994033,4.341114l0,0.971985c-0.06835,1.151692 -0.628525,3.441013 -4.023751,2.444025c-3.432372,-0.909477 -6.252564,-2.411209 -7.598767,-3.21755c-0.200593,-0.135953 -0.40713,-0.257842 -0.615152,-0.382856c-0.156017,-0.101574 -0.252599,-0.164081 -0.252599,-0.164081l0,0.014064c-2.203553,-1.275144 -4.725084,-2.02054 -7.42492,-2.02054c-3.301615,0 -6.361033,1.08606 -8.881078,2.930018l-0.005944,-0.004688c0,0 -0.298661,0.212524 -0.766712,0.612569c-0.936102,0.779775 -1.786022,1.667375 -2.531932,2.647173c-3.112909,3.79574 -7.429377,11.304399 -8.521496,24.265234c-0.303119,2.090861 -0.378898,4.141092 -0.277859,6.12569c0,0.078134 -0.007429,0.15158 -0.007429,0.228151c0.004458,0 0.011887,0 0.016345,0c0.496282,8.59003 4.631474,15.753337 11.242134,17.944209c5.780056,1.912716 12.069767,-0.439112 16.959783,-5.574066l-0.004458,0.014064c0,0 0.049034,-0.057819 0.121842,-0.145329c0.213966,-0.223463 0.426446,-0.450051 0.632983,-0.686015c1.288254,-1.345464 4.178282,-4.031704 8.193117,-5.885038c0.142644,-0.062507 0.322435,-0.140641 0.552746,-0.228151c0.037147,-0.020315 0.078751,-0.029691 0.115898,-0.048443c2.77413,-1.065745 10.842433,-3.406634 20.276257,0.731332c4.167881,2.033042 7.395202,4.789602 8.788954,6.091311c0.007429,0.010939 0.016345,0.015627 0.023774,0.025003c0.471023,0.440675 0.745909,0.721956 0.745909,0.721956l-0.010401,-0.057819c4.719141,4.403621 10.519998,6.353841 15.89441,4.573953c6.861773,-2.275256 11.057885,-9.89799 11.283738,-18.922445c0.004458,-0.004688 0.010401,-0.009376 0.014859,-0.009376c-0.004458,-0.067195 -0.008915,-0.126577 -0.008915,-0.189084zm-64.809431,-8.441576c0.083209,2.279944 -1.7147,2.678427 -2.634457,2.736246l-1.010395,0c-1.682011,-0.009376 -1.998503,1.212637 -2.049022,1.920529l0,1.268893c0,2.311198 -1.465073,2.737808 -2.273389,2.798753l-1.161955,0c-1.982158,0 -2.148576,-1.962721 -2.160463,-2.479967l0,-1.636122c-0.022288,-1.718944 -1.506678,-1.86271 -1.922723,-1.870523l-0.627039,0c-2.551248,0.020315 -3.060904,-1.41891 -3.141141,-2.290883l0,-0.653199c0.020802,-2.673739 2.219898,-2.928455 2.93609,-2.940956l0.793458,0c1.618118,-0.009376 1.919751,-1.098561 1.962842,-1.708005l0,-1.493918c0,-2.533098 2.12183,-2.772187 2.812762,-2.786251c0.083209,-0.003125 2.784531,-0.032816 2.784531,2.826881l0,1.309523c0.017831,0.53131 0.230311,1.873649 1.976214,1.853334l0.943531,0c0.771169,0.025003 2.775615,0.326599 2.775615,2.940956l0,0.204711l-0.004458,0z"
              />
            </g>
          </svg>
        </span>
        <h3 class="w-fit mx-auto pb-10 col-white font-semibold">Video games</h3>
        <span class="sombre-text block mx-auto md:px-40 sm:px-6.5">
          Do you have any taste in videos games ? Do you like playing
          battleroyal, stilling cars for a mission or even beating a friend 1 -
          0 is enjoyable for you ? Great, me too, I'm not good at the game that
          I played but I enjoy it as much I can and here is the list of the few
          games that I like playing. Who knows ? We might play the same game.
        </span>
        <div class="flex flex-wrap gamelist pt-5">
          <div v-for="(game, i) in objects.game" :key="i" class="column gaming">
            <div class="flex flex-col space-y-2">
              <!-- title -->
              <span class="w-fit mx-auto sombre-text">{{ game.title }}</span>
              <!-- image with -->
              <a :href="game.link" target="_blank">
                <figure class="image is-16by9">
                  <img class="rounded" :src="game.image" />
                </figure>
              </a>
              <!-- little message -->
              <div>
                <span
                  v-if="game.title === 'Call of Duty Warzone'"
                  class="sombre-text flex flex-col items-center space-y-2"
                >
                  <span class="sombre-text text-center"
                    >Wanna hop in ? here is my battlenet ID, invite me for a
                    game.</span
                  >
                  <span class="flex border px-3 py-1 rounded items-center">
                    <span class="font-semibold sombre-text">Sopoude#2917</span>
                    <button
                      class="ml-1.5 flex items-center relative"
                      :title="copied ? 'Copied' : 'Copy'"
                      @click="copy"
                    >
                      <svg
                        v-if="!copied"
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        ></path>
                      </svg>
                      <svg
                        v-else
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        ></path>
                      </svg>
                      <span v-if="copied" class="block absolute right-0 -mr-17">
                        Copied
                      </span>
                    </button>
                  </span>
                </span>
                <span
                  v-if="game.title === 'Grand Theft Auto V'"
                  class="sombre-text flex flex-col items-center space-y-2"
                >
                  <span class="sombre-text text-center"
                    >There is huge community of gta player both online and
                    offline, unfortunately I only play GTA V offline for
                    now.</span
                  >
                </span>
                <span
                  v-if="game.title === 'Pro Evolution Soccer 2021'"
                  class="sombre-text flex flex-col items-center space-y-2"
                >
                  <span class="sombre-text text-center"
                    >There is also a huge community of pes 2021 player and the
                    majority of them play offline with their friends or other
                    people. I like play pes 2021 with my friends.</span
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span class="sombre-text block w-fit mx-auto">
          <svg width="96" height="96" xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                id="canvas_background"
                fill="none"
                height="98"
                width="98"
                y="-1"
                x="-1"
              />
            </g>
            <g>
              <path
                id="svg_1"
                stroke="null"
                fill="currentColor"
                d="m94.035358,25.509411l-0.08528,0c-1.639767,0.010514 -1.89411,-1.419424 -1.922537,-2.083324l0,-10.383574c0,-1.108502 -0.89469,-2.00672 -1.995847,-2.00672l-29.571155,0c-7.419345,0 -10.187199,2.760742 -10.873926,3.627417l-0.188513,0.262856l-0.001496,0.004506l-0.58499,0.805091c-0.001496,0 -0.001496,0 -0.001496,0c-0.785472,1.082968 -1.469207,0.621843 -1.798357,0.267362l-1.119111,-1.401399l-0.553571,-0.669908c-0.930597,-0.980829 -3.355836,-2.895925 -8.162926,-2.895925l-31.504165,0c-1.104149,0 -1.99884,0.898217 -1.99884,2.00672l0,10.251395c0,1.794933 -0.970993,2.155422 -1.566456,2.215503l-0.442857,0c-0.484749,0.030041 -1.612836,0.312423 -1.612836,2.395747l0,48.859726c0,1.198625 0.968001,2.16894 2.161919,2.16894l28.752768,0c9.172818,0 13.170497,3.472707 14.368903,4.805013l0.683735,0.850152l0.001496,0c0,0 1.834264,2.083324 3.767274,0l0,0l0.400965,-0.471639l0,0.001502l0.005985,-0.004506l0.511679,-0.600814c0.014961,-0.018024 0.137645,-0.156212 0.315685,-0.33946c1.530549,-1.494526 5.356172,-4.240247 12.836859,-4.240247l29.631001,0c1.195414,0 2.161919,-0.970315 2.161919,-2.16894l0,-49.332867c0,-1.766394 -1.273213,-1.913594 -1.615828,-1.922606zm-6.460321,43.589082c0,0.962805 -0.800433,1.739358 -1.796861,1.739358l-24.379559,0c-8.676101,0 -11.82547,3.935334 -11.82547,3.935334l-0.399469,0.537729l-0.187017,0.259852c-0.001496,0 -0.001496,0 -0.001496,0c-0.827364,1.128029 -2.043724,0.009012 -2.049708,0.003004l-0.561052,-0.704455c-0.415926,-0.50168 -3.602699,-4.032966 -11.315287,-4.032966l-25.135108,0c-0.991939,0 -1.793869,-0.778055 -1.793869,-1.739358l0,-52.063568c0,-0.961303 0.80193,-1.739358 1.793869,-1.739358l19.51412,0c14.515525,0 15.890475,8.27772 15.984732,10.682479l0,36.208077c0,2.631567 1.249275,3.125737 1.953955,3.197834l1.048792,0c0.718146,-0.072098 1.859699,-0.500178 1.859699,-2.553461l0,-37.319584l-0.011969,0c0.107722,-3.011582 1.277701,-10.216848 10.007663,-10.216848l25.497173,0c0.996427,0 1.796861,0.778055 1.796861,1.739358l0,52.066572z"
              />
            </g>
          </svg>
        </span>
        <h3 class="w-fit mx-auto pb-10 col-white font-semibold">Reading</h3>
        <span class="sombre-text block mx-auto md:px-40 sm:px-6.5 pb-5">
          What is the most inspiring book you ever read ? I've never read a hole
          book at all. To tell the truth I didn't have any interest in reading
          until recently where I started reading a book called
          <a
            href="https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird"
            class="hover:text-white hover:underline font-semibold"
          >
            To Kill a Mockingbird</a
          >. It is the first book that I started reading with interest. I'm
          still reading the book and will try to finish it, at least, I hope.
        </span>
        <a
          :href="objects.mockingbird.link"
          target="_blank"
          class="block md:w-1/4 sm:w-1/2 w-1/2 mx-auto"
        >
          <figure class="image is-4by5">
            <img class="rounded" :src="objects.mockingbird.image" />
          </figure>
        </a>
      </div>

      <div class="pt-10">
        <span class="sombre-text block w-fit mx-auto">
          <svg width="96" height="96" xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                id="canvas_background"
                fill="none"
                height="98"
                width="98"
                y="-1"
                x="-1"
              />
            </g>
            <g>
              <path
                id="svg_1"
                stroke="null"
                fill="currentColor"
                d="m71.659143,4.812351l0,9.595143l-8.483373,0l0,-9.595143l-33.933491,0l0,9.595143l-8.483373,0l0,-9.595143l-8.483373,0l0,86.35629l8.483373,0l0,-9.595143l8.483373,0l0,9.595143l33.933491,0l0,-9.595143l8.483373,0l0,9.595143l8.483373,0l0,-86.35629l-8.483373,0zm-42.416863,67.166003l-8.483373,0l0,-9.595143l8.483373,0l0,9.595143zm0,-19.190287l-8.483373,0l0,-9.595143l8.483373,0l0,9.595143zm0,-19.190287l-8.483373,0l0,-9.595143l8.483373,0l0,9.595143zm42.416863,38.380573l-8.483373,0l0,-9.595143l8.483373,0l0,9.595143zm0,-19.190287l-8.483373,0l0,-9.595143l8.483373,0l0,9.595143zm0,-19.190287l-8.483373,0l0,-9.595143l8.483373,0l0,9.595143z"
              />
            </g>
          </svg>
        </span>
        <h3 class="w-fit mx-auto pb-10 col-white font-semibold">
          Movies & Tv's Show
        </h3>
        <span class="sombre-text block mx-auto md:px-40 sm:px-6.5 pb-5">
          What movie or tv show(serie) lives in your head rent free ? Well
          definetely I'd say
          <span class="text-sombre font-semibold">Gotham</span> which is a serie
          about the beginning of Batman, how he ends up becoming Batman. I'm
          almost sure you might have watched it or you definetely should try if
          you like action movies, the movie is call
          <span class="text-sombre font-semibold">John Wick</span>, and no I
          won't spoil you the movie because you must savourate everything and
          every moment in the movie in my opinion. Other than that I like
          watching series and movies in general but with somes actions in there.
        </span>
      </div>

      <div>
        <span class="sombre-text block w-fit mx-auto">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="148pt"
            height="76pt"
            viewBox="0 0 1280.000000 720.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g
              transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path
                d="M8284 7006 c-264 -68 -395 -131 -662 -320 l-93 -66 7 140 c6 124 5
140 -9 140 -10 0 -31 -29 -54 -72 -32 -61 -76 -112 -267 -308 -198 -204 -240
-252 -314 -365 -53 -81 -121 -167 -180 -229 -254 -266 -295 -391 -232 -707 24
-116 87 -308 126 -379 34 -62 186 -226 201 -217 7 5 7 31 -2 89 -19 122 -27
193 -21 188 2 -3 17 -64 32 -135 32 -159 41 -323 24 -448 -20 -142 -16 -261
10 -329 39 -105 169 -218 355 -311 109 -54 487 -218 518 -224 26 -5 47 -29 47
-52 0 -6 -17 -11 -39 -11 -69 0 -100 -18 -142 -83 -47 -72 -47 -78 -14 -284
23 -135 24 -163 14 -212 -6 -31 -15 -63 -20 -72 -15 -30 -194 -128 -272 -149
l-75 -21 -45 32 c-31 22 -61 33 -95 37 -59 5 -149 -13 -174 -35 -22 -20 -23
-71 -2 -101 14 -21 14 -25 1 -40 -8 -9 -18 -32 -22 -50 -5 -27 -3 -38 14 -56
18 -20 19 -26 9 -54 -15 -39 -6 -57 42 -89 27 -19 46 -23 113 -23 80 0 80 0
116 39 24 25 48 40 72 45 21 4 43 14 50 23 15 17 78 47 85 40 3 -2 0 -16 -6
-31 -13 -34 -13 -82 -1 -105 8 -15 -7 -25 -111 -77 -67 -32 -126 -64 -132 -69
-6 -6 -54 -32 -107 -57 -115 -56 -194 -123 -209 -177 -15 -57 10 -136 89 -281
255 -469 243 -430 185 -575 -38 -96 -41 -99 -110 -150 -129 -96 -231 -296
-181 -356 25 -30 46 -40 135 -59 346 -76 1051 -69 1214 11 106 53 76 281 -50
372 -154 111 -264 156 -455 183 -122 18 -128 20 -133 44 -19 88 -96 292 -188
499 -25 57 -46 107 -46 111 0 4 21 10 46 14 38 5 49 2 62 -13 17 -19 22 -17
226 55 151 53 213 71 226 64 48 -26 131 -135 189 -249 47 -92 66 -120 83 -123
19 -3 33 -35 106 -243 92 -262 124 -378 142 -512 11 -81 10 -92 -9 -135 -25
-59 -35 -111 -27 -143 9 -36 60 -47 202 -43 114 3 123 4 157 31 51 39 67 74
67 150 0 70 -71 510 -121 750 -47 224 -46 207 -15 207 15 0 29 6 32 14 6 16
-11 137 -57 389 -34 190 -33 213 17 271 46 54 58 102 51 216 -7 105 -26 169
-88 298 -33 67 -39 92 -37 130 l3 47 45 -65 c37 -52 51 -65 72 -65 32 0 98
-60 133 -120 13 -22 39 -79 58 -127 34 -82 35 -89 27 -165 -4 -43 -15 -113
-24 -157 -30 -146 9 -331 86 -408 53 -53 78 -61 133 -42 33 11 50 12 64 4 32
-17 83 -11 139 15 30 14 71 25 92 25 56 0 104 36 108 81 2 29 -5 46 -37 90
-23 29 -41 56 -41 59 -1 3 -2 57 -3 120 -2 140 -15 172 -109 280 -61 70 -68
83 -101 191 -47 150 -109 271 -194 383 -75 98 -72 92 -105 159 -36 75 -98 148
-210 247 -157 139 -214 159 -389 136 l-66 -8 -5 31 -5 31 86 26 c131 39 347
122 436 166 78 39 133 77 205 143 29 27 45 34 100 39 79 7 197 39 252 67 93
47 173 152 225 296 43 118 25 206 -57 275 l-40 35 35 84 c37 92 51 102 104 75
34 -18 61 -12 61 13 0 9 -12 52 -26 96 -29 90 -28 145 5 285 16 70 19 75 42
72 62 -9 259 -13 259 -5 0 4 -25 21 -56 37 -102 53 -143 122 -228 377 -72 217
-129 366 -184 477 -87 176 -335 369 -531 413 -34 7 -61 16 -61 20 0 17 129 43
313 63 272 29 271 37 -13 93 -443 88 -562 95 -787 49 -72 -14 -153 -33 -179
-41 -27 -8 -50 -12 -52 -10 -2 2 13 37 35 77 33 61 55 86 134 151 178 148 189
158 189 168 0 16 -51 9 -186 -25z m-623 -6087 c145 -26 240 -58 326 -110 130
-79 185 -157 187 -270 1 -76 -16 -94 -108 -114 -223 -48 -709 -43 -1071 10
-137 21 -159 30 -163 72 -5 51 60 166 137 242 56 56 66 62 76 48 6 -9 24 -21
40 -27 78 -30 327 56 393 136 15 18 36 33 48 33 11 1 72 -8 135 -20z"
              />
              <path
                d="M4320 6811 c-169 -25 -616 -182 -790 -278 -353 -195 -518 -425 -711
-989 -52 -154 -83 -277 -109 -444 -12 -74 -34 -205 -50 -290 -43 -228 -43
-230 -34 -230 5 0 27 19 51 42 23 23 45 40 47 37 2 -2 -6 -51 -20 -109 -23
-104 -30 -143 -60 -370 -20 -150 -22 -292 -6 -357 8 -29 17 -53 20 -53 4 0 19
35 35 78 26 74 83 179 92 170 3 -2 11 -38 19 -80 20 -104 37 -140 98 -204 78
-82 377 -292 399 -279 4 3 -26 55 -67 115 -41 61 -74 117 -74 126 0 9 44 -25
103 -80 121 -113 193 -168 262 -200 64 -31 228 -87 234 -81 2 3 -17 46 -43 95
-26 50 -42 90 -36 90 12 0 220 -138 220 -146 0 -3 -6 -17 -14 -32 -7 -15 -16
-44 -20 -66 -5 -23 -27 -64 -57 -104 -90 -117 -164 -293 -190 -454 -22 -136 7
-186 99 -169 l42 8 0 -41 c1 -56 25 -118 52 -136 13 -8 37 -29 53 -47 34 -35
72 -53 115 -53 27 0 29 -3 28 -36 -1 -25 4 -41 17 -50 14 -11 16 -21 11 -55
-4 -23 -16 -53 -27 -67 -15 -19 -19 -40 -19 -86 2 -98 -8 -237 -19 -286 -18
-77 -15 -96 19 -110 21 -9 29 -18 26 -29 -5 -17 -51 -263 -85 -461 -44 -252
-81 -507 -81 -559 0 -70 23 -110 82 -144 76 -44 301 -80 348 -55 36 19 36 48
-2 120 -31 58 -33 70 -32 153 1 94 20 175 167 715 l53 194 57 29 c41 21 61 26
70 19 9 -8 10 -59 4 -229 -10 -275 -3 -684 13 -738 28 -92 111 -132 295 -142
96 -5 113 -4 128 11 9 10 17 23 17 29 0 7 -25 46 -56 87 l-57 75 7 120 c6 111
21 279 46 518 5 55 13 124 16 155 8 89 13 102 33 102 41 0 43 14 40 354 -3
251 -1 327 9 339 11 13 3 62 -46 279 l-60 263 26 48 c15 29 32 47 43 47 24 0
28 16 34 162 l6 127 -36 23 c-26 16 -48 45 -76 101 -39 76 -39 78 -23 110 19
38 52 66 78 67 16 0 18 -5 11 -55 -3 -30 -4 -59 0 -64 8 -13 100 41 148 87 22
21 59 63 84 95 l45 58 40 -46 c22 -25 43 -45 47 -45 4 0 33 38 65 84 38 57 84
108 142 157 46 39 86 70 88 68 3 -2 0 -28 -5 -57 -11 -59 1 -92 27 -71 17 14
70 163 102 289 25 97 27 119 26 308 0 111 3 202 6 202 4 0 19 -10 34 -21 48
-37 49 -9 4 79 -52 102 -55 150 -15 239 44 99 50 153 43 423 -6 273 -15 358
-52 508 -80 322 -224 525 -551 781 -171 134 -356 221 -612 287 -105 27 -293
39 -391 25z"
              />
            </g>
          </svg>
        </span>
        <h3 class="w-fit mx-auto pb-10 col-white font-semibold">Anime</h3>
        <span class="sombre-text block mx-auto md:px-40 sm:px-6.5 pb-5">
          I'm sure you've heard or even are waiting for the next part of
          <span class="text-sombre font-semibold">Attack On Titan</span> which
          weren't released at the time I were writing this. If not it's a very
          good anime you should try, once again I won't spoil you anything, you
          must savourate every part. Like AOT as we use to call it or SNK for
          some, I like watching anime and a list of few animes I watched and
          appreciated is : Dragon Ball Z, Hunter X Hunter, Hero Academia, One
          Pucnh Man Jujutsu Kaisen wich were released at the end of 2020. Not a
          real geeks but I love anime with good actions.
        </span>
      </div>

      <div class="pt-10">
        <span class="sombre-text block w-fit mx-auto">
          <svg width="96" height="96" xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect
                id="canvas_background"
                fill="none"
                height="98"
                width="98"
                y="-1"
                x="-1"
              />
            </g>
            <g>
              <g id="svg_9" stroke="null">
                <path
                  id="svg_1"
                  stroke="null"
                  fill="currentColor"
                  d="m41.173862,34.819903l7.403541,7.921128l29.614165,-29.374182c-5.794076,-5.280752 -12.553831,-8.911269 -19.957372,-10.561504c-2.575145,11.221598 -8.691114,22.773242 -17.060334,32.014558z"
                  class="st0"
                />
                <path
                  id="svg_2"
                  stroke="null"
                  fill="currentColor"
                  d="m3.190477,48.681876c9.3349,-1.980282 18.991693,-6.930987 27.03902,-14.19202l-16.094655,-17.162443c-7.403541,8.911269 -10.944365,20.132866 -10.944365,31.354464z"
                  class="st0"
                />
                <path
                  id="svg_3"
                  stroke="null"
                  fill="currentColor"
                  d="m42.783328,48.021782l-7.403541,-7.921128c-9.3349,8.251175 -20.601158,14.19202 -31.545523,16.172302c1.287572,7.591081 4.506503,14.522067 9.3349,20.79296l29.614165,-29.044135z"
                  class="st0"
                />
                <path
                  id="svg_4"
                  stroke="null"
                  fill="currentColor"
                  d="m60.487448,66.504413c-7.403541,8.251175 -12.875724,18.152584 -14.807082,27.723947c10.944365,0.660094 22.210624,-2.640376 31.22363,-10.231457l-16.416548,-17.49249z"
                  class="st0"
                />
                <path
                  id="svg_5"
                  stroke="null"
                  fill="currentColor"
                  d="m83.341858,18.977647l-29.936058,29.044135l7.081648,7.591081c9.3349,-8.581222 20.923051,-14.19202 31.867417,-16.172302c-1.287572,-7.591081 -4.18461,-14.522067 -9.013007,-20.462913z"
                  class="st0"
                />
                <path
                  id="svg_6"
                  stroke="null"
                  fill="currentColor"
                  d="m19.928918,12.04666l16.094655,17.162443c7.081648,-7.921128 12.231938,-17.822537 14.807082,-27.3939c-10.944365,-0.660094 -21.888731,2.970423 -30.901737,10.231457z"
                  class="st0"
                />
                <path
                  id="svg_7"
                  stroke="null"
                  fill="currentColor"
                  d="m55.015265,60.893615l-6.759755,-7.591081l-29.614165,29.374182c5.794076,5.280752 12.553831,8.581222 19.313586,10.231457c2.575145,-11.221598 8.691114,-22.443195 17.060334,-32.014558z"
                  class="st0"
                />
                <path
                  id="svg_8"
                  stroke="null"
                  fill="currentColor"
                  d="m93.320544,47.031641c-9.656793,1.980282 -19.313586,6.930987 -27.682806,14.19202l16.416548,17.49249c7.725434,-9.241316 11.588151,-20.462913 11.266258,-31.684511z"
                  class="st0"
                />
              </g>
            </g>
          </svg>
        </span>
        <h3 class="w-fit mx-auto pb-10 col-white font-semibold">Basketball</h3>
        <span class="sombre-text block mx-auto md:px-40 sm:px-6.5 pb-5">
          Last but not least, I like playing
          <span class="text-sombre font-semibold">Basketball</span>
          which is the first and only sport where I can say that I'm good, no
          jokes. There is a bunch of reason why someone want to be good at sport
          and those are generally reasons that motivates you to give everything
          in order to succeed in it. Hmmm, I started learning playing Basketball
          because I wanted to impress a girl and end up actually enjoying it
          more than my first goal. I don't train like I used to but I've still
          my hands, do not challenge me or do it.
        </span>
      </div>
    </div>

    <div v-if="id === 'achievements'" class="flex flex-col space-y-10">
      <span class="text-lg w-fit block font-semibold mx-auto sombre-text"
        >Coming next (Building my portfolio)...</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: 'aboutme',
    },
    title: {
      type: String,
      default: 'About me',
    },
    nb: {
      type: Number,
      default: 3,
    },
    contents: {
      type: Array,
      default: () => [],
    },
    objects: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      copied: false,
    }
  },
  methods: {
    copy() {
      if (!this.copied) {
        navigator.clipboard.writeText('Sopoude#2917')
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 5000)
      }
    },
  },
}
</script>
