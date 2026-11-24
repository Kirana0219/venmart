const event = [
  {
    id: 1,
    categoryId: 1,
    category: "Music",
    title: "Neon Echoes Live 2026",
    date: "Dec 14, 2026",
    time: "7:30 PM – 11:00 PM WIB",
    location: "Jakarta Hall",
    address: "Jl. Gatot Subroto, Central Jakarta",
    organizer: "Soundwave Asia",
    organizerPhone: "+62 812-3456-7890",
    description:
      "Experience an immersive night of indie electronic music, synchronized light installations, and live visual art featuring regional headliners and guest DJs.",
    image:
      "https://images.unsplash.com/photo-1768053917161-34fc3365c9b2?auto=format&fit=crop&w=1200&q=80",
    organizerImage: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Pass",
        description: "General standing",
        price: 450000,
        available: 84,
      },
      {
        id: 2,
        name: "VIP Lounge Pass",
        description: "Front stage + Fast lane",
        price: 950000,
        available: 44,
      },
    ],
  },

  {
    id: 2,
    categoryId: 2,
    category: "Seminar",
    title: "Design Forward Conference",
    date: "Dec 15, 2026",
    time: "9:00 AM – 4:00 PM WIB",
    location: "Senayan City",
    address: "Jl. Casablanca Raya, South Jakarta",
    organizer: "Creative Minds Indonesia",
    organizerPhone: "+62 812-4567-8901",
    description:
      "A creative conference exploring the future of design, technology, and digital experiences with industry professionals.",
    image:
      "https://images.unsplash.com/photo-1773828755374-0ee802d9f44b?auto=format&fit=crop&w=1200&q=80",
    organizerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XQTWeHmdIb5QWF4XwgCvKJXeMIWgLKgTpEnFWaTZtxhPsCtjz-zSeMN-&s=10",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Pass",
        description: "Conference access",
        price: 250000,
        available: 120,
      },
      {
        id: 2,
        name: "VIP Pass",
        description: "Conference + networking session",
        price: 450000,
        available: 35,
      },
    ],
  },

  {
    id: 3,
    categoryId: 3,
    category: "Workshop",
    title: "Ceramic Wheel Studio",
    date: "Dec 15, 2026",
    time: "10:00 AM – 1:00 PM WIB",
    location: "Clay Studio",
    address: "Jl. Kemang Raya, South Jakarta",
    organizer: "Clay House Community",
    organizerPhone: "+62 813-5678-9012",
    description:
      "Discover the art of pottery through a hands-on ceramic wheel workshop guided by experienced ceramic artists.",
    image:
      "https://images.unsplash.com/photo-1771523350488-32af5ba560e6?auto=format&fit=crop&w=1200&q=80",
    organizerImage: "https://mir-s3-cdn-cf.behance.net/projects/404/2c9b02180321151.Y3JvcCw4MDcsNjMxLDMwMywxMzM.jpg",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Pass",
        description: "Workshop + materials",
        price: 350000,
        available: 25,
      },
      {
        id: 2,
        name: "Premium Pass",
        description: "Workshop + materials + ceramic kit",
        price: 500000,
        available: 10,
      },
    ],
  },

  {
    id: 4,
    categoryId: 4,
    category: "Sports",
    title: "City Sunrise 10K Run",
    date: "Dec 29, 2026",
    time: "5:30 AM – 9:00 AM WIB",
    location: "Sudirman",
    address: "Jl. Jenderal Sudirman, Central Jakarta",
    organizer: "Run Together Indonesia",
    organizerPhone: "+62 814-6789-0123",
    description:
      "Start your morning with an energetic city running experience. Join hundreds of runners and enjoy a 10K route through Jakarta.",
    image:
      "https://images.unsplash.com/photo-1771859759696-ad840ed0707b?auto=format&fit=crop&w=1200&q=80",
    organizerImage: "https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Runner",
        description: "Race kit + medal",
        price: 250000,
        available: 200,
      },
      {
        id: 2,
        name: "Premium Runner",
        description: "Premium race kit + medal",
        price: 400000,
        available: 50,
      },
    ],
  },

  {
    id: 5,
    categoryId: 5,
    category: "Festival",
    title: "Twilight Sound Fest",
    date: "Dec 28, 2026",
    time: "4:00 PM – 10:00 PM WIB",
    location: "Block M Square",
    address: "Jl. Kemang Selatan, South Jakarta",
    organizer: "Twilight Project",
    organizerPhone: "+62 815-7890-1234",
    description:
      "Enjoy an outdoor music festival featuring live performances, local food vendors, creative communities, and a vibrant evening atmosphere.",
    image:
      "https://images.unsplash.com/photo-1757281504806-f146e59bdd29?auto=format&fit=crop&w=1200&q=80",
    organizerImage: "https://mir-s3-cdn-cf.behance.net/projects/404/374343214489639.Y3JvcCwxMDg2LDg1MCwxNzcsMA.png",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Pass",
        description: "Festival ground access",
        price: 280000,
        available: 150,
      },
      {
        id: 2,
        name: "VIP Pass",
        description: "VIP area + exclusive merchandise",
        price: 550000,
        available: 40,
      },
    ],
  },

  {
    id: 6,
    categoryId: 6,
    category: "Exhibition",
    title: "Lumen Light Gallery",
    date: "Jan 04, 2027",
    time: "10:00 AM – 8:00 PM WIB",
    location: "Menteng Hall",
    address: "Jl. HOS Cokroaminoto, Menteng, Jakarta",
    organizer: "Lumen Art Collective",
    organizerPhone: "+62 816-8901-2345",
    description:
      "Explore an immersive light art exhibition featuring interactive installations and contemporary visual experiences.",
    image:
      "https://images.unsplash.com/photo-1614189449397-bad2fc66459e?auto=format&fit=crop&w=1200&q=80",
    organizerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpa_zb9zLLOBOMOhr3fzEGtKjUwoafgw8AaKVt4jAGJ12fRL9KFFtvgU&s=10",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Pass",
        description: "One-day exhibition access",
        price: 180000,
        available: 100,
      },
      {
        id: 2,
        name: "Group Pass",
        description: "Admission for two people",
        price: 320000,
        available: 30,
      },
    ],
  },

  {
    id: 7,
    categoryId: 1,
    category: "Music",
    title: "Acoustic Garden Session",
    date: "Jan 10, 2027",
    time: "5:00 PM – 9:00 PM WIB",
    location: "Senopati Park",
    address: "Jl. Senopati, South Jakarta",
    organizer: "Acoustic Garden",
    organizerPhone: "+62 817-9012-3456",
    description:
      "Spend a relaxing evening with acoustic performances from emerging musicians in an intimate outdoor setting.",
    image: "https://plus.unsplash.com/premium_photo-1682294456305-a25f92fbf016?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    organizerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaaZWnv3gZ_9KL_8_TUWbOfsQ8r-YsAXTebD7GYISOw&s=10",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Pass",
        description: "General admission",
        price: 150000,
        available: 90,
      },
      {
        id: 2,
        name: "Front Row Pass",
        description: "Reserved front seating",
        price: 275000,
        available: 25,
      },
    ],
  },

  {
    id: 8,
    categoryId: 3,
    category: "Workshop",
    title: "Photography Class",
    date: "Jan 17, 2027",
    time: "9:00 AM – 12:00 PM WIB",
    location: "Frame Studio",
    address: "Jl. Cipete Raya, South Jakarta",
    organizer: "Frame Academy",
    organizerPhone: "+62 818-0123-4567",
    description:
      "Learn photography fundamentals, composition techniques, and creative storytelling through practical exercises.",
    image: "https://images.unsplash.com/photo-1517319084147-208a3caceb22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    organizerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6r_I95_64jMgImlA4w-9q48MdTZZUVMp6iLVH37rHwA&s=10",
    ticketOptions: [
      {
        id: 1,
        name: "Basic Class",
        description: "Class access",
        price: 200000,
        available: 40,
      },
      {
        id: 2,
        name: "Full Class",
        description: "Class + printed learning materials",
        price: 325000,
        available: 20,
      },
    ],
  },

  {
    id: 9,
    categoryId: 2,
    category: "Seminar",
    title: "Future of Digital Business",
    date: "Jan 18, 2027",
    time: "1:00 PM – 5:00 PM WIB",
    location: "BSD Auditorium",
    address: "Jl. BSD Green Office Park, Tangerang",
    organizer: "Digital Business Forum",
    organizerPhone: "+62 819-1234-5678",
    description:
      "Gain insights into digital transformation, business innovation, and emerging technologies from experienced professionals.",
    image: "https://images.unsplash.com/photo-1790725673673-547b23f1ee61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    organizerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KDr1pCCmkjgZuJTTh14hCuyuk7knZlDUk3x2tG3eXA&s=10",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Pass",
        description: "Seminar access",
        price: 175000,
        available: 100,
      },
      {
        id: 2,
        name: "VIP Pass",
        description: "Seminar + networking session",
        price: 300000,
        available: 30,
      },
    ],
  },

  {
    id: 10,
    categoryId: 5,
    category: "Festival",
    title: "Jakarta Creative Market",
    date: "Jan 24, 2027",
    time: "11:00 AM – 9:00 PM WIB",
    location: "Senayan City",
    address: "Jl. Pintu Satu Senayan, Jakarta",
    organizer: "Local Creative Society",
    organizerPhone: "+62 811-2345-6789",
    description:
      "Discover local creative products, handmade crafts, independent brands, food stalls, and community activities in one creative market.",
    image: "https://images.unsplash.com/photo-1779135374297-bcb2dde5ad6d?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    organizerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31RmLJrJ-J7HO5OInnxi_pERJtSb5o6jQpYDrjg-tjw&s=10",
    ticketOptions: [
      {
        id: 1,
        name: "Regular Pass",
        description: "Market entrance",
        price: 50000,
        available: 300,
      },
      {
        id: 2,
        name: "Supporter Pass",
        description: "Entrance + exclusive merchandise",
        price: 125000,
        available: 75,
      },
    ],
  },
];

export default event;