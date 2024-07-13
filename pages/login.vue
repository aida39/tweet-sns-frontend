<template>
    <div class="container">
        <AuthHeader></AuthHeader>
        <div class="auth-form">
            <form @submit.prevent="login">
                <h1 class="auth-title">ログイン</h1>
                <input class="auth-input" type="email" v-model="email" placeholder="メールアドレス">
                <input class="auth-input" type="password" v-model="password" placeholder="パスワード">
                <button type="submit" class="auth-button">ログイン</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
        };
    },
    methods: {
        async login() {
            try {
                await this.$auth.loginWith("laravelJWT", {
                    data: {
                        email: this.email,
                        password: this.password,
                    },
                });
                this.$router.push("/");
            } catch {
                alert("メールアドレスまたはパスワードが間違っております");
            }
        },
    },
};
</script>