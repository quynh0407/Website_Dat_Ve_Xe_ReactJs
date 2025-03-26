import Swiper from 'swiper';
import 'swiper/css';

interface Window {
  openCancelModal: () => void;
  closeCancelModal: () => void;
  toggleTextarea: (show: boolean) => void;
}

document.addEventListener('DOMContentLoaded', function () {
  // ============== Xử lý comment slider ==============
  const commentContainer = document.getElementById('comment-container');
  const comments: string[] = [
    '“Tuyến Sài Gòn - Đà Lạt dịch vụ tốt, tài xế vui vẻ, xe sạch sẽ! ⭐⭐⭐⭐⭐”',
    '“Xe chạy êm, đặt vé nhanh chóng. Rất hài lòng! 👍”',
    '“Tài xế thân thiện, dịch vụ chuyên nghiệp. ⭐⭐⭐⭐”',
    '“Giá cả hợp lý, đặt vé tiện lợi. Chắc chắn sẽ quay lại! ❤️”',
    '“Chuyến đi thoải mái, không bị say xe. Rất tuyệt vời! 🌟”',
  ];

  if (commentContainer) {
    let currentIndex = 0;
    const updateComment = (): void => {
      commentContainer.textContent = comments[currentIndex];
    };

    const nextComment = (): void => {
      currentIndex = (currentIndex + 1) % comments.length;
      updateComment();
    };

    setInterval(nextComment, 3000);
    updateComment(); // Hiển thị comment đầu tiên ngay lập tức
  }

  // ============== Khởi tạo Swiper ==============
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });



  // ============== Hiệu ứng menu ==============
  const menu = document.getElementById('menu');
  const main = document.querySelector("main"); 
  if (menu) {
    const isHomePage = main && main.id === "home";  
    if (isHomePage) {
 
      const handleScroll = (): void => {
        if (window.scrollY > 50) {
          menu.classList.remove('bg-transparent');
          menu.classList.add('bg-[#043175]');
        } else {
          menu.classList.remove('bg-[#043175]');
          menu.classList.add('bg-transparent');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); 
    } else {
      menu.classList.remove('bg-transparent');
      menu.classList.add('bg-[#043175]');
    }
  }
  
  // ============== Hiệu ứng di chuyển xe ==============
  const bus = document.getElementById('bus');
  if (bus) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bus.classList.add('bus-move');
          } else {
            bus.classList.remove('bus-move'); 
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    observer.observe(bus);
  }

  // ============== Modal hủy vé ==============

  (window as any).openCancelModal = function() {
   document.getElementById("cancelModal")?.classList.remove("hidden");
 };
 
 (window as any).closeCancelModal = function() {
   document.getElementById("cancelModal")?.classList.add("hidden");
 };
 
 (window as any).toggleTextarea = function(show: boolean) {
   const otherTextarea = document.getElementById("otherReason");
   if (otherTextarea) {
     show ? otherTextarea.classList.remove("hidden") : otherTextarea.classList.add("hidden");
   }
 };
});


document.addEventListener("DOMContentLoaded", () => {
   const main = document.querySelector("main") as HTMLElement | null;
   const homeHeader = document.getElementById("homeHeader") as HTMLElement | null;
   const homeComment = document.getElementById("homeComment") as HTMLElement | null;

   // Danh sách id hợp lệ
   const allowedPages: string[] = ["home", "booktickets", "busDetail"];

   if (main && allowedPages.includes(main.id)) {
       // Nếu main có id hợp lệ, hiển thị phần header và comment
       homeHeader?.classList.remove("hidden");
       homeComment?.classList.remove("hidden");
   } else {
       // Nếu không, ẩn đi
       homeHeader?.classList.add("hidden");
       homeComment?.classList.add("hidden");
   }
});