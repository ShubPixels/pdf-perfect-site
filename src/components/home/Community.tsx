import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, MessageCircle, Images, ArrowRight } from "lucide-react";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import { Link } from "react-router-dom";

import communityImage from "@/assets/community-1.jpg";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";
import baliImage from "@/assets/bali-tour.jpg";

// Community photos
import japanCommunity1 from "@/assets/japan community/20250328_105134.jpg";
import japanCommunity2 from "@/assets/japan community/20250328_105136.jpg";
import japanCommunity3 from "@/assets/japan community/20250328_105137.jpg";
import japanCommunity4 from "@/assets/japan community/20250328_110914.jpg";
import japanCommunity5 from "@/assets/japan community/20250328_110918.jpg";

import dubaiCommunity1 from "@/assets/dubai community/IMG_0068.jpg";
import dubaiCommunity2 from "@/assets/dubai community/IMG_0069.jpg";
import dubaiCommunity3 from "@/assets/dubai community/IMG_0070.jpg";
import dubaiCommunity4 from "@/assets/dubai community/IMG_0081.jpg";
import dubaiCommunity5 from "@/assets/dubai community/IMG_0082.jpg";
import dubaiCommunity6 from "@/assets/dubai community/IMG_0083.jpg";
import dubaiCommunity7 from "@/assets/dubai community/IMG_0215.jpg";
import dubaiCommunity8 from "@/assets/dubai community/IMG_0217.jpg";
import dubaiCommunity9 from "@/assets/dubai community/IMG_0218.jpg";
import dubaiCommunity10 from "@/assets/dubai community/IMG_0220.jpg";
import dubaiCommunity11 from "@/assets/dubai community/IMG_0222.jpg";
import dubaiCommunity12 from "@/assets/dubai community/IMG_0297.jpg";
import dubaiCommunity13 from "@/assets/dubai community/IMG_0301.jpg";
import dubaiCommunity14 from "@/assets/dubai community/IMG_0305.jpg";
import dubaiCommunity15 from "@/assets/dubai community/IMG_0306.jpg";
import dubaiCommunity16 from "@/assets/dubai community/IMG_0539.jpg";
import dubaiCommunity17 from "@/assets/dubai community/IMG_0540.jpg";
import dubaiCommunity18 from "@/assets/dubai community/IMG_0541.jpg";
import dubaiCommunity19 from "@/assets/dubai community/IMG_0542.jpg";
import dubaiCommunity20 from "@/assets/dubai community/IMG_0543.jpg";
import dubaiCommunity21 from "@/assets/dubai community/IMG_0544.jpg";
import dubaiCommunity22 from "@/assets/dubai community/IMG_0780.jpg";
import dubaiCommunity23 from "@/assets/dubai community/IMG_0793.jpg";
import dubaiCommunity24 from "@/assets/dubai community/IMG_0806.jpg";
import dubaiCommunity25 from "@/assets/dubai community/IMG_0807.jpg";
import dubaiCommunity26 from "@/assets/dubai community/IMG_0809.jpg";
import dubaiCommunity27 from "@/assets/dubai community/IMG_0810.jpg";
import dubaiCommunity28 from "@/assets/dubai community/IMG_0948.jpg";
import dubaiCommunity29 from "@/assets/dubai community/IMG_0949.jpg";


import europeCommunity1 from "@/assets/europe community/WhatsApp Image 2024-05-08 at 03.09.00.jpeg";
import europeCommunity2 from "@/assets/europe community/WhatsApp Image 2024-05-08 at 03.09.01.jpeg";
import europeCommunity3 from "@/assets/europe community/WhatsApp Image 2024-05-08 at 03.09.02 (1).jpeg";
import europeCommunity4 from "@/assets/europe community/WhatsApp Image 2024-05-08 at 03.09.10.jpeg";
import europeCommunity5 from "@/assets/europe community/WhatsApp Image 2024-05-08 at 03.09.11.jpeg";

