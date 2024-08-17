import Monstera from "../assets/Plants/Monstera.png";
import Sansevieria from "../assets/Plants/sansevieria.png";
import Gardenia from "../assets/Plants/gardenia.png";
import Prickly from "../assets/Plants/prickly.png";

export const plantsList = {
  data: [
    {
      id: 1,
      name: "Monstera Deliciosa",
      description:
        'Nicknamed the "swiss cheese plant", the Monstera Deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you.',
      sunlight: "Thrives in bright indirect to medium light.",
      watering:
        "Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Monsteras can benefit from filtered water or leaving water out overnight before using.",
      humidity:
        "Prefers a humid environment. Consider misting, using a pebble tray, or a humidifier to maintain high humidity.",
      temperature:
        " Ideal temperatures range from 68-86°F (20-30°C). Avoid temperatures below 50°F (10°C).",
      note: "The Monstera is famous for its natural leaf holes, or fenestrations. The holes are theorized to maximize sun capture by increasing the spread of the leaf while decreasing the mass of leaf cells to support.",
      sad_sign: [
        `Leaves turning brown and crispy at the edges:
         Thirsty plant, underwatered, or high salt build up`,
        `Wilting plant, dry potting mix:
         Underwatered, or pot-bound`,
        `Yellowing leaves or black stems, wet potting mix:
         Overwatered`,
      ],
      care_level: "easy",
      light_level: "medium",
      water_level: "modarate",
      humidity_level: "high",
      temperature_level: "high",
      price: "78.00$",
      rate: 3,
      image: Monstera,
    },
    {
      id: 2,
      name: "Sansevieria",
      description:
        "The Snake Plant Laurentii, or Sansevieria trifasciata 'Laurentii', is a succulent plant characterized by its upright sword-like leaves with vibrant yellow edges. It is popular for its incredibly easy-going nature (it can tolerate low light and drought) and its air-purifying capabilities. The easiest way to kill this plant is to overcare for it.",
      sunlight:
        "Thrives in medium to bright indirect light, but can tolerate low indirect light.",
      watering:
        "Water every 2-3 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
      humidity:
        "There is no need to mist a snake plant because average room humidity is excellent. As long as you water the Sansevieria properly, you don't have to worry about humidity levels.",
      temperature:
        " Sansevieria cylindrica thrives in warm environments and is not tolerant of cold temperatures. Maintain a temperature above 50°F (10°C) to keep your house plant healthy. Protect it from cold drafts in winter, especially if placed near windows.",
      note: "You might be surprised to know the Snake Plant is a drought tolerant succulent.",
      sad_sign: [
        `Wrinkled leaves, dry potting mix:
         Thirsty plant, underwatered`,
        `Mushy leaves, wet potting mix:
         Overwatered`,
      ],
      care_level: "easy",
      light_level: "high",
      water_level: "low",
      humidity_level: "low",
      temperature_level: "high",
      price: "68.00$",
      rate: 4,
      image: Sansevieria,
    },
    {
      id: 3,
      name: "Braided Gardenia",
      description:
        "The Braided Gardenia is a sophisticated addition to any garden or indoor space, featuring beautifully braided trunks and glossy, dark green leaves. Prized for its intoxicatingly sweet-scented, creamy white flowers, this plant thrives in partial to full sunlight and well-drained soil. Sized to ship best, our large gardenia arrives with room to grow as it adapts to its new home.",
      sunlight:
        "Thrives in bright light to part sun conditions, preferably morning direct sun and afternoon shade. Not suited for low light areas.",
      watering:
        "Water every 1 week, allowing the top few inches of soil to dry out between waterings if planted in a container. Provide one inch of water per week if planted directly in the ground. This plant will benefit from higher humidity.",
      humidity:
        "Gardenia prefers high humidity level, so moisture the leaves regularly in spring and summer period. Regularly wipe the foliage with a damp soft cloth",
      temperature:
        " Maintain indoor temperatures between 60-75°F (15-24°C). Avoid placing your gardenia near drafts or heat sources.",
      note: "This plant is intended to be grown outdoors in the summer. It can be overwintered as a houseplant when temperatures dip below 50°F.",
      sad_sign: [
        `Yellowing leaves, moist soil:
         Overwatered`,
        `Leaf drop, dry potting mix:
         Thirsty plant, underwatered`,
        `Brown, crispy leaves:
         Low humidity or underwatered`,
        `Stunted growth, leaf drop:
         Not enough light`,
      ],
      care_level: "medium",
      light_level: "high",
      water_level: "medium",
      humidity_level: "high",
      temperature_level: "medium",
      price: "148.00$",
      rate: 3,
      image: Gardenia,
    },
    {
      id: 4,
      name: "Opuntia",
      description:
        "The Prickly Pear Cactus, scientifically known as Opuntia monacantha 'Joseph's Coat', makes a striking and low-maintenance houseplant with its unique, flat, paddle-shaped pads covered in spines. This resilient succulent thrives in bright, indirect sunlight and requires minimal watering, perfect for busy plant parents. ",
      sunlight:
        "Thrives in bright direct light, but can tolerate bright indirect light.",
      watering:
        "Water every 2-3 weeks in direct light, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
      humidity:
        "Typical indoor temperatures and humidity levels are usually fine for a prickly pear grown as a houseplant",
      temperature:
        "Prickly pear cactus thrives in hot, dry desert summers. But many of its species have good cold tolerance. ",
      note: "All cacti are succulents, but not all succulents are cacti. Aeroles, surface bumps in which spines grow out of, are what distinguishes cacti from succulents.",
      sad_sign: [
        `Wrinkled, dry potting mix:
         Thirsty plant, underwatered`,
        `Blanched center:
         Needs more sunlight`,
        `Yellowing and mushy leaves, wet potting mix:
         Root rot, overwatered`,
      ],
      care_level: "easy",
      light_level: "high",
      water_level: "low",
      humidity_level: "medium",
      temperature_level: "high",
      price: "75.00$",
      rate: 4,
      image: Prickly,
    },
  ],
};
