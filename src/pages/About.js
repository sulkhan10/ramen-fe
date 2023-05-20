import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MoonLoader from "react-spinners/MoonLoader";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
let About = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div className="min-h-screen bg-red-400 flex flex-col pt-[30vh] justify-center items-center text-md text-white">
      <div className="p-12 " data-aos="fade-up">
        <h2>
          Ramen Shop located in Indonesia that brings traditional various
          Chinese noodles
        </h2>
        <p>
          The idea of "Ricey Silo" was born out of an enthusiasm for great food
          and culture. In Yunnan China, we appreciate the fruits of our nature.
          Yunnan people live a life where they believe you can achieve
          satisfaction without having much.
        </p>
        <p>
          This is our attitude while preparing and serving our food. After years
          of continuous preparation and improvements, now we are excited to
          serve you a bowl of Yunnan’s authentic crossing-the-bridge noodles.
        </p>
        <p>
          We invite you to join us on a cultural food expedition to taste our
          fresh and timely prepared ingredients, served with a base broth made
          by simmering quality chicken bones for up to 10 hours, then cooked
          with our chewy rice noodles at your table.
        </p>
        <p>
          We serve our noodles using nutritious ingredients, leading to a result
          that requires little seasoning but is extraordinarily tasty.
        </p>
        <h3>小满</h3>
        <h3>小满米线</h3>
      </div>
      <div className="p-12 " data-aos="fade-up">
        <h3>The Authenticity</h3>
        <p>
          Crossing the Bridge Rice Noodle is one of the most revered and
          well-known dishes in Yunnan Province, China. The history of this style
          of noodle dates back over 100 years and was listed as an intangible
          cultural heritage of Kunming (capital city of Yunnan Province). The
          dish is served with a large bowl of boiling hot broth, separate from
          the soup ingredients which are then added to create an extremely fresh
          aroma for the diner.
        </p>
        <p>
          The soul of the delicacy is the broth. Made with chicken bone, pork
          bone, and ham, the soup needs to be simmered for more than 10 hours to
          get a rich, gelatinous texture. Then a thin layer of glistening
          chicken oil is created on top to insulate the soup and keep the whole
          bowl piping hot.
        </p>
        <p>
          The soup ingredients are served separately on a cutting board or
          plate. Common ingredients include thin slices of fresh meat, chunks of
          chicken, strips of bean curd sheets, shredded chives, raw quail eggs,
          and rice noodles. Once added into the broth, the heat of the hot soup
          will make all the ingredients cooked in a short time and soon you can
          enjoy it.
        </p>
        <h3>小满</h3>
        <h3>小满米线</h3>
      </div>
      <div className="p-12 " data-aos="fade-up">
        <h3>The Legend</h3>
        <p>
          Long ago, just south of the Yunnan city of Mengzixian, there was a
          beautiful lake with water as clear as jade. In the center of the lake,
          there was a small island covered in green bamboo saplings and giant
          trees whose ancient stalks reached the heavens. Known for its natural
          beauty and pleasant atmosphere, the small island drew many neighboring
          scholars seeking a tranquil place to study for the imperial exams.
        </p>
        <p>
          Among these scholars, there was a particularly diligent student who
          spent many days studying on the island. Every day, his wife made the
          long walk to the lake, crossing the bridge to the island to bring him
          his meals. However, he was frequently so engrossed in his studies that
          he only remembered to eat long after the food had grown cold.
        </p>
        <p>
          Due to his irregular eating habits, the scholar became noticeably
          thin, and his warm-hearted wife grew very worried. One day, she had an
          idea. She butchered a plump hen to make a hot chicken soup and
          separately prepared her husband’s favorite local rice noodles,
          seasonings, and ingredients.
        </p>
        <p>
          She brought them over the bridge in different bowls, combining them
          just before he was ready to eat. On its own, the chicken broth stayed
          hot enough to cook the noodles and other ingredients and created a
          thin layer of oil that kept the whole bowl piping hot. It worked. The
          scholar loved the hot noodle soup, and the wife started crossing the
          bridge every day with these bowls.
        </p>
        <p>
          Eventually, the scholar succeeded in passing the imperial exams and,
          remembering his wife’s great kindness and hospitality, joked that it
          was his wife’s wonderful noodles that helped him pass the prestigious
          and famously difficult exams.
        </p>
        <p>
          As you may have guessed, the wife’s daily walk across the bridge to
          deliver her husband’s meals inspired the name “Crossing the Bridge
          Noodles”. The story was passed on by word of mouth through the
          generations and has come to symbolize affection, endearment, and
          admiration.
        </p>
        <h3>小满</h3>
        <h3>小满米线</h3>
      </div>
      <div className="p-12 " data-aos="fade-up">
        <h3>The Process</h3>
        <ol>
          <li>
            Separate the quail egg yolk from egg white, put the egg yolk into
            the boiling soup.
          </li>
          <li>
            Batter the raw chicken, fish, and beef slices in slightly beaten egg
            whites to tenderize the meat.
          </li>
          <li>
            Quickly dip the meats a few times in boiling broth, as this will
            intensify the flavor.
          </li>
          <li>
            Then, place all ingredients into the broth and add chili oil based
            on preference.
          </li>
          <li>
            Use chopsticks to pick up the rice noodles and place them into the
            broth.
          </li>
          <li>
            Slurp the noodles, enjoy the texture and flavor that melts in your
            mouth. When the noodles are finished, take your time and enjoy.
          </li>
        </ol>
      </div>
    </div>
  );
};
export default About;
