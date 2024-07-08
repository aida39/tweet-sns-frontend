<template>
    <div class="sidemenu-container">
        <img class="service-logo" src="../assets/images/logo.png" alt="logo" />
        <div class="menu-item">
            <img class="menu-logo" src="../assets/images/home.png" alt="logo">
            <a href="" class="menu-link">ホーム</a>
        </div>
        <div class="menu-item">
            <img class="menu-logo" src="../assets/images/logout.png" alt="logo">
            <a href="" class="menu-link">ログアウト</a>
        </div>
        <form action="" class="form">
            <label for="content" class="form-label">シェア</label>
            <textarea name="content" id="content" cols="30" rows="5" class="form-textarea"></textarea>
            <div class="form-button-area">
                <button class="form-button">シェアする</button>
            </div>
        </form>
    </div>
</template>


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