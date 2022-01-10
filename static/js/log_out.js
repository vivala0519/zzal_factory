function log_out() {
    document.cookie = 'mytoken' +
    '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    alert('로그아웃 완료!')
    window.location.href = '/'
}