import baliCommunity1 from "@/assets/bali community/WhatsApp Image 2025-01-04 at 18.34.46.jpeg";
import baliCommunity2 from "@/assets/bali community/WhatsApp Image 2025-01-04 at 18.35.00.jpeg";
import baliCommunity3 from "@/assets/bali community/WhatsApp Image 2025-01-04 at 18.43.36.jpeg";
import baliCommunity4 from "@/assets/bali community/WhatsApp Image 2025-01-04 at 18.43.37.jpeg";
import baliCommunity5 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 17.10.15 (1).jpeg";
import baliCommunity6 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.26.31.jpeg";
import baliCommunity7 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.26.35 (1).jpeg";
import baliCommunity8 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.26.38 (1).jpeg";
import baliCommunity9 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.26.38 (2).jpeg";
import baliCommunity10 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.26.40 (1).jpeg";
import baliCommunity11 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.52.52 (1).jpeg";
import baliCommunity12 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.54.27.jpeg";
import baliCommunity13 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.54.38 (1).jpeg";
import baliCommunity14 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.55.23.jpeg";
import baliCommunity15 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.55.27.jpeg";
import baliCommunity16 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.55.59.jpeg";
import baliCommunity17 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.57.47.jpeg";
import baliCommunity18 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.59.30.jpeg";
import baliCommunity19 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 19.59.32 (2).jpeg";
import baliCommunity20 from "@/assets/bali community/WhatsApp Image 2025-01-05 at 20.00.22.jpeg";
import baliCommunity21 from "@/assets/bali community/WhatsApp Image 2025-01-07 at 20.32.25.jpeg";
import baliCommunity22 from "@/assets/bali community/WhatsApp Image 2025-01-07 at 20.35.56.jpeg";
import baliCommunity23 from "@/assets/bali community/WhatsApp Image 2025-01-07 at 20.36.22.jpeg";
import baliCommunity24 from "@/assets/bali community/WhatsApp Image 2025-01-07 at 20.36.23 (1).jpeg";
import baliCommunity25 from "@/assets/bali community/WhatsApp Image 2025-01-07 at 20.36.23.jpeg";
import baliCommunity26 from "@/assets/bali community/WhatsApp Image 2025-01-08 at 20.51.46.jpeg";


import australiaCommunity1 from "@/assets/australia community/20171030_190026.jpg";
import australiaCommunity2 from "@/assets/australia community/20171031_031834.jpg";
import australiaCommunity3 from "@/assets/australia community/20171031_095347.jpg";
import australiaCommunity4 from "@/assets/australia community/20171031_095616.jpg";
import australiaCommunity5 from "@/assets/australia community/20171031_100725.jpg";
import australiaCommunity6 from "@/assets/australia community/20171031_100916.jpg";
import australiaCommunity7 from "@/assets/australia community/20171031_101043.jpg";
import australiaCommunity8 from "@/assets/australia community/20171031_101140.jpg";
import australiaCommunity9 from "@/assets/australia community/20171031_101247.jpg";
import australiaCommunity10 from "@/assets/australia community/20171031_101258.jpg";
import australiaCommunity11 from "@/assets/australia community/20171031_102611.jpg";
import australiaCommunity12 from "@/assets/australia community/20171031_102732.jpg";
import australiaCommunity13 from "@/assets/australia community/20171031_123901.jpg";
import australiaCommunity14 from "@/assets/australia community/20171031_134646.jpg";
import australiaCommunity15 from "@/assets/australia community/20171031_135159.jpg";
import australiaCommunity16 from "@/assets/australia community/20171031_135251.jpg";
import australiaCommunity17 from "@/assets/australia community/20171031_141530.jpg";
import australiaCommunity18 from "@/assets/australia community/20171031_141747.jpg";
import australiaCommunity19 from "@/assets/australia community/20171101_112656.jpg";
import australiaCommunity20 from "@/assets/australia community/20171101_113009.jpg";
import australiaCommunity21 from "@/assets/australia community/20171101_154316.jpg";
import australiaCommunity22 from "@/assets/australia community/20171101_154706.jpg";
import australiaCommunity23 from "@/assets/australia community/20171101_164928.jpg";
import australiaCommunity24 from "@/assets/australia community/20171109_104350.jpg";
import australiaCommunity25 from "@/assets/australia community/20171109_104458.jpg";
import australiaCommunity26 from "@/assets/australia community/20171109_112446.jpg";
import australiaCommunity27 from "@/assets/australia community/20171111_130614.jpg";
import australiaCommunity28 from "@/assets/australia community/20171113_163310.jpg";


