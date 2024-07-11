<template>
  <div id="app" class="container">
    <SideMenu @post-action="getPost" :newContent.sync="newContent" />
    <div class="main-content">
      <h1 class="main-title">ホーム</h1>
      <div class="post-content" v-for="item in postLists" :key="item.id">
        <div class="post-unit">
          <span class="post-author">test</span>
          <img class="post-icon" src="../assets/images/heart.png" alt="heart-icon">
          <span class="">1</span>
          <img @click="deletePost(item.id)" class="post-icon" src="../assets/images/cross.png" alt="cross-icon">
          <img @click="goDetail" class="post-icon" src="../assets/images/detail.png" alt="detail-icon">
        </div>
        <p class="">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContent: "",
      postLists: [],
    };
  },
  methods: {
    async getPost() {
      const resData = await this.$axios.get("http://127.0.0.1:80/api/post/");
      this.postLists = resData.data.data;
    },
    async deletePost(id) {
      await this.$axios.delete("http://127.0.0.1:80/api/post/" + id);
      this.getPost();
    },
    goDetail() {
      this.$router.push('/detail');
    },
  },
  created() {
    this.getPost();
  },
}
</script>

<style scoped>
.container {
  display: flex;
}

.main-content {
  width: 70%;
}

.main-title {
  padding: 10px 20px;
  border: 1px solid #fff;
  font-size: 20px;
  color: #fff;
}

.post-content {
  padding: 20px;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  color: #fff;
}

.post-unit {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.post-icon {
  width: 25px;
  margin: 0 15px;
  cursor: pointer;
}

.post-author {
  font-size: 17px;
  font-weight: bold;
}
</style>