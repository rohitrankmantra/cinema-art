export interface ProductSpec {
  category: string;
  items: { label: string; value: string }[];
}

export interface ProductFeature {
  title: string;
  description: string;
  image?: string;
}

export interface ProductColor {
  name: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  originalPrice?: string;
  slug: string;
  status: string;
  desc: string; // Short description for the shop card
  colors: ProductColor[];
  lenses?: string[]; // Optional lens configurations
  overview: string; // Detailed description for the product page
  keyFeatures: string[]; // Bullet points for quick scanning
  richFeatures: ProductFeature[]; // Detailed sections with title/desc
  specs: ProductSpec[]; // Specifications for accordion
}

export const products: Product[] = [
  {
    id: "fujifilm-x100vi",
    name: "FUJIFILM X100VI 40.2 MP MIRRORLESS CAMERA WITH FIXED 23MMF2 LENS",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹179,998",
    slug: "fujifilm-x100vi",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F19.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F20.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F21.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F22.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F23.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F24.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F25.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F26.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F27.webp",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F19.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F20.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F22.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F24.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F26.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F27.webp",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F21.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F23.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F25.webp",
        ],
      },
    ],
    overview:
      "X100VI offers advanced video performance in a compact, lightweight body. Create movies up to 6.2K internally at 30p in 4:2:2 10-bit color. 4K/60p and high-speed 1080/240p are also available, maximizing video flexibility.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "X-Processor 5 Image Processor",
      "Fujinon 23mm f/2 Lens (35mm Equivalent)",
      "6-Stop In-Body Image Stabilization",
      "6.2K/30p 4:2:2 10-bit internal recording",
      "425-Point Intelligent Hybrid AF",
      "Hybrid 0.66x OVF with 3.69m-Dot OLED EVF",
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description:
          "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder.",
      },
      {
        title: "S/N Level / Low-Light Power",
        description:
          "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand.",
      },
      {
        title: "Flat Two-way Tilting LCD",
        description:
          "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles.",
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description:
          "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI.",
      },
      {
        title: "Light Weight, High Performance",
        description:
          "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability.",
      },
      {
        title: "Colour chrome effect",
        description:
          "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image.",
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description:
          "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones.",
      },
      {
        title: "Updated AF algorithm",
        description:
          "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations.",
      },
      {
        title: "FILM SIMULATION",
        description:
          "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY.",
      },
      {
        title: "Grain effect",
        description:
          "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image.",
      },
      {
        title: "The One and Only",
        description:
          "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Other Terminals",
            value: "Microphone / shutter release input: ø2.5mm; Hot Shoe",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value:
              "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "Lens",
            value:
              "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Image stabilizer",
            value:
              "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD",
          },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-m5",
    name: "FUJIFILM X-M5",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹78,000",
    originalPrice: "₹83,999",
    slug: "fujifilm-x-m5",
    status: "In Stock",
    desc: "The lightest X Series model. 26.1MP X-Trans CMOS 4 sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f14.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f18.webp",
        ],
      },
      {
        name: "Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f15.webp",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f14.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f17.webp",
        ],
      },
    ],
    lenses: ["Body", "XC 15-45mm Lens"],
    overview:
      "FUJIFILM X-M5 mirrorless digital camera has everything you need to bring that vision to life. Compact, lightweight, and with powerful photo and video functions, it’s the perfect companion to record everyday life.",
    keyFeatures: [
      "26.1MP APS-C X-Trans CMOS 4 Sensor",
      "X-Processor 5 Image Processor",
      "6.2K/30p 4:2:2 10-bit internal recording",
      "AI Subject Detection Autofocus",
      "Lightest X Series camera at 355g",
      "Film Simulation Dial with 20 modes",
      "Three Built-In Microphones for advanced audio",
    ],
    richFeatures: [
      {
        title: "Microphone Direction Setting",
        description:
          "FUJIFILM X-M5 is the first X Series model to feature three built-in microphones for the highest-quality audio. Four different audio modes are available: Surround, Front Priority, Back Priority, or Front & Back Priority, giving the flexibility to get crystal-clear sound from any direction.",
      },
      {
        title: "Film Simulation mode Dial",
        description:
          "Instantly access your own creative looks thanks to FUJIFILM X-M5 digital cameras unique Film Simulation mode dial. Offering up to 20 looks, X-M5’s Film Simulation modes can be applied to photos and videos, giving you incredible flexibility for your output.",
      },
      {
        title: "See It Your Way",
        description:
          "Great images are all about the details. With the 20 available Film Simulation modes and a host of creative controls, FUJIFILM X-M5 empowers you to make content just the way you want it.",
      },
      {
        title: "An Eye for Detail",
        description:
          "Create content with depth, texture, and true-to-life color thanks to FUJIFILM X-M5’s X-Trans CMOS 4 sensor and X-Processor 5 imaging engine. Experience detail and quality that far exceeds the results from your Smartphone.",
      },
      {
        title: "Film Simulation",
        description:
          "The 20 Film Simulation modes offered by FUJIFILM X-M5, including REALA ACE mode, harness 90 years of Fujifilm color science.",
      },
      {
        title: "Color Your Moment",
        description:
          "Every day is different. The weather, the light, the way you feel – each offers a chance to view the world in a new way. FUJIFILM X-M5 mirrorless digital camera has everything you need to bring that vision to life. Compact, lightweight, and with powerful photo and video functions, it’s the perfect companion to record everyday life.",
      },
      {
        title: "Form and Function",
        description:
          "The compact size of FUJIFILM X-M5 hasn’t compromised its elegant styling. The symmetrically placed dials on the top plate enhance its beauty. It’s unmistakably an X Series camera in both looks and performance.",
      },
      {
        title: "Noise Reduction Setting",
        description:
          "The new microphones offer more than just directional control – a versatile noise reduction feature has also been added. Now, it’s possible to reduce noise that continues at a constant frequency; for example, the sound of air conditioning or wind noise.",
      },
      {
        title: "Digital Image Stabilization",
        description:
          "FUJIFILM X-M5 uses a powerful digital image stabilizer that combats camera shake for smooth, professional footage. It’s effective whether you’re standing still or moving to keep up with a subject.",
      },
      {
        title: "Easy-to-Use Interface",
        description:
          "The layout of the Vlog mode interface has been designed to make video recording intuitive and enjoyable, even if you are new to content creation.",
      },
      {
        title: "High-Quality Recording",
        description:
          "FUJIFILM X-M5 supports in-camera card recording to your SD card at 6.2K/30p 4:2:2 10-bit, as well as high-quality, 4K/60p and 1080/240p video recording in a compact and lightweight body.",
      },
      {
        title: "Latest AF Technology",
        description:
          "FUJIFILM X-M5 is equipped with Fujifilm’s latest predictive algorithm, recording subjects with highly accurate AF even in scenes requiring tracking of moving objects or in low-contrast environments. It tracks a wide range of subjects, including sports and animals, and subjects in motion.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X-Processor 5 features subject detection autofocus that is built with deep-learning AI technology. In addition to providing incredible AF tracking and detection for human faces and eyes, FUJIFILM X-M5 can also automatically detect and track a broad range of subjects, including animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.",
      },
      {
        title: "Ready For Everything",
        description:
          "At 355g (0.78lb), FUJIFILM X-M5 is currently the lightest model in the X Series line-up of digital cameras and so small it fits in a jacket pocket. This makes it perfect to carry everywhere you go, ready to create high-quality content on a moment’s notice.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
          {
            label: "Terminal",
            value:
              "USB Type-C (USB 10Gbps), HDMI Micro connector (Type D), Microphone / shutter release input: ø2.5mm",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
      {
        category: "Imaging",
        items: [
          { label: "Number of recorded pixels", value: "26.1 million pixels" },
          {
            label: "File format of still image",
            value: "JPEG, HEIF, RAW (14bit RAF), TIFF",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          {
            label: "Image stabilizer",
            value: "Digital Image Stabilization (Movie mode)",
          },
        ],
      },
      {
        category: "Shooting",
        items: [
          { label: "Lens", value: "FUJIFILM X mount" },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/32000 sec",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous, Bracketing, Advanced Filter, Panorama, Multiple Exposure",
          },
          {
            label: "Continuous shooting CH",
            value: "Approx. 20fps (Electronic Shutter), 8fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
        ],
      },
      {
        category: "Video & Interaction",
        items: [
          {
            label: "Movie Recording",
            value: "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K | FHD",
          },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-t5-mirrorless",
    name: "Fujifilm X-T5 Mirrorless",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹145,999",
    slug: "fujifilm-x-t5-mirrorless",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f13.png",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf12.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f13.png",
        ],
      },
    ],
    overview:
      "X-T5 features a five-axis in-body image stabilization (IBIS) system that provides up to 7.0 stops of compensation and a 3.69 million dot EVF with an 0.8x magnification ratio. Despite this, the camera body only weighs 557g (1.23lb). Dials and buttons provide easy operation, letting life’s most precious moments stand a chance of being documented to see another day.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR sensor for ultra-high-resolution images",
      "7-stop in-body image stabilization (IBIS) for sharper handheld shots",
      "6.2K/30P and 4K/60P video recording with professional-quality output",
      "Fast AI-powered autofocus with subject detection for people, animals, birds, cars, and more",
      "15 fps mechanical shutter and up to 20 fps electronic shutter for action photography",
      "Classic Fujifilm Film Simulation modes for stunning colors and creative looks",
      "Compact weather-resistant magnesium alloy body with dual SD card slots",
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description:
          "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder.",
      },
      {
        title: "S/N Level / Low-Light Power",
        description:
          "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand.",
      },
      {
        title: "Flat Two-way Tilting LCD",
        description:
          "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles.",
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description:
          "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI.",
      },
      {
        title: "Light Weight, High Performance",
        description:
          "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability.",
      },
      {
        title: "Colour chrome effect",
        description:
          "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image.",
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description:
          "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones.",
      },
      {
        title: "Updated AF algorithm",
        description:
          "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations.",
      },
      {
        title: "FILM SIMULATION",
        description:
          "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY.",
      },
      {
        title: "Grain effect",
        description:
          "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image.",
      },
      {
        title: "The One and Only",
        description:
          "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Other Terminals",
            value: "Microphone / shutter release input: ø2.5mm; Hot Shoe",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value:
              "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "Lens",
            value:
              "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Image stabilizer",
            value:
              "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD",
          },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-s20-mirrorless",
    name: "Fujifilm X-S20 Mirrorless",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹116,999",
    slug: "fujifilm-x-s20-mirrorless",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f13.png",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf12.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf13.png",
        ],
      },
    ],
    overview:
      "X-S20 features a back-illuminated “X-Trans CMOS 4” sensor. Boasting a 26.1 MP resolution, X-S20 can chronicle your most extraordinary adventures and everyday moments with a unique filter array that controls moiré and false colors for an image that will help you share your true creative vision. The back-illuminated design works to enhance image quality while minimizing noise.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR sensor for ultra-high-resolution images",
      "7-stop in-body image stabilization (IBIS) for sharper handheld shots",
      "6.2K/30P and 4K/60P video recording with professional-quality output",
      "Fast AI-powered autofocus with subject detection for people, animals, birds, cars, and more",
      "15 fps mechanical shutter and up to 20 fps electronic shutter for action photography",
      "Classic Fujifilm Film Simulation modes for stunning colors and creative looks",
      "Compact weather-resistant magnesium alloy body with dual SD card slots",
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description:
          "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder.",
      },
      {
        title: "S/N Level / Low-Light Power",
        description:
          "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand.",
      },
      {
        title: "Flat Two-way Tilting LCD",
        description:
          "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles.",
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description:
          "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI.",
      },
      {
        title: "Light Weight, High Performance",
        description:
          "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability.",
      },
      {
        title: "Colour chrome effect",
        description:
          "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image.",
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description:
          "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones.",
      },
      {
        title: "Updated AF algorithm",
        description:
          "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations.",
      },
      {
        title: "FILM SIMULATION",
        description:
          "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY.",
      },
      {
        title: "Grain effect",
        description:
          "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image.",
      },
      {
        title: "The One and Only",
        description:
          "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Other Terminals",
            value: "Microphone / shutter release input: ø2.5mm; Hot Shoe",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value:
              "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "Lens",
            value:
              "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Image stabilizer",
            value:
              "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD",
          },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-half",
    name: "Fujifilm X Half",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹59,999",
    slug: "fujifilm-x-half",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f9.png",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf12.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black9.png",
        ],
      },
    ],
    overview:
      "X half brings the joy of film photography into the digital world. From the tactile action of the Frame Advance Lever, to the subtle sub-LCD that echoes a film window, every detail evokes a nostalgic thrill of the analog age.",
    keyFeatures: [
      "Film-inspired design with tactile Frame Advance Lever",
      "Vertical 3:4 format shooting for photos and videos",
      "Unique Film Camera Mode for an authentic analog experience",
      "2-in-1 Mode combines two images or videos into one composition",
      "13 Fujifilm Film Simulations including REALA ACE",
      "Creative analog effects such as Light Leak, Halation, and Expired Film",
      "Compact 240g body with a fixed 32mm-equivalent f/2.8 lens"
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description:
          "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder.",
      },
      {
        title: "S/N Level / Low-Light Power",
        description:
          "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand.",
      },
      {
        title: "Flat Two-way Tilting LCD",
        description:
          "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles.",
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description:
          "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI.",
      },
      {
        title: "Light Weight, High Performance",
        description:
          "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability.",
      },
      {
        title: "Colour chrome effect",
        description:
          "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image.",
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description:
          "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones.",
      },
      {
        title: "Updated AF algorithm",
        description:
          "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations.",
      },
      {
        title: "FILM SIMULATION",
        description:
          "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY.",
      },
      {
        title: "Grain effect",
        description:
          "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image.",
      },
      {
        title: "The One and Only",
        description:
          "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Other Terminals",
            value: "Microphone / shutter release input: ø2.5mm; Hot Shoe",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value:
              "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "Lens",
            value:
              "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Image stabilizer",
            value:
              "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD",
          },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-h2",
    name: "FUJIFILM X-H2 MIRRORLESS CAMERA BODY",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹189,999",
    originalPrice: "₹199,999",
    slug: "fujifilm-x-h2",
    status: "In Stock",
    desc: "Unrivaled image quality. 40.2MP X-Trans CMOS 5 HR sensor offering the world's first 8K/30P Apple ProRes internal recording.",
    colors: [
      { 
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f8.png",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f8.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f8.png",
        ],
      },
    ],
    lenses: ["Body Only"],
    overview: "Pushing the boundaries of APS-C imaging, the FUJIFILM X-H2 is a high-resolution, premium mirrorless camera featuring a groundbreaking 40.2-megapixel BSI sensor. It delivers astonishing stills with 160MP Pixel Shift Multi-Shot and professional-grade 8K/30p video internally.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "X-Processor 5 Image Processor",
      "8K 30p, 4K 60p, FHD 240p 10-Bit Video",
      "Internal Apple ProRes 422 HQ Recording",
      "160MP Pixel Shift Multi-Shot",
      "7-Stop In-Body Image Stabilization",
      "AI Deep Learning Subject Detection AF"
    ],
    richFeatures: [
      {
        title: "High-Resolution 40.2MP Sensor",
        description: "The X-H2 features the high-resolution 40.2MP X-Trans CMOS 5 HR sensor, delivering superior image quality and capturing unparalleled fine details. The enhanced image-processing algorithm boosts resolution without compromising the signal-to-noise ratio."
      },
      {
        title: "8K/30P Internal Apple ProRes Recording",
        description: "A first for the X Series, the X-H2 supports internal 8K/30P video recording in 4:2:2 10-bit color. It natively supports Apple ProRes codecs (ProRes 422 HQ, ProRes 422, and ProRes 422 LT) for streamlined post-production workflows."
      },
      {
        title: "160MP Pixel Shift Multi-Shot",
        description: "Perfect for commercial photography and cultural archiving, Pixel Shift Multi-Shot uses the IBIS system to precisely shift the sensor, capturing 20 separate frames that are combined into a massive, ultra-detailed 160-megapixel image."
      },
      {
        title: "Up to 7.0 Stops of IBIS",
        description: "A 5-axis in-body image stabilization system offers up to 7.0 stops of compensation. This allows you to handhold the camera in extremely low-light situations and still achieve incredibly sharp results."
      },
      {
        title: "Subject Detection Autofocus",
        description: "Utilizing deep-learning AI technology, the X-H2 automatically detects and tracks a wide range of subjects including human faces/eyes, animals, birds, cars, motorcycles, bicycles, airplanes, and trains."
      },
      {
        title: "Unmatched Shutter Speeds",
        description: "The electronic shutter has been improved to an incredible maximum speed of 1/180000 sec, giving you the freedom to shoot wide open with fast-aperture lenses even in extremely bright conditions."
      }
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Operation Environment", value: "-10°C - 40°C / 14°F - 104°F | Humidity: 10% - 80%" },
          { label: "Power Supply", value: "NP-W235 Li-ion battery (included)" },
          { label: "Weight", value: "Approx. 660g (including battery and memory card)" }
        ]
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB3.2 Gen2x1)" },
          { label: "HDMI Output", value: "HDMI connector (Type A)" },
          { label: "Audio Inputs", value: "3.5mm microphone, 3.5mm headphone" },
          { label: "Wireless", value: "Wi-Fi (IEEE802.11a/b/g/n/ac) & Bluetooth Ver. 4.2" }
        ]
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          { label: "File format of still image", value: "JPEG, HEIF, 14-bit RAW (RAF), TIFF" },
          { label: "Sensitivity", value: "ISO125~12800 (Extended: ISO64~51200)" },
          { label: "Image stabilizer", value: "Sensor shift mechanism with 5-axis compensation (up to 7.0 stops)" },
          { label: "Mechanical Shutter Speed", value: "Up to 1/8000 sec" },
          { label: "Electronic Shutter Speed", value: "Up to 1/180000 sec" },
          { label: "Continuous Shooting", value: "Approx. 20fps (Electronic), 15fps (Mechanical)" },
          { label: "Movie Recording", value: "8K(7680x4320) 29.97p | 4K(3840x2160) 59.94p | FHD up to 240p" },
          { label: "Storage Media", value: "CFexpress Type B card & SDXC memory card (UHS-II)" }
        ]
      }
    ]
  },
  {
    id: "fujifilm-x-s20",
    name: "FUJIFILM X-S20 MIRRORLESS CAMERA",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹119,999",
    originalPrice: "₹124,999",
    slug: "fujifilm-x-s20",
    status: "In Stock",
    desc: "Compact, versatile hybrid camera. 26.1MP X-Trans CMOS 4 with deep grip, huge battery, and dedicated Vlog features.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f1.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f2.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f3.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f4.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f5.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f6.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f7.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f8.png",
        ],
      },
      // because gray have no images
      // {
      //   name: "Grey",
      //   images: [
      //    "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f1.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f2.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f3.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f4.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f5.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f6.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f7.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f8.png",
      //   ],
      // },
      {
        name: "Black",
        images: [
         "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f1.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f2.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f3.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f4.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f5.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f6.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f7.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f8.png",
        ],
      },
    ],
    lenses: ["Body Only", "15-45mm Lens Kit"],
    overview: "Designed for content creators and hybrid shooters, the FUJIFILM X-S20 combines the renowned 26.1MP X-Trans CMOS 4 sensor with an incredibly ergonomic grip. It brings massive battery life and a new dedicated Vlog mode to a travel-friendly body.",
    keyFeatures: [
      "26.1MP APS-C X-Trans CMOS 4 Sensor",
      "X-Processor 5 Engine with AI Subject Tracking",
      "6.2K/30p and 4K/60p 10-Bit Video",
      "Dedicated Vlog Mode with Touch Interface",
      "High-Capacity NP-W235 Battery (approx. 800 frames)",
      "7-Stop In-Body Image Stabilization"
    ],
    richFeatures: [
      {
        title: "Extended Battery Life",
        description: "The X-S20 features the high-capacity NP-W235 battery, allowing you to capture up to 800 frames on a single charge. This massive leap means less time worrying about power and more time creating."
      },
      {
        title: "Dedicated Vlog Mode",
        description: "Set the top dial to Vlog mode to instantly optimize the camera for self-recording. The touchscreen transforms into a specialized interface with easy access to Product Priority Mode, Background Defocus, and Self-timer settings."
      },
      {
        title: "Deep Ergonomic Grip",
        description: "Despite its highly compact and lightweight body, the X-S20 features a prominent, easy-to-hold grip. It guarantees comfortable and stable shooting, even when pairing the camera with heavier telephoto lenses."
      },
      {
        title: "Open Gate 6.2K Video",
        description: "Record stunningly detailed 6.2K/30P video internally in 4:2:2 10-bit color. The open gate functionality allows you to capture a broader aspect ratio, perfect for cropping into different social media formats in post-production."
      },
      {
        title: "19 Film Simulation Modes",
        description: "Leveraging 90 years of color science, the X-S20 features 19 Film Simulation modes, including Nostalgic Neg. Apply classic photographic looks directly in-camera to save time on color grading."
      }
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Operation Environment", value: "0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80%" },
          { label: "Power Supply", value: "NP-W235 Li-ion battery (included)" },
          { label: "Weight", value: "Approx. 491g (including battery and memory card)" }
        ]
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB3.2 Gen2x1)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          { label: "Audio", value: "3.5mm stereo mini connector (Microphone & Headphone)" }
        ]
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "26.1 million pixels" },
          { label: "File format of still image", value: "JPEG, HEIF, RAW (14bit RAF)" },
          { label: "Sensitivity", value: "ISO160~12800 (Extended: ISO80~51200)" },
          { label: "Image stabilizer", value: "Sensor shift mechanism with 5-axis compensation (up to 7.0 stops)" },
          { label: "Shutter Speed", value: "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/32000 sec" },
          { label: "Continuous Shooting", value: "Approx. 20fps (Electronic), 8fps (Mechanical)" },
          { label: "Movie Recording", value: "6.2K(6240x4160) up to 29.97p | 4K up to 59.94p | FHD up to 240p" }
        ]
      }
    ]
  },
  {
    id: "fujifilm-x-t50",
    name: "FUJIFILM X-T50 MIRRORLESS CAMERA WITH 15-45mm LENS",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹134,999",
    slug: "fujifilm-x-t50",
    status: "In Stock",
    desc: "Everyday perfection. Flagship 40.2MP performance in a classic, compact body featuring a dedicated Film Simulation dial.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f8.png",
        ]
      },
      {
        name: "Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f13.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f14.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f15.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f16.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f17.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f18.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f19.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f20.png",
        ]
      },
      {
        name: "Charcoal Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f21.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f22.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f23.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f24.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f25.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f26.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f27.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f28.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f29.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f30.png",
        ]
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f8.png",
        ]
      }
    ],
    lenses: ["Body Only", "XC 15-45mm Lens", "XF 16-50mm Lens"],
    overview: "The FUJIFILM X-T50 packages the extraordinary 40.2-megapixel sensor and ultra-fast X-Processor 5 of flagship models into an incredibly lightweight, elegantly styled body. It introduces a physical Film Simulation dial on the top plate for instantaneous creative control.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "Dedicated Top-Plate Film Simulation Dial",
      "7.0-Stop In-Body Image Stabilization (IBIS)",
      "Deep Learning AI Subject Detection Autofocus",
      "6.2K/30p and 4K/60p Video Recording",
      "Sleek, lightweight body (approx. 438g)"
    ],
    richFeatures: [
      {
        title: "Dedicated Film Simulation Dial",
        description: "For the very first time in the X Series, a dedicated dial on the top plate allows you to instantly switch between your favorite Film Simulation modes. Access classic looks like REALA ACE, Provia, and Classic Chrome with a simple twist."
      },
      {
        title: "Flagship 40.2MP Resolution",
        description: "Despite its compact footprint, the X-T50 utilizes the same ultra-high-resolution 40.2MP X-Trans CMOS 5 HR sensor found in flagship cameras, delivering breathtaking sharpness and croppability for everyday photography."
      },
      {
        title: "Up to 7.0 Stops of Stabilization",
        description: "A newly designed, compact 5-axis in-body image stabilization mechanism provides up to 7.0 stops of shake correction. This ensures crisp stills and smooth video even in challenging low-light environments."
      },
      {
        title: "Deep-Learning Autofocus",
        description: "Powered by the X-Processor 5, the X-T50 features an intelligent subject-detection AF system that automatically locks onto humans, animals, birds, and various vehicles, freeing you to focus completely on composition."
      },
      {
        title: "Built-In Pop-Up Flash",
        description: "Integrating seamlessly into the retro top-plate design, a built-in pop-up flash provides an easy-to-use fill light for night portraits and strongly backlit scenes."
      }
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Operation Environment", value: "0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80%" },
          { label: "Power Supply", value: "NP-W126S Li-ion battery" },
          { label: "Weight", value: "Approx. 438g (including battery and memory card)" }
        ]
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB3.2 Gen2x1)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          { label: "Microphone Jack", value: "ø3.5mm stereo mini connector" }
        ]
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          { label: "File format of still image", value: "JPEG, HEIF, RAW (14bit RAF)" },
          { label: "Sensitivity", value: "ISO125~12800 (Extended: ISO64~51200)" },
          { label: "Image stabilizer", value: "Sensor shift mechanism with 5-axis compensation (up to 7.0 stops)" },
          { label: "Shutter Speed", value: "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec" },
          { label: "Continuous Shooting", value: "Approx. 20fps (Electronic), 8fps (Mechanical)" },
          { label: "Movie Recording", value: "6.2K(6240x3150) up to 29.97p | 4K HQ up to 29.97p | FHD up to 240p" }
        ]
      }
    ]
  },
  {
    "id": "fujifilm-x-t30-iii",
    "name": "FUJIFILM X-T30 III MIRRORLESS CAMERA",
    "category": "Mirrorless Cameras",
    "brand": "Fujifilm",
    "price": "₹95,499",
    "slug": "fujifilm-x-t30-iii",
    "status": "In Stock",
    "desc": "Little Giant Evolved. Features a high-speed 26.1MP sensor backed by the powerful X-Processor 5, putting advanced AI subject detection autofocus into a classically styled, ultralight body.",
    "colors": [
      {
        "name": "Silver",
        "images": [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f1.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f2.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f4.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f5.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f6.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f7.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f8.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f9.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f10.jpg",
        ]
      },
      {
        "name": "Black",
        "images": [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30 III/black1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30 III/black2.png"
        ]
      }
    ],
    "lenses": ["Body Only", "XF 13-33mm Lens"],
    "overview": "The FUJIFILM X-T30 III builds on its predecessor by pairing a field-proven 26.1MP X-Trans CMOS 4 sensor with Fujifilm's next-generation X-Processor 5. This brings significant performance gains including 6.2K open gate video recording, deep-learning AI autofocus, and a layout complete with a configurable Film Simulation dial for immediate color style selection.",
    "keyFeatures": [
      "26.1MP APS-C X-Trans CMOS 4 Sensor",
      "Next-Gen X-Processor 5 Imaging Engine",
      "Configurable Top-Plate Film Simulation Dial",
      "AI-Based Deep Learning Subject Detection AF",
      "6.2K/30p Open Gate and 4K/60p Video Recording",
      "Classic Lightweight Body with Built-in Pop-up Flash"
    ],
    "richFeatures": [
      {
        "title": "Configurable Film Simulation Dial",
        "description": "Adjust your color profile on the fly with a dedicated physical top plate dial. Switch dynamically between 20 distinctive Film Simulation options to preview and capture stylized images in-camera."
      },
      {
        "title": "X-Processor 5 Upgrades",
        "description": "By stepping up to the X-Processor 5 engine, the camera gains incredible parsing speed, dramatically boosting autofocus tracking capabilities and unlocking demanding higher-resolution video codecs."
      },
      {
        "title": "6.2K Open Gate Recording",
        "description": "Capture the full canvas of the 3:2 image sensor with stunning 6.2K/30p open gate footage, allowing unmatched reframing and cropping freedom for multi-platform delivery formats."
      },
      {
        "title": "Deep-Learning Subject Detection AF",
        "description": "Harnessing advanced machine learning, the hybrid autofocus intelligence reliably isolates and paths humans, animals, birds, airplanes, and multiple vehicle types seamlessly across the scene."
      }
    ],
    "specs": [
      {
        "category": "General Specifications",
        "items": [
          { "label": "Operation Environment", "value": "0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80%" },
          { "label": "Power Supply", "value": "NP-W126S Li-ion battery (Approx. 315 shots)" },
          { "label": "Weight", "value": "Approx. 378g (including battery and memory card)" }
        ]
      },
      {
        "category": "Terminals & Interfaces",
        "items": [
          { "label": "Digital Interface", "value": "USB Type-C (USB 10Gbps)" },
          { "label": "HDMI Output", "value": "HDMI Micro connector (Type D)" },
          { "label": "Microphone Jack", "value": "ø2.5mm stereo mini connector (Microphone & Remote)" }
        ]
      },
      {
        "category": "Imaging & Video",
        "items": [
          { "label": "Number of recorded pixels", "value": "26.1 million pixels" },
          { "label": "File format of still image", "value": "JPEG, HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF" },
          { "label": "Sensitivity", "value": "ISO160~12800 (Extended: ISO80~51200)" },
          { "label": "Image stabilizer", "value": "Digital Image Stabilization (No IBIS)" },
          { "label": "Shutter Speed", "value": "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/32000 sec" },
          { "label": "Continuous Shooting", "value": "Approx. 30fps (Electronic with 1.25x crop)" },
          { "label": "Movie Recording", "value": "6.2K(6240x4160) up to 29.97p | 4K up to 59.94p | FHD up to 240p" }
        ]
      }
    ]
  },
  {
    "id": "fujifilm-x-e5",
    "name": "FUJIFILM X-E5 MIRRORLESS CAMERA",
    "category": "Mirrorless Cameras",
    "brand": "Fujifilm",
    "price": "₹148,999",
    "slug": "fujifilm-x-e5",
    "status": "In Stock",
    "desc": "Analog simplicity meets flagship resolution. Combines an ultra-high resolution 40.2MP sensor, robust 5-axis stabilization, and rangefinder styling for discrete street and travel photography.",
    "colors": [
      {
        "name": "Silver",
        "images": [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/silver1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/silver2.png"
        ]
      },
      {
        "name": "Black",
        "images": [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/black1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/black2.png"
        ]
      }
    ],
    "lenses": ["Body Only", "XF 23mm Lens Kit"],
    "overview": "The FUJIFILM X-E5 matches a timeless, low-profile rangefinder form factor with modern technical achievements. Housing a 40.2-megapixel sensor and premium 5-axis sensor-shift hardware inside its aluminum body, it grants purist operations via dedicated top-plate adjustments alongside a configured Film Simulation dial.",
    "keyFeatures": [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "X-Processor 5 High-Speed Image Engine",
      "5-Axis In-Body Image Stabilization (Up to 7 Stops)",
      "Configurable Top Film Simulation Dial",
      "Intelligent Hybrid AF with AI Subject Detection",
      "6.2K/30p Video & 3.0-inch 3-Axis Tilting LCD Screen"
    ],
    "richFeatures": [
      {
        "title": "Tactile Rangefinder Form Factor",
        "description": "Engineered for street agility, the offset view screen configuration lets creators monitor surroundings while keeping one eye to the high-density OLED viewfinder, styled in a lightweight vintage aesthetic."
      },
      {
        "title": "Flagship High-Resolution Matrix",
        "description": "Utilizes the high-density 40.2MP sensor to capture pristine detail and texture accuracy, empowering you with digital teleconverter configurations and flexibility to crop images deeply without sacrificing sharpness."
      },
      {
        "title": "5-Axis Image Stabilization",
        "description": "Even with its ultra-compact depth, a built-in sensor-shift layout combats shakes up to 7 stops at center frame, allowing smooth video and handheld slow-shutter photography at night."
      }
    ],
    "specs": [
      {
        "category": "General Specifications",
        "items": [
          { "label": "Operation Environment", "value": "0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80%" },
          { "label": "Power Supply", "value": "NP-W126S Li-ion battery" },
          { "label": "Weight", "value": "Approx. 445g (Body Only)" }
        ]
      },
      {
        "category": "Terminals & Interfaces",
        "items": [
          { "label": "Digital Interface", "value": "USB Type-C" },
          { "label": "HDMI Output", "value": "Micro-HDMI connector" },
          { "label": "Microphone Jack", "value": "3.5mm stereo mic input" }
        ]
      },
      {
        "category": "Imaging & Video",
        "items": [
          { "label": "Number of recorded pixels", "value": "40.2 million pixels" },
          { "label": "File format of still image", "value": "RAW (14bit), HEIF (4:2:2 10bit), TIFF (8bit), JPEG" },
          { "label": "Sensitivity", "value": "ISO125~12800 (Extended: ISO64~51200)" },
          { "label": "Image stabilizer", "value": "Sensor-shift mechanism with 5-axis compensation (up to 7.0 stops)" },
          { "label": "Shutter Speed", "value": "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec" },
          { "label": "Continuous Shooting", "value": "Up to 20 fps (Electronic Shutter)" },
          { "label": "Movie Recording", "value": "6.2K/30p | 4K/60p | Full HD/240p" }
        ]
      }
    ]
  },
  {
    "id": "fujifilm-x-h2s",
    "name": "FUJIFILM X-H2s MIRRORLESS CAMERA",
    "category": "Mirrorless Cameras",
    "brand": "Fujifilm",
    "price": "₹197,999",
    "slug": "fujifilm-x-h2s",
    "status": "In Stock",
    "desc": "The ultimate speed flagship. Equipped with a groundbreaking 26.1MP Stacked BSI sensor capable of blackout-free 40fps continuous shooting and internal Apple ProRes video capturing.",
    "colors": [
      {
        "name": "Black",
        "images": [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f7.png"
        ]
      }
    ],
    "lenses": ["Body Only"],
    "overview": "The FUJIFILM X-H2s represents peak operational velocity for professional wildlife, sports, and multimedia creators. It marks the introduction of the 26.1MP X-Trans Stacked BSI sensor structure which fundamentally eliminates rolling shutter warp, handling blistering 40fps burst speeds and high-framerate 4K/120p tracking streams effortlessly.",
    "keyFeatures": [
      "26.1MP APS-C X-Trans Stacked BSI Sensor",
      "X-Processor 5 High-Speed Signal Processor",
      "Blackout-Free 40fps Burst Electronic Shooting",
      "Internal 10-Bit Apple ProRes 422 HQ Recording",
      "4K/120p High-Speed and 6.2K/30p Open Gate Video",
      "Up to 7.0 Stops In-Body Image Stabilization (IBIS)"
    ],
    "richFeatures": [
      {
        "title": "Revolutionary Stacked BSI Sensor",
        "description": "By moving signal-processing circuits behind the pixel surface, stacked architecture increases reading speed by nearly four times. This effectively cures rolling shutter distortion and delivers a true blackout-free finder view."
      },
      {
        "title": "ProRes Codecs Recorded Internally",
        "description": "Supports broadcast workflows right out of the card bay by natively saving Apple ProRes 422 HQ, ProRes 422, and ProRes 422 LT directly to CFexpress Type B media, minimizing transcode times in post-production."
      },
      {
        "title": "Unrivaled Cine Speeds",
        "description": "Record high-resolution action in pristine 4K at 120 frames per second or choose 240p in Full HD to slow fast motions with extreme detail retention, backed by F-Log 2 color space with 14+ stops of dynamic range."
      }
    ],
    "specs": [
      {
        "category": "General Specifications",
        "items": [
          { "label": "Operation Environment", "value": "-10°C - 40°C / 14°F - 104°F | Weather-Resistant Build" },
          { "label": "Power Supply", "value": "NP-W235 Li-ion battery" },
          { "label": "Weight", "value": "Approx. 660g (including battery and memory card)" }
        ]
      },
      {
        "category": "Terminals & Interfaces",
        "items": [
          { "label": "Digital Interface", "value": "USB Type-C (USB3.2 Gen2x1)" },
          { "label": "HDMI Output", "value": "Full-Size HDMI Type A connector" },
          { "label": "Audio & Remote", "value": "3.5mm Microphone Jack | 3.5mm Headphone Jack" },
          { "label": "Storage Slots", "value": "Dual Slot: 1x CFexpress Type B, 1x SD/SDHC/SDXC (UHS-II)" }
        ]
      },
      {
        "category": "Imaging & Video",
        "items": [
          { "label": "Number of recorded pixels", "value": "26.1 million pixels" },
          { "label": "File format of still image", "value": "JPEG, HEIF, RAW (14bit RAF), TIFF" },
          { "label": "Sensitivity", "value": "ISO160~12800 (Extended: ISO80~51200)" },
          { "label": "Image stabilizer", "value": "Sensor shift mechanism with 5-axis compensation (up to 7.0 stops)" },
          { "label": "Shutter Speed", "value": "Mechanical: Up to 1/8000 sec | Electronic: Up to 1/32000 sec" },
          { "label": "Continuous Shooting", "value": "Approx. 40fps (Electronic Shutter, Blackout-Free), 15fps (Mechanical)" },
          { "label": "Movie Recording", "value": "6.2K/30p Open Gate | 4K up to 120p | FHD up to 240p" }
        ]
      }
    ]
  }
];