import omanCommunity1 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 1.12.45 PM.jpeg";
import omanCommunity2 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 7.28.07 PM (1).jpeg";
import omanCommunity3 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 7.28.08 PM (1).jpeg";
import omanCommunity4 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 7.28.08 PM.jpeg";
import omanCommunity5 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 7.28.09 PM (1).jpeg";
import omanCommunity6 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.01 PM (1).jpeg";
import omanCommunity7 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.01 PM.jpeg";
import omanCommunity8 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.02 PM.jpeg";
import omanCommunity9 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.03 PM (1).jpeg";
import omanCommunity10 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.07 PM (1).jpeg";
import omanCommunity11 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.12 PM.jpeg";
import omanCommunity12 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.14 PM (1).jpeg";
import omanCommunity13 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.14 PM.jpeg";
import omanCommunity14 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.15 PM (1).jpeg";
import omanCommunity15 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.15 PM (2).jpeg";
import omanCommunity16 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.15 PM.jpeg";
import omanCommunity17 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.16 PM (1).jpeg";
import omanCommunity18 from "@/assets/oman community/WhatsApp Image 2025-10-25 at 9.30.16 PM (2).jpeg";
import omanCommunity19 from "@/assets/oman community/WhatsApp Image 2025-10-26 at 1.37.37 PM (5).jpeg";
import omanCommunity20 from "@/assets/oman community/WhatsApp Image 2025-10-26 at 1.37.37 PM.jpeg";
import omanCommunity21 from "@/assets/oman community/WhatsApp Image 2025-10-26 at 9.03.09 AM.jpeg";
import omanCommunity22 from "@/assets/oman community/WhatsApp Image 2025-10-26 at 9.03.10 AM.jpeg";
import omanCommunity23 from "@/assets/oman community/WhatsApp Image 2025-10-28 at 5.20.01 PM (1).jpeg";
import omanCommunity24 from "@/assets/oman community/WhatsApp Image 2025-10-28 at 5.20.01 PM.jpeg";
import omanCommunity25 from "@/assets/oman community/WhatsApp Image 2025-10-28 at 5.20.02 PM.jpeg";
import omanCommunity26 from "@/assets/oman community/WhatsApp Image 2025-10-28 at 6.10.52 PM.jpeg";
import omanCommunity27 from "@/assets/oman community/WhatsApp Image 2025-10-28 at 6.11.14 PM.jpeg";
import omanCommunity28 from "@/assets/oman community/WhatsApp Image 2025-10-28 at 6.11.40 PM.jpeg";
import omanCommunity29 from "@/assets/oman community/WhatsApp Image 2025-10-30 at 5.30.41 PM (2).jpeg";
import omanCommunity30 from "@/assets/oman community/WhatsApp Image 2025-10-30 at 5.30.41 PM (3).jpeg";


