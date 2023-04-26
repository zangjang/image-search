const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next Image를 사용하기 위한 외부 이미지 옵션
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**',
  //       port: '',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'http',
  //       hostname: '**',
  //       port: '',
  //       pathname: '**',
  //     },
  //   ],
  // },
};

module.exports = withVanillaExtract(nextConfig);
