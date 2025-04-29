/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { certifications } from "../../constants";

const CertificationsCard = ({ index, certification, name, date, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <p className="text-white tracking-wider text-[24px]">{certification}</p>

      <div className="mt-7 flex flex-end justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]"> {name}</p>
          <p className="mt-1 text-secondary text-[12px]">{date}</p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certificados</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((certification, index) => (
          <CertificationsCard
            key={certification.id}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
