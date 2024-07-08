<template>
    <header class="header">
        <div class="header-logo">
            <img class="service-logo" src="../assets/images/logo.png" alt="logo" />
        </div>
        <div class="">
            <NuxtLink to="/register" class="header-link">新規登録</NuxtLink>
            <NuxtLink to="/login" class="header-link">ログイン</NuxtLink>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin: 20px;
}

.service-logo {
    width: 120px;
}

.header-link {
    margin-left: 15px;
    color: #fff;
    text-decoration: none;
}
</style>