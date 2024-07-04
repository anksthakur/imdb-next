"use client";
import React from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  InstapaperShareButton,
  InstapaperIcon,
} from "next-share";

const Footer = () => {
  return (
    <>
      <div>
        <div className="wrapper">
          <div className="flex justify-center">
            <Link href="/signin">
              <button className="bg-yellow-400 rounded-sm mb-5 font-bold px-6 py-2 ">
                Sign in for more access
              </button>
            </Link>
          </div>
          <div className="rounded border border-red-200 w-80 my-0 mx-auto">
            <h1 className="text-white font-bold my-5 text-center">
              Follow IMDb on social
            </h1>
            <div className="flex gap-5 mb-5 justify-center">
              <InstapaperShareButton
                url={"https://github.com/next-share"}
                title={"Next Share"}
              >
                <InstapaperIcon size={32} round />
              </InstapaperShareButton>
              <FacebookShareButton
                url={"https://github.com/next-share"}
                quote={
                  "next-share is a social share buttons for your next React apps."
                }
                hashtag={"#nextshare"}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <LinkedinShareButton url={"https://github.com/next-share"}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <TwitterShareButton
                url={"https://github.com/next-share"}
                title={
                  "next-share is a social share buttons for your next React apps."
                }
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <WhatsappShareButton
                url={"https://github.com/next-share"}
                title={
                  "next-share is a social share buttons for your next React apps."
                }
                separator=":: "
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </div>
          <div className="flex gap-5 mb-5 justify-center mt-5">
            <Link href="/" className="text-white">
              Help
            </Link>
            <Link href="/" className="text-white">
              Site Index
            </Link>
            <Link href="/" className="text-white">
              IDMb Pro
            </Link>
            <Link href="/" className="text-white">
              Box Office Mojo
            </Link>
            <Link href="/" className="text-white">
              License IMDb Data
            </Link>
          </div>
          <div className="flex gap-5 mb-5 justify-center mt-5 items-center">
            <Link href="/" className="text-white">
              Press Room
            </Link>
            <Link href="/" className="text-white">
              Advertising
            </Link>
            <Link href="/" className="text-white">
              Jobs
            </Link>
            <Link href="/" className="text-white">
              Conditions of Use
            </Link>
            <Link href="/" className="text-white">
              Privacy Policy
            </Link>
            <Link href="/" className="text-white flex items-center">
              <TiTick color="blue" fontSize="2em" />
              <ImCross color="red" fontSize="1em" />
              <span className="p-2">Your Ads Privacy Choices</span>
            </Link>
          </div>
          <div className="flex justify-center">
            <h3 className="text-white">
              an <span className="font-bold text-yellow-400">amazon</span>{" "}
              company
            </h3>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-white font-thin text-sm">
              © 1990-2024 by IMDb.com, Inc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
