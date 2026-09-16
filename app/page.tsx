'use client';

import React from 'react';
import { motion } from 'motion/react';
import {  
  CheckCircle2, 
  Phone, 
  Clock, 
  MapPin, 
  Zap, 
  ChevronRight,
  Home,
  Menu,
  X,
  Cctv,
  BrushCleaning,
  HandCoins,
  VectorSquare,
  MessagesSquare,
  MapPinHouse,
  Dot
} from 'lucide-react';
import Image from 'next/image';
import {Dog} from '../helper/dog.jsx'
import {CostTable} from '../helper/cost.jsx'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const featureCards = [
  {
    icon: MapPinHouse,
    title: 'Vị trí thuận lợi',
    description:
      'Gần trường đại học Nguyễn Tất Thành, tiểu học Phạm Văn Chiêu, và THCS An Phú Đông.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Cctv,
    title: 'An Ninh Tốt',
    description:
      'Hệ thống camera giám sát liên tục và khóa cửa an toàn giúp phòng chống kẻ gian',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    icon: BrushCleaning,
    title: 'Không Gian Sạch',
    description:
      'Vệ sinh định kỳ khu vực chung, đảm bảo không gian sống luôn sạch sẽ.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
{
  icon: HandCoins,
  title: 'Quy Định Rõ Ràng',
  description:
    'Hoàn tiền cọc 100% nếu thực hiện đúng quy định trong hợp đồng đã giao kết.',
  iconBg: 'bg-orange-50',
  iconColor: 'text-orange-600'  
}
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">Dương Thanh Sơn</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#intro" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Giới thiệu</a>
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Tiện ích</a>
              <a href="#service" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Dịch vụ</a>
              <a href="#cost" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Bảng giá</a>
              <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-shadow hover:shadow-lg active:scale-95 duration-200">
                Liên hệ ngay
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#intro" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600">Giới thiệu</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600">Tiện ích</a>
              <a href="#service" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600">Dịch vụ</a>
              <a href="#cost" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600">Bảng giá</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-semibold text-indigo-600">Liên hệ ngay</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="intro" className="relative pt-20 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="z-10"
            >
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Nhà Trọ <span className="text-indigo-600">Dương Thanh Sơn</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-base sm:text-xl text-slate-600 max-w-lg mb-10 leading-relaxed">
                <span className="text-indigo-600 font-bold">Tiện nghi - Uy tín - Giá cả hợp lý</span>. Không gian sống lý tưởng tại Quận 12 cho người đi làm và sinh viên.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:shadow-xl active:scale-[0.98]">
                  Liên hệ xem phòng
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <a href="https://zalo.me/0776159120" target="_blank" className="flex items-center justify-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-[#007FFF] hover:text-[#007FFF] transition-all active:scale-[0.98]">
                  <MessagesSquare className="w-5 h-5 mr-2 text-[#007FFF]" />
                  Zalo Mr. Sơn
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square md:aspect-video lg:aspect-square"
            >
              <div className="absolute -inset-4 bg-indigo-100 rounded-[2rem] -rotate-3 blur-2xl opacity-50"></div>
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                <Dog />
                <Image 
                  src="https://tinyurl.com/3wv3679m"
                  unoptimized={true}
                  alt="Không gian nhà trọ" 
                  fill 
                  className="object-contain -translate-y-20"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-6 bg-white p-4 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <VectorSquare className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Diện tích</div>
                    <div className="text-lg font-bold text-slate-900">20m² (Có gác)</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section id="features" className="py-12 sm:py-18 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-md font-bold text-indigo-600 uppercase tracking-widest mb-4">Chúng tôi cung cấp</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Trải nghiệm sống tuyệt vời đầy đủ tiện nghi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -6, 0],
                    scale: [1, 1.04, 1]
                  }}
                  transition={{
                    // opacity: { duration: 0.4, delay: index * 0.1 },
                    y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.7 },
                    scale: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.7 }
                  }}
                  whileHover={{ y: -7, scale: 1.02 }}
                  className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.8
                    }}
                    className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${feature.iconColor} animate-pulse`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-14 sm:py-24 bg-white border-y border-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-12">
                  <div className="relative h-36 sm:h-64 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://tinyurl.com/4etpzxkn" 
                      unoptimized={true}
                      alt="Room details" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative h-28 sm:h-48 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://tinyurl.com/puxdbnt5"
                      unoptimized={true}
                      alt="Room details" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative h-28 sm:h-48 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://tinyurl.com/rpbru3vj" 
                      unoptimized={true}
                      alt="Room details" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative h-36 sm:h-64 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://tinyurl.com/kb86dh2x" 
                      unoptimized={true}
                      alt="Room details" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-md font-bold text-indigo-600 uppercase tracking-widest mb-4">Chất lượng tạo nên trải nghiệm</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-8 tracking-tight">Bạn sẽ nhận được gì?</h3>
              
              <div className="space-y-6">
                {[
                  "Diện tích phòng rộng, thiết kế có gác lửng tiện lợi",
                  "Phòng không leo lầu, không chung chủ, giờ giấc tự do",
                  "Hệ thống camera an ninh chạy 24/7",
                  "Dịch vụ khắc phục sự cố điện, nước nhanh chóng",
                  "Môi trường sống văn minh, yên tĩnh và an toàn",
                  "Có thể tự lắp thêm máy lạnh, wifi"
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-start space-x-4 group"
                  >
                    <div className="p-1 bg-indigo-50 rounded-full group-hover:bg-indigo-600 transition-colors flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <div className="font-bold uppercase text-sm sm:text-md tracking-widest">Trạng thái:</div>
                  <div className="text-emerald-600 font-extrabold text-lg sm:text-xl">VẪN CÒN PHÒNG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section id="cost" className="py-12 sm:py-18 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-md font-bold text-indigo-600 uppercase tracking-widest mb-4">Tham khảo ngay</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Bảng Giá Dịch Vụ</p>
          </div>
          <CostTable/>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-14 sm:py-24 bg-slate-900 text-white selection:bg-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Liên hệ & Vị trí</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight">Liên hệ ngay tại</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-1">Địa chỉ</div>
                    {
                      [
                        "112/14 Kp 6, Đ.Nguyễn Thị Nhuần, P.APĐ, Tp.HCM",
                        "43/56 Kp 14, Đ.Vườn Lài, P.APĐ, Tp.HCM"
                      ].map(e => {
                        return (
                          <>
                            <p className="flex items-start text-md sm:text-md font-medium text-slate-100 leading-relaxed">
                              <Dot className="flex-shrink-0 mt-0.5"/>{e}
                            </p>
                          </>
                        )
                      })
                    }
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-1">Điện thoại / Zalo</div>
                    <a href="tel:0776159120" className="text-xl font-extrabold text-white block hover:text-indigo-400 transition-colors">
                      0776 159 120
                    </a>
                    <p className="text-slate-400 font-medium">Mr. Sơn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-1">Thời gian đón khách</div>
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base text-slate-300 font-medium flex justify-between gap-4 w-full max-w-64">
                        <span>Thứ 2 - Thứ 6:</span>
                        <span className="text-white">18h → 21h</span>
                      </p>
                      <p className="text-sm sm:text-base text-slate-300 font-medium flex justify-between gap-4 w-full max-w-64">
                        <span>Thứ 7 - Chủ Nhật:</span>
                        <span className="text-white">9h → 20h</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex space-x-4">
                <a 
                  href="https://zalo.me/0776159120" 
                  target="_blank"
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20"
                >
                  Chat Zalo ngay
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-indigo-500 rounded-[1.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative h-[400px] w-full bg-slate-800 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl mt-10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4206584285223!2d106.68903337583852!3d10.855562157726394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752840506eb613%3A0xe7261a868f77d9c0!2zMTEyLzE0IEtQOCwgbmjDoCB0cuG7jCBTxqFu!5e0!3m2!1svi!2s!4v1713500000000!5m2!1svi!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="w-fit absolute bottom-6 left-6 right-6 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 transition-transform group-hover:scale-[1.02] duration-300">
                  <p className="text-sm font-bold text-white mb-1">Vị trí nhà trọ trên bản đồ</p>
                  <a 
                    href="https://maps.app.goo.gl/sA8kqN8oseH8viGx5" 
                    target="_blank"
                    className="text-xs text-indigo-400 font-semibold underline underline-offset-4 hover:text-indigo-300 transition-colors"
                  >
                    Xem đường đi trên Google Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-slate-100 selection:bg-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-900 p-1 rounded-md">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-900 tracking-tight uppercase">Nhà Trọ Dương Thanh Sơn</span>
          </div>
          
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} UIT K18 noob. { }
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Powered by KgD</span>
          </p>
        </div>
      </footer>
    </div>
  );
}