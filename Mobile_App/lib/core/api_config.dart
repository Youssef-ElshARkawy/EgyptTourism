/// ═══════════════════════════════════════════════════════════
///  EgyptXplore API Configuration
///  Change the URLs below based on your runtime environment
/// ═══════════════════════════════════════════════════════════
class ApiConfig {
  ApiConfig._(); // prevent instantiation

  // ── Android Emulator ──
  static const String baseUrl = "http://10.0.2.2:8000/api";
  static const String aiUrl = "http://10.0.2.2:5000";

  // ── iOS Simulator ──
  // static const String baseUrl = "http://127.0.0.1:8000/api";
  // static const String aiUrl = "http://127.0.0.1:5000";

  // ── Physical Device (replace with your PC's local IP) ──
  // static const String baseUrl = "http://192.168.1.X:8000/api";
  // static const String aiUrl = "http://192.168.1.X:5000";

  /// Request timeout duration
  static const Duration connectTimeout = Duration(seconds: 15);
  static const Duration receiveTimeout = Duration(seconds: 15);
}
