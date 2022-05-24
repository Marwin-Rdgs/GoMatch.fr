<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div class="cards">
    <div class="ImgBx">
      <img :src="img" alt="Image de la personne" />
    </div>
    <div class="content">
      <div class="details">
        <h2>
          {{ name }} <br />
          <span>{{ poste }}</span>
        </h2>
        <ul class="social_icons">
          <li>
            <a target="_blank" :href="instagram"
              ><i class="fa fa-instagram" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a target="_blank" :href="linkedin"
              ><i class="fa fa-linkedin" aria-hidden="true"></i>{{}}</a
            >
          </li>
          <li v-if="!!github">
            <a target="_blank" :href="github"
              ><i class="fa fa-github" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Nom de la personne",
    },
    poste: {
      type: String,
      default: "Poste de la personne",
    },
    img: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
  },

  components: {},
};
</script>

<style scoped>
.cards {
  position: relative;
  width: 300px;
  height: 400px;
  background: linear-gradient(#000000, #000000 30%, #088E8E 30%, #088E8E);
  margin: 10px;
  border-radius: 20px;
  overflow: hidden;
}

.cards .ImgBx {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  transition: 0.5s;
  z-index: 10000;
  border-radius: 20px;
  overflow: hidden;
  transform-origin: top;
}

.cards:hover .ImgBx {
  transform: translateY(30px) scale(0.5);
}

.cards .ImgBx img {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cards .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
  transform: translateY(100%);
  transition: 0.5s;
}

.cards:hover .content {
  transform: translateY(0);
}

.cards .content .details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.cards .content .details h2 {
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
}

.cards .content .details h2 span {
  font-size: 1;
  font-weight: 400;
  color: #fff;
}

.social_icons {
  position: relative;
  display: flex;
  margin-top: 5px;
}

.social_icons li {
  list-style: none;
  margin: 4px;
}

.social_icons li a {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #294d69;
  border-radius: 50%;
  font-size: 1.5em;
  color: #ffff;
  text-decoration: none;
}

.social_icons li a:hover {
  transform: translateY(-5px) scale(110%);
  background: #03a9f4;
}
</style>