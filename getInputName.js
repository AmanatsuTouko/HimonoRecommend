//自由入力したお酒銘柄を保存する
var alcoholName = "";

const getInputText = () => {
    const textbox = document.getElementById("input-name")
    alcoholName = textbox.value
    /*
    //テキストボックスの値を使って、出力するメッセージを生成する
    const output = "入力された内容は「" + alcoholName + "」です。";
    //出力用のp要素にメッセージを表示
    document.getElementById("output-message").innerHTML = output;
    */
    //console.log(output);
}

const displayInputText = () => {
    //テキストボックスの値を使って、出力するメッセージを生成する
    const output = "入力された内容は「" + alcoholName + "」です。";
    //出力用のp要素にメッセージを表示
    document.getElementById("output-message").innerHTML = output;
}