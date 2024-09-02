import Marquee from "@/components/magicui/marquee";
import ReviewCard from "./ReviewCard";
import Transition from "./Transition";

const reviews = [
    {
        name: "Sarah Chen",
        username: "@sarahchen_cto",
        body: "Cloudshot has been a game-changer for our DevOps team. The real-time monitoring and predictive analytics have helped us prevent several potential outages. It's like having a crystal ball for our cloud infrastructure!",
        img: "https://avatar.vercel.sh/sarahchen",
    },
    {
        name: "Mike Johnson",
        username: "@mikej_cloudarch",
        body: "I've used many cloud management tools, but Cloudshot stands out with its intuitive interface and powerful analytics. It's saved us countless hours in troubleshooting and optimization.",
        img: "https://avatar.vercel.sh/mikejohnson",
    },
    {
        name: "Emily Rodriguez",
        username: "@emily_startup",
        body: "As a small startup, we needed a cost-effective solution to manage our growing cloud infrastructure. Cloudshot not only fit our budget but also grew with us, providing insights that helped us scale efficiently.",
        img: "https://avatar.vercel.sh/emilyrodriguez",
    },
    {
        name: "David Thompson",
        username: "@david_healthtech",
        body: "In the healthcare industry, uptime is critical. Cloudshot's proactive alerts and detailed performance metrics have been invaluable in maintaining our 99.99% uptime SLA.",
        img: "https://avatar.vercel.sh/davidthompson",
    },
    {
        name: "Lisa Patel",
        username: "@lisa_devops",
        body: "The drag-and-drop management in Cloudshot is a dream come true. It's made our complex multi-cloud environment so much easier to visualize and control.",
        img: "https://avatar.vercel.sh/lisapatel",
    },
    {
        name: "Alex Kowalski",
        username: "@alex_securitypro",
        body: "I'm impressed with Cloudshot's security features. The ability to monitor and analyze our cloud resources for potential vulnerabilities has significantly enhanced our security posture.",
        img: "https://avatar.vercel.sh/alexkowalski",
    },
    {
        name: "Samantha Lee",
        username: "@sam_cfo",
        body: "Cloudshot's cost optimization recommendations have been eye-opening. We've reduced our cloud spend by 30% without sacrificing performance. It's a CFO's dream tool!",
        img: "https://avatar.vercel.sh/samanthalee",
    },
    {
        name: "Robert Martinez",
        username: "@robert_sysadmin",
        body: "The predictive modeling in Cloudshot is spot-on. It's helped us plan our capacity more accurately, avoiding overprovisioning and saving us a ton of money.",
        img: "https://avatar.vercel.sh/robertmartinez",
    },
    {
        name: "Jennifer Wong",
        username: "@jennifer_ai",
        body: "As someone working with large datasets and ML models, Cloudshot's resource utilization tracking has been crucial. It helps us optimize our compute resources for maximum efficiency.",
        img: "https://avatar.vercel.sh/jenniferwong",
    },
    {
        name: "Tom Baker",
        username: "@tom_retail_cio",
        body: "Cloudshot's ability to provide a unified view of our multi-cloud environment has been a lifesaver. It's dramatically simplified our cloud governance and compliance efforts.",
        img: "https://avatar.vercel.sh/tombaker",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function MarqueeDemoVertical() {
    return (
        <Transition>
            <section className="container px-5 py-12 md:py-24 lg:py-24 mx-auto">
                <div className="px-8">
                    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                        More Features Than Your Favorite DevOps Tool
                    </h4>
                    <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        From startups to enterprises, hear how Cloudshot saves the day. Our users are avoiding outages, cutting costs, and taming cloud chaos—efficiency levels: over 9000.
                    </p>
                </div>
                <div className="relative flex h-[600px] py-32 w-full flex-row items-center justify-center overflow-hidden bg-background">
                    <Marquee pauseOnHover vertical className="[--duration:40s] md:hidden">
                        {reviews.map((review, index) => (
                            <ReviewCard key={review.username} {...review} priority={index === 0} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover vertical className="[--duration:20s] hidden md:flex">
                        {firstRow.map((review, index) => (
                            <ReviewCard key={review.username} {...review} priority={index === 0} />
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover vertical className="[--duration:20s] hidden md:flex">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover vertical className="[--duration:20s] hidden md:flex">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
                </div>
            </section>
        </Transition>
    );
}
