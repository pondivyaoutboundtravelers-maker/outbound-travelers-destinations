import {
  Experience,
  MeghalayaPackage,
  ItineraryDay,
  Testimonial,
  FAQ,
} from "../types/meghalaya";

export const experiences: Experience[] = [
  {
    id: "dawki-river",
    title: "Dawki River",
    description: "Boat on the crystal clear waters of the Umngot River.",
    image: "/images/meghalaya/dawki.jpg",
    tags: ["Nature", "Boating", "Photography"],
  },
  {
    id: "root-bridge",
    title: "Double Decker Root Bridge",
    description: "Trek to the ancient living root bridges of Cherrapunjee.",
    image: "/images/meghalaya/root-bridge.jpg",
    tags: ["Trekking", "Adventure", "Heritage"],
  },
  {
    id: "waterfalls",
    title: "Cherrapunjee Waterfalls",
    description: "Witness the majestic Nohkalikai and Seven Sisters falls.",
    image: "/images/meghalaya/waterfall.jpg",
    tags: ["Scenic", "Waterfalls", "Nature"],
  },
  {
    id: "mawlynnong",
    title: "Mawlynnong Village",
    description: "Explore Asia's cleanest village and its pristine surroundings.",
    image: "/images/meghalaya/mawlynnong.jpg",
    tags: ["Culture", "Village", "Cleanliness"],
  },
  {
    id: "shillong",
    title: "Shillong City",
    description: "Experience the vibrant culture and cafes of the Scotland of the East.",
    image: "/images/meghalaya/shillong.jpg",
    tags: ["City", "Culture", "Cafes"],
  },
  {
    id: "mawsmai",
    title: "Mawsmai Cave",
    description: "Navigate through the fascinating limestone caves.",
    image: "/images/meghalaya/mawsmai.jpg",
    tags: ["Adventure", "Caving", "Exploration"],
  },
];

export const packages: MeghalayaPackage[] = [
  {
    id: "meghalaya-classic",
    title: "Meghalaya Classic",
    duration: "6 Days / 5 Nights",
    price: "₹24,999",
    shortDescription: "A comprehensive tour covering Shillong, Cherrapunjee, and Dawki.",
    highlights: ["Shillong Sightseeing", "Nohkalikai Falls", "Dawki Boating", "Mawlynnong Village"],
    image: "/images/meghalaya/classic.jpg",
    isPopular: true,
  },
  {
    id: "meghalaya-honeymoon",
    title: "Meghalaya Honeymoon",
    duration: "7 Days / 6 Nights",
    price: "₹32,500",
    shortDescription: "A romantic getaway with premium stays and private experiences.",
    highlights: ["Luxury Resorts", "Private Boating in Dawki", "Candlelight Dinner", "Umiam Lake View"],
    image: "/images/meghalaya/honeymoon.jpg",
  },
  {
    id: "meghalaya-kaziranga",
    title: "Meghalaya + Kaziranga",
    duration: "8 Days / 7 Nights",
    price: "₹38,000",
    shortDescription: "Combine the hills of Meghalaya with the wildlife of Assam.",
    highlights: ["Kaziranga Safari", "Shillong Peak", "Cherrapunjee Caves", "Brahmaputra Cruise"],
    image: "/images/meghalaya/kaziranga.jpg",
  },
  {
    id: "trekkers-meghalaya",
    title: "Trekker's Meghalaya",
    duration: "5 Days / 4 Nights",
    price: "₹21,000",
    shortDescription: "An adventure-packed itinerary focusing on hikes and nature trails.",
    highlights: ["Double Decker Root Bridge Trek", "Bamboo Trek", "Krang Suri Falls", "Camping"],
    image: "/images/meghalaya/trek.jpg",
  },
];

export const sampleItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival in Guwahati & Transfer to Shillong",
    activities: [
      "Arrive at Guwahati Airport/Railway Station.",
      "Scenic drive to Shillong, with a stop at the beautiful Umiam Lake.",
      "Check-in at your hotel and evening free to explore Police Bazaar.",
    ],
    meals: ["Dinner"],
    stay: "Premium Hotel in Shillong",
  },
  {
    day: 2,
    title: "Shillong Local Sightseeing & Drive to Cherrapunjee",
    activities: [
      "Visit Don Bosco Museum and Ward's Lake.",
      "Drive to Cherrapunjee, enjoying the misty landscapes.",
      "Visit Elephant Falls and Shillong Peak en route.",
    ],
    meals: ["Breakfast", "Dinner"],
    stay: "Eco-Resort in Cherrapunjee",
  },
  {
    day: 3,
    title: "Cherrapunjee Waterfalls & Caves",
    activities: [
      "Witness the majestic Nohkalikai Falls, the tallest plunge waterfall in India.",
      "Explore the fascinating Mawsmai Cave.",
      "Visit the Seven Sisters Falls and Eco Park.",
    ],
    meals: ["Breakfast", "Dinner"],
    stay: "Eco-Resort in Cherrapunjee",
  },
  {
    day: 4,
    title: "Dawki River & Mawlynnong Village",
    activities: [
      "Drive to Dawki and enjoy a boat ride on the crystal-clear Umngot River.",
      "Visit Mawlynnong, known as Asia's cleanest village.",
      "Experience the Living Root Bridge in Riwai village.",
    ],
    meals: ["Breakfast", "Dinner"],
    stay: "Premium Hotel in Shillong",
  },
  {
    day: 5,
    title: "Departure from Guwahati",
    activities: [
      "After breakfast, drive back to Guwahati.",
      "Visit Maa Kamakhya Temple (time permitting).",
      "Drop off at Guwahati Airport/Railway Station for your onward journey.",
    ],
    meals: ["Breakfast"],
    stay: "N/A",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aarti Desai",
    role: "Honeymoon Traveler",
    text: "The trip was magical! The team arranged a beautiful private setup for us near Umiam Lake. Highly recommend their honeymoon package.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rahul Singh",
    role: "Adventure Enthusiast",
    text: "Trekking to the Double Decker Root Bridge was the highlight. The guides were professional and the itinerary was perfectly paced.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya Menon",
    role: "Family Vacationer",
    text: "Everything from the hotels to the cabs was flawless. Our driver was very knowledgeable and courteous.",
    rating: 4,
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq1",
    question: "When is the best time to visit Meghalaya?",
    answer: "The best time to visit is from October to April when the weather is pleasant. However, if you want to see the waterfalls in their full glory, visiting during or just after the monsoons (June to September) is spectacular.",
  },
  {
    id: "faq2",
    question: "Is Meghalaya safe for tourists?",
    answer: "Yes, Meghalaya is widely considered one of the safest destinations in India for tourists, including solo female travelers. The locals are welcoming and helpful.",
  },
  {
    id: "faq3",
    question: "Do I need any special permits to visit Meghalaya?",
    answer: "Indian nationals do not require any special permits to visit most parts of Meghalaya. However, foreign nationals must register with the Foreigner's Registration Office (FRO).",
  },
  {
    id: "faq4",
    question: "What type of clothing should I pack?",
    answer: "Pack layers. While days can be pleasant, evenings in places like Shillong and Cherrapunjee can be chilly. Don't forget comfortable walking shoes, an umbrella or raincoat, and a light jacket.",
  },
];
