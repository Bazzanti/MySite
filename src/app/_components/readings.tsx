"use client";
import React from "react";
import { Card, CardContent } from "../../../@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { FaYoutube , FaBook, FaDev, FaLaptop} from "react-icons/fa";
export default function Readings() {
  const sources: {
    name: string;
    link?: string;
    icon?: string;
    type: "blog" | "youtube" | "book" | "community";
  }[] = [
    {
      name: "Platformatic",
      link: "https://blog.platformatic.dev/",
      type: "blog",
    },
    {
      name: "Low Level Learning",
      link: "https://www.youtube.com/@LowLevelLearning",
      type: "youtube",
    },
    { name: "Netflix", link: "https://netflixtechblog.com/", type: "blog" },
    {
      name: "Primeagen",
      link: "https://www.youtube.com/c/theprimeagen",
      type: "youtube",
    },
    {
      name: "Amazon",
      link: "https://aws.amazon.com/it/blogs/developer/",
      type: "blog",
    },
    {
      name: "Discord",
      link: "https://discord.com/category/engineering",
      type: "blog",
    },
    { name: "Slack", link: "https://slack.engineering/", type: "blog" },
    { name: "Stripe", link: "https://stripe.com/blog", type: "blog" },

    { name: "Theo", link: "https://www.youtube.com/@t3dotgg", type: "youtube" },
    {
      name: "Jack Herrington",
      link: "https://www.youtube.com/@jherr",
      type: "youtube",
    },
    { name: "Quastor", link: "https://www.quastor.org/", type: "blog" },
    {
      name: "Hacker News",
      link: "https://news.ycombinator.com/",
      type: "community",
    },
    {
      name: "Dreams of code",
      link: "https://www.youtube.com/@dreamsofcode",
      type: "youtube",
    },

    { name: "DEV", link: "https://dev.to/", type: "community" },
    { name: "Cloudflare", link: "https://blog.cloudflare.com/", type: "blog" },
    {
      name: "Meta",
      link: "https://developers.facebook.com/blog/",
      type: "blog",
    },
    {
      name: "Paul Graham",
      link: "https://www.paulgraham.com",
      type: "youtube",
    },
    {
      name: "Devsecurely",
      link: "https://www.devsecurely.com/blog",
      type: "blog",
    },
    {
      name: "Total TypeScript",
      link: "https://www.totaltypescript.com",
      type: "blog",
    },
    {
      name: "Microservices patterns",
      link: "https://microservices.io/book",
      type: "book",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000,  })
  )

  return (
    <div>
      <div>
        <span className="text-[4rem] text-[#ff6868]">Readings</span>
      </div>
      <div>
        <Carousel className="w-full "
              plugins={[plugin.current]}
              // onMouseEnter={plugin.current.stop}
              // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {sources
            .map((source, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="pl-1 min-w-48"  // md:basis-1/2 lg:basis-1/3
                >
                  <div className="p-1 ">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 rounded-lg border">
                        <span className="text-2xl font-semibold ">
                          <a className="break-words " key={source.name} href={source.link}>
                            {source.name}
                          </a>
                       
                       {source.type ==="blog" ? 
                        <a  key={source.name} href={source.link} className="items-center flex justify-center text-green-300" target="_blank" >
                        <FaDev ></FaDev> 
                        </a> : source.type ==="youtube" ? 
                        <a  key={source.name} href={source.link} className="items-center flex justify-center text-red-500" target="_blank" >
                        <FaYoutube ></FaYoutube> 
                        </a> : source.type ==="book" ? 
                        <a  key={source.name} href={source.link} className="items-center flex justify-center text-cyan-400" target="_blank">
                        <FaBook ></FaBook> 
                        </a> :
                        <a  key={source.name} href={source.link} className="items-center flex justify-center " target="_blank" >
                        <FaLaptop ></FaLaptop> 
                        </a>
                       }

                         
                          </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}

            {/* {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))} */}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
}