import andamanCommunity1 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 12.19.05.jpeg";
import andamanCommunity2 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 22.25.38.jpeg";
import andamanCommunity3 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 22.25.39 (1).jpeg";
import andamanCommunity4 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 22.25.40.jpeg";
import andamanCommunity5 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 22.26.13 (1).jpeg";
import andamanCommunity6 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 22.27.21 (1).jpeg";
import andamanCommunity7 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 22.27.22 (2).jpeg";
import andamanCommunity8 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 22.27.42.jpeg";
import andamanCommunity9 from "@/assets/andaman community/WhatsApp Image 2025-01-24 at 22.27.48.jpeg";
import andamanCommunity10 from "@/assets/andaman community/WhatsApp Image 2025-01-25 at 12.02.54.jpeg";
import andamanCommunity11 from "@/assets/andaman community/WhatsApp Image 2025-01-25 at 12.03.40 (2).jpeg";
import andamanCommunity12 from "@/assets/andaman community/WhatsApp Image 2025-01-25 at 12.03.46.jpeg";
import andamanCommunity13 from "@/assets/andaman community/WhatsApp Image 2025-01-25 at 14.40.01 (1).jpeg";
import andamanCommunity14 from "@/assets/andaman community/WhatsApp Image 2025-01-25 at 22.56.58.jpeg";
import andamanCommunity15 from "@/assets/andaman community/WhatsApp Image 2025-01-25 at 22.57.03.jpeg";
import andamanCommunity16 from "@/assets/andaman community/WhatsApp Image 2025-01-25 at 22.57.04 (2).jpeg";
import andamanCommunity17 from "@/assets/andaman community/WhatsApp Image 2025-01-26 at 14.09.33.jpeg";
import andamanCommunity18 from "@/assets/andaman community/WhatsApp Image 2025-01-26 at 14.09.44 (1).jpeg";
import andamanCommunity19 from "@/assets/andaman community/WhatsApp Image 2025-01-27 at 20.13.13 (1).jpeg";
import andamanCommunity20 from "@/assets/andaman community/WhatsApp Image 2025-01-27 at 20.26.02 (1).jpeg";
import andamanCommunity21 from "@/assets/andaman community/WhatsApp Image 2025-01-27 at 20.28.48.jpeg";
import andamanCommunity22 from "@/assets/andaman community/WhatsApp Image 2025-01-27 at 20.28.50.jpeg";
import andamanCommunity23 from "@/assets/andaman community/WhatsApp Image 2025-01-28 at 16.06.37.jpeg";
import andamanCommunity24 from "@/assets/andaman community/WhatsApp Image 2025-01-29 at 09.07.59.jpeg";


import keralaCommunity1 from "@/assets/kerala community/WhatsApp Image 2025-10-24 at 10.01.14 PM.jpeg";
import keralaCommunity2 from "@/assets/kerala community/WhatsApp Image 2025-10-24 at 10.01.23 PM.jpeg";
import keralaCommunity3 from "@/assets/kerala community/WhatsApp Image 2025-10-24 at 10.01.24 PM.jpeg";
import keralaCommunity4 from "@/assets/kerala community/WhatsApp Image 2025-10-24 at 4.10.31 PM.jpeg";
import keralaCommunity5 from "@/assets/kerala community/WhatsApp Image 2025-10-24 at 4.10.32 PM (1).jpeg";

import southAfricaCommunity1 from "@/assets/upcoming departure images/south-africa.png";
// import southAfricaCommunity1 from "@/assets/south africa community/20250719_063011.heic";
import southAfricaCommunity2 from "@/assets/south africa community/20250719_142330.heic";
import southAfricaCommunity3 from "@/assets/south africa community/20250719_154158.heic";
import southAfricaCommunity4 from "@/assets/south africa community/20250719_155155.heic";
import southAfricaCommunity5 from "@/assets/south africa community/20250719_155223.heic";

import orissaCommunity1 from "@/assets/Orissa community/IMG_0011.jpeg";
import orissaCommunity2 from "@/assets/Orissa community/IMG_0038.jpeg";
import orissaCommunity3 from "@/assets/Orissa community/IMG_0126.jpeg";
import orissaCommunity4 from "@/assets/Orissa community/IMG_0147.jpeg";
import orissaCommunity5 from "@/assets/Orissa community/IMG_0184.jpeg";

interface Memory {
  id: number;
  destination: string;
  batch: string;
  coverImage: string;
  photos: { id: number; src: string; alt: string; caption?: string }[];
}

type CommunityVariant = "home" | "page";
interface CommunityProps {
  variant?: CommunityVariant;
}

