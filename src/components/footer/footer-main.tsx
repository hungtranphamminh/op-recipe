import Link from "next/link";
import {
  BOTTOM_LINK,
  CONNECT_LINK,
  MORE_LINK,
  QUICK_LINK,
  SOCIAL_LINK,
} from "@/utils/consts/footer.const";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative bottom-0 left-0 w-full bg-black py-12">
      <section className="w-full max-w-[1440px] px-10 mx-auto text-white">
        {/* top section */}
        <div className="w-full px-10">
          <div className="w-full flex items-start justify-between">
            {/* desc */}
            <div className="relative">
              {/* logo */}
              <div className="text-2xl font-bold font-raleWay">
                Nom<span className="text-primaryGolden">Nom</span>
              </div>
              {/* desc */}
              <div className="text-sm leading-[25px] font-normal font-raleWay max-w-[500px] mt-4 text-[rgb(136,136,136)]">
                Founded in 2024, NomNom has been the ultimate food resource for
                the home cook, featuring an AI-integrated engine tailored to
                cooking tendencies, habits, and inspiration, along with over
                33,000 recipes.
              </div>
              {/* icon */}
              <div className="flex items-center mt-8 gap-7">
                {SOCIAL_LINK.map((item, index) => {
                  return (
                    <div key={index}>
                      <Image width={24} height={0} src={item} alt="image" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* more link */}
            <div>
              <div className="font-raleWay font-medium text-sm mb-4">
                MORE FROM NOMNOM
              </div>
              {MORE_LINK.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="font-raleWay font-medium text-sm mb-1 hover:underline hover:text-[rgb(197,179,88)] text-[rgb(136,136,136)]"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </div>
                );
              })}
            </div>
            {/* quick link */}
            <div>
              <div className="font-raleWay font-medium text-sm mb-4">
                QUICK LINKS
              </div>
              {QUICK_LINK.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="font-raleWay font-medium mb-1 hover:underline hover:text-[rgb(197,179,88)] text-[rgb(136,136,136)] text-sm"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </div>
                );
              })}
            </div>
            {/* Connect us */}
            <div>
              <div className="font-raleWay font-medium text-sm mb-4">
                CONNECT
              </div>
              {CONNECT_LINK.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="font-raleWay font-medium text-sm mb-1 hover:underline hover:text-[rgb(197,179,88)] text-[rgb(136,136,136)]"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full border-b-2 border-b-[rgb(117,117,117)] mt-10"></div>
        </div>

        {/* bottom section */}
        <div className="mt-6 w-full px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {BOTTOM_LINK.map((item, index) => {
              return (
                <div
                  key={index}
                  className="font-raleWay font-medium text-xs mb-1 hover:underline pr-3 border-r border-r-white"
                >
                  <Link href={item.href}>{item.title}</Link>
                </div>
              );
            })}
            <div className="uppercase font-raleWay">
              do not sell my personal data
            </div>
          </div>
          <div className="mr-20">HCMUT Innovation Group</div>
        </div>
      </section>
    </div>
  );
}
