<template>
    <div class="sidemenu-container">
        <img class="service-logo" src="../assets/images/logo.png" alt="logo" />
        <div class="menu-item">
            <img class="menu-logo" src="../assets/images/home.png" alt="logo">
            <NuxtLink to="/" class="menu-link">ホーム</NuxtLink>
        </div>
        <div class="menu-item">
            <img class="menu-logo" src="../assets/images/logout.png" alt="logo">
            <a @click="logout" class="menu-link">ログアウト</a>
        </div>
        <div class="form">
            <label for="content" class="form-label">シェア</label>
            <textarea name="content" id="content" v-model="newContent" cols="30" rows="5"
                class="form-textarea"></textarea>
            <div class="form-button-area">
                <button @click="insertPost" class="form-button">シェアする</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        newContent: {
            type: String,
            default: "",
        },
    },
    methods: {
        async insertPost() {
            const sendData = {
                content: this.newContent,
            };
            await this.$axios.post("http://127.0.0.1:80/api/post/", sendData);
            this.$emit('post-action');
        },
        async logout() {
            await this.$auth.logout();
            this.$router.push("/login");
        },
    },
}
</script>

<style scoped>
.sidemenu-container {
    width: 30%;
}

.service-logo {
    width: 120px;
    margin: 15px 0 0 15px;
}

.menu-item {
    margin-top: 20px;
}

.menu-logo {
    width: 25px;
    margin: 0 15px;
}

.menu-link {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.form {
    margin: 25px 15px;
}

.form-label {
    display: block;
    color: #fff;
}

.form-textarea {
    width: 90%;
    margin: 15px 0;
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