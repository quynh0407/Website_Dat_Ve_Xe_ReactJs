import Swiper from "swiper";
import "swiper/css";

 

// ================== HIỆU ỨNG SWIPER SLIDER ==================
export function initSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });
}

// ================== HIỆU ỨNG MENU ==================
export function initMenu() {
  const menu = document.getElementById("menu");
  const main = document.querySelector("main");

  if (!menu || !main) return () => {};

  let scrollHandler = null;

  function updateMenuStyle() {
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
    }

    if (main.id === "home" || main.id === "busDetail") {
      scrollHandler = () => {
        if (window.scrollY > 50) {
          menu.classList.add("bg-[#043175]");
          menu.classList.remove("bg-transparent");
        } else {
          menu.classList.remove("bg-[#043175]");
          menu.classList.add("bg-transparent");
        }
      };
      
      window.addEventListener("scroll", scrollHandler);
      scrollHandler();
    } else {
      menu.classList.add("bg-[#043175]");
      menu.classList.remove("bg-transparent");
    }
  }

  const observer = new MutationObserver(updateMenuStyle);
  observer.observe(main, { attributes: true, attributeFilter: ["id"] });
  updateMenuStyle();

  return () => {
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
    }
    observer.disconnect();
  };
}
// ================== HIỆU ỨNG XE DI CHUYỂN ==================
document.addEventListener('DOMContentLoaded', function () {
  const busElement = document.getElementById("bus");
  if (!busElement) return;

  function checkBusVisibility() {
    const rect = busElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    // Nếu xe bus xuất hiện trong viewport, thêm class bus-move
    if (isVisible) {
      busElement.classList.add("bus-move");
    } else {
      busElement.classList.remove("bus-move");
    }
  }

  checkBusVisibility(); // Kiểm tra ngay khi trang tải
  window.addEventListener("scroll", checkBusVisibility); // Kiểm tra khi cuộn trang
});

 // ============== Modal hủy vé ==============
export function openCancelModal() {
  document.getElementById("cancelModal")?.classList.remove("hidden");
}

export function closeCancelModal() {
  document.getElementById("cancelModal")?.classList.add("hidden");
}

export function toggleTextarea(show) {
  const otherTextarea = document.getElementById("otherReason");
  if (otherTextarea) {
    show ? otherTextarea.classList.remove("hidden") : otherTextarea.classList.add("hidden");
  }
}

 // ============== AN HIEN HEAER ==============

 export function initPageVisibility() {
  const main = document.querySelector("main");
  const homeHeader = document.getElementById("homeHeader");
  const homeComment = document.getElementById("homeComment");

  if (!main) return; 

  const allowedPages = ["home", "booktickets", "busDetail"];

  function updateVisibility() {
    if (allowedPages.includes(main.id)) {
      homeHeader?.classList.remove("hidden");
      homeComment?.classList.remove("hidden");
    } else {
      homeHeader?.classList.add("hidden");
      homeComment?.classList.add("hidden");
    }
  }

 
  const observer = new MutationObserver(() => updateVisibility());
  observer.observe(main, { attributes: true, attributeFilter: ["id"] });

   updateVisibility();
}

//=============== MENU MOBILE ==================
document.addEventListener('DOMContentLoaded', function () {
  console.clear();

  const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
  const backLink = `<li class="nav-item">
      <a class="nav-link nav-back-link" href="javascript:;">
      Trở về
      </a>
  </li>`;

  navExpand.forEach(item => {
      const content = item.querySelector('.nav-expand-content');
      const link = item.querySelector('.nav-link');
      if (content && link) {
          content.insertAdjacentHTML('afterbegin', backLink);
          link.addEventListener('click', () => {
              item.classList.add('active');
          });
      }

      const back = item.querySelector('.nav-back-link');
      if (back) {
          back.addEventListener('click', () => {
              item.classList.remove('active');
          });
      }
  });

  const hamMain = document.getElementById('ham-main');
  const hamUser = document.getElementById('ham-user');

  if (hamMain) {
      hamMain.addEventListener('click', function (event) {
          event.stopPropagation();
          document.body.classList.toggle('nav-is-toggled');
      });
  }

  if (hamUser) {
      hamUser.addEventListener('click', function (event) {
          event.stopPropagation();
          console.log("User menu clicked");
      });
  }

  document.addEventListener('click', function (event) {
      const navDrill = document.querySelector('.nav-drill');

      if (
          navDrill &&
          !navDrill.contains(event.target) &&
          (!hamMain || !hamMain.contains(event.target)) &&
          (!hamUser || !hamUser.contains(event.target))
      ) {
          document.body.classList.remove('nav-is-toggled');
      }
  });
});
