const wrapper = Document.querySelector('.wrapper');
const wrapperLogin = Document.querySelector('.wrapper .login');
const wrapperRegister = Document.querySelector('.wrapper .register');
const registerLink = Document.querySelector('register-link');
const loginLink = Document.querySelector('login-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});