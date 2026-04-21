export const hotelData = {
  id: "1",
  name: "The Grand Pyramids Hotel",
  location: "Giza, Egypt",
  rating: 4.8,
  reviewsCount: 1245,
  description: "Experience the epitome of luxury with breathtaking views of the Great Pyramids. Our resort offers world-class amenities, authentic Egyptian hospitality, and an oasis of tranquility just steps away from history.",
  heroImage: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  amenities: [
    { name: "Free High-Speed WiFi", icon: "wifi" },
    { name: "Infinity Pool", icon: "water-ladder" },
    { name: "Luxury Spa", icon: "spa" },
    { name: "Gourmet Restaurant", icon: "utensils" },
    { name: "Fitness Center", icon: "dumbbell" },
    { name: "Valet Parking", icon: "square-parking" }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073171639-4d6cb1ed0122?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop"
  ],
  rooms: [
    {
      id: "r1",
      name: "Deluxe King Room",
      size: "45 m²",
      beds: "1 Extra-Large Double Bed",
      capacity: "2 Adults",
      price: 180,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "r2",
      name: "Pyramid View Suite",
      size: "75 m²",
      beds: "1 Extra-Large Double Bed + 1 Sofa Bed",
      capacity: "3 Adults or 2 Adults + 2 Children",
      price: 350,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "r3",
      name: "Family Connecting Room",
      size: "90 m²",
      beds: "2 Double Beds + 2 Twin Beds",
      capacity: "4 Adults + 2 Children",
      price: 420,
      image: "https://images.unsplash.com/photo-1576675784201-0e142b423952?q=80&w=800&auto=format&fit=crop"
    }
  ],
  reviews: [
    {
      id: "rev1",
      user: "Sarah Jenkins",
      rating: 5,
      date: "October 12, 2025",
      comment: "Absolutely stunning hotel. The view of the pyramids from our balcony was unforgettable. The staff went above and beyond."
    },
    {
      id: "rev2",
      user: "Michael Chen",
      rating: 4.5,
      date: "September 28, 2025",
      comment: "Beautiful architecture and excellent food at the main restaurant. The pool area is an oasis."
    }
  ]
};
