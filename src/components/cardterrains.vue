<template>
        <figure class="m-4">
        <img src="./public/img/terrain.png" class="w-full rounded-t-lg" alt="" />
        <figcaption
          class="relative flex flex-col rounded-b-lg border-2 border-t-0 px-5 py-7"
        >
          <h3 class="text-2xl text-gray-900">Titre</h3>
          <address class="not-italic text-gray-500">Description</address>
          <div class="order-first flex items-center">
            <div class="text-2xl text-indigo-500">
              $ 2 000
            </div>
            <div class="text-gray-500">/mois</div>
          </div>
          <hr class="my-2 border-t-2 border-indigo-100" />


          <!-- Beds -->
          <div class="flex justify-between text-sm">
            <div>2 beds
                <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block align-top flex-grow-0 flex-shrink-0 w-5 h-5 relative"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M15 9.375H3.75V5.3125C3.75124 4.89848 3.91625 4.50177 4.20901 4.20901C4.50177 3.91625 4.89848 3.75124 5.3125 3.75H14.6875C15.1015 3.75124 15.4982 3.91625 15.791 4.20901C16.0837 4.50177 16.2488 4.89848 16.25 5.3125V9.375H15Z"
        stroke="#6366F1"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M1.875 16.25V11.875C1.87696 11.2126 2.14098 10.5778 2.6094 10.1094C3.07781 9.64098 3.71256 9.37696 4.375 9.375H15.625C16.2874 9.37696 16.9222 9.64098 17.3906 10.1094C17.859 10.5778 18.123 11.2126 18.125 11.875V16.25"
        stroke="#6366F1"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M1.875 16.25V15.9375C1.87572 15.6891 1.97473 15.451 2.15038 15.2754C2.32604 15.0997 2.56408 15.0007 2.8125 15H17.1875C17.4359 15.0007 17.674 15.0997 17.8496 15.2754C18.0253 15.451 18.1243 15.6891 18.125 15.9375V16.25"
        stroke="#6366F1"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
            </div>



                <!-- Bath -->
            <div>2 
                <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block align-top flex-grow-0 flex-shrink-0 w-5 h-5 relative"
      preserveAspectRatio="xMidYMid meet">
      <path
        d="M3.83333 10H17.1667C17.3877 10 17.5996 10.0878 17.7559 10.2441C17.9122 10.4004 18 10.6123 18 10.8333V13.3333C18 14.2174 17.6488 15.0652 17.0237 15.6904C16.3986 16.3155 15.5507 16.6667 14.6667 16.6667H6.33333C5.44928 16.6667 4.60143 16.3155 3.97631 15.6904C3.35119 15.0652 3 14.2174 3 13.3333V10.8333C3 10.6123 3.0878 10.4004 3.24408 10.2441C3.40036 10.0878 3.61232 10 3.83333 10V10Z"
        stroke="#6366F1"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M5.5 10V4.16667C5.5 3.72464 5.67559 3.30072 5.98816 2.98816C6.30072 2.67559 6.72464 2.5 7.16667 2.5H9.66667V4.375"
        stroke="#6366F1"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M3.83337 17.5L4.66671 16.25"
        stroke="#6366F1"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M17.1667 17.5L16.3334 16.25"
        stroke="#6366F1"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
            </div>


            <!-- Size -->
            <div> 20m² 
                <svg
  class="inline-block align-top"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
    >
  <path
    d="M6.83161 14.5437L1.45643 9.16848C0.84802 8.56008 0.84802 7.43986 1.45643 6.83145L6.83161 1.45628C7.44001 0.847868 8.56023 0.847868 9.16864 1.45628L14.5438 6.83145C15.1522 7.43986 15.1522 8.56008 14.5438 9.16848L9.16864 14.5437C8.56023 15.1521 7.44001 15.1521 6.83161 14.5437V14.5437Z"
    stroke="#6366F1"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
    </svg>
            </div>
          </div>
          <div
            class="
              absolute
              top-7
              right-4
              grid
              h-12
              w-12
              place-items-center
              rounded-full
              border-2 border-indigo-100
            "
          >

          <!-- Heart -->
          <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M4.31804 5.31804C3.90017 5.7359 3.5687 6.23198 3.34255 6.77795C3.1164 7.32392 3 7.90909 3 8.50004C3 9.09099 3.1164 9.67616 3.34255 10.2221C3.5687 10.7681 3.90017 11.2642 4.31804 11.682L12 19.364L19.682 11.682C20.526 10.8381 21.0001 9.69352 21.0001 8.50004C21.0001 7.30656 20.526 6.16196 19.682 5.31804C18.8381 4.47412 17.6935 4.00001 16.5 4.00001C15.3066 4.00001 14.162 4.47412 13.318 5.31804L12 6.63604L10.682 5.31804C10.2642 4.90017 9.7681 4.5687 9.22213 4.34255C8.67616 4.1164 8.09099 4 7.50004 4C6.90909 4 6.32392 4.1164 5.77795 4.34255C5.23198 4.5687 4.7359 4.90017 4.31804 5.31804V5.31804Z"
            stroke="#6366F1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
          </div>
        </figcaption>
      </figure>
</template>