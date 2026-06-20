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

  Hotel({
    required this.slug,
    required this.name,
    required this.location,
    required this.rating,
    required this.pricePerNight,
    required this.imageUrl,
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
    );
  }
}

/// Placeholder hotels — used until the real backend server is running.
/// Replace the call site (HotelsScreen) with a real API call later;
/// this list will simply be deleted at that point.
final List<Hotel> placeholderHotels = [
  Hotel(
    slug: 'marriott-mena-house',
    name: 'Marriott Mena House',
    location: 'Giza',
    rating: 4.8,
    pricePerNight: 4200,
    imageUrl: 'assets/Governrates/Giza.jpg',
  ),
  Hotel(
    slug: 'sofitel-winter-palace',
    name: 'Sofitel Winter Palace',
    location: 'Luxor',
    rating: 4.7,
    pricePerNight: 3600,
    imageUrl: 'assets/Governrates/Luxor.jpg',
  ),
  Hotel(
    slug: 'movenpick-aswan',
    name: 'Mövenpick Resort',
    location: 'Aswan',
    rating: 4.6,
    pricePerNight: 2900,
    imageUrl: 'assets/Governrates/Aswan.jpg',
  ),
  Hotel(
    slug: 'four-seasons-alex',
    name: 'Four Seasons San Stefano',
    location: 'Alexandria',
    rating: 4.9,
    pricePerNight: 5100,
    imageUrl: 'assets/Governrates/Alexandria.jpg',
  ),
];
