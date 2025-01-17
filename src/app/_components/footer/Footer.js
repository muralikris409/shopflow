import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPinterestP, FaTiktok, FaApple, FaGooglePlay, FaTelegram, FaWhatsapp, FaReddit, FaVk } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">About ShopFlow</a></li>
              <li><a href="#" className="hover:text-orange-500">Guarantees & Return Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500">Site Map</a></li>
              <li><a href="#" className="hover:text-orange-500">Intellectual Property Claims</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Payment & Shipping</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Payment Methods</a></li>
              <li><a href="#" className="hover:text-orange-500">BGpay Instruction</a></li>
              <li><a href="#" className="hover:text-orange-500">Shipping Guide</a></li>
              <li><a href="#" className="hover:text-orange-500">Locations We Ship To</a></li>
              <li><a href="#" className="hover:text-orange-500">Estimated Delivery Time</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Partnership Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Drop Shipping</a></li>
              <li><a href="#" className="hover:text-orange-500">Review Club</a></li>
              <li><a href="#" className="hover:text-orange-500">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-orange-500">Wholesale Program</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Download App</h3>
            <div className="flex space-x-3 mb-4">
              <FaApple size={24} className="cursor-pointer hover:text-orange-500" />
              <FaGooglePlay size={24} className="cursor-pointer hover:text-orange-500" />
              <IoQrCodeOutline size={24} className="cursor-pointer hover:text-orange-500" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
            <div className="flex space-x-3">
              <FaFacebookF size={20} className="cursor-pointer hover:text-orange-500" />
              <FaInstagram size={20} className="cursor-pointer hover:text-orange-500" />
              <FaYoutube size={20} className="cursor-pointer hover:text-orange-500" />
              <FaTwitter size={20} className="cursor-pointer hover:text-orange-500" />
              <FaPinterestP size={20} className="cursor-pointer hover:text-orange-500" />
              <FaTiktok size={20} className="cursor-pointer hover:text-orange-500" />
              <FaVk size={20} className="cursor-pointer hover:text-orange-500" />
              <FaReddit size={20} className="cursor-pointer hover:text-orange-500" />
              <FaTelegram size={20} className="cursor-pointer hover:text-orange-500" />
              <FaWhatsapp size={20} className="cursor-pointer hover:text-orange-500" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          © 2006-2024 ShopFlow. <a href="#" className="hover:text-orange-500">Terms</a> | <a href="#" className="hover:text-orange-500">Privacy</a> | <a href="#" className="hover:text-orange-500">Specialized Affairs</a>
        </div>
      </div>
    </footer>
  );
}
