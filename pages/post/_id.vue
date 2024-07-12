<template>
    <div class="container">
        <SideMenu></SideMenu>
        <div class="main-content">
            <h1 class="main-title">コメント</h1>
            <div class="post-content">
                <div class="post-unit">
                    <span class="post-author">post-author</span>
                    <img class="post-icon" src="@/assets/images/heart.png" alt="heart-icon">
                    <span class="">1</span>
                    <img @click="deletePost()" class="post-icon" src="@/assets/images/cross.png" alt="cross-icon">
                </div>
                <p class="">{{ content }}</p>
            </div>
            <div class="sub-title">コメント</div>
            <div class="post-content" v-for="item in commentLists" :key="item.id">
                <div class="post-author">comment-author</div>
                <p class="">{{ item.content }}</p>
            </div>
            <div>
                <input class="form-input" type="text">
            </div>
            <div class="form-button-area">
                <button class="form-button">コメント</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: null,
            commentLists: [],

        };
    },
    methods: {
        async getContent() {
            const showData = await this.$axios.get(`http://127.0.0.1:80/api/post/${this.$route.params.id}`);
            this.content = showData.data.data[0].content;
        },
        async deletePost() {
            await this.$axios.delete(`http://127.0.0.1:80/api/post/${this.$route.params.id}`);
            this.$router.push('/');
        }, async getComment() {
            const resData = await this.$axios.get(`http://127.0.0.1:80/api/comment/${this.$route.params.id}`);
            this.commentLists = resData.data.data;
        },
    },
    created() {
        this.getContent();
        this.getComment();

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

.sub-title {
    padding: 10px 0;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    text-align: center;
    color: #fff;
}

.form-input {
    width: 95%;
    margin: 15px;
    padding: 10px;
    border-color: #fff;
    border-radius: 10px;
    color: #fff;
    background-color: #15202B;
}

.form-button-area {
    text-align: right;
}

.form-button {
    padding: 7px 12px;
    border-radius: 30px;
    color: #fff;
    background-color: #5419DA;
}
</style>