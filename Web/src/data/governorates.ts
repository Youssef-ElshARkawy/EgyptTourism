export interface TouristPlace {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}

export interface Governorate {
  id: string;
  name: string;
  description: string;
  places: TouristPlace[];
}

export const governorates: Governorate[] = [
  {
    id: "cairo",
    name: "Cairo",
    description: "The vibrant capital of Egypt, blending ancient history with a modern metropolis.",
    places: [
      { id: "1", name: "The Egyptian Museum", description: "Home to an extensive collection of ancient Egyptian antiquities.", imageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80" },
      { id: "c2", name: "Khan el-Khalili", description: "A famous bazaar and souq in the historic center of Cairo.", imageUrl: "https://images.unsplash.com/photo-1582298538104-18d4512bd157?auto=format&fit=crop&w=800&q=80" },
      { id: "c3", name: "Cairo Citadel", description: "Medieval Islamic-era fortification built by Salah ad-Din.", imageUrl: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80" },
      { id: "c4", name: "Al-Azhar Park", description: "A beautiful public park offering panoramic views of the city." }
    ]
  },
  {
    id: "giza",
    name: "Giza",
    description: "Famous worldwide for the Pyramids and the Great Sphinx.",
    places: [
      { id: "g1", name: "Giza Pyramids Complex", description: "The iconic pyramids of Khufu, Khafre, and Menkaure.", imageUrl: "https://images.unsplash.com/photo-1600521605604-00109968c9df?auto=format&fit=crop&w=800&q=80" },
      { id: "g2", name: "The Great Sphinx", description: "A limestone statue of a reclining sphinx, a mythical creature.", imageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80" },
      { id: "g3", name: "Grand Egyptian Museum", description: "The largest archaeological museum in the world, dedicated to a single civilization." }
    ]
  },
  {
    id: "alexandria",
    name: "Alexandria",
    description: "The pearl of the Mediterranean, founded by Alexander the Great.",
    places: [
      { id: "a1", name: "Bibliotheca Alexandrina", description: "A major library and cultural center on the shore of the Mediterranean Sea.", imageUrl: "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?auto=format&fit=crop&w=800&q=80" },
      { id: "a2", name: "Qaitbay Citadel", description: "A 15th-century defensive fortress located on the Mediterranean sea coast.", imageUrl: "https://images.unsplash.com/photo-1563200742-99071c690226?auto=format&fit=crop&w=800&q=80" },
      { id: "a3", name: "Montaza Palace", description: "A palace, museum and extensive gardens in the Montaza district." }
    ]
  },
  {
    id: "luxor",
    name: "Luxor",
    description: "Often characterized as the world's greatest open-air museum.",
    places: [
      { id: "l1", name: "Karnak Temple", description: "A vast mix of decayed temples, chapels, pylons, and other buildings.", imageUrl: "https://images.unsplash.com/photo-1583311891963-35f1110de8ac?auto=format&fit=crop&w=800&q=80" },
      { id: "l2", name: "Valley of the Kings", description: "A valley where rock-cut tombs were excavated for the pharaohs.", imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2b50?auto=format&fit=crop&w=800&q=80" },
      { id: "l3", name: "Luxor Temple", description: "A large Ancient Egyptian temple complex located on the east bank of the Nile River." }
    ]
  },
  {
    id: "aswan",
    name: "Aswan",
    description: "A serene city on the Nile, known for its beautiful scenery and ancient monuments.",
    places: [
      { id: "as1", name: "Philae Temple", description: "An island-based temple complex in the reservoir of the Aswan Low Dam.", imageUrl: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&w=800&q=80" },
      { id: "as2", name: "Abu Simbel Temples", description: "Two massive rock temples in a village in Nubia.", imageUrl: "https://images.unsplash.com/photo-1531129373972-00508d279cf4?auto=format&fit=crop&w=800&q=80" },
      { id: "as3", name: "Aswan High Dam", description: "The world's largest embankment dam built across the Nile." }
    ]
  },
  {
    id: "red-sea",
    name: "Red Sea",
    description: "A coastal governorate famous for its beaches, diving spots, and marine life.",
    places: [
      { id: "rs1", name: "Hurghada Grand Aquarium", description: "A fascinating public aquarium showcasing the Red Sea's marine life." },
      { id: "rs2", name: "Giftun Island", description: "A popular snorkeling and diving spot with crystal clear waters." },
      { id: "rs3", name: "El Gouna", description: "A modern resort town with beautiful lagoons and vibrant nightlife." }
    ]
  },
  {
    id: "south-sinai",
    name: "South Sinai",
    description: "Home to magnificent mountains, historical sites, and the famous Sharm El-Sheikh.",
    places: [
      { id: "ss1", name: "Mount Sinai", description: "A mountain in the Sinai Peninsula, considered a holy site." },
      { id: "ss2", name: "Saint Catherine's Monastery", description: "An Eastern Orthodox monastery located at the foot of Mount Sinai." },
      { id: "ss3", name: "Ras Muhammad National Park", description: "A stunning national park known for its pristine coral reefs." }
    ]
  },
  {
    id: "matrouh",
    name: "Matrouh",
    description: "Known for its white sand beaches and crystal clear waters on the Mediterranean coast.",
    places: [
      { id: "m1", name: "Cleopatra's Beach", description: "A beautiful beach with a natural pool named after the legendary queen." },
      { id: "m2", name: "Rommel's Cave Museum", description: "A museum located in the cave used by Erwin Rommel during WWII." },
      { id: "m3", name: "Agiba Beach", description: "A small, stunning cove surrounded by high cliffs." }
    ]
  },
  // To keep it concise, adding the remaining governorates with mock data
  ...[
    "Beheira", "Beni Suef", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Ismailia",
    "Kafr El Sheikh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said",
    "Qalyubia", "Qena", "Sharqia", "Sohag", "Suez", "Asyut"
  ].map((gov, i) => ({
    id: gov.toLowerCase().replace(/\s+/g, '-'),
    name: gov,
    description: `A wonderful destination in the ${gov} governorate waiting to be explored.`,
    places: [
      { id: `mock-${i}-1`, name: `${gov} Central Museum`, description: `Discover the history and artifacts of ${gov}.` },
      { id: `mock-${i}-2`, name: `${gov} Grand Mosque`, description: `An architectural marvel located in the heart of the city.` },
      { id: `mock-${i}-3`, name: `${gov} Local Market`, description: `Experience the vibrant culture and local goods of the region.` },
    ]
  }))
];

export const getGovernorateById = (id: string) => {
  return governorates.find((g) => g.id === id);
};
