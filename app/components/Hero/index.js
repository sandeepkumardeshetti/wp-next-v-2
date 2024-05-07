import Link from "next/link";
import './hero.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="common-banner-sec">
        <Image width={500} height={500} className="banner-img img-fluid" src="https://wpdemo.gclientdemo.com/wp-content/uploads/2024/02/MicrosoftTeams-image-23-3-scaled.jpg" alt="banner" />
        <div className="common-banner-content-overlay">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12">
                <p className="banner-title text-center mb-0 text-black">Enim architecto amet quia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
