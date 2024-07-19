import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import * as originalRules from 'vee-validate/dist/rules';

// 全てのルールをインポート
let rule;
for (rule in originalRules) {
    extend(rule, {
        ...originalRules[rule],
    });
}

const ja = {
    code: "ja",
    messages: {
        alpha: "アルファベットのみ使用できます",
        alpha_num: "英数字のみ使用できます",
        alpha_dash: "英数字とハイフン、アンダースコアのみ使用できます",
        alpha_spaces: "アルファベットと空白のみ使用できます",
        confirmed: "値が一致しません",
        email: "有効なメールアドレスではありません",
        max: "{length}文字以内にしてください",
        max_value: "{max}以下でなければなりません",
        min: "{length}文字以上でなければなりません",
        min_value: "{min}以上でなければなりません",
        required: "必須項目です",
    }
};

// 日本語に設定
localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);