const makeTenPhotos = (label: string, cover: string) => {
  const communityPhotos: Record<string, string[]> = {
    "Japan": [
      japanCommunity1,
      japanCommunity2,
      japanCommunity3,
      japanCommunity4,
      japanCommunity5,
      "@/assets/japan community/20250328_110921.jpg",
      "@/assets/japan community/20250328_144551.jpg",
      "@/assets/japan community/20250328_144615.jpg",
      "@/assets/japan community/20250328_144627.jpg",
      "@/assets/japan community/20250328_144638.jpg"
    ],
    "Dubai": [
      dubaiCommunity1,
      dubaiCommunity2,
      dubaiCommunity3,
      dubaiCommunity4,
      dubaiCommunity5,
      dubaiCommunity6,
      dubaiCommunity7,
      dubaiCommunity8,
      dubaiCommunity9,
      dubaiCommunity10,
      dubaiCommunity11,
      dubaiCommunity12,
      dubaiCommunity13,
      dubaiCommunity14,
      dubaiCommunity15,
      dubaiCommunity16,
      dubaiCommunity17,
      dubaiCommunity18,
      dubaiCommunity19,
      dubaiCommunity20,
      dubaiCommunity21,
      dubaiCommunity22,
      dubaiCommunity23,
      dubaiCommunity24,
      dubaiCommunity25,
      dubaiCommunity26,
      dubaiCommunity27,
      dubaiCommunity28,
      dubaiCommunity29,
    ],
    "Europe": [
      europeCommunity1,
      europeCommunity2,
      europeCommunity3,
      europeCommunity4,
      europeCommunity5,
      "@/assets/europe community/WhatsApp Image 2024-05-08 at 03.09.12.jpeg",
      "@/assets/europe community/WhatsApp Image 2024-05-08 at 03.09.13.jpeg",
      "@/assets/europe community/WhatsApp Image 2024-05-09 at 03.18.57.jpeg",
      "@/assets/europe community/WhatsApp Image 2024-05-09 at 03.19.00.jpeg",
      "@/assets/europe community/WhatsApp Image 2024-05-09 at 03.22.05.jpeg"
    ],
    "Bali": [
      baliCommunity1,
      baliCommunity2,
      baliCommunity3,
      baliCommunity4,
      baliCommunity5,
      baliCommunity6,
      baliCommunity7,
      baliCommunity8,
      baliCommunity9,
      baliCommunity10,
      baliCommunity11,
      baliCommunity12,
      baliCommunity13,
      baliCommunity14,
      baliCommunity15,
      baliCommunity16,
      baliCommunity17,
      baliCommunity18,
      baliCommunity19,
      baliCommunity20,
      baliCommunity21,
      baliCommunity22,
      baliCommunity23,
      baliCommunity24,
      baliCommunity25,
      baliCommunity26,

    ],
    "Oman": [
      omanCommunity1,
      omanCommunity2,
      omanCommunity3,
      omanCommunity4,
      omanCommunity5,
      omanCommunity6,
      omanCommunity7,
      omanCommunity8,
      omanCommunity9,
      omanCommunity10,
      omanCommunity11,
      omanCommunity12,
      omanCommunity13,
      omanCommunity14,
      omanCommunity15,
      omanCommunity16,
      omanCommunity17,
      omanCommunity18,
      omanCommunity19,
      omanCommunity20,
      omanCommunity21,
      omanCommunity22,
      omanCommunity23,
      omanCommunity24,
      omanCommunity25,
      omanCommunity26,
      omanCommunity27,
      omanCommunity28,
      omanCommunity29,
      omanCommunity30,

    ],
    "Kerala": [
      keralaCommunity1,
      keralaCommunity2,
      keralaCommunity3,
      keralaCommunity4,
      keralaCommunity5,
      "@/assets/kerala community/WhatsApp Image 2025-10-25 at 1.58.42 PM.jpeg",
      "@/assets/kerala community/WhatsApp Image 2025-10-25 at 4.53.31 PM (1).jpeg",
      "@/assets/kerala community/WhatsApp Image 2025-10-25 at 7.48.53 PM.jpeg",
      "@/assets/kerala community/WhatsApp Image 2025-10-26 at 5.28.08 PM.jpeg",
      "@/assets/kerala community/WhatsApp Image 2025-10-26 at 5.28.11 PM.jpeg"
    ],
    "Australia": [
      australiaCommunity1,
      australiaCommunity2,
      australiaCommunity3,
      australiaCommunity4,
      australiaCommunity5,
      australiaCommunity6,
      australiaCommunity7,
      australiaCommunity8,
      australiaCommunity9,
      australiaCommunity10,
      australiaCommunity11,
      australiaCommunity12,
      australiaCommunity13,
      australiaCommunity14,
      australiaCommunity15,
      australiaCommunity16,
      australiaCommunity17,
      australiaCommunity18,
      australiaCommunity19,
      australiaCommunity20,
      australiaCommunity21,
      australiaCommunity22,
      australiaCommunity23,
      australiaCommunity24,
      australiaCommunity25,
      australiaCommunity26,
      australiaCommunity27,
      australiaCommunity28,

    ],
    "Andaman": [
      andamanCommunity1,
      andamanCommunity2,
      andamanCommunity3,
      andamanCommunity4,
      andamanCommunity5,
      andamanCommunity6,
      andamanCommunity7,
      andamanCommunity8,
      andamanCommunity9,
      andamanCommunity10,
      andamanCommunity11,
      andamanCommunity12,
      andamanCommunity13,
      andamanCommunity14,
      andamanCommunity15,
      andamanCommunity16,
      andamanCommunity17,
      andamanCommunity18,
      andamanCommunity19,
      andamanCommunity20,
      andamanCommunity21,
      andamanCommunity22,
      andamanCommunity23,
      andamanCommunity24,
    ],
    "South Africa": [
      southAfricaCommunity1,
      southAfricaCommunity2,
      southAfricaCommunity3,
      southAfricaCommunity4,
      southAfricaCommunity5,
    ],
    "Orissa": [
      orissaCommunity1,
      orissaCommunity2,
      orissaCommunity3,
      orissaCommunity4,
      orissaCommunity5,
      "@/assets/Orissa community/IMG_0187.jpeg",
      "@/assets/Orissa community/IMG_0192.jpeg",
      "@/assets/Orissa community/IMG_0195.jpeg",
      "@/assets/Orissa community/IMG_0399.jpeg",
      "@/assets/Orissa community/IMG_9667.jpeg"
    ]
  };

  const photos = communityPhotos[label] || [cover, communityImage, japanImage, dubaiImage, europeImage, baliImage];
  return Array.from({ length: 30 }).map((_, idx) => ({
    id: idx + 1,
    src: photos[idx % photos.length],
    alt: `${label} community photo ${idx + 1}`,
    caption: `${label} traveler memory #${idx + 1}`,
  }));
};

