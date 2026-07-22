/* 暫定のフォーム送信。
   送信ボタンで、入力内容を本文にしたメール作成画面を開く。
   フォーム送信サービス（Formspree等）を導入したら
   このファイルごと差し替える。 */

/* 会社の受信用アドレスが決まったらここを書き換える */
const CONTACT_EMAIL = "info@example.jp";

function initContactForm() {

    const form = document.querySelector(".contact-form");

    if (!form) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const value = (name) =>
            (form.elements[name]?.value || "").trim();

        const body = [
            "お名前: " + value("name"),
            "会社名: " + (value("company") || "（未記入）"),
            "メールアドレス: " + value("email"),
            "電話番号: " + (value("tel") || "（未記入）"),
            "",
            "ご相談内容:",
            value("message"),
        ].join("\n");

        const url =
            "mailto:" + CONTACT_EMAIL +
            "?subject=" + encodeURIComponent("【HP】お問い合わせ") +
            "&body=" + encodeURIComponent(body);

        window.location.href = url;

    });

}
