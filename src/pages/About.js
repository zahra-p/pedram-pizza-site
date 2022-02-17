import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> درباره ما</h1>
        <p>
          درباره ما

مجموعه رستوران های زنجیره ای پیتزا پدرام طی سالیان گذشته با تکیه بر کسب دانش روز در صنعت فست فود و به پشتوانه کوشش سرمایه های انسانی خویش هم اکنون به عنوان بزرگترین مجموعه رستوران زنجیره ای در حوزه پیتزا به نام و نشانی معتبر شناخته شده است. برند پدرام با پیروی از شعار تجلی مهندسی صنایع غذایی در هنر آشپزی سعی می کند نامی ماندگار در ذهن مردم ایران باشد.

پیتزا پدرام برای سلیقه و سلامت مشتری ایرانی ارزش بسیاری قائل است و بر استفاده از مواد اولیه استاندارد و به حداقل رساندن استفاده از سوسیس و کالباس و سایر گوشت های فرآوری شده تاکید بالایی دارد. منوی پیتزا پدرام همواره با تنوع بالا و نوآوری فصلی مورد توجه مشتریان قرار داشته است. پیتزا‌های آمریکایی با ظاهر متفاوت مثلثی شکل، پیتزاهای ایتالیایی، انواع سالاد و ساندویچ های پدرام همواره طرفداران ویژه ای دارند. پیتزا پدرام برای خدمت رسانی با کیفیت به مشتریان خود، هیچ حد و مرزی ندارد. این مجموعه از مراکز شلوغ خرید گرفته تا مغازه‌های محلی، مناطق لوکس تا مناطق عادی مرکز شهر و حتی از تهران تا شهرستان‌ها، امکان سرویس‌دهی دارد
        </p>
      </div>
    </div>
  );
}

export default About;