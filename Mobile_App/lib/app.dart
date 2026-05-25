import 'screens/splash_screen.dart';
import 'package:flutter/material.dart';

// ─── Theme Notifier (global state) ───────────────────────────
class ThemeNotifier extends ValueNotifier<ThemeMode> {
  ThemeNotifier() : super(ThemeMode.light);

  void toggle() {
    value = value == ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
  }
}

final themeNotifier = ThemeNotifier();

// ─── App Root ─────────────────────────────────────────────────
class EgyptTourismApp extends StatelessWidget {
  const EgyptTourismApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<ThemeMode>(
      valueListenable: themeNotifier,
      builder: (context, mode, _) {
        return MaterialApp(
          title: 'Egypt Tourism',
          debugShowCheckedModeBanner: false,
          theme: AppTheme.lightTheme,
          darkTheme: AppTheme.darkTheme,
          themeMode: mode,
          home: const SplashScreen(),
        );
      },
    );
  }
}

// ─── App Theme ────────────────────────────────────────────────
class AppTheme {
  // Brand Colors
  static const Color primary       = Color(0xFFC8973A);
  static const Color primaryDark   = Color(0xFF9B6E22);
  static const Color secondary     = Color(0xFF1A3C5E);
  static const Color accent        = Color(0xFFE8543C);
  static const Color background    = Color(0xFFF9F5EF);
  static const Color backgroundDk  = Color(0xFF111111);
  static const Color surface       = Color(0xFFFFFFFF);
  static const Color surfaceDk     = Color(0xFF1E1E1E);
  static const Color textPrimary   = Color(0xFF1C1C1E);
  static const Color textPrimaryDk = Color(0xFFF2F2F2);
  static const Color textSecondary = Color(0xFF6B6B6B);
  static const Color textSecDk     = Color(0xFF9CA3AF);
  static const Color divider       = Color(0xFFE5E0D8);
  static const Color dividerDk     = Color(0xFF2A2A2A);

  // ── Light Theme ──────────────────────────────────────────────
  static ThemeData get lightTheme => ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,
    scaffoldBackgroundColor: background,
    colorScheme: ColorScheme.fromSeed(
      seedColor: primary,
      brightness: Brightness.light,
      primary: primary,
      secondary: secondary,
      surface: surface,
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: surface,
      foregroundColor: textPrimary,
      elevation: 0,
      centerTitle: true,
      titleTextStyle: TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w600,
        color: textPrimary,
        letterSpacing: 0.5,
      ),
    ),
    textTheme: const TextTheme(
      displayLarge:  TextStyle(fontSize: 32, fontWeight: FontWeight.w700, color: textPrimary),
      titleLarge:    TextStyle(fontSize: 20, fontWeight: FontWeight.w600, color: textPrimary),
      bodyLarge:     TextStyle(fontSize: 15, color: textPrimary, height: 1.6),
      bodyMedium:    TextStyle(fontSize: 13, color: textSecondary, height: 1.5),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: primary,
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
      ),
    ),
    cardTheme: CardThemeData(
      color: surface,
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: const BorderSide(color: divider),
      ),
    ),
    bottomNavigationBarTheme: const BottomNavigationBarThemeData(
      backgroundColor: surface,
      selectedItemColor: primary,
      unselectedItemColor: textSecondary,
    ),
  );

  // ── Dark Theme ───────────────────────────────────────────────
  static ThemeData get darkTheme => ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    scaffoldBackgroundColor: backgroundDk,
    colorScheme: ColorScheme.fromSeed(
      seedColor: primary,
      brightness: Brightness.dark,
      primary: primary,
      secondary: secondary,
      surface: surfaceDk,
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: Color(0xFF1A1A1A),
      foregroundColor: textPrimaryDk,
      elevation: 0,
      centerTitle: true,
      titleTextStyle: TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w600,
        color: textPrimaryDk,
        letterSpacing: 0.5,
      ),
    ),
    textTheme: const TextTheme(
      displayLarge:  TextStyle(fontSize: 32, fontWeight: FontWeight.w700, color: textPrimaryDk),
      titleLarge:    TextStyle(fontSize: 20, fontWeight: FontWeight.w600, color: textPrimaryDk),
      bodyLarge:     TextStyle(fontSize: 15, color: textPrimaryDk, height: 1.6),
      bodyMedium:    TextStyle(fontSize: 13, color: textSecDk, height: 1.5),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: primary,
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
      ),
    ),
    cardTheme: CardThemeData(
      color: surfaceDk,
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: const BorderSide(color: dividerDk),
      ),
    ),
    bottomNavigationBarTheme: const BottomNavigationBarThemeData(
      backgroundColor: Color(0xFF1A1A1A),
      selectedItemColor: primary,
      unselectedItemColor: textSecDk,
    ),
  );
}

// ─── Spacing ──────────────────────────────────────────────────
class AppSpacing {
  static const double xs  = 4;
  static const double sm  = 8;
  static const double md  = 16;
  static const double lg  = 24;
  static const double xl  = 32;
  static const double xxl = 48;
}

// ─── Text Styles ──────────────────────────────────────────────
class AppTextStyles {
  static const sectionTitle = TextStyle(
    fontSize: 20,
    fontWeight: FontWeight.w700,
    color: AppTheme.textPrimary,
    letterSpacing: -0.3,
  );
  static const sectionSubtitle = TextStyle(
    fontSize: 13,
    color: AppTheme.textSecondary,
  );
  static const cardTitle = TextStyle(
    fontSize: 15,
    fontWeight: FontWeight.w600,
    color: Colors.white,
  );
  static const cardSubtitle = TextStyle(
    fontSize: 12,
    color: Colors.white70,
  );
  static const tag = TextStyle(
    fontSize: 11,
    fontWeight: FontWeight.w600,
    color: AppTheme.primary,
    letterSpacing: 0.5,
  );
}