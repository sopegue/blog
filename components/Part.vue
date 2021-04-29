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
              <span class="sombre-text">{{ game.content }}</span>
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
                    offline, unfortunately I only play GTA offline for
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
                    people. I like play pes 2021 with my friend.</span
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
          >. It is the first book that I started reading with interest. I'll try
          to finish it, at least, I hope.
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
