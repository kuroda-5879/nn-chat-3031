'use strict';
// 一番下を表示
window.addEventListener('load', () => {
  window.scrollTo(0, document.body.scrollHeight);
});

// エンターキー と Ctrlキー(Macの場合はCommandキー)を押していたら送信
const formElement = document.forms['message-form'];
const textareaElement = formElement.elements['content'];
textareaElement.addEventListener('keydown', (event) => {
  // 送信キーを押したら
  if (isPressedSubmitKey(event)) {
    // キーボード入力をキャンセルして送信
    event.preventDefault();
    formElement.submit();
  }
});

// 送信キーを押しているか判定
function isPressedSubmitKey(event) {
  if (event.key !== 'Enter') {
    return false;
  }
  if (event.ctrlKey) {
    return true;
  }
  // MacのCommandキーはmetaKeyという名前
  if (event.metaKey) {
    return true;
  }
}

// ツールチップの有効化
const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerElements.forEach((tooltipTriggerElement) => {
  new bootstrap.Tooltip(tooltipTriggerElement);
});
// 文字数カウント表示
document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('textarea[name="content"]');
  const counter = document.createElement('div');
  counter.style.textAlign = 'right';
  counter.style.fontSize = '12px';
  counter.style.color = '#888';
  counter.textContent = '0文字';
  input.insertAdjacentElement('afterend', counter);
  
  input.addEventListener('input', function() {
    counter.textContent = input.value.length + '文字';
  });
});