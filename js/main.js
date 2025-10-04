$(function () { 
  $('.header__slider').slick({
    dots: true,        // Показывать точки для навигации
    arrows: false,      // Скрыть стрелки
    fade: true,          // переход плавный слайдера
    autoplay: true      // Автоматический проигрывание слайдов
  });
})


// это для того чтобы нельзя было вводить ничего кроме символов в скрипте!!!!
/* document.querySelector(".info__tel").addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9()+]/g, "");
}); */


// акордион services

document.addEventListener('DOMContentLoaded', function() {
  const accordion = document.querySelector('.services__accordion');
  const toggleBtn = document.querySelector('.services__toggle');
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      accordion.classList.toggle('active');
      
      // Меняем текст кнопки
      const toggleText = this.querySelector('.services__toggle-text');
      if (accordion.classList.contains('active')) {
        toggleText.textContent = 'Згорнути';
      } else {
        toggleText.textContent = 'Детальніше';
      }
    });
  }
});


// аккордион burger-menu
// для одного открывающего акардеона

/* document.addEventListener('DOMContentLoaded', function() {
  const accordion2 = document.querySelector('.burger-menu__accordion');
  const toggleBtn2 = document.querySelector('.burger-menu__toggle');
  
  if (toggleBtn2) {
    toggleBtn2.addEventListener('click', function() {
      accordion2.classList.toggle('active');
      
      // Меняем текст кнопки
      const toggleText2 = this.querySelector('.burger-menu__toggle-text');
      if (accordion2.classList.contains('active')) {
        toggleText2.textContent = 'На одежде';
      } else {
        toggleText2.textContent = 'На одежде';
      }
    });
  }
}); */


// для нескольких акардионов

document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.burger-menu__accordion');
  
  accordions.forEach(accordion => {
    const toggleBtn = accordion.querySelector('.burger-menu__toggle');
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        // Просто переключаем класс, текст остается неизменным
        accordion.classList.toggle('active');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.info__form');
  const phone = form.querySelector('.info__tel');
  const errorMessage = form.querySelector('.info__error-message');
  const regex = /^[0-9()+]+$/;





  // Элементы модального окна
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalMessage = document.querySelector('.modal-message');
  const modalClose = document.querySelector('.modal-message__close');

  // Функция открытия модального окна
  function openModal() {
    modalOverlay.style.display = 'block';
    modalMessage.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  // Функция закрытия модального окна
  function closeModal() {
    modalOverlay.style.display = 'none';
    modalMessage.style.display = 'none';
    document.body.style.overflow = '';
  }









  form.addEventListener('submit', e => {
    let hasError = false;

    // Проверяем все обязательные поля
    form.querySelectorAll('[required]').forEach(input => {
      input.classList.toggle('error', !input.value.trim());
      if (!input.value.trim()) hasError = true;
    });

    // Проверяем телефон
    errorMessage.style.display = "none";
    if (!regex.test(phone.value)) {
      hasError = true;
      // ИЗМЕНЕНИЕ: переведено сообщение об ошибке
      errorMessage.textContent = "Введіть коректний номер!";
      errorMessage.style.display = "block";
      phone.classList.add('error');
    }

    if (hasError) {
      e.preventDefault();
      form.querySelector('.error')?.focus();
    }

    



    else {
      // ИЗМЕНЕНИЕ: Если ошибок нет, открываем модальное окно
      e.preventDefault();
      openModal();
      
      // Очищаем форму после успешной отправки
      form.reset();
    }
  });

  // Закрытие модального окна по крестику
  modalClose.addEventListener('click', closeModal);

  // Закрытие модального окна по клику на оверлей
  modalOverlay.addEventListener('click', closeModal);

  // Закрытие модального окна по клавише Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlay.style.display === 'block') {
      closeModal();
    }




  });
});



// бургер меню

document.addEventListener('DOMContentLoaded', function() {
  // Находим элементы
  const menuButton = document.querySelector('.header__mobile-menu');
  const burgerMenu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.burger-menu__close');
  
  // Создаем затемнение
  const overlay = document.createElement('div');
  overlay.className = 'burger-overlay';
  document.body.appendChild(overlay);
  
  // Функция открытия меню
  function openMenu() {
    burgerMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // Функция закрытия меню
  function closeMenu() {
    burgerMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Открываем меню по клику на иконку
  menuButton.addEventListener('click', openMenu);

  // НОВОЕ: Закрываем меню по клику на крестик
  closeButton.addEventListener('click', closeMenu);
  
  // Закрываем меню по клику на затемнение
  overlay.addEventListener('click', closeMenu);
  
  // Закрываем меню по клавише Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });


  const anchorLinks = document.querySelectorAll('.burger-menu a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Закрываем меню при клике на любую якорную ссылку
      closeMenu();
    });
  });


});