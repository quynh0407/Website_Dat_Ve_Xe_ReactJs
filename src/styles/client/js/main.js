import Swiper from "swiper";
import "swiper/css";

// ================== HIỆU ỨNG COMMENT SLIDER ==================
export function initCommentSlider() {
  const commentContainer = document.getElementById("comment-container");
  const comments = [
    "“Tuyến Sài Gòn - Đà Lạt dịch vụ tốt, tài xế vui vẻ, xe sạch sẽ! ⭐⭐⭐⭐⭐”",
    "“Xe chạy êm, đặt vé nhanh chóng. Rất hài lòng! 👍”",
    "“Tài xế thân thiện, dịch vụ chuyên nghiệp. ⭐⭐⭐⭐”",
    "“Giá cả hợp lý, đặt vé tiện lợi. Chắc chắn sẽ quay lại! ❤️”",
    "“Chuyến đi thoải mái, không bị say xe. Rất tuyệt vời! 🌟”",
  ];

  if (commentContainer) {
    let currentIndex = 0;
    function updateComment() {
      commentContainer.textContent = comments[currentIndex];
    }
    function nextComment() {
      currentIndex = (currentIndex + 1) % comments.length;
      updateComment();
    }
    setInterval(nextComment, 3000);
    updateComment();
  }
}

// ================== HIỆU ỨNG SWIPER SLIDER ==================
export function initSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      320: { slidesPerView: 1 },
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

  if (!menu || !main) return;

  function updateMenuStyle() {
    if (main.id === "home" || main.id === "busDetail") {
      function handleScroll() {
        if (window.scrollY > 50) {
          menu.classList.add("bg-[#043175]");
          menu.classList.remove("bg-transparent");
        } else {
          menu.classList.remove("bg-[#043175]");
          menu.classList.add("bg-transparent");
        }
      }
      window.addEventListener("scroll", handleScroll);
      handleScroll(); 
    } else {
      menu.classList.add("bg-[#043175]");
      menu.classList.remove("bg-transparent");
    }
  }

  const observer = new MutationObserver(() => updateMenuStyle());
  observer.observe(main, { attributes: true, attributeFilter: ["id"] });

  updateMenuStyle();
}

// ================== HIỆU ỨNG XE DI CHUYỂN ==================
export function initBusAnimation() {
  const busElement = document.getElementById("bus");
  if (!busElement) return;

  function checkBusVisibility() {
    const rect = busElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    busElement.classList.toggle("bus-move", isVisible);
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            busElement.classList.add("bus-move");
          } else {
            busElement.classList.remove("bus-move");
          }
        });
      },
      { threshold: 0.5 }  
    );
    observer.observe(busElement);
  } else {
    window.addEventListener("scroll", checkBusVisibility);
    checkBusVisibility();
  }
}
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

  if (!main) return; // Nếu không tìm thấy <main>, thoát sớm

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

  // Lắng nghe khi `id` của <main> thay đổi
  const observer = new MutationObserver(() => updateVisibility());
  observer.observe(main, { attributes: true, attributeFilter: ["id"] });

  // Cập nhật ngay khi chạy lần đầu
  updateVisibility();
}
