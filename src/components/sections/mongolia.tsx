import utah from '@/assets/Utah.jpeg';
import horses from '@/assets/horses.jpeg';
import usePhotoAnimation from '@/hooks/use-photo-animation';
import ColorPalette from '../ui/color-palette';

function Mongolia() {
  const { itemRef, leftPhotoRef, mainRef, rightPhotoRef } = usePhotoAnimation();

  return (
    <section ref={mainRef} className="photo-section">
      <div className="photo-section__list">
        <div ref={itemRef} className="photo-section__item">
          <article className="photo-section__sticky">
            <div
              ref={leftPhotoRef}
              className="photo-section__photo-wrapper photo left"
            >
              <img src={utah} alt="sled" />
            </div>
            <div className="photo-section__photo-wrapper">
              <div className="photo-section__photo-label photo-label">
                <div className="photo-label__text">September 2019</div>
                <div className="photo-label__icon">
                  <svg
                    width="16"
                    height="8"
                    viewBox="0 0 16 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4L-8.26528e-07 8L-4.76837e-07 -6.99382e-07L16 4Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </div>
                <div className="photo-label__text">Mongolia</div>
              </div>
              <div className="photo-section__photo-title">
                <h2>Follow The Tracks</h2>
                <div className="inline-flex">
                  <a href="#" className="button">
                    see case study
                  </a>
                </div>
              </div>
              <ColorPalette
                colors={['#302a27', '#965f39', '#e1a57d', '#afd4ee', '#445f88']}
              />
            </div>
            <div
              ref={rightPhotoRef}
              className="photo-section__photo-wrapper photo right"
            >
              <img src={horses} alt="horses" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mongolia;
