import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { ArrowLeft } from "lucide-react";
import RegistrationPopup from "./RegistrationPopup";
import { branches } from "../data/branches";

const courseData = {
  "50-day-camp": {
    title: "50 Day Camp",
    subtitle: "Intensive English Diploma",
    image: "/images/3.png",
    courseDuration: "50 Days",
    minimumAge: "Over 16",
    courseHours: "200 hours",
    courseStructure: "Intensive General English",
    description: {
      en: [
        "This 50-day intensive Diploma is designed for rapid English language acquisition, providing an immersive learning experience that fast-tracks your progress.",
        "Our teaching approach focuses on critical thinking and practical application, incorporating real-life scenarios and interactive learning methodologies.",
        "This accelerated program combines comprehensive language skills with practical communication exercises, ensuring students develop confidence in English usage across all contexts."
      ],
      si: [
        "මෙම දින 50 ක තීව්‍ර ඩිප්ලෝමාව ඉංග්‍රීසි භාෂාව ඉක්මනින් ඉගෙනීම සඳහා නිර්මාණය කර ඇති අතර, ඔබේ ප්‍රගතිය වේගවත් කරන ගැබ්වීමේ ඉගෙනීමේ අත්දැකීමක් සපයයි.",
        "අපගේ ඉගැන්වීමේ ප්‍රවේශය විවේචනාත්මක චින්තනය සහ ප්‍රායෝගික යෙදීම කෙරෙහි අවධානය යොමු කරන අතර, සැබෑ ජීවිත තත්වයන් සහ අන්තර්ක්‍රියාකාරී ඉගෙනීමේ ක්‍රමවේද ඇතුළත් කරයි.",
        "මෙම වේගවත් වැඩසටහන සවිස්තරාත්මක භාෂා කුසලතා ප්‍රායෝගික සන්නිවේදන අභ්‍යාස සමඟ ඒකාබද්ධ කරන අතර, සියලුම සන්දර්භයන්හි ඉංග්‍රීසි භාවිතයේ විශ්වාසය ශිෂ්‍යයන් වර්ධනය කරන බවට සහතික කරයි."
      ]
    },
    suitableFor: {
      en: [
        "Students and professionals seeking rapid English language improvement",
        "Individuals preparing for international opportunities or exams",
        "Those who want an immersive, intensive learning experience",
        "People looking to build confidence in English communication quickly"
      ],
      si: [
        "ඉංග්‍රීසි භාෂාව වේගයෙන් වැඩිදියුණු කිරීමට අවශ්‍ය සිසුන් සහ වෘත්තිකයන්",
        "ජාත්‍යන්තර අවස්ථා හෝ විභාග සඳහා සූදානම් වන පුද්ගලයන්",
        "ගැබ්වීමේ, තීව්‍ර ඉගෙනීමේ අත්දැකීමක් අවශ්‍ය අය",
        "ඉංග්‍රීසි සන්නිවේදනයේ විශ්වාසය ඉක්මනින් ගොඩනැගීමට අවශ්‍ය අය"
      ]
    },
    skillsDeveloped: {
      en: [
        "Fluency in spoken English across various contexts",
        "Enhanced listening and comprehension skills",
        "Critical thinking and analytical abilities",
        "Practical communication skills for real-world situations",
        "Confidence in professional and academic English usage"
      ],
      si: [
        "විවිධ සන්දර්භයන්හි කතා කරන ඉංග්‍රීසියේ සාර්ථකත්වය",
        "වැඩිදියුණු කළ සවන් දීමේ සහ අවබෝධ කිරීමේ කුසලතා",
        "විවේචනාත්මක චින්තනය සහ විශ්ලේෂණ හැකියාවන්",
        "සැබෑ ලෝක තත්වයන් සඳහා ප්‍රායෝගික සන්නිවේදන කුසලතා",
        "වෘත්තීය සහ ශාස්ත්‍රීය ඉංග්‍රීසි භාවිතයේ විශ්වාසය"
      ]
    }
  },
  "weekday-2month": {
    title: "Weekday Diploma",
    subtitle: "Two Month English Diploma",
    image: "/images/1.png",
    courseDuration: "2 Months",
    minimumAge: "Over 16",
    courseHours: "320 hours",
    courseStructure: "General English",
    description: {
      en: [
        "This 2-month Diploma is considered a professional language qualification certificate that is recognized and accepted by all top-rated companies as well as foreign employment agencies in Sri Lanka.",
        "This English course is much more than reciting words in a classroom. Its teaching approach focuses on critical thinking, as well as group and project work - all drawn from real-life experiences not only by learning the language, but also learning how to use it in everyday life guided by well-qualified foreign & local English teachers maintaining a high-quality teaching adopting a unique teaching methodology.",
        "This fast-track program is not just about memorizing words or grammar rules - it's about learning how to use English in real-life situations. The course emphasizes critical thinking, interactive group activities, and project-based learning, ensuring students develop practical communication skills."
      ],
      si: [
        "මෙම මාස 2 ක ඩිප්ලෝමාව වෘත්තීය භාෂා සුදුසුකම් සහතිකයක් ලෙස සැලකේ, එය ශ්‍රී ලංකාවේ සියලුම ශ්‍රේණිගත සමාගම් මෙන්ම විදේශීය රැකියා ඒජන්සි විසින් පිළිගනු ලැබේ.",
        "මෙම ඉංග්‍රීසි පාඨමාලාව පන්ති කාමරයක වචන කියවීමට වඩා වැඩිය. එහි ඉගැන්වීමේ ප්‍රවේශය විවේචනාත්මක චින්තනය මෙන්ම කණ්ඩායම් සහ ව්‍යාපෘති කටයුතු කෙරෙහි අවධානය යොමු කරයි - සියල්ලම සැබෑ ජීවිත අත්දැකීම් වලින් උකහා ගනු ලැබේ, භාෂාව ඉගෙනීම පමණක් නොව, සුදුසුකම් ලත් විදේශීය සහ දේශීය ඉංග්‍රීසි ගුරුවරුන්ගේ මඟ පෙන්වීම යටතේ එය දෛනික ජීවිතයේදී භාවිතා කරන්නේ කෙසේදැයි ඉගෙනීම, අද්විතීය ඉගැන්වීමේ ක්‍රමවේදයක් අනුගමනය කරමින් උසස් තත්ත්වයේ ඉගැන්වීමක් පවත්වයි.",
        "මෙම වේගවත් වැඩසටහන වචන හෝ ව්‍යාකරණ නීති කටපාඩම් කිරීම පමණක් නොවේ - එය සැබෑ ජීවිත තත්වයන්හිදී ඉංග්‍රීසි භාවිතා කරන්නේ කෙසේදැයි ඉගෙනීමයි. පාඨමාලාව විවේචනාත්මක චින්තනය, අන්තර්ක්‍රියාකාරී කණ්ඩායම් ක්‍රියාකාරකම් සහ ව්‍යාපෘති මත පදනම් වූ ඉගෙනීම අවධාරණය කරන අතර, ශිෂ්‍යයන් ප්‍රායෝගික සන්නිවේදන කුසලතා වර්ධනය කරන බවට සහතික කරයි."
      ]
    },
    suitableFor: {
      en: [
        "Working professionals seeking recognized English qualifications",
        "Students preparing for higher education or career advancement",
        "Individuals looking for professional language certification",
        "Those who want comprehensive English training with industry recognition"
      ],
      si: [
        "පිළිගත් ඉංග්‍රීසි සුදුසුකම් සොයන වැඩ කරන වෘත්තිකයන්",
        "උසස් අධ්‍යාපනය හෝ වෘත්තීය දියුණුව සඳහා සූදානම් වන සිසුන්",
        "වෘත්තීය භාෂා සහතිකයක් සොයන පුද්ගලයන්",
        "කර්මාන්ත පිළිගැනීමක් සහිත සවිස්තරාත්මක ඉංග්‍රීසි පුහුණුවක් අවශ්‍ය අය"
      ]
    },
    skillsDeveloped: {
      en: [
        "Professional English communication skills",
        "Critical thinking and problem-solving abilities",
        "Group collaboration and project management skills",
        "Real-world English application in professional contexts",
        "Industry-recognized language qualification"
      ],
      si: [
        "වෘත්තීය ඉංග්‍රීසි සන්නිවේදන කුසලතා",
        "විවේචනාත්මක චින්තනය සහ ගැටළු විසඳීමේ හැකියාවන්",
        "කණ්ඩායම් සහයෝගීතාවය සහ ව්‍යාපෘති කළමනාකරණ කුසලතා",
        "වෘත්තීය සන්දර්භයන්හි සැබෑ ලෝක ඉංග්‍රීසි යෙදීම",
        "කර්මාන්තය විසින් පිළිගත් භාෂා සුදුසුකම"
      ]
    }
  },
  "weekday-3month": {
    title: "Weekday Diploma",
    subtitle: "Three Month English Diploma",
    image: "/images/2.png",
    courseDuration: "3 Months",
    minimumAge: "Over 16",
    courseHours: "480 hours",
    courseStructure: "Comprehensive General English",
    description: {
      en: [
        "Our 3-month Weekday Diploma offers a comprehensive English language learning experience, perfect for those seeking in-depth language mastery.",
        "The program combines theoretical knowledge with extensive practical application, featuring regular assessments and personalized feedback to ensure steady progress.",
        "Students benefit from our proven methodology that emphasizes all four key language skills: speaking, listening, reading, and writing, complemented by real-world applications and cultural understanding."
      ],
      si: [
        "අපගේ මාස 3 ක සතියේ දින ඩිප්ලෝමාව සවිස්තරාත්මක ඉංග්‍රීසි භාෂා ඉගෙනීමේ අත්දැකීමක් ලබා දෙන අතර, ගැඹුරු භාෂා ප්‍රගුණයක් සොයන අයට සරිලන එකකි.",
        "වැඩසටහන න්‍යායික දැනුම පුළුල් ප්‍රායෝගික යෙදීම සමඟ ඒකාබද්ධ කරන අතර, ස්ථාවර ප්‍රගතිය සහතික කිරීම සඳහා නිතිපතා තක්සේරු කිරීම් සහ පුද්ගලීකෘත ප්‍රතිචාර ඇතුළත් වේ.",
        "ශිෂ්‍යයන් අපගේ ඔප්පු කරන ලද ක්‍රමවේදයෙන් ප්‍රයෝජන ලබන අතර, එය සියලුම ප්‍රධාන භාෂා කුසලතා අවධාරණය කරයි: කතා කිරීම, සවන් දීම, කියවීම සහ ලිවීම, සැබෑ ලෝක යෙදීම් සහ සංස්කෘතික අවබෝධයෙන් පොහොසත් වේ."
      ]
    },
    suitableFor: {
      en: [
        "Students seeking comprehensive English language mastery",
        "Individuals wanting in-depth language learning experience",
        "Those preparing for advanced English proficiency requirements",
        "Learners who prefer structured, thorough language training"
      ],
      si: [
        "සවිස්තරාත්මක ඉංග්‍රීසි භාෂා ප්‍රගුණයක් සොයන සිසුන්",
        "ගැඹුරු භාෂා ඉගෙනීමේ අත්දැකීමක් අවශ්‍ය පුද්ගලයන්",
        "උසස් ඉංග්‍රීසි දක්ෂතා අවශ්‍යතා සඳහා සූදානම් වන අය",
        "ව්‍යුහගත, සවිස්තරාත්මක භාෂා පුහුණුවක් කැමති ඉගෙනුම්කරුවන්"
      ]
    },
    skillsDeveloped: {
      en: [
        "Mastery of all four language skills: speaking, listening, reading, writing",
        "Advanced comprehension and analytical thinking",
        "Cultural awareness and cross-cultural communication",
        "Academic and professional English proficiency",
        "Confidence in complex language situations"
      ],
      si: [
        "සියලුම භාෂා කුසලතා හතරේ ප්‍රගුණය: කතා කිරීම, සවන් දීම, කියවීම, ලිවීම",
        "උසස් අවබෝධය සහ විශ්ලේෂණාත්මක චින්තනය",
        "සංස්කෘතික දැනුවත්භාවය සහ අන්තර් සංස්කෘතික සන්නිවේදනය",
        "ශාස්ත්‍රීය සහ වෘත්තීය ඉංග්‍රීසි දක්ෂතාව",
        "සංකීර්ණ භාෂා තත්වයන්හි විශ්වාසය"
      ]
    }
  },
  "weekend-diploma": {
    title: "Weekend Diploma",
    subtitle: "Weekend English Course",
    image: "/images/4.png",
    courseDuration: "6 Months",
    minimumAge: "Over 16",
    courseHours: "240 hours",
    courseStructure: "Flexible General English",
    description: {
      en: [
        "Our Weekend Diploma is specially designed for working professionals and students who need a flexible learning schedule without compromising on quality.",
        "The course delivers the same high-quality content as our weekday programs, adapted to fit weekend scheduling while maintaining our interactive and practical approach to language learning.",
        "Perfect for those balancing work or studies with English language learning, this program ensures comprehensive coverage of all essential language skills with convenient weekend scheduling."
      ],
      si: [
        "අපගේ සති අන්ත ඩිප්ලෝමාව විශේෂයෙන්ම වැඩ කරන වෘත්තිකයන් සහ ගුණාත්මකභාවයට අඩුවක් නොකරමින් නම්යශීලී ඉගෙනීමේ කාලසටහනක් අවශ්‍ය සිසුන් සඳහා නිර්මාණය කර ඇත.",
        "පාඨමාලාව අපගේ සතියේ දින වැඩසටහන් වලට සමාන උසස් තත්ත්වයේ අන්තර්ගතයක් ලබා දෙන අතර, භාෂා ඉගෙනීම සඳහා අපගේ අන්තර්ක්‍රියාකාරී සහ ප්‍රායෝගික ප්‍රවේශය පවත්වා ගනිමින් සති අන්ත කාලසටහනට ගැලපෙන පරිදි අනුවර්තනය කර ඇත.",
        "රැකියාව හෝ අධ්‍යයනය ඉංග්‍රීසි භාෂා ඉගෙනීම සමඟ සමතුලිත කරන අයට සරිලන, මෙම වැඩසටහන සුවිශේෂී සති අන්ත කාලසටහනක් සමඟ සියලුම අත්‍යවශ්‍ය භාෂා කුසලතාවල සවිස්තරාත්මක ආවරණයක් සහතික කරයි."
      ]
    },
    suitableFor: {
      en: [
        "Working professionals with weekday commitments",
        "Students balancing studies and English learning",
        "Individuals needing flexible weekend learning schedules",
        "Those who cannot attend weekday classes"
      ],
      si: [
        "සතියේ දින යුතුකම් ඇති වැඩ කරන වෘත්තිකයන්",
        "අධ්‍යයනය සහ ඉංග්‍රීසි ඉගෙනීම සමතුලිත කරන සිසුන්",
        "නම්යශීලී සති අන්ත ඉගෙනීමේ කාලසටහනක් අවශ්‍ය පුද්ගලයන්",
        "සතියේ දින පන්තිවලට සහභාගී විය නොහැකි අය"
      ]
    },
    skillsDeveloped: {
      en: [
        "Flexible learning and time management skills",
        "Comprehensive English language proficiency",
        "Weekend-based learning discipline",
        "Balanced work-study-life integration",
        "All essential English communication skills"
      ],
      si: [
        "නම්යශීලී ඉගෙනීම සහ කාල කළමනාකරණ කුසලතා",
        "සවිස්තරාත්මක ඉංග්‍රීසි භාෂා දක්ෂතාව",
        "සති අන්ත මත පදනම් වූ ඉගෙනීමේ විනය",
        "සමතුලිත වැඩ-අධ්‍යයන-ජීවිත ඒකාබද්ධ කිරීම",
        "සියලුම අත්‍යවශ්‍ය ඉංග්‍රීසි සන්නිවේදන කුසලතා"
      ]
    }
  },
  "night-class": {
    title: "Night Class",
    subtitle: "Evening English Course",
    image: "/images/course card.jpg",
    courseDuration: "4 Months",
    minimumAge: "Over 16",
    courseHours: "160 hours",
    courseStructure: "Evening General English",
    description: {
      en: [
        "Our Evening English course is tailored for busy professionals and students who prefer to study after work or regular school hours.",
        "The program maintains our high teaching standards while offering the flexibility of evening classes, perfect for those with daytime commitments.",
        "Students receive comprehensive language training with a focus on practical communication skills and business English applications."
      ],
      si: [
        "අපගේ සවස් ඉංග්‍රීසි පාඨමාලාව කාර්යබහුල වෘත්තිකයන් සහ වැඩ කිරීමෙන් හෝ නිත්‍ය පාසල් පැයවලින් පසු අධ්‍යයනය කිරීමට කැමති සිසුන් සඳහා සකස් කර ඇත.",
        "වැඩසටහන දිවා කාලයේ යුතුකම් ඇති අයට සරිලන, සවස් පන්තිවල නම්යශීලීත්වය ලබා දෙමින් අපගේ උසස් ඉගැන්වීමේ ප්‍රමිති පවත්වා ගනී.",
        "ශිෂ්‍යයන් ප්‍රායෝගික සන්නිවේදන කුසලතා සහ ව්‍යාපාර ඉංග්‍රීසි යෙදීම් කෙරෙහි අවධානය යොමු කරමින් සවිස්තරාත්මක භාෂා පුහුණුවක් ලබා ගනී."
      ]
    },
    suitableFor: {
      en: [
        "Busy professionals with daytime work commitments",
        "Students with evening study preferences",
        "Individuals seeking after-hours English learning",
        "Those who prefer evening class schedules"
      ],
      si: [
        "දිවා කාලයේ වැඩ යුතුකම් ඇති කාර්යබහුල වෘත්තිකයන්",
        "සවස් අධ්‍යයන මනාප ඇති සිසුන්",
        "වැඩ පැයවලින් පසු ඉංග්‍රීසි ඉගෙනීම සොයන පුද්ගලයන්",
        "සවස් පන්ති කාලසටහන් කැමති අය"
      ]
    },
    skillsDeveloped: {
      en: [
        "Evening learning discipline and commitment",
        "Business and professional English communication",
        "Practical communication skills for workplace",
        "Time management for evening studies",
        "Professional English proficiency"
      ],
      si: [
        "සවස් ඉගෙනීමේ විනය සහ කැපවීම",
        "ව්‍යාපාර සහ වෘත්තීය ඉංග්‍රීසි සන්නිවේදනය",
        "වැඩ ස්ථානය සඳහා ප්‍රායෝගික සන්නිවේදන කුසලතා",
        "සවස් අධ්‍යයන සඳහා කාල කළමනාකරණය",
        "වෘත්තීය ඉංග්‍රීසි දක්ෂතාව"
      ]
    }
  },
  "online-diploma": {
    title: "Online Diploma",
    subtitle: "Virtual English Course",
    image: "/images/5.png",
    courseDuration: "3 Months",
    minimumAge: "Over 16",
    courseHours: "Virtual Learning",
    courseStructure: "Online Interactive English",
    description: {
      en: [
        "Our Online Diploma brings British Way's excellence in English education to the digital sphere, offering flexibility and convenience without compromising on quality.",
        "The course utilizes cutting-edge virtual learning tools and interactive sessions to ensure engaging and effective language learning from anywhere.",
        "Students benefit from our proven methodology adapted for online delivery, with regular live sessions, interactive materials, and continuous assessment."
      ],
      si: [
        "අපගේ මාර්ගගත ඩිප්ලෝමාව බ්‍රිතාන්‍ය මාර්ගයේ ඉංග්‍රීසි අධ්‍යාපනයේ උත්තරීතරත්වය ඩිජිටල් ක්ෂේත්‍රයට ගෙන එන අතර, ගුණාත්මකභාවයට අඩුවක් නොකරමින් නම්යශීලීත්වය සහ පහසුව සපයයි.",
        "පාඨමාලාව නවීන තාක්ෂණික අතථ්‍ය ඉගෙනීමේ මෙවලම් සහ අන්තර්ක්‍රියාකාරී සැසි භාවිතා කරන අතර, කොතැනක සිට වුවද ආකර්ෂණීය සහ ඵලදායී භාෂා ඉගෙනීම සහතික කරයි.",
        "ශිෂ්‍යයන් අපගේ ඔප්පු කරන ලද ක්‍රමවේදයෙන් ප්‍රයෝජන ලබන අතර, එය මාර්ගගත ලබා දීම සඳහා අනුවර්තනය කර ඇති අතර, නිතිපතා සජීවී සැසි, අන්තර්ක්‍රියාකාරී ද්‍රව්‍ය සහ අඛණ්ඩ තක්සේරු කිරීම් සමඟ."
      ]
    },
    suitableFor: {
      en: [
        "Remote learners and digital nomads",
        "Individuals preferring online learning flexibility",
        "Students with geographical constraints",
        "Those who want to learn from anywhere"
      ],
      si: [
        "දුරස්ථ ඉගෙනුම්කරුවන් සහ ඩිජිටල් නෝමැඩ්ස්",
        "මාර්ගගත ඉගෙනීමේ නම්යශීලීත්වය කැමති පුද්ගලයන්",
        "භූගෝලීය සීමාවන් ඇති සිසුන්",
        "කොතැනක සිට වුවද ඉගෙනීමට කැමති අය"
      ]
    },
    skillsDeveloped: {
      en: [
        "Digital learning and self-discipline",
        "Online communication and collaboration",
        "Virtual classroom participation skills",
        "Technology-enhanced language learning",
        "Flexible learning management"
      ],
      si: [
        "ඩිජිටල් ඉගෙනීම සහ ස්වයං විනය",
        "මාර්ගගත සන්නිවේදනය සහ සහයෝගීතාවය",
        "අතථ්‍ය පන්ති කාමර සහභාගීත්ව කුසලතා",
        "තාක්ෂණයෙන් වැඩිදියුණු කළ භාෂා ඉගෙනීම",
        "නම්යශීලී ඉගෙනීමේ කළමනාකරණය"
      ]
    }
  },
  "it-english": {
    title: "IT + English Course",
    subtitle: "Combined Skills Diploma",
    image: "/images/IT+English.jpg",
    courseDuration: "4 Months",
    minimumAge: "Over 16",
    courseHours: "400 hours",
    courseStructure: "IT & English Combined",
    description: {
      en: [
        "This unique program combines essential IT skills with comprehensive English language training, preparing students for the modern workplace.",
        "Students learn both technical IT skills and professional English communication, making them more competitive in the technology sector.",
        "The course covers fundamental IT concepts while developing the English language skills needed in the technology industry."
      ],
      si: [
        "මෙම අද්විතීය වැඩසටහන අත්‍යවශ්‍ය IT කුසලතා සවිස්තරාත්මක ඉංග්‍රීසි භාෂා පුහුණුව සමඟ ඒකාබද්ධ කරන අතර, ශිෂ්‍යයන් නවීන වැඩ ස්ථානය සඳහා සූදානම් කරයි.",
        "ශිෂ්‍යයන් තාක්ෂණික IT කුසලතා සහ වෘත්තීය ඉංග්‍රීසි සන්නිවේදනය යන දෙකම ඉගෙන ගනිති, එමඟින් ඔවුන් තාක්ෂණ ක්ෂේත්‍රයේ වඩාත් තරඟකාරී වේ.",
        "පාඨමාලාව මූලික IT සංකල්ප ආවරණය කරන අතර, තාක්ෂණ කර්මාන්තයේ අවශ්‍ය ඉංග්‍රීසි භාෂා කුසලතා වර්ධනය කරයි."
      ]
    },
    suitableFor: {
      en: [
        "Aspiring IT professionals needing English skills",
        "Students interested in technology careers",
        "Individuals seeking combined IT and language training",
        "Those preparing for tech industry opportunities"
      ],
      si: [
        "ඉංග්‍රීසි කුසලතා අවශ්‍ය අභිලාෂක IT වෘත්තිකයන්",
        "තාක්ෂණ වෘත්තීය රුචිකත්වයක් ඇති සිසුන්",
        "IT සහ භාෂා පුහුණුව ඒකාබද්ධ කිරීමට අවශ්‍ය පුද්ගලයන්",
        "තාක්ෂණ කර්මාන්ත අවස්ථා සඳහා සූදානම් වන අය"
      ]
    },
    skillsDeveloped: {
      en: [
        "Technical IT skills and knowledge",
        "Professional English for technology sector",
        "IT terminology and communication",
        "Combined technical and language proficiency",
        "Career readiness for tech industry"
      ],
      si: [
        "තාක්ෂණික IT කුසලතා සහ දැනුම",
        "තාක්ෂණ ක්ෂේත්‍රය සඳහා වෘත්තීය ඉංග්‍රීසි",
        "IT පාරිභාෂිකය සහ සන්නිවේදනය",
        "තාක්ෂණික සහ භාෂා දක්ෂතාව ඒකාබද්ධ කිරීම",
        "තාක්ෂණ කර්මාන්තය සඳහා වෘත්තීය සූදානම"
      ]
    }
  },
  "kids-class": {
    title: "Kids Class",
    subtitle: "Young Learners Program",
    image: "/images/Kids Class.jpg",
    courseDuration: "3 Months",
    minimumAge: "Ages 8-15",
    courseHours: "120 hours",
    courseStructure: "Child-Focused Learning",
    description: {
      en: [
        "Our Kids Class is specially designed to make English learning fun and engaging for young learners, using age-appropriate methods and materials.",
        "The program incorporates games, activities, and interactive learning techniques to keep children engaged while building their language skills.",
        "Young students develop confidence in English through a supportive environment that encourages participation and creativity."
      ],
      si: [
        "අපගේ ළමා පන්තිය විශේෂයෙන්ම තරුණ ඉගෙනුම්කරුවන් සඳහා ඉංග්‍රීසි ඉගෙනීම විනෝදජනක සහ ආකර්ෂණීය කිරීම සඳහා නිර්මාණය කර ඇති අතර, වයසට ගැලපෙන ක්‍රම සහ ද්‍රව්‍ය භාවිතා කරයි.",
        "වැඩසටහන ක්‍රීඩා, ක්‍රියාකාරකම් සහ අන්තර්ක්‍රියාකාරී ඉගෙනීමේ තාක්ෂණ ඇතුළත් කරන අතර, ළමුන්ගේ භාෂා කුසලතා ගොඩනඟන අතරම ඔවුන් නිරතව තබයි.",
        "තරුණ ශිෂ්‍යයන් සහභාගීත්වය සහ නිර්මාණශීලීත්වය උත්සාහ කරන සහායක පරිසරයක් හරහා ඉංග්‍රීසියේ විශ්වාසය වර්ධනය කරයි."
      ]
    },
    suitableFor: {
      en: [
        "Young learners aged 8-15 years",
        "Children beginning their English learning journey",
        "Parents seeking fun and engaging English education",
        "Kids who learn best through interactive activities"
      ],
      si: [
        "වයස අවුරුදු 8-15 ක තරුණ ඉගෙනුම්කරුවන්",
        "ඔවුන්ගේ ඉංග්‍රීසි ඉගෙනීමේ ගමන ආරම්භ කරන ළමුන්",
        "විනෝදජනක සහ ආකර්ෂණීය ඉංග්‍රීසි අධ්‍යාපනයක් සොයන දෙමාපියන්",
        "අන්තර්ක්‍රියාකාරී ක්‍රියාකාරකම් හරහා හොඳම ඉගෙනීම්කරුවන්"
      ]
    },
    skillsDeveloped: {
      en: [
        "Foundation English language skills",
        "Confidence in speaking and communication",
        "Interactive learning and participation",
        "Creative thinking through games and activities",
        "Age-appropriate language development"
      ],
      si: [
        "මූලික ඉංග්‍රීසි භාෂා කුසලතා",
        "කතා කිරීමේ සහ සන්නිවේදනයේ විශ්වාසය",
        "අන්තර්ක්‍රියාකාරී ඉගෙනීම සහ සහභාගීත්වය",
        "ක්‍රීඩා සහ ක්‍රියාකාරකම් හරහා නිර්මාණශීලී චින්තනය",
        "වයසට ගැලපෙන භාෂා සංවර්ධනය"
      ]
    }
  }
};

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseData[courseId];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [language, setLanguage] = useState("en"); // 'en' for English, 'si' for Sinhala

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedBranch(null);
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden -mt-24">
          <img 
            src={course.image}
            alt={course.title} 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
          <div className="absolute inset-0 flex items-center z-10">
            <div className="container mx-auto">
              <div className="text-white max-w-2xl px-4 sm:px-8 md:px-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-left">{course.title}</h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">{course.subtitle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            {/* Back to Courses Button */}
            <div className="mb-6 sm:mb-8">
              <button
                onClick={() => navigate('/courses')}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Courses
              </button>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Course Stats - Modern Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
                <div className="bg-gradient-to-br from-black/10 via-blue-900/20 to-blue-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-300/30 shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2">Course Length</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">{course.courseDuration}</p>
                </div>
                <div className="bg-gradient-to-br from-black/10 via-blue-900/20 to-blue-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-300/30 shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2">Minimum Age</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">{course.minimumAge}</p>
                </div>
                <div className="bg-gradient-to-br from-black/10 via-blue-900/20 to-blue-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-300/30 shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2">Course Hours</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">{course.courseHours}</p>
                </div>
                <div className="bg-gradient-to-br from-black/10 via-blue-900/20 to-blue-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-300/30 shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2">Course Structure</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">{course.courseStructure}</p>
                </div>
              </div>

              {/* Course Image */}
              <div className="mb-8 sm:mb-12 md:mb-16">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>

              {/* Course Details Section */}
              <div className="mb-8 sm:mb-12 md:mb-16 bg-gradient-to-br from-black/5 via-blue-900/10 to-blue-800/15 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-gray-300/30 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-300/40 gap-3 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Course Details</h3>
                  {/* Google-style Language Toggle */}
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 flex-wrap">
                    <span className="whitespace-nowrap">Offered in:</span>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`px-2 sm:px-3 py-1 rounded transition-all text-xs sm:text-sm ${
                        language === "en"
                          ? "text-blue-600 font-medium underline decoration-2 underline-offset-2"
                          : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      English
                    </button>
                    <span className="text-gray-400">|</span>
                    <button
                      onClick={() => setLanguage("si")}
                      className={`px-2 sm:px-3 py-1 rounded transition-all text-xs sm:text-sm ${
                        language === "si"
                          ? "text-blue-600 font-medium underline decoration-2 underline-offset-2"
                          : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      සිංහල
                    </button>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  {course.description[language].map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Who is this course suitable for? */}
              <div className="mb-8 sm:mb-12 md:mb-16 bg-gradient-to-br from-black/10 via-blue-900/20 to-blue-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-gray-300/30 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-300/40 gap-3 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Who is this course suitable for?</h3>
                  {/* Google-style Language Toggle */}
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 flex-wrap">
                    <span className="whitespace-nowrap">Offered in:</span>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`px-2 sm:px-3 py-1 rounded transition-all text-xs sm:text-sm ${
                        language === "en"
                          ? "text-blue-600 font-medium underline decoration-2 underline-offset-2"
                          : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      English
                    </button>
                    <span className="text-gray-400">|</span>
                    <button
                      onClick={() => setLanguage("si")}
                      className={`px-2 sm:px-3 py-1 rounded transition-all text-xs sm:text-sm ${
                        language === "si"
                          ? "text-blue-600 font-medium underline decoration-2 underline-offset-2"
                          : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      සිංහල
                    </button>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {course.suitableFor[language].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-1">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What skills will develop through this course? */}
              <div className="mb-8 sm:mb-12 md:mb-16 bg-gradient-to-br from-black/10 via-blue-900/20 to-blue-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-gray-300/30 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-300/40 gap-3 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">What skills will develop through this course?</h3>
                  {/* Google-style Language Toggle */}
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 flex-wrap">
                    <span className="whitespace-nowrap">Offered in:</span>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`px-2 sm:px-3 py-1 rounded transition-all text-xs sm:text-sm ${
                        language === "en"
                          ? "text-blue-600 font-medium underline decoration-2 underline-offset-2"
                          : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      English
                    </button>
                    <span className="text-gray-400">|</span>
                    <button
                      onClick={() => setLanguage("si")}
                      className={`px-2 sm:px-3 py-1 rounded transition-all text-xs sm:text-sm ${
                        language === "si"
                          ? "text-blue-600 font-medium underline decoration-2 underline-offset-2"
                          : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      සිංහල
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {course.skillsDeveloped[language].map((skill, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 bg-black/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-300/30">
                      <svg className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-blue-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-1">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Section - Keep unchanged as requested */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">APPLY FOR</h2>
                <h3 className="text-lg sm:text-xl text-gray-600 mb-2 break-words">{course.courseDuration.toUpperCase()} ENGLISH DIPLOMA</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">Register Online get early bird course fee</p>
              </div>

              {/* Registration Button - Keep unchanged as requested */}
              <div className="max-w-2xl mx-auto text-center">
                <button
                  onClick={handleOpenPopup}
                  className="bg-blue-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-base sm:text-lg w-full md:w-auto"
                >
                  REGISTER NOW →
                </button>
              </div>

              {/* Registration Popup */}
              <RegistrationPopup
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                branchName={selectedBranch?.name || ""}
                branchId={selectedBranch?.id || ""}
                branches={branches}
                onBranchSelect={setSelectedBranch}
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CourseDetailPage;