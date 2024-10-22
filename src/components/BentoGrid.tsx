import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <>
      <div className="text-center text-4xl mt-10 mb-5">रचनाएं</div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "अनंत आविर्भाव",
    description:
      "https://drive.google.com/file/d/1Nm7umj8FArm4Ig9JO34vLoHiPK-rrJ3D/view?usp=sharing",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "पंचरत्ना",
    description:
      "hhttps://drive.google.com/file/d/1zGCJn5N7oDqkEA-UAZOuBF9vcxXhG6n_/view?usp=sharing",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "पंचायन",
    description:
      "https://drive.google.com/file/d/1KbyKMbOQcZRoUqf21rtTtz2OErBKTEAS/view?usp=drive_link",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "प्रतिशोध",
    description:
      "https://drive.google.com/file/d/1YVqQoO5UKQvMm2niK1AwegqDYRtcBIRf/view?usp=drive_link",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "  कागज की तलवार",
    description:
      "https://drive.google.com/file/d/1x9Ie5wFU8W6jdcc7pdSmBE5WPkVkPWgD/view?usp=drive_link",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "धर्मविजय",
    description:
      "https://drive.google.com/file/d/1ucOEwWqUgD9POVDd3h59xg7ukFVILAa6/view?usp=drive_link",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "चांदनी के घर",
    description:
      "https://drive.google.com/file/d/1FxU32Wt4xB6VTzzAqxBkE3nEWzC8gVjW/view?usp=drive_link",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "श्री हनुमत बावनी",
    description:
      "https://drive.google.com/file/d/1kdP07OPN-ln0Fsf5EGeuLUz_dJJV72am/view?usp=drive_link",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " दुर्गा चालीसा  ",
    description:
      "https://drive.google.com/file/d/1QTbffdJUJNxmMrF5SA0sOpgBaMZnBf5I/view?usp=sharing",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "दर्पण देखे कौन",
    description:
      "https://drive.google.com/file/d/1vzIvMBl9mXota-pIUtQLFPmtv7AeC1VR/view?usp=drive_link",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
