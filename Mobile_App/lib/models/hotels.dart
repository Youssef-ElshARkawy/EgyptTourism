/// A simple blueprint describing what a "Hotel" looks like.
/// This matches the fields we expect from the real API later,
/// so swapping placeholder data for live data needs no changes here.
class Hotel {
  final String slug;
  final String name;
  final String location;
  final double rating;
  final int pricePerNight;
  final String imageUrl;
  final String description;

  Hotel({
    required this.slug,
    required this.name,
    required this.location,
    required this.rating,
    required this.pricePerNight,
    required this.imageUrl,
    required this.description,
  });

  /// Builds a Hotel from the JSON the real API will return.
  /// We are not using this yet (no live server), but it's ready for later.
  factory Hotel.fromJson(Map<String, dynamic> json) {
    return Hotel(
      slug: json['slug'] ?? '',
      name: json['name'] ?? '',
      location: json['location'] ?? json['governorate'] ?? '',
      rating: (json['rating'] ?? 0).toDouble(),
      pricePerNight: json['price_per_night'] ?? 0,
      imageUrl: json['image_url'] ?? '',
      description: json['description'] ?? '',
    );
  }
}

/// Placeholder hotels — used until the real backend server is running.
/// 50 hotels spread across Egypt's governorates, using Unsplash photos
/// the same way Top Rated Places does.
/// Replace with a real API call later; this list will simply be deleted.
final List<Hotel> placeholderHotels = [
  Hotel(
    slug: 'marriott-mena-house',
    name: 'Marriott Mena House',
    location: 'Giza',
    rating: 4.8,
    pricePerNight: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    description:
        'A historic palace hotel sitting in the shadow of the Great Pyramids, blending Egyptian heritage with modern luxury.',
  ),
  Hotel(
    slug: 'four-seasons-giza',
    name: 'Four Seasons Hotel Cairo at Nile Plaza',
    location: 'Giza',
    rating: 4.9,
    pricePerNight: 5400,
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    description:
        'A riverside five-star retreat offering panoramic Nile views and direct access to Cairo\'s vibrant districts.',
  ),
  Hotel(
    slug: 'cairo-marriott-zamalek',
    name: 'Cairo Marriott Hotel Zamalek',
    location: 'Cairo',
    rating: 4.6,
    pricePerNight: 3100,
    imageUrl: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d',
    description:
        'A grand 19th-century palace turned hotel, set on Zamalek island surrounded by lush gardens.',
  ),
  Hotel(
    slug: 'nile-ritz-carlton',
    name: 'The Nile Ritz-Carlton',
    location: 'Cairo',
    rating: 4.7,
    pricePerNight: 4800,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    description:
        'An iconic downtown landmark overlooking the Nile, combining classic Cairo elegance with modern comfort.',
  ),
  Hotel(
    slug: 'kempinski-nile-cairo',
    name: 'Kempinski Nile Hotel Cairo',
    location: 'Cairo',
    rating: 4.7,
    pricePerNight: 3900,
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    description:
        'A boutique luxury hotel on the Nile Corniche known for its rooftop pool and skyline views.',
  ),
  Hotel(
    slug: 'sofitel-winter-palace',
    name: 'Sofitel Winter Palace',
    location: 'Luxor',
    rating: 4.7,
    pricePerNight: 3600,
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    description:
        'A 19th-century royal residence turned hotel, set within botanical gardens beside the Nile in Luxor.',
  ),
  Hotel(
    slug: 'hilton-luxor-resort',
    name: 'Hilton Luxor Resort & Spa',
    location: 'Luxor',
    rating: 4.5,
    pricePerNight: 2700,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description:
        'A peaceful Nile-front resort offering easy access to Luxor and Karnak temples.',
  ),
  Hotel(
    slug: 'steigenberger-luxor',
    name: 'Steigenberger Nile Palace Luxor',
    location: 'Luxor',
    rating: 4.4,
    pricePerNight: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    description:
        'A modern resort on the East Bank of the Nile with large gardens and multiple pools.',
  ),
  Hotel(
    slug: 'movenpick-aswan',
    name: 'Mövenpick Resort Aswan',
    location: 'Aswan',
    rating: 4.6,
    pricePerNight: 2900,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    description:
        'Set on Elephantine Island, this resort offers unmatched views over the Nile and Aswan\'s riverbanks.',
  ),
  Hotel(
    slug: 'old-cataract-aswan',
    name: 'Sofitel Legend Old Cataract Aswan',
    location: 'Aswan',
    rating: 4.9,
    pricePerNight: 5800,
    imageUrl: 'https://images.unsplash.com/photo-1551776235-dde6d482980b',
    description:
        'A Victorian-era legendary hotel perched above the Nile\'s first cataract, favored by royalty and writers alike.',
  ),
  Hotel(
    slug: 'pyramisa-aswan',
    name: 'Pyramisa Isis Island Aswan',
    location: 'Aswan',
    rating: 4.3,
    pricePerNight: 2100,
    imageUrl: 'https://images.unsplash.com/photo-1582610116397-edb318620f90',
    description:
        'A resort located on its own private island in the Nile, reachable only by boat.',
  ),
  Hotel(
    slug: 'four-seasons-alex',
    name: 'Four Seasons San Stefano',
    location: 'Alexandria',
    rating: 4.9,
    pricePerNight: 5100,
    imageUrl: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa9',
    description:
        'A Mediterranean-front luxury hotel with direct beach access and sweeping sea views.',
  ),
  Hotel(
    slug: 'steigenberger-alex',
    name: 'Steigenberger Cecil Alexandria',
    location: 'Alexandria',
    rating: 4.4,
    pricePerNight: 2300,
    imageUrl: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d',
    description:
        'A historic Mediterranean landmark hotel on Alexandria\'s famous Corniche.',
  ),
  Hotel(
    slug: 'hilton-green-plaza',
    name: 'Hilton Alexandria Green Plaza',
    location: 'Alexandria',
    rating: 4.3,
    pricePerNight: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    description:
        'A modern city hotel attached to a shopping mall, close to Alexandria\'s main attractions.',
  ),
  Hotel(
    slug: 'rixos-sharm',
    name: 'Rixos Premium Seagate Sharm',
    location: 'Sharm El-Sheikh',
    rating: 4.6,
    pricePerNight: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description:
        'An all-inclusive beachfront resort with private coral reef access for snorkeling.',
  ),
  Hotel(
    slug: 'four-seasons-sharm',
    name: 'Four Seasons Resort Sharm El Sheikh',
    location: 'Sharm El-Sheikh',
    rating: 4.8,
    pricePerNight: 5600,
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    description:
        'A hillside luxury resort overlooking the Red Sea with multiple private beaches.',
  ),
  Hotel(
    slug: 'savoy-sharm',
    name: 'Savoy Sharm El Sheikh',
    location: 'Sharm El-Sheikh',
    rating: 4.5,
    pricePerNight: 3300,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    description:
        'A beachfront resort known for its lagoon pools and water sports center.',
  ),
  Hotel(
    slug: 'jaz-mirabel-sharm',
    name: 'Jaz Mirabel Resort',
    location: 'Sharm El-Sheikh',
    rating: 4.2,
    pricePerNight: 1900,
    imageUrl: 'https://images.unsplash.com/photo-1582610116397-edb318620f90',
    description:
        'A family-friendly resort with a private beach and views of nearby Tiran Island.',
  ),
  Hotel(
    slug: 'steigenberger-hurghada',
    name: 'Steigenberger Al Dau Beach Hotel',
    location: 'Hurghada',
    rating: 4.5,
    pricePerNight: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    description:
        'A large beachfront resort with extensive gardens and multiple swimming pools.',
  ),
  Hotel(
    slug: 'jaz-aquamarine-hurghada',
    name: 'Jaz Aquamarine Resort',
    location: 'Hurghada',
    rating: 4.3,
    pricePerNight: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa9',
    description:
        'A vibrant resort with a private island reachable by footbridge, popular with families.',
  ),
  Hotel(
    slug: 'sunrise-royal-makadi',
    name: 'Sunrise Royal Makadi Resort',
    location: 'Hurghada',
    rating: 4.4,
    pricePerNight: 2600,
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    description:
        'An all-suite resort on Makadi Bay with calm waters ideal for diving and snorkeling.',
  ),
  Hotel(
    slug: 'dahab-paradise',
    name: 'Dahab Paradise Hotel',
    location: 'Dahab',
    rating: 4.1,
    pricePerNight: 1400,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description:
        'A relaxed beachside hotel near the Blue Hole, popular among divers and backpackers.',
  ),
  Hotel(
    slug: 'siwa-shali-lodge',
    name: 'Siwa Shali Lodge',
    location: 'Siwa',
    rating: 4.3,
    pricePerNight: 1300,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    description:
        'An eco-lodge built from traditional Siwan materials, surrounded by palm groves and salt lakes.',
  ),
  Hotel(
    slug: 'marsa-matrouh-beach',
    name: 'Marina Beach Resort Matrouh',
    location: 'Matruh',
    rating: 4.0,
    pricePerNight: 1600,
    imageUrl: 'https://images.unsplash.com/photo-1582610116397-edb318620f90',
    description:
        'A summer resort along Matrouh\'s turquoise coastline, popular with domestic travelers.',
  ),
  Hotel(
    slug: 'helnan-port-said',
    name: 'Helnan Port Said Hotel',
    location: 'Port Said',
    rating: 4.0,
    pricePerNight: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d',
    description:
        'A waterfront hotel overlooking the Suez Canal entrance in Port Said.',
  ),
  Hotel(
    slug: 'red-sea-suez',
    name: 'Red Sea Hotel Suez',
    location: 'Suez',
    rating: 3.9,
    pricePerNight: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    description:
        'A practical city-center hotel close to the Suez Canal viewing points.',
  ),
  Hotel(
    slug: 'ismailia-palace',
    name: 'Ismailia Palace Hotel',
    location: 'Ismailia',
    rating: 4.0,
    pricePerNight: 1350,
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    description:
        'A quiet canal-side hotel surrounded by Ismailia\'s tree-lined streets.',
  ),
  Hotel(
    slug: 'mansoura-grand',
    name: 'Mansoura Grand Hotel',
    location: 'Dakahlia',
    rating: 3.9,
    pricePerNight: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa9',
    description:
        'A central Mansoura hotel along the Nile branch, convenient for business travelers.',
  ),
  Hotel(
    slug: 'zagazig-plaza',
    name: 'Zagazig Plaza Hotel',
    location: 'Sharqia',
    rating: 3.8,
    pricePerNight: 950,
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    description:
        'A modest city hotel in Zagazig, close to local markets and transport links.',
  ),
  Hotel(
    slug: 'tanta-nile-view',
    name: 'Tanta Nile View Hotel',
    location: 'Gharbia',
    rating: 3.9,
    pricePerNight: 1000,
    imageUrl: 'https://images.unsplash.com/photo-1551776235-dde6d482980b',
    description:
        'A comfortable mid-range hotel overlooking the Nile in the heart of Tanta.',
  ),
  Hotel(
    slug: 'shibin-grand',
    name: 'Shibin El Kom Grand Hotel',
    location: 'Monufia',
    rating: 3.7,
    pricePerNight: 850,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description: 'A straightforward business hotel in Monufia\'s capital city.',
  ),
  Hotel(
    slug: 'benha-park',
    name: 'Benha Park Hotel',
    location: 'Qalyubia',
    rating: 3.7,
    pricePerNight: 800,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    description:
        'A small park-side hotel convenient for travelers passing through Qalyubia.',
  ),
  Hotel(
    slug: 'damanhour-inn',
    name: 'Damanhour Inn',
    location: 'Beheira',
    rating: 3.6,
    pricePerNight: 750,
    imageUrl: 'https://images.unsplash.com/photo-1582610116397-edb318620f90',
    description:
        'A modest inn serving travelers exploring Beheira\'s agricultural lands.',
  ),
  Hotel(
    slug: 'kafr-sheikh-lakeview',
    name: 'Kafr El Sheikh Lakeview Hotel',
    location: 'Kafr El Sheikh',
    rating: 3.8,
    pricePerNight: 900,
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    description:
        'A peaceful hotel near Lake Burullus, popular with bird-watchers.',
  ),
  Hotel(
    slug: 'damietta-port-hotel',
    name: 'Damietta Port Hotel',
    location: 'Damietta',
    rating: 3.7,
    pricePerNight: 880,
    imageUrl: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa9',
    description:
        'A harbor-side hotel close to Damietta\'s furniture markets and Mediterranean coast.',
  ),
  Hotel(
    slug: 'fayoum-oasis-lodge',
    name: 'Fayoum Oasis Lodge',
    location: 'Faiyum',
    rating: 4.1,
    pricePerNight: 1250,
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    description:
        'A lakeside lodge near Lake Qarun, ideal for desert safaris and bird-watching.',
  ),
  Hotel(
    slug: 'beni-suef-grand',
    name: 'Beni Suef Grand Hotel',
    location: 'Beni Suef',
    rating: 3.7,
    pricePerNight: 820,
    imageUrl: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d',
    description:
        'A central hotel serving as a base for visiting nearby pyramids at Meidum.',
  ),
  Hotel(
    slug: 'minya-nile-hotel',
    name: 'Minya Nile Hotel',
    location: 'Minya',
    rating: 3.9,
    pricePerNight: 1050,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    description:
        'A riverside hotel ideal for visiting Minya\'s ancient tombs and monasteries.',
  ),
  Hotel(
    slug: 'asyut-palace',
    name: 'Asyut Palace Hotel',
    location: 'Asyut',
    rating: 3.8,
    pricePerNight: 980,
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    description: 'A central Upper Egypt hotel convenient for regional travel.',
  ),
  Hotel(
    slug: 'sohag-grand',
    name: 'Sohag Grand Hotel',
    location: 'Sohag',
    rating: 3.8,
    pricePerNight: 950,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description:
        'A comfortable stop for visitors exploring Sohag\'s ancient temples.',
  ),
  Hotel(
    slug: 'qena-nile-resort',
    name: 'Qena Nile Resort',
    location: 'Qena',
    rating: 4.0,
    pricePerNight: 1150,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    description:
        'A riverside resort near Dendera Temple, popular with Nile cruise travelers.',
  ),
  Hotel(
    slug: 'el-gouna-steigenberger',
    name: 'Steigenberger Golf Resort El Gouna',
    location: 'Red Sea',
    rating: 4.5,
    pricePerNight: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1582610116397-edb318620f90',
    description:
        'A lagoon-front resort in El Gouna with an 18-hole championship golf course.',
  ),
  Hotel(
    slug: 'marsa-alam-resort',
    name: 'Three Corners Fayrouz Plaza Marsa Alam',
    location: 'Red Sea',
    rating: 4.2,
    pricePerNight: 2100,
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    description:
        'A diving-focused resort on Marsa Alam\'s pristine coral coastline.',
  ),
  Hotel(
    slug: 'kharga-oasis-hotel',
    name: 'Kharga Oasis Hotel',
    location: 'New Valley',
    rating: 3.9,
    pricePerNight: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa9',
    description:
        'A desert oasis hotel surrounded by ancient Roman fortresses and date palms.',
  ),
  Hotel(
    slug: 'el-arish-resort',
    name: 'El Arish Resort',
    location: 'North Sinai',
    rating: 3.9,
    pricePerNight: 1300,
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    description:
        'A Mediterranean beach resort known for its palm groves and quiet shores.',
  ),
  Hotel(
    slug: 'st-catherine-monastery-lodge',
    name: 'St. Catherine Monastery Lodge',
    location: 'South Sinai',
    rating: 4.4,
    pricePerNight: 1700,
    imageUrl: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d',
    description:
        'A mountain lodge near the historic monastery, ideal for sunrise hikes up Mount Sinai.',
  ),
  Hotel(
    slug: 'nuweiba-coral-hotel',
    name: 'Nuweiba Coral Hotel',
    location: 'South Sinai',
    rating: 4.1,
    pricePerNight: 1450,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    description:
        'A laid-back beach hotel facing the Gulf of Aqaba, popular for windsurfing.',
  ),
  Hotel(
    slug: 'taba-heights-resort',
    name: 'Taba Heights Resort',
    location: 'South Sinai',
    rating: 4.5,
    pricePerNight: 2900,
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    description:
        'A self-contained resort town with mountains on one side and the Red Sea on the other.',
  ),
  Hotel(
    slug: 'el-quseir-heritage',
    name: 'El Quseir Heritage Hotel',
    location: 'Red Sea',
    rating: 4.2,
    pricePerNight: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description:
        'A restored Ottoman-era building turned boutique hotel in the historic port town.',
  ),
  Hotel(
    slug: 'safaga-dive-resort',
    name: 'Safaga Dive Resort',
    location: 'Red Sea',
    rating: 4.0,
    pricePerNight: 1600,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    description:
        'A quiet diving resort known for some of the clearest waters on the Red Sea coast.',
  ),
  Hotel(
    slug: 'soma-bay-kempinski',
    name: 'Kempinski Hotel Soma Bay',
    location: 'Red Sea',
    rating: 4.6,
    pricePerNight: 3700,
    imageUrl: 'https://images.unsplash.com/photo-1582610116397-edb318620f90',
    description:
        'A peninsula resort surrounded by sea on three sides, with an award-winning spa.',
  ),
  Hotel(
    slug: 'ain-sokhna-resort',
    name: 'Ain Sokhna Beach Resort',
    location: 'Suez',
    rating: 4.0,
    pricePerNight: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    description:
        'A weekend getaway resort along the Gulf of Suez, popular with Cairo residents.',
  ),
  Hotel(
    slug: 'ras-sedr-resort',
    name: 'Ras Sedr Beach Resort',
    location: 'South Sinai',
    rating: 3.9,
    pricePerNight: 1350,
    imageUrl: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa9',
    description:
        'A kite-surfing hotspot resort on the western coast of the Sinai Peninsula.',
  ),
];
