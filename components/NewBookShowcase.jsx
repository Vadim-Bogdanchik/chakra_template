import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';
import { FiBook, FiStar, FiTruck, FiAlertTriangle, FiExternalLink } from 'react-icons/fi';

const NewBookShowcase = () => {
  // Placeholder data - will be filled based on design and SectionBook
  const book = {
    imageSrc: '/assets/book111.png',
    altText: 'Обложка книги Хронально-векторная диагностика',
    title: '', // Removed 'ХВД' as per request
    subtitle: 'Хронально-veкторная диагностика',
    author: 'Мастер чакральной нумерологии',
    oldPrice: '990 Р',
    newPrice: '477 Р',
    discount: 'Скидка 52%', // Recalculated: (990-477)/990 = 51.8% -> 52%
    stock: 'Осталось: 15 экземпляров',
    orderLink: 'https://wa.me/79057444724', // WhatsApp link from SectionBook
    // readFragmentLink and pdfLink are effectively removed by not using them
  };

  // const features = [
  //   { icon: <FiBook className="w-6 h-6 text-pink-400" />, title: 'Формат', description: 'Твердый переплет, 256 страниц' },
  //   { icon: <FiStar className="w-6 h-6 text-pink-400" />, title: 'Рейтинг', description: '4.8/5 (124 отзыва)' },
  //   // Removed 'Бонусы'
  //   { icon: <FiTruck className="w-6 h-6 text-pink-400" />, title: 'Доставка', description: 'По всей России' }, // Updated delivery text
  // ];

  const features = [
    // { icon: <FiBook className="w-6 h-6 text-pink-400" />, title: 'Формат', description: 'Твердый переплет, 256 страниц' },
    { icon: <FiStar className="w-6 h-6 text-pink-400" />, title: 'Рейтинг', description: '4.8/5 (124 отзыва)' },
    { icon: <FiTruck className="w-6 h-6 text-pink-400" />, title: 'Доставка', description: 'По всей России' },
    // { // Новый блок об опечатке
    //   icon: <FiAlertTriangle className="w-6 h-6 text-yellow-400" />, // Иконка предупреждения
    //   title: 'Важная информация',
    //   description: ( // Используем React Fragment для текста и кнопки
    //     <>
    //       В печатном варианте книги допущена опечатка. Приношу свои извинения и прошу обратить внимание!!!
    //       <Link href="/err-book" passHref legacyBehavior>
    //         <motion.a
    //           className="mt-2 inline-flex items-center gap-2 text-sm text-yellow-300 hover:text-yellow-200 border border-yellow-400 hover:border-yellow-300 px-3 py-1 rounded-md transition-all duration-300"
    //           whileHover={{ scale: 1.03, boxShadow: "0px 0px 8px rgba(250, 204, 21, 0.5)" }} // Добавил тень для акцента
    //           whileTap={{ scale: 0.97 }}
    //         >
    //           Подробнее <FiExternalLink className="w-4 h-4" />
    //         </motion.a>
    //       </Link>
    //     </>
    //   ),
    // }
  ];
  return (
    <section id="new-book-showcase" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Column - Book Image */}
          <motion.div 
            className="w-full md:w-2/5 lg:w-1/3 relative group cursor-pointer"
            initial={{ rotate: -3, y: 20, opacity: 0 }}
            animate={{ rotate: -3, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <div className="relative aspect-[3/4] w-full max-w-xs mx-auto md:max-w-sm shadow-2xl rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 p-1 transform group-hover:shadow-purple-500/50 transition-all duration-300">
              {/* This is a placeholder for the stylized book cover from the design */}
              {/* We'll use the actual book image for now, but ideally, this container would have the design's text & icons */}
              <Image 
                src={book.imageSrc} 
                alt={book.altText} 
                width={400} 
                height={600} 
                className="object-cover w-full h-full rounded-md" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 p-4 flex flex-col justify-between">
                <div>
                  <div className="text-center mt-4">
                    {/* Placeholder for star icon from design */}
                    {book.title && <span className="text-5xl font-bold text-white drop-shadow-lg">{book.title}</span>}
                    
                  </div>
                </div>
                <div className="text-center mb-2">
                  {/* Placeholder for colored dots */}
                  <div className="flex justify-center space-x-1 mb-2">
                    {['bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-indigo-400', 'bg-purple-400', 'bg-pink-400'].map(color => (
                      <span key={color} className={`block w-3 h-3 rounded-full ${color}`}></span>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-0 md:right-[-20px] bg-yellow-400 text-gray-900 px-3 py-1 text-sm font-bold rounded-md shadow-lg transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300">
              Ключ к себе
            </div>
          </motion.div>

          {/* Right Column - Book Info */}
          <motion.div 
            className="w-full md:w-3/5 lg:w-2/3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Раскройте тайны своей судьбы
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 md:mb-8">
              Узнайте, как ваша дата рождения определяет кармические задачи и потенциал. Этот самоучитель по хронально-векторной диагностике научит вас расшифровывать коды судьбы через числа, понимать энергетический баланс чакр и их влияние. Вы сможете рассчитывать ёмкость чакр, определять сильные и слабые стороны, гармонизировать энергии для осознанного развития и научиться работать со своей природой.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-purple-800/50 p-4 rounded-lg flex items-start space-x-3 hover:bg-purple-700/70 transition-colors duration-300">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-purple-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-purple-800/50 p-6 rounded-lg mb-6 md:mb-8">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
                <div>
                  <p className="text-sm text-purple-300 line-through">Обычная цена: {book.oldPrice}</p>
                  <p className="text-4xl font-bold text-pink-400">{book.newPrice}</p>
                  <p className="text-green-400 font-semibold">{book.discount}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">Акция</span>
                  <p className="text-sm text-purple-300">{book.stock}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-3 mb-3">
                <Link href="/samouchitel-po-hronalno-vektornoi-diagnostike-chast-1" passHref legacyBehavior>
                  <motion.a
                    className="w-full md:w-1/2 text-center border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-semibold py-2 px-5 rounded-lg text-md shadow-md transition-all duration-300 transform hover:scale-102 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 10px rgba(236, 72, 153, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    target="_self"
                    rel=""
                  >
                    <FiInfo className="w-5 h-5" />
                    Подробнее о книге
                  </motion.a>
                </Link>
                <Link href="/err-book" passHref legacyBehavior>
                  <motion.a
                    className="w-full md:w-1/2 text-center border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900 font-semibold py-2 px-5 rounded-lg text-md shadow-md transition-all duration-300 transform hover:scale-102 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 10px rgba(250, 204, 21, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    target="_self"
                    rel=""
                  >
                    <FiAlertTriangle className="w-5 h-5" />
                    Важно: об опечатке
                  </motion.a>
                </Link>
              </div>

              <Link href={book.orderLink} passHref legacyBehavior>
                <motion.a
                  className="block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(236, 72, 153, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  target={book.orderLink.startsWith('http') ? '_blank' : '_self'}
                  rel={book.orderLink.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  Заказать книгу
                </motion.a>
              </Link>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewBookShowcase;
