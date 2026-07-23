import Image from "next/image";
import { CLIENT_LIST } from "@/constants/Clients.constants";

const Clients = () => {
  return (
    <div className="slider-container overflow-hidden px-4 my-[16px] md:px-16">
      <div className="logo-marquee flex w-max gap-4">
        {[...CLIENT_LIST, ...CLIENT_LIST].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="slide-item relative h-[60px] w-[160px] shrink-0"
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
