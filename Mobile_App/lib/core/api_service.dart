import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'api_config.dart';

/// ═══════════════════════════════════════════════════════════
///  EgyptXplore API Service
///  Handles all communication with the Laravel backend
///  and the Flask AI recommendation engine.
/// ═══════════════════════════════════════════════════════════
class ApiService {
  late final Dio _dio;
  final FlutterSecureStorage _storage = const FlutterSecureStorage();
  static const String _tokenKey = 'auth_token';

  ApiService() {
    _dio = Dio(BaseOptions(
      baseUrl: ApiConfig.baseUrl,
      connectTimeout: ApiConfig.connectTimeout,
      receiveTimeout: ApiConfig.receiveTimeout,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    ));

    // Automatically attach Bearer token to every request
    _dio.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) async {
        final token = await _storage.read(key: _tokenKey);
        if (token != null) {
          options.headers['Authorization'] = 'Bearer $token';
        }
        return handler.next(options);
      },
      onError: (error, handler) {
        if (error.response?.statusCode == 401) {
          // Token expired or invalid — clear it
          _storage.delete(key: _tokenKey);
        }
        return handler.next(error);
      },
    ));
  }

  // ─────────────────────────────────────────────────────────
  //  Token Management
  // ─────────────────────────────────────────────────────────

  Future<void> saveToken(String token) async =>
      await _storage.write(key: _tokenKey, value: token);

  Future<void> clearToken() async => await _storage.delete(key: _tokenKey);

  Future<bool> isLoggedIn() async =>
      (await _storage.read(key: _tokenKey)) != null;

  Future<String?> getToken() async => await _storage.read(key: _tokenKey);

  // ─────────────────────────────────────────────────────────
  //  1. Health Check
  // ─────────────────────────────────────────────────────────

  Future<Response> ping() => _dio.get('/ping');

  // ─────────────────────────────────────────────────────────
  //  2. Authentication
  // ─────────────────────────────────────────────────────────

  /// Register a new user account.
  /// Token is automatically stored on success.
  Future<Response> register({
    required String name,
    required String email,
    required String password,
    required String passwordConfirmation,
  }) async {
    final response = await _dio.post('/auth/register', data: {
      'name': name,
      'email': email,
      'password': password,
      'password_confirmation': passwordConfirmation,
    });
    if (response.data['token'] != null) {
      await saveToken(response.data['token']);
    }
    return response;
  }

  /// Login with email & password.
  /// Token is automatically stored on success.
  Future<Response> login({
    required String email,
    required String password,
  }) async {
    final response = await _dio.post('/auth/login', data: {
      'email': email,
      'password': password,
    });
    if (response.data['token'] != null) {
      await saveToken(response.data['token']);
    }
    return response;
  }

  /// Logout current user and delete stored token.
  Future<Response> logout() async {
    final response = await _dio.post('/auth/logout');
    await clearToken();
    return response;
  }

  /// Get the currently authenticated user's profile.
  Future<Response> getCurrentUser() => _dio.get('/auth/user');

  // ─────────────────────────────────────────────────────────
  //  3. Governorates
  // ─────────────────────────────────────────────────────────

  /// Fetch all governorates with place/hotel counts.
  Future<Response> getGovernorates() => _dio.get('/governorates');

  /// Fetch a single governorate's details by its slug.
  Future<Response> getGovernorate(String slug) =>
      _dio.get('/governorates/$slug');

  // ─────────────────────────────────────────────────────────
  //  4. Places
  // ─────────────────────────────────────────────────────────

  /// Fetch paginated list of tourist places.
  /// Optional filters: [governorate] slug, [category], [perPage], [page].
  Future<Response> getPlaces({
    String? governorate,
    String? category,
    int? perPage,
    int? page,
  }) {
    final params = <String, dynamic>{};
    if (governorate != null) params['governorate'] = governorate;
    if (category != null) params['category'] = category;
    if (perPage != null) params['per_page'] = perPage;
    if (page != null) params['page'] = page;
    return _dio.get('/places', queryParameters: params);
  }

  /// Fetch single place details by slug.
  Future<Response> getPlace(String slug) => _dio.get('/places/$slug');

  /// Search places by query string (min 2 chars).
  Future<Response> searchPlaces(String query) =>
      _dio.get('/places/search', queryParameters: {'q': query});

  /// Get list of unique place categories for filter chips.
  Future<Response> getCategories() => _dio.get('/places/categories');

  // ─────────────────────────────────────────────────────────
  //  5. Hotels
  // ─────────────────────────────────────────────────────────

  /// Fetch paginated list of hotels.
  /// Optional filters: [governorate], [minRating], [sort], [perPage], [page].
  Future<Response> getHotels({
    String? governorate,
    double? minRating,
    String? sort, // 'rating' or 'name'
    int? perPage,
    int? page,
  }) {
    final params = <String, dynamic>{};
    if (governorate != null) params['governorate'] = governorate;
    if (minRating != null) params['min_rating'] = minRating;
    if (sort != null) params['sort'] = sort;
    if (perPage != null) params['per_page'] = perPage;
    if (page != null) params['page'] = page;
    return _dio.get('/hotels', queryParameters: params);
  }

  /// Fetch single hotel details by slug (includes rooms, reviews, amenities).
  Future<Response> getHotel(String slug) => _dio.get('/hotels/$slug');

  /// Search hotels by query string (min 2 chars).
  Future<Response> searchHotels(String query) =>
      _dio.get('/hotels/search', queryParameters: {'q': query});

  // ─────────────────────────────────────────────────────────
  //  6. Hotel Reviews
  // ─────────────────────────────────────────────────────────

  /// Fetch paginated reviews for a hotel.
  Future<Response> getHotelReviews(
    String hotelSlug, {
    int? perPage,
    int? page,
  }) {
    final params = <String, dynamic>{};
    if (perPage != null) params['per_page'] = perPage;
    if (page != null) params['page'] = page;
    return _dio.get('/hotels/$hotelSlug/reviews', queryParameters: params);
  }

  /// Post a review for a hotel. 🔐 Requires authentication.
  Future<Response> postReview(
    String hotelSlug, {
    required int rating,
    required String comment,
  }) =>
      _dio.post('/hotels/$hotelSlug/reviews', data: {
        'rating': rating,
        'comment': comment,
      });

  // ─────────────────────────────────────────────────────────
  //  7. Wishlist 🔐
  // ─────────────────────────────────────────────────────────

  /// Get all wishlisted places.
  Future<Response> getWishlist() => _dio.get('/wishlist');

  /// Add a place to the wishlist by its slug.
  Future<Response> addToWishlist(String placeSlug) =>
      _dio.post('/wishlist', data: {'place_id': placeSlug});

  /// Remove a place from the wishlist by its slug.
  Future<Response> removeFromWishlist(String placeSlug) =>
      _dio.delete('/wishlist/$placeSlug');

  /// Check if a specific place is in the user's wishlist.
  /// Returns `{ "wishlisted": true/false }`.
  Future<Response> isWishlisted(String placeSlug) =>
      _dio.get('/wishlist/check/$placeSlug');

  // ─────────────────────────────────────────────────────────
  //  8. Cart 🔐
  // ─────────────────────────────────────────────────────────

  /// Get all cart items with subtotal, taxes, and total.
  Future<Response> getCart() => _dio.get('/cart');

  /// Add a hotel room to the cart.
  ///
  /// [hotelSlug] — hotel's slug (e.g. "marriott-mena-house")
  /// [roomId]    — room's integer ID (from hotel details)
  /// [checkIn]   — format: "2026-06-05"
  /// [checkOut]  — format: "2026-06-08"
  /// [guests]    — number of guests
  Future<Response> addToCart({
    required String hotelSlug,
    required int roomId,
    required String checkIn,
    required String checkOut,
    required int guests,
  }) =>
      _dio.post('/cart', data: {
        'hotel_id': hotelSlug,
        'room_id': roomId,
        'check_in': checkIn,
        'check_out': checkOut,
        'guests': guests,
      });

  /// Remove a single item from the cart.
  Future<Response> removeFromCart(int cartItemId) =>
      _dio.delete('/cart/$cartItemId');

  /// Clear the entire cart.
  Future<Response> clearCart() => _dio.delete('/cart');

  // ─────────────────────────────────────────────────────────
  //  9. Bookings 🔐
  // ─────────────────────────────────────────────────────────

  /// List all bookings for the current user.
  Future<Response> getBookings() => _dio.get('/bookings');

  /// Create a booking from a cart item.
  Future<Response> bookFromCart(int cartItemId) =>
      _dio.post('/bookings', data: {'cart_item_id': cartItemId});

  /// Create a booking directly (bypass cart).
  Future<Response> bookDirect({
    required String hotelSlug,
    required int roomId,
    required String checkIn,
    required String checkOut,
    required int guests,
  }) =>
      _dio.post('/bookings', data: {
        'hotel_id': hotelSlug,
        'room_id': roomId,
        'check_in': checkIn,
        'check_out': checkOut,
        'guests': guests,
      });

  /// Get details of a specific booking by its ID (e.g. "B-00004").
  Future<Response> getBooking(String bookingId) =>
      _dio.get('/bookings/$bookingId');

  /// Cancel a booking by its ID.
  Future<Response> cancelBooking(String bookingId) =>
      _dio.patch('/bookings/$bookingId/cancel');

  // ─────────────────────────────────────────────────────────
  //  10. Global Search
  // ─────────────────────────────────────────────────────────

  /// Search across both places and hotels simultaneously.
  /// Results include a `type` field: "place" or "hotel".
  Future<Response> globalSearch(String query) =>
      _dio.get('/search', queryParameters: {'q': query});

  // ─────────────────────────────────────────────────────────
  //  11. AI Recommendations (Flask)
  // ─────────────────────────────────────────────────────────

  /// Get AI-powered trip recommendations based on budget.
  /// Connects to the Flask service, NOT the Laravel backend.
  Future<Response> getAIRecommendations(double budget) {
    final aiDio = Dio(BaseOptions(
      baseUrl: ApiConfig.aiUrl,
      connectTimeout: ApiConfig.connectTimeout,
      receiveTimeout: ApiConfig.receiveTimeout,
      headers: {'Content-Type': 'application/json'},
    ));
    return aiDio.post('/recommend', data: {'budget': budget});
  }
}
