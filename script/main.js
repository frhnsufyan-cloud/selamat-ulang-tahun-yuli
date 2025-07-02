// trigger to play music in the background with sweetalert
window.addEventListener("load", () => {
  Swal.fire({
    title: "Sayang pengen ada musiknya ga ? Harus mau!!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "HARUS IYA &#128545;",
    cancelButtonText: "GAK MAU NOLAK &#128527;",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

// Global variables for slideshow control
let slideshowInterval = null;
let currentPhotoIndex = 0;
const photos = [];

// Generate photo array with correct extensions
for (let i = 2; i <= 13; i++) {
  const extension = i === 3 ? "jpg" : "jpeg";
  photos.push(`./img/${i}.${extension}`);
}

// Photo slideshow functionality
const initPhotoSlideshow = () => {
  const profilePicture = document.getElementById("imagePath");

  const changePhoto = () => {
    // Add fade out effect
    profilePicture.style.transition = "opacity 0.5s ease-in-out";
    profilePicture.style.opacity = "0";

    setTimeout(() => {
      // Change to next photo
      currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
      profilePicture.src = photos[currentPhotoIndex];

      // Fade in new photo
      profilePicture.style.opacity = "1";
    }, 500); // Wait for fade out to complete
  };

  // Start slideshow when the photo section becomes visible
  const startSlideshow = () => {
    // Clear any existing slideshow
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
    }

    // Reset to first photo
    currentPhotoIndex = 0;
    profilePicture.src = photos[currentPhotoIndex];
    profilePicture.style.opacity = "1";
    profilePicture.style.transition = "";

    // Change photo every 2 seconds
    slideshowInterval = setInterval(changePhoto, 2000);
  };

  return startSlideshow;
};

// Function to stop slideshow
const stopSlideshow = () => {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
};

// Function to reset profile picture to initial state
const resetProfilePicture = () => {
  const profilePicture = document.getElementById("imagePath");
  profilePicture.src = "./img/2.jpeg"; // Reset to initial image
  profilePicture.style.opacity = "0"; // Start invisible
  profilePicture.style.transition = "none"; // Remove transitions
  profilePicture.style.transform = "none"; // Reset transform
  profilePicture.style.scale = "1"; // Reset scale
  profilePicture.style.width = ""; // Reset width
  profilePicture.style.height = ""; // Reset height
};

// animation timeline
const animationTimeline = () => {
  // Stop any existing slideshow
  stopSlideshow();

  // Reset profile picture to initial state
  resetProfilePicture();

  // split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  // Initialize photo slideshow
  const startPhotoSlideshow = initPhotoSlideshow();

  // timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      1.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(
      ".fake-btn",
      0.1,
      {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4"
    )
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: 50,
      y: 50,
      rotation: -180,
      opacity: 0,
    })
    .call(() => {
      // Start photo slideshow when profile picture appears
      startPhotoSlideshow();
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  const greetingText = document.getElementById("greetingText");
  const countdownElement = document.getElementById("countdownTimer");

  const targetDate = new Date("2025-07-05T00:00:00");

  const countdownInterval = setInterval(() => {
    const now = new Date();
    const timeLeft = targetDate - now;

    const currentDate = now.getDate();
    const currentMonth = now.getMonth(); // bulan dimulai dari 0 (Januari)

    // Jika sudah tanggal 5 Juli tapi belum pukul 00:00
    if (currentDate === 5 && currentMonth === 6 && timeLeft > 0) {
      greetingText.textContent = "Hari ini ulang tahunmu!";
      countdownElement.textContent = `Tunggu yaa, tinggal beberapa saat lagi... ⏳`;
      return;
    }

    // Jika sudah melewati target waktu
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      greetingText.textContent = "Selamat ulang tahun sayangku Yulianti 🎉";
      countdownElement.style.display = "none";
      return;
    }

    // Hitung mundur normal sebelum 5 Juli
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    countdownElement.textContent = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }, 1000);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    // Stop slideshow and reset profile picture before restarting
    stopSlideshow();
    resetProfilePicture();
    tl.restart();
  });
};