import { Prisma, PrismaClient } from "@prisma/client";

const prisma: any = new PrismaClient();

const posts = [
    {
        category: "Surfing",
        title: "Surfing Paradise: Western Australia's Coastal Gems",
        content:
        "<h1>Surfing Paradise: Western Australia's Coastal Gems</h1><p>Western Australia is a surfing paradise with world-class waves along its stunning coastline. From Margaret River to the Kimberley region, this pristine coastline attracts surfers worldwide.</p><h2>Diverse Waves</h2><p>Western Australia offers powerful reef breaks and sandy point breaks, catering to surfers of all levels. From challenging spots like The Box to beginner-friendly breaks like Yallingup, there's something for everyone.</p><h3>Natural Beauty</h3><p>Beyond the waves, Western Australia's coastline is blessed with breathtaking beauty. Rugged cliffs, white sandy beaches, and turquoise waters create a stunning backdrop for surfers to enjoy.</p><h2>Surfing Culture</h2><p>Western Australia has a thriving surfing culture and a welcoming community. Surf shops, schools, and clubs provide opportunities to connect, learn, and share stories with fellow surfers.</p><h3>Exploration and Adventure</h3><p>Traveling to Western Australia for surfing means exploring new breaks, pristine beaches, and unique landscapes. It's a chance to embrace adventure and immerse oneself in the region's beauty and wildlife.</p>",
        author: "Sarah Johnson",
        image: "/assets/blog-4.png",
        snippet:
        "Surfing Paradise: Western Australia's Coastal Gems Western Australia is a surfing paradise with world-class waves along its stunning coastline. From Margaret River to the Kimberley region, this pristine coastline attracts surfers worldwide..."
    },
        {   
        category: "Travel",
        title: "Exploring the Wonders of the World",
        content:
        "<h1>Exploring the Wonders of the World</h1><p>Traveling is an incredible way to broaden your horizons and experience the wonders of our planet. Whether it's exploring ancient ruins, marveling at natural landscapes, or immersing yourself in vibrant cultures, every journey is an opportunity for adventure and personal growth.</p><h2>Unforgettable Destinations</h2><p>From the iconic landmarks like the Great Wall of China and the Taj Mahal to hidden treasures like the lost city of Machu Picchu and the stunning fjords of Norway, the world is full of breathtaking destinations waiting to be discovered.</p><h3>Embracing Cultural Diversity</h3><p>Traveling allows us to embrace the rich tapestry of human culture. Through interacting with locals, trying new cuisines, and witnessing traditional celebrations, we can gain a deeper understanding and appreciation for the diverse ways of life across the globe.</p><h2>A Sense of Wonder</h2><p>There's something awe-inspiring about standing before natural wonders like the majestic Niagara Falls or the towering peaks of the Himalayas. These experiences remind us of the immense beauty and power of nature, filling us with a sense of wonder and humility.</p><h3>Creating Memories</h3><p>Traveling offers the opportunity to create lifelong memories. Whether it's sharing laughter with new friends, capturing stunning photographs, or simply savoring a quiet moment in a foreign land, these moments become cherished stories to be told for years to come.</p>",
        author: "Alex Thompson",
        image: "/assets/blog-2.png",
        snippet:
        "Exploring the Wonders of the World Traveling is an incredible way to broaden your horizons and experience the wonders of our planet. Whether it's exploring ancient ruins, marveling at natural landscapes, or immersing yourself in vibrant cultures, every journey is an opportunity for adventure and personal growth...",
        },
        {
            category: "Surfing",
            title: "Conquering XL Waves: The Ultimate Surfing Challenge",
            content:
            "<h1>Conquering XL Waves: The Ultimate Surfing Challenge</h1><p>XL waves, also known as extra-large waves, are the pinnacle of surfing challenges. These massive walls of water provide an adrenaline rush like no other and push surfers to their limits both physically and mentally.</p><h2>The Power of XL Waves</h2><p>XL waves are a force of nature. The sheer power and size of these waves can be both awe-inspiring and intimidating. They demand respect and a deep understanding of the ocean's dynamics.</p><h3>Preparing for the Challenge</h3><p>Surfing XL waves requires extensive preparation. Surfers need to be physically fit, mentally focused, and equipped with the right gear, including a larger surfboard that can handle the power and speed of these waves.</p><h2>Riding the Giants</h2><p>Successfully riding an XL wave is an incredible achievement. It requires expert timing, positioning, and an immense amount of skill and courage. Surfers must paddle with precision, catch the wave at the perfect moment, and navigate the steep face while maintaining control.</p><h3>The Thrill and Rush</h3><p>Conquering an XL wave is an exhilarating experience. The speed, power, and size of the wave create an intense rush that fuels the surfer's adrenaline. It's a test of skill, mental fortitude, and a deep connection with the ocean.</p>",
            author: "Jake Mitchell",
            image: "/assets/blog-3.png",
            snippet:
            "Conquering XL Waves: The Ultimate Surfing Challenge XL waves, also known as extra-large waves, are the pinnacle of surfing challenges. These massive walls of water provide an adrenaline rush like no other and push surfers to their limits both physically and mentally...",
        },
        {
            category: "Surfing",
            title: "The Joy of Riding Waves",
            content:
            "<h1>The Joy of Riding Waves</h1><p>Surfing is not just a sport; it's a way of life. There is something magical about catching a wave, feeling the power of the ocean beneath you, and gliding across the water with the wind in your hair. It's a moment of pure bliss and connection with nature.</p><h2>Exploring New Waves</h2><p>One of the most exciting aspects of surfing is the opportunity to explore new waves around the world. From the famous breaks of Hawaii to the hidden gems in Indonesia, surfers are constantly seeking out new adventures and challenges.</p><h3>Pushing Limits</h3><p>Surfers are always pushing their limits and striving to improve their skills. Whether it's mastering a new trick or conquering a bigger wave, the pursuit of progression is what drives them.</p><h2>Finding Inner Peace</h2><p>Surfing is not just about adrenaline and excitement; it's also a form of meditation. The rhythm of the waves and the focus required to ride them can help surfers find inner peace and a sense of calm.</p><h3>Connecting with the Ocean</h3><p>Surfers have a deep connection with the ocean and a profound respect for its power. They understand the importance of preserving our oceans and taking care of the environment.</p>",
            author: "Emma Waters",
            image: "/assets/blogger.png",
            snippet:
            "The Joy of Riding Waves Surfing is not just a sport; it's a way of life. There is something magical about catching a wave, feeling the power of the ocean beneath you, and gliding across the water with the wind in your hair. It's a moment of pure bliss and connection with nature...",
            },
        {
    category: "Surfing",
    title: "Surfing Bliss: Riding The Pass in Byron Bay",
    content:
    "<h1>Surfing Bliss: Riding The Pass in Byron Bay</h1><p>The Pass in Byron Bay, Australia, is a legendary surf spot that offers a blissful experience for surfers of all levels. Nestled along the scenic coastline, this wave is known for its consistent breaks, crystal-clear waters, and breathtaking surroundings.</p><h2>Perfect Waves</h2><p>The Pass delivers perfect waves that peel beautifully along the sandy bottom. It offers long, mellow rides, making it an ideal spot for beginners and longboard enthusiasts. Advanced surfers can also find steeper sections and the occasional barrel, adding excitement to their sessions.</p><h3>Scenic Beauty</h3><p>Surfing The Pass not only provides incredible waves but also immerses surfers in stunning natural beauty. The beach is framed by lush greenery, and the azure waters contrast with the golden sand. Surrounded by the iconic Byron Bay lighthouse and coastal cliffs, this spot is a visual paradise.</p><h2>Community Vibe</h2><p>The Pass has a vibrant surf community that welcomes locals and visitors alike. Surfers gather to share waves, stories, and stoke for the sport. It's a place where friendships are forged and the joy of surfing is celebrated.</p><h3>Byron Bay's Charm</h3><p>Surfing The Pass is enhanced by the charm of Byron Bay. This coastal town exudes a laid-back atmosphere, bohemian culture, and a strong connection with nature. Surfing here is not just a sport but a lifestyle that perfectly aligns with Byron Bay's spirit.</p>",
    author: "Emily Wilson",
    image: "/assets/blog-5.png",
    snippet:
    "Surfing Bliss: Riding The Pass in Byron Bay The Pass in Byron Bay, Australia, is a legendary surf spot that offers a blissful experience for surfers of all levels. Nestled along the scenic coastline, this wave is known for its consistent breaks, crystal-clear waters, and breathtaking surroundings..."
},
{
    category: "Surfing",
    title: "Surfing with Sun Safety: Protecting Your Skin in the Waves",
    content:
    "<h1>Surfing with Sun Safety: Protecting Your Skin in the Waves</h1><p>When enjoying the waves, it's crucial to prioritize sun safety for the health of your skin. Surfing exposes you to prolonged sun exposure, making it essential to take precautions and protect yourself from harmful UV rays.</p><h2>Sunscreen and Shade</h2><p>Apply a broad-spectrum sunscreen with a high SPF rating before hitting the waves. Choose a water-resistant formula to ensure it stays effective even in the water. Reapply regularly, especially after wiping off with a towel. Seek shade during breaks to minimize direct sun exposure.</p><h3>Protective Clothing</h3><p>Wear protective clothing while surfing, such as rash guards, surf shirts, and board shorts that offer UPF (Ultraviolet Protection Factor) protection. These garments provide an additional layer of defense against the sun's harmful rays.</p><h2>Sun-Protective Accessories</h2><p>Don't forget to protect your face, eyes, and lips. Wear a wide-brimmed hat to shield your face and neck from the sun. Put on UV-blocking sunglasses to protect your eyes, and apply a lip balm with SPF to keep your lips moisturized and protected.</p><h3>Hydration and Timing</h3><p>Stay hydrated by drinking plenty of water before, during, and after your surf session. Plan your surfing activities during the early morning or late afternoon when the sun's rays are less intense.</p>",
    author: "Phil Reynolds",
    image: "/assets/blog-6.png",
    snippet:
    "Surfing with Sun Safety: Protecting Your Skin in the Waves When enjoying the waves, it's crucial to prioritize sun safety for the health of your skin. Surfing exposes you to prolonged sun exposure, making it essential to take precautions and protect yourself from harmful UV rays..."
},
{
    category: "Surfing",
    title: "Surfing Airs: Mastering the Art of the Air Reverse",
    content:
    "<h1>Surfing Airs: Mastering the Art of the Air Reverse</h1><p>Surfing airs, such as the air reverse, are an exhilarating display of skill, style, and creativity in the sport. This advanced maneuver allows surfers to launch themselves above the lip of the wave, rotate in the air, and land back on the face of the wave.</p><h2>Generating Speed</h2><p>To execute an air reverse successfully, generating speed is crucial. Choose a wave with a steep, powerful section that provides a good ramp for launching into the air. Gain speed by performing quick, powerful turns on the face of the wave before approaching the section for the air reverse.</p><h3>Approaching the Section</h3><p>As you approach the section of the wave, position yourself slightly above the lip. Prepare to launch by compressing your body and coiling your legs, storing energy for the maneuver.</p><h2>Launching and Rotating</h2><p>To launch into the air, extend your legs explosively, using the upward force of the wave and your own leg power. As you leave the lip, initiate the rotation by turning your upper body and looking over your front shoulder.</p><h3>Spotting the Landing</h3><p>While in the air, keep your eyes focused on the landing spot. Spotting the landing will help you gauge the timing and adjust your body position for a smooth touchdown.</p><h2>Stomping the Landing</h2><p>As you descend, extend your legs and prepare to absorb the impact of landing. Aim to land with your weight centered over the board and your knees slightly bent for stability. Stomp the landing to maintain control and continue riding the wave.</p><h3>Practice and Progression</h3><p>Mastery of the air reverse takes practice and progression. Start by attempting small airs and gradually work your way up to more complex maneuvers. Film your sessions to analyze and improve your technique, and seek guidance from experienced surfers or coaches to accelerate your progress.</p>",
    author: "Daniel Roberts",
    image: "/assets/blog-7.png",
    snippet:
    "Surfing Airs: Mastering the Art of the Air Reverse Surfing airs, such as the air reverse, are an exhilarating display of skill, style, and creativity in the sport. This advanced maneuver allows surfers to launch themselves above the lip of the wave, rotate in the air, and land back on the face of the wave..."
},
{
    category: "Surfing",
    title: "Surfing and the Future: Embracing Innovation and Sustainability",
    content:
    "<h1>Surfing and the Future: Embracing Innovation and Sustainability</h1><p>Surfing has always been a sport deeply rooted in nature and the ocean. As we look to the future, surfers are embracing innovation and sustainability to ensure the longevity of the sport and protect the environment they love.</p><h2>Technological Advancements</h2><p>Surfing is witnessing exciting technological advancements that are shaping the future of the sport. From advanced surfboard materials and designs to wave pools and artificial reefs, these innovations are expanding the possibilities for surfers worldwide.</p><h3>Environmental Stewardship</h3><p>Surfers are increasingly taking on the role of environmental stewards. They understand the impact of climate change and pollution on our oceans and are actively advocating for sustainable practices. Surfers are engaging in beach clean-ups, supporting eco-friendly surfboard manufacturing, and promoting ocean conservation initiatives.</p><h2>Inclusivity and Diversity</h2><p>The future of surfing is also about inclusivity and diversity. Efforts are being made to make surfing accessible to people of all backgrounds, genders, and abilities. Surfing schools and organizations are working to break down barriers and create a more inclusive surfing community.</p><h3>Inspiring the Next Generation</h3><p>Surfers recognize the importance of inspiring the next generation of wave riders. Surf schools, mentoring programs, and surf camps are nurturing young talent and instilling values of respect, environmental consciousness, and a love for the ocean.</p><h2>Connecting with Nature</h2><p>Despite the changes and advancements, the essence of surfing remains the same. Surfers will always have a deep connection with nature and the ocean. The future of surfing lies in embracing innovation while preserving the soul of the sport and the beauty of the natural environment.</p>",
    author: "Michael Anderson",
    image: "/assets/blog-8.png",
    snippet:
    "Surfing and the Future: Embracing Innovation and Sustainability Surfing has always been a sport deeply rooted in nature and the ocean. As we look to the future, surfers are embracing innovation and sustainability to ensure the longevity of the sport and protect the environment they love..."
},
{
    category: "Travel",
    title: "Traveling Australia: A Guide to Exploring the Land Down Under",
    content:
    "<h1>Traveling Australia: A Guide to Exploring the Land Down Under</h1><p>Australia, known as the Land Down Under, is a vast and diverse country that offers endless opportunities for adventure and exploration. From vibrant cities to breathtaking natural wonders, here's a guide to help you make the most of your travels in Australia.</p><h2>Planning Your Itinerary</h2><p>Start by outlining your travel goals and interests. Australia offers a wealth of experiences, including iconic landmarks, stunning beaches, outback adventures, vibrant cultural festivals, and unique wildlife encounters. Research different regions and create an itinerary that matches your preferences and the time you have available.</p><h3>Must-Visit Destinations</h3><p>Australia is home to many must-visit destinations. Explore the cosmopolitan city of Sydney, with its iconic Sydney Opera House and Harbour Bridge. Discover the Great Barrier Reef, a UNESCO World Heritage site famous for its vibrant marine life. Visit the stunning coastal landscapes of the Great Ocean Road or venture into the vastness of the Outback to experience the rugged beauty of Uluru (Ayers Rock).</p><h2>Transportation Options</h2><p>Traveling within Australia offers various transportation options. Domestic flights are convenient for covering large distances, especially if you plan to visit different states or territories. Alternatively, consider renting a car or campervan for a more flexible and immersive road trip experience. Public transportation, such as trains and buses, are also available in major cities and some regional areas.</p><h3>Visa Requirements</h3><p>Check the visa requirements for your nationality before traveling to Australia. Depending on your citizenship, you may need to apply for a tourist visa in advance. Ensure that your passport is valid for at least six months from the date of entry.</p><h2>Respecting the Environment and Culture</h2><p>While traveling in Australia, respect the environment and indigenous culture. Follow designated paths, avoid littering, and be mindful of the unique flora and fauna. Learn about the local Aboriginal heritage and support indigenous-owned businesses to appreciate the rich cultural diversity of the country.</p><h3>Safety and Health</h3><p>As with any travel, prioritize your safety and health. Australia is generally a safe country, but it's important to take common precautions. Apply sunscreen, stay hydrated, and be aware of the potential risks of outdoor activities. Familiarize yourself with emergency services and carry appropriate travel insurance.</p>",
    author: "Olivia Taylor",
    image: "/assets/blog-9.png",
    snippet:
    "Traveling Australia: A Guide to Exploring the Land Down Under Australia, known as the Land Down Under, is a vast and diverse country that offers endless opportunities for adventure and exploration. From vibrant cities to breathtaking natural wonders, here's a guide to help you make the most of your travels in Australia..."
},
{
    category: "Travel",
    title: "Traveling with a Surfboard: Tips for Protecting Your Precious Ride",
    content:
    "<h1>Traveling with a Surfboard: Tips for Protecting Your Precious Ride</h1><p>Traveling with your surfboard allows you to explore new waves and surf destinations, but it's important to take precautions to ensure your board arrives safely. Here are some valuable tips for protecting your precious ride during your travels.</p><h2>Invest in a Quality Travel Bag</h2><p>A durable and well-padded travel bag is essential for safeguarding your surfboard. Look for a bag specifically designed for surfboard transportation, preferably with extra padding and reinforced stitching. Consider a bag with wheels for easy maneuverability in airports and busy terminals.</p><h3>Use Bubble Wrap and Towels</h3><p>Wrap your surfboard with bubble wrap or towels to provide an additional layer of protection. Pay extra attention to the nose, tail, and rails—the most vulnerable parts of the board. Secure the wrapping with duct tape to keep it in place.</p><h2>Remove the Fins</h2><p>To prevent damage and minimize the risk of fin breakage, remove the fins from your surfboard before packing it. Store the fins in a separate padded case or wrap them carefully with bubble wrap and secure them in a safe compartment in your travel bag.</p><h3>Use Fin Protection Sleeves</h3><p>If you prefer to keep the fins attached, consider using fin protection sleeves. These sleeves slide over the fins and provide an extra layer of protection against impact and potential damage.</p><h2>Secure the Leash</h2><p>Ensure your leash is securely attached to your surfboard, as it can get tangled or cause damage during transit. Use a leash plug protector or cover the leash attachment point with soft material to prevent it from puncturing the bag or damaging the board.</p><h3>Check Airline Policies</h3><p>Before traveling, check the airline's policies regarding surfboard transportation. Be aware of any size, weight, or packing requirements they may have. Some airlines may require you to reserve space for your surfboard in advance or charge additional fees.</p><h2>Inspect Your Board upon Arrival</h2><p>Upon reaching your destination, carefully inspect your surfboard for any damage caused during transit. Look for dings, cracks, or any signs of impact. If you notice any damage, document it with photos and contact the airline or your travel insurance provider if necessary.</p>",
    author: "Alexis Johnson",
    image: "/assets/blog-10.png",
    snippet:
    "Traveling with a Surfboard: Tips for Protecting Your Precious Ride Traveling with your surfboard allows you to explore new waves and surf destinations, but it's important to take precautions to ensure your board arrives safely. Here are some valuable tips for protecting your precious ride during your travels..."
},
{
    category: "Travel",
    title: "Traveling and Eating Healthy: Tips for Nourishing Your Body on the Go",
    content:
    "<h1>Traveling and Eating Healthy: Tips for Nourishing Your Body on the Go</h1><p>Traveling often disrupts our daily routines, including our eating habits. However, it's still possible to maintain a healthy diet while exploring new destinations. Here are some valuable tips for nourishing your body and eating healthy while on the go.</p><h2>Plan Ahead and Pack Snacks</h2><p>Before your trip, plan your meals and snacks to avoid relying solely on convenience foods. Pack nutritious snacks like fresh fruits, nuts, seeds, and granola bars. These snacks will keep you satisfied between meals and provide essential vitamins and minerals.</p><h3>Research Healthy Eateries</h3><p>Prior to your trip, research healthy eateries, vegetarian or vegan restaurants, or places that offer nutritious options. This way, you'll have a list of go-to places where you can enjoy wholesome meals made with fresh ingredients.</p><h2>Stay Hydrated</h2><p>Proper hydration is key to maintaining good health while traveling. Carry a reusable water bottle and fill it up whenever possible. Drink water regularly throughout the day to stay hydrated and avoid excessive consumption of sugary beverages.</p><h3>Choose Local and Fresh Foods</h3><p>When exploring new destinations, opt for locally sourced and fresh foods. Visit local markets or grocery stores to find seasonal produce and regional specialties. Not only will you support the local economy, but you'll also enjoy a wide variety of nutritious options.</p><h2>Practice Portion Control</h2><p>While indulging in local cuisines is part of the travel experience, it's important to practice portion control. Be mindful of your portions, listen to your body's hunger cues, and aim for a balanced plate with a mix of vegetables, lean proteins, and whole grains.</p><h3>Prepare Simple Meals</h3><p>If you have access to kitchen facilities, consider preparing simple meals using local ingredients. This gives you control over what you're consuming and allows you to create nutritious and delicious meals that suit your dietary preferences.</p><h2>Enjoy Balance and Moderation</h2><p>Remember that traveling is also about enjoying new experiences and trying different foods. Embrace balance and moderation in your approach to eating healthy while traveling. Allow yourself to indulge occasionally while maintaining an overall focus on nourishing your body.</p>",
    author: "Sophia Anderson",
    image: "/assets/blog-11.png",
    snippet:
    "Traveling and Eating Healthy: Tips for Nourishing Your Body on the Go Traveling often disrupts our daily routines, including our eating habits. However, it's still possible to maintain a healthy diet while exploring new destinations. Here are some valuable tips for nourishing your body and eating healthy while on the go..."
},
{
    category: "Travel",
    title: "Embracing the Beauty of Cold Places: Exploring Winter Wonderlands",
    content:
    "<h1>Embracing the Beauty of Cold Places: Exploring Winter Wonderlands</h1><p>While many travelers seek warm destinations, there is a unique and enchanting beauty to be found in cold places. Exploring winter wonderlands can offer breathtaking landscapes, thrilling activities, and a cozy atmosphere. Here's why you should consider venturing into cold places during your travels.</p><h2>Captivating Snowy Landscapes</h2><p>One of the most captivating aspects of cold places is the transformation they undergo during winter. Snow-covered mountains, frozen lakes, and frosty forests create a picturesque and magical setting. The beauty of the natural landscapes in cold regions is truly awe-inspiring.</p><h3>Thrilling Winter Sports</h3><p>Cold places offer a plethora of exhilarating winter sports and activities. From skiing and snowboarding to ice skating and dog sledding, there are endless opportunities for adventure and adrenaline rushes. Embrace the thrill of these activities and discover new passions in cold destinations.</p><h2>Northern Lights and Celestial Wonders</h2><p>Cold places, particularly those closer to the poles, provide a higher chance of witnessing the mesmerizing Northern Lights. The dancing colors of the aurora borealis are a sight to behold and create an otherworldly experience. Additionally, stargazing in the clear, cold skies of these regions unveils a multitude of celestial wonders.</p><h3>Cozy and Charming Atmosphere</h3><p>Cold places often exude a cozy and charming atmosphere. Picture yourself sitting by a fireplace in a log cabin, enjoying a warm drink while surrounded by snow-covered landscapes. The winter ambiance, complete with hot chocolate, blankets, and warm hospitality, creates a sense of tranquility and comfort.</p><h2>Unique Cultural Traditions</h2><p>Cold places have unique cultural traditions that are intertwined with the winter season. From ice festivals and ice hotels to traditional winter celebrations, immersing yourself in these cultural experiences allows you to gain insights into local customs and celebrate the spirit of winter alongside the locals.</p><h3>Escape the Crowds</h3><p>Traveling to cold places during the winter season often means fewer tourists and smaller crowds. This offers a more intimate and immersive experience, allowing you to connect with the destination on a deeper level and explore popular attractions without the usual hustle and bustle.</p>",
    author: "Olivia Roberts",
    image: "/assets/blog-12.png",
    snippet:
    "Embracing the Beauty of Cold Places: Exploring Winter Wonderlands While many travelers seek warm destinations, there is a unique and enchanting beauty to be found in cold places. Exploring winter wonderlands can offer breathtaking landscapes, thrilling activities, and a cozy atmosphere. Here's why you should consider venturing into cold places during your travels..."
}
];

async function main() {
  console.log(`Start seeding...`);
  for (const post of posts) {
    await prisma.post.create({ data: post });
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

  