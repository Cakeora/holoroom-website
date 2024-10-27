import * as React from 'react';
import { CountdownBox } from './CountdownBox';
import { SocialIcon } from './SocialIcon';
import { FooterLink } from './FooterLink';

const countdownData = [
  { value: "06", label: "Days" },
  { value: "18", label: "Hours" },
  { value: "48", label: "Min" }
];

const socialLinks = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6c62b8990e00ed26b85db588751bf400a442cd256bd5af2a4afb2a6cca1fa0e?placeholderIfAbsent=true&apiKey=e55f9dd769bf47cc97cdb92eee2fce0b", alt: "Social Media Icon 1", className: "" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a98c02d9b2f71a36b4c96485ee7c0199595ca2448eba711459fa3c7b7bf45f4?placeholderIfAbsent=true&apiKey=e55f9dd769bf47cc97cdb92eee2fce0b", alt: "Social Media Icon 2", className: "mt-2.5 bg-blend-normal aspect-[1.21] w-[35px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/60f1a2665ef36ac68fbb9adee6888df008645fbf857ac8eeb781523ca245222f?placeholderIfAbsent=true&apiKey=e55f9dd769bf47cc97cdb92eee2fce0b", alt: "Social Media Icon 3", className: "mt-1.5" }
];

const shopLinks = ["Products", "Overview", "Pricing", "Releases"];
const companyLinks = ["About us", "Contact", "News", "Support"];

export const ExclusiveOffer: React.FC = () => {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col pt-14 w-full bg-white rounded shadow-[0px_7px_30px_rgba(0,0,0,0.05)] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start self-center px-20 py-16 max-w-full bg-green-200 rounded shadow-[0px_7px_30px_rgba(0,0,0,0.05)] w-[1377px] max-md:px-5">
          <div className="flex flex-col items-start self-end pt-10 mt-80 bg-green-100 bg-opacity-50 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70df80a542a97dee8fbfb9067be85d82adb2e00f8e4f0bcb84340447178189ab?placeholderIfAbsent=true&apiKey=e55f9dd769bf47cc97cdb92eee2fce0b" alt="Exclusive offer decoration" className="object-contain z-10 aspect-[1.42] w-[156px]" />
          </div>
          <article className="flex flex-col items-start self-start text-green-900 max-md:max-w-full">
            <h1 className="text-5xl font-bold max-md:text-4xl">Exclusive offer</h1>
            <p className="self-stretch mt-5 text-2xl font-medium leading-9 max-md:max-w-full">
              Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals
            </p>
            <div className="flex gap-9 mt-10 whitespace-nowrap">
              {countdownData.map((item, index) => (
                <CountdownBox key={index} value={item.value} label={item.label} />
              ))}
            </div>
            <button className="px-16 py-6 mt-10 text-xl font-medium text-white uppercase bg-green-900 rounded shadow-[0px_7px_30px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-10">
              BUY NOW
            </button>
          </article>
        </div>

        <footer className="flex flex-col py-14 pr-6 pl-20 mt-40 w-full bg-green-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mr-5 w-full max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <h2 className="text-6xl tracking-tight text-center text-green-200 leading-[64px] max-md:text-4xl max-md:leading-[50px]">
                    Modern Furniture
                  </h2>
                  <div className="flex flex-col items-start pl-10 mt-20 w-full max-md:pl-5 max-md:mt-10">
                    <h3 className="text-2xl font-medium text-green-200">Social Media</h3>
                    <div className="flex gap-8 items-start mt-4">
                      {socialLinks.map((social, index) => (
                        <SocialIcon key={index} {...social} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <nav className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-wrap gap-10 self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col self-start">
                    <h3 className="self-start text-2xl text-white uppercase">SHOP</h3>
                    {shopLinks.map((link, index) => (
                      <FooterLink key={index} text={link} />
                    ))}
                  </div>

                  <div className="flex flex-col items-start">
                    <h3 className="self-stretch text-2xl text-white uppercase">COMPANY</h3>
                    {companyLinks.map((link, index) => (
                      <FooterLink key={index} text={link} />
                    ))}
                  </div>

                  <div className="flex flex-col self-end mt-20 max-md:mt-10 max-md:max-w-full">
                    <h3 className="self-start text-2xl font-medium text-white uppercase">STAY UP TO DATE</h3>
                    <form className="flex flex-wrap gap-5 justify-between pl-7 mt-10 text-xl rounded border-2 border-emerald-200 border-solid max-md:pl-5 max-md:max-w-full">
                      <label htmlFor="email" className="sr-only">Enter your email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="my-auto text-white bg-transparent border-none outline-none"
                      />
                      <button type="submit" className="px-5 py-3.5 font-medium text-green-900 uppercase whitespace-nowrap bg-emerald-200 max-md:px-5">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <nav className="flex gap-5 justify-between mt-44 ml-2.5 text-xl font-semibold text-white whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a7c05e9186977b05b222030dec6a1960a0f1b63d84330891496e4b5dbd8913?placeholderIfAbsent=true&apiKey=e55f9dd769bf47cc97cdb92eee2fce0b" alt="Footer decoration" className="object-contain my-auto w-full aspect-[500] max-md:max-w-full" />
            <a href="https://r.mtdv.me/videos/s6cGXDqcE6" className="hover:text-green-200 transition-colors">Terms</a>
            <a href="https://r.mtdv.me/videos/s6cGXDqcE6" className="hover:text-green-200 transition-colors">Privacy</a>
            <a href="https://r.mtdv.me/videos/s6cGXDqcE6" className="hover:text-green-200 transition-colors">Cookies</a>
          </nav>
        </footer>
      </section>
    </main>
  );
};