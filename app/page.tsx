'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Wifi, 
  ShieldCheck, 
  Trash2, 
  Maximize2, 
  CheckCircle2, 
  Phone, 
  Clock, 
  MapPin, 
  Zap, 
  ChevronRight,
  MessageCircle,
  Home,
  Menu,
  X
} from 'lucide-react';
import Image from 'next/image';

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
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-semibold text-indigo-600">Liên hệ ngay</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="intro" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="z-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Hiện Vẫn Còn Phòng Trống</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Nhà Trọ <span className="text-indigo-600">Dương Thanh Sơn</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-lg mb-10 leading-relaxed">
                Tiện nghi - Thoải mái - Giá cả phải chăng. Không gian sống lý tưởng tại trung tâm Quận 12 cho người đi làm và sinh viên.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:shadow-xl active:scale-[0.98]">
                  Liên hệ xem phòng
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <a href="https://zalo.me/0776159120" target="_blank" className="flex items-center justify-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-[0.98]">
                  <MessageCircle className="w-5 h-5 mr-2" />
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
                <Image 
                  src="https://picsum.photos/seed/nhatro/1000/1000" 
                  alt="Không gian nhà trọ" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Maximize2 className="w-5 h-5 text-amber-600" />
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
      <section id="features" className="py-24 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Tiện ích nổi bật</h2>
            <p className="text-4xl font-extrabold tracking-tight">Trải nghiệm sống tuyệt vời với đầy đủ tiện nghi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wifi Miễn Phí</h3>
              <p className="text-slate-600 leading-relaxed">
                Kết nối internet tốc độ cao 24/7 hoàn toàn miễn phí, đáp ứng mọi nhu cầu làm việc và giải trí tại phòng.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">An Ninh Đảm Bảo</h3>
              <p className="text-slate-600 leading-relaxed">
                Hệ thống camera giám sát 24/24 và khóa cửa an toàn, mang lại sự an tâm tuyệt đối cho quý khách lưu trú.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <Trash2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dọn Vệ Sinh Định Kỳ</h3>
              <p className="text-slate-600 leading-relaxed">
                Vệ sinh hành lang và khu vực chung thường xuyên, đảm bảo không gian sống luôn sạch sẽ và thoáng mát.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-24 bg-white border-y border-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://picsum.photos/seed/room1/600/800" 
                      alt="Room details" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative h-48 w-full rounded-3xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://picsum.photos/seed/room2/600/400" 
                      alt="Room details" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-3xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://picsum.photos/seed/room3/600/400" 
                      alt="Room details" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://picsum.photos/seed/room4/600/800" 
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
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Dịch vụ của chúng tôi</h2>
              <h3 className="text-4xl font-extrabold mb-8 tracking-tight">Bạn sẽ nhận được gì khi ở đây?</h3>
              
              <div className="space-y-6">
                {[
                  "Diện tích phòng 20m², thiết kế có gác lửng tiện lợi",
                  "Hệ thống camera an ninh vòng ngoài 24/7",
                  "Dịch vụ khắc phục sự cố điện, nước nhanh chóng",
                  "Đường truyền Wifi ổn định, cường độ mạnh mọi góc phòng",
                  "Môi trường sống văn minh, yên tĩnh và an toàn"
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-start space-x-4 group"
                  >
                    <div className="p-1 bg-indigo-50 rounded-full group-hover:bg-indigo-600 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold uppercase text-xs tracking-widest mb-1">Trạng thái</div>
                  <div className="text-emerald-600 font-extrabold text-xl">VẪN CÒN PHÒNG TRỐNG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-slate-900 text-white selection:bg-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Liên hệ & Vị trí</h2>
              <h3 className="text-4xl font-extrabold mb-10 tracking-tight">Làm sao để tìm thấy chúng tôi?</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-1">Địa chỉ</div>
                    <p className="text-xl font-medium text-slate-300 leading-relaxed">
                      112/14 Kp8 Đ. Nguyễn Thị Nhuận, P. APĐ, Quận 12, TP.HCM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-1">Điện thoại / Zalo</div>
                    <a href="tel:0776159120" className="text-2xl font-extrabold text-white block hover:text-indigo-400 transition-colors">
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
                      <p className="text-slate-300 font-medium flex justify-between w-64">
                        <span>Thứ 2 - Thứ 6:</span>
                        <span className="text-white">18h → 21h</span>
                      </p>
                      <p className="text-slate-300 font-medium flex justify-between w-64">
                        <span>Thứ 7 - Chủ Nhật:</span>
                        <span className="text-white">9h → 20h</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <a 
                  href="https://zalo.me/0776159120" 
                  target="_blank"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20"
                >
                  Nhắn tin Zalo ngay
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-indigo-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative h-[500px] w-full bg-slate-800 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl">
                {/* Mock Map View */}
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1000/1000?blur=2')] bg-cover opacity-50 grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="relative">
                      <div className="absolute -inset-4 bg-red-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                      <div className="relative bg-white p-3 rounded-full border-4 border-red-500">
                        <MapPin className="w-8 h-8 text-red-600" />
                      </div>
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-sm font-bold text-white mb-2">Vị trí nhà trọ</p>
                  <p className="text-xs text-slate-300 underline decoration-indigo-400 underline-offset-4 cursor-pointer hover:text-white transition-colors">Xem đường đi trên Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 selection:bg-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-900 p-1 rounded-md">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-900 tracking-tight uppercase">Nhà Trọ Dương Thanh Sơn</span>
          </div>
          
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Nhà Trọ Dương Thanh Sơn. Thiết kế hiện đại & Responsive.
          </p>
          
          <div className="flex items-center space-x-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Powered by KgD</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
