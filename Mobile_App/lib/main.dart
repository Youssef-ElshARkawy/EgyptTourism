import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';

void main() {
  runApp(const EgyptTourismApp());
}

class EgyptTourismApp extends StatelessWidget {
  const EgyptTourismApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: Colors.black,
        fontFamily: 'Roboto',
      ),
      home: const SplashScreen(),
    );
  }
}