/** ✅ stable templates with mobile support */
const HOME_SPANS = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-3 md:row-span-1",
];

const PAGE_SPANS = [
  "col-span-2 row-span-2 md:col-span-3 md:row-span-2",
  "col-span-2 row-span-2 md:col-span-3 md:row-span-2",
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-3 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-3 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-3 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-3 md:row-span-1",
];

export const Community = ({ variant = "home" }: CommunityProps) => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const memoriesAll: Memory[] = useMemo(
    () => [
      { id: 1, destination: "Japan", batch: "October 2025", coverImage: japanCommunity1, photos: makeTenPhotos("Japan", japanCommunity1) },
      { id: 2, destination: "Dubai", batch: "September 2025", coverImage: dubaiCommunity1, photos: makeTenPhotos("Dubai", dubaiCommunity1) },
      { id: 3, destination: "Europe", batch: "August 2025", coverImage: europeCommunity1, photos: makeTenPhotos("Europe", europeCommunity1) },
      { id: 4, destination: "Bali", batch: "July 2025", coverImage: baliCommunity1, photos: makeTenPhotos("Bali", baliCommunity1) },
      { id: 5, destination: "Oman", batch: "June 2025", coverImage: omanCommunity1, photos: makeTenPhotos("Oman", dubaiCommunity1) },
      { id: 6, destination: "Kerala", batch: "May 2025", coverImage: keralaCommunity1, photos: makeTenPhotos("Kerala", keralaCommunity1) },
      { id: 7, destination: "Australia", batch: "April 2025", coverImage: australiaCommunity1, photos: makeTenPhotos("Australia", australiaCommunity1) },
      { id: 8, destination: "Andaman", batch: "March 2025", coverImage: andamanCommunity1, photos: makeTenPhotos("Andaman", andamanCommunity1) },
      { id: 9, destination: "South Africa", batch: "February 2025", coverImage: southAfricaCommunity1, photos: makeTenPhotos("South Africa", southAfricaCommunity1) },
      { id: 10, destination: "Orissa", batch: "January 2025", coverImage: orissaCommunity1, photos: makeTenPhotos("Orissa", orissaCommunity1) },
    ],
    []
  );

  // ✅ deterministic order
  const ordered = useMemo(
    () => [...memoriesAll].sort((a, b) => a.destination.localeCompare(b.destination)),
    [memoriesAll]
  );

  const memories = variant === "home" ? ordered.slice(0, 5) : ordered;
  const spansPattern = variant === "home" ? HOME_SPANS : PAGE_SPANS;

  const openGallery = (memory: Memory, index: number = 0) => {
    setSelectedMemory(memory);
    setPhotoIndex(index);
    setGalleryOpen(true);
  };

  const isPage = variant === "page";

  return (
    <section id="community" className="py-12 sm:py-16 md:py-24 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/50 mb-4 sm:mb-6">
            <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm text-black font-medium">Real moments, Real memories</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-6xl font-bold text-black mb-3 sm:mb-4 px-2">
            Moments from our <span className="text-accent">Happy Travellers</span>
          </h2>

          <p className="text-black max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Click on any destination to explore photos from our travelers&apos; journeys
          </p>

          {variant === "home" && (
            <div className="flex justify-center mt-4 sm:mt-6">
              <Link to="/community">
                <Button variant="outline" className="rounded-full px-4 py-2 sm:px-6 sm:py-3 group text-black text-sm sm:text-base">
                  View Community
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* ✅ Stable Bento */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <div
            className={`
              grid grid-cols-2 gap-3 sm:gap-4 md:gap-4 auto-rows-[160px] sm:auto-rows-[180px] grid-flow-dense
              ${isPage ? "md:grid-cols-6 md:auto-rows-[260px]" : "md:grid-cols-4 md:auto-rows-[200px]"}
            `}
          >
            {memories.map((memory, index) => {
              const span = spansPattern[index % spansPattern.length];
              const isTall = span.includes("row-span-2");

              return (
                <button
                  key={memory.id}
                  onClick={() => openGallery(memory)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer ${span}`}
                >
                  <img
                    src={memory.coverImage}
                    alt={memory.destination}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 md:p-6">
                    {/* <div className="rounded-2xl bg-black/25 backdrop-blur-sm border border-white/10 p-4 md:p-5"> */}
                    <div>
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                        <Images className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                        <span className="text-xs sm:text-sm text-white/70">{memory.photos.length} photos</span>
                      </div>

                      <h3
                        className={`
                          font-bold text-white leading-tight drop-shadow
                          ${isPage 
                            ? (isTall ? "text-lg sm:text-2xl md:text-4xl md:text-5xl" : "text-base sm:text-lg md:text-2xl md:text-3xl") 
                            : (isTall ? "text-base sm:text-lg md:text-3xl md:text-4xl" : "text-sm sm:text-base md:text-xl md:text-2xl")
                          }
                        `}
                      >
                        {memory.destination}
                      </h3>

                      <p className="text-white/70 mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-sm md:text-base">{memory.batch}</p>

                      <div className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 text-accent font-medium text-xs sm:text-sm md:text-sm md:text-base">
                        <span>View Gallery</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* UGC CTA */}
        <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12 text-center bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-dashed border-primary/30 rounded-3xl">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-accent/20 flex items-center justify-center">
            <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3">Share Your Travel Story</h3>
          <p className="text-black mb-6 sm:mb-8 max-w-xs sm:max-w-lg mx-auto text-sm sm:text-base">
            Travelled with us? Your photos and stories inspire others. Share via WhatsApp or Instagram and get featured!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild className="bg-accent text-white hover:bg-accent/90 font-bold px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-lg rounded-full">
              <a href="https://wa.link/97984j" target="_blank" rel="noopener noreferrer">
                Share via WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/30 text-black hover:bg-white/10 px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-lg rounded-full"
            >
              <a href="https://www.instagram.com/suntourismpune/" target="_blank" rel="noopener noreferrer">
                Tag us on Instagram
              </a>
            </Button>

          </div>
        </Card>
      </div>

      {selectedMemory && (
        <PhotoGallery
          photos={selectedMemory.photos}
          isOpen={galleryOpen}
          onClose={() => {
            setGalleryOpen(false);
            setSelectedMemory(null);
          }}
          initialIndex={photoIndex}
        />
      )}
    </section>
  );
};
