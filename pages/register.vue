<template>
    <div class="container">
        <AuthHeader></AuthHeader>
        <div class="auth-form">
            <form @submit.prevent="register">
                <validation-observer ref="obs" v-slot="ObserverProps">
                    <h1 class="auth-title">新規登録</h1>

                    <validation-provider v-slot="ProviderProps" rules="required|max:20">
                        <input class="auth-input" type="text" v-model="name" placeholder="ユーザーネーム">
                        <div class="error">{{ ProviderProps.errors[0] }}</div>
                    </validation-provider>

                    <validation-provider v-slot="ProviderProps" rules="required|email">
                        <input class="auth-input" type="email" v-model="email" placeholder="メールアドレス">
                        <div class="error">{{ ProviderProps.errors[0] }}</div>
                    </validation-provider>

                    <validation-provider v-slot="ProviderProps" rules="required|min:6">
                        <input class="auth-input" type="password" v-model="password" placeholder="パスワード">
                        <div class="error">{{ ProviderProps.errors[0] }}</div>
                    </validation-provider>

                    <button class="auth-button" type="submit"
                        :disabled="ObserverProps.invalid || !ObserverProps.validated">新規登録</button>
                </validation-observer>
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