import Listing from "@/src/components/listing/Listing";
import axios from "axios";
import { UrlConfig } from "../config/UrlConfig";
import { ApiService } from "../config/ApiService";
import Image from "next/image";
import BannerImage from '../assets/images/banner.jpg';

export default async function Home() {
  return (
    <>
      <Image src={BannerImage} alt="" />
    </>
  );
}
