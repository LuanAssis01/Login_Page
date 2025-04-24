function showPassword() {
    const senhaInput = document.getElementById('senha');
    senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
}