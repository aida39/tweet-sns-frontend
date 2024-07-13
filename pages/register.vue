<template>
    <div class="container">
        <AuthHeader></AuthHeader>
        <div class="auth-form">
            <form @submit.prevent="register">
                <h1 class="auth-title">新規登録</h1>
                <input class="auth-input" type="text" v-model="name" placeholder="ユーザーネーム">
                <input class="auth-input" type="email" v-model="email" placeholder="メールアドレス">
                <input class="auth-input" type="password" v-model="password" placeholder="パスワード">
                <button class="auth-button" type="submit">新規登録</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    auth: false,
    data() {
        return {
            name: null,
            email: null,
            password: null,
        };
    },
    methods: {
        async register() {
            try {
                await this.$axios.post("http://localhost/api/auth/register", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
                this.$router.push("/login");
            } catch {
                alert("メールアドレスがすでに登録されています");
            }
        },
    },
};
</script>