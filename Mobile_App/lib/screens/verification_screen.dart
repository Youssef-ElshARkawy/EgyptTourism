import 'package:flutter/material.dart';
import 'reset_password_screen.dart';

class VerificationScreen extends StatefulWidget {

  final String email;

  const VerificationScreen({
    super.key,
    required this.email,
  });

  @override
  State<VerificationScreen> createState() =>
      _VerificationScreenState();
}

class _VerificationScreenState
    extends State<VerificationScreen> {

  final List<TextEditingController> controllers =
  List.generate(6, (index) => TextEditingController());

  bool hasCode = false;

  void checkCode() {

    String code = controllers
        .map((e) => e.text)
        .join();

    setState(() {
      hasCode = code.isNotEmpty;
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      backgroundColor: Colors.black,

      body: Center(
        child: SingleChildScrollView(

          child: Container(
            margin: const EdgeInsets.all(18),
            padding: const EdgeInsets.all(24),

            decoration: BoxDecoration(
              color: const Color(0xff0B0B15),

              borderRadius: BorderRadius.circular(22),

              border: Border.all(
                color: Colors.white10,
              ),
            ),

            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [

                GestureDetector(
                  onTap: () {
                    Navigator.pop(context);
                  },

                  child: const Row(
                    children: [

                      Icon(
                        Icons.arrow_back,
                        color: Colors.white70,
                        size: 20,
                      ),

                      SizedBox(width: 6),

                      Text(
                        "Back",
                        style: TextStyle(
                          color: Colors.white70,
                          fontSize: 14,
                        ),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 35),

                Center(
                  child: RichText(
                    text: const TextSpan(
                      children: [

                        TextSpan(
                          text: 'Egypt',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 38,
                            fontWeight: FontWeight.bold,
                          ),
                        ),

                        TextSpan(
                          text: 'Xplore',
                          style: TextStyle(
                            color: Color(0xff00C853),
                            fontSize: 38,
                            fontWeight: FontWeight.bold,
                          ),
                        ),

                      ],
                    ),
                  ),
                ),

                const SizedBox(height: 15),

                const Center(
                  child: Text(
                    "Enter Verification Code",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),

                const SizedBox(height: 22),

                Center(
                  child: Column(
                    children: [

                      const Text(
                        "We've sent a 6-digit code to",
                        style: TextStyle(
                          color: Colors.white70,
                          fontSize: 15,
                        ),
                      ),

                      const SizedBox(height: 5),

                      Text(
                        widget.email,
                        style: const TextStyle(
                          color: Color(0xff00C853),
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 35),

                const Text(
                  "VERIFICATION CODE",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1,
                  ),
                ),

                const SizedBox(height: 15),

                Row(
                  mainAxisAlignment:
                  MainAxisAlignment.spaceBetween,

                  children: List.generate(6, (index) {

                    return SizedBox(
                      width: 42,
                      height: 55,

                      child: TextField(
                        controller: controllers[index],

                        onChanged: (value) {

                          checkCode();

                          if (value.isNotEmpty &&
                              index < 5) {

                            FocusScope.of(context)
                                .nextFocus();
                          }
                        },

                        textAlign: TextAlign.center,

                        keyboardType: TextInputType.number,

                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),

                        decoration: InputDecoration(

                          filled: true,
                          fillColor:
                          const Color(0xff141420),

                          border: OutlineInputBorder(
                            borderRadius:
                            BorderRadius.circular(10),
                          ),
                        ),
                      ),
                    );
                  }),
                ),

                const SizedBox(height: 35),

                SizedBox(
                  width: double.infinity,
                  height: 56,

                  child: ElevatedButton(

                    style: ElevatedButton.styleFrom(
                      backgroundColor:
                      const Color(0xff00C853),

                      shape: RoundedRectangleBorder(
                        borderRadius:
                        BorderRadius.circular(12),
                      ),
                    ),

                    onPressed: hasCode
                        ? () {

                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) =>
                          const ResetPasswordScreen(),
                        ),
                      );

                    }
                        : null,

                    child: const Text(
                      "Verify Code",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),

                const SizedBox(height: 25),

                Center(
                  child: Row(
                    mainAxisAlignment:
                    MainAxisAlignment.center,

                    children: [

                      const Text(
                        "Didn't receive the code?",
                        style: TextStyle(
                          color: Colors.white70,
                        ),
                      ),

                      TextButton(
                        onPressed: () {},

                        child: const Text(
                          "Resend",
                          style: TextStyle(
                            color: Color(0xff00C853),
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),

              ],
            ),
          ),
        ),
      ),
    );
  }
}