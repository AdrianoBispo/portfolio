import { styles } from "../../styles";
import avatar from "../../assets/avatar/avatar-profile.png";

const Intro = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#845eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Olá, Me chamo <span className="text-[#8e5eff]">Adriano Bispo</span>
          </h1>
          <p className={`mt-5 text-2xl text-white-100`}>
            E este é o meu portfólio profissional
          </p>
        </div>

        <img src={avatar} alt="" className="rounded-full w-4/5 h-3/4 shadow-card" />
      </div>
    </section>
  );
};

export default Intro;
