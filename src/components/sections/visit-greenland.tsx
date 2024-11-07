import iceberg from '@/assets/iceberg.jpeg';
import sled from '@/assets/sled.jpeg';
import usePhotoAnimation from '@/hooks/use-photo-animation';
import ColorPalette from '../ui/color-palette';

function VisitGreenland() {
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
              <img src={sled} alt="sled" />
            </div>
            <div className="photo-section__photo-wrapper">
              <div className="photo-section__photo-label photo-label">
                <div className="photo-label__text">March 2023</div>
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
                <div className="photo-label__text">Greenland</div>
              </div>
              <div className="photo-section__photo-title">
                <h2>Visit Greenland</h2>
                <div className="inline-flex">
                  <a href="#" className="button">
                    see case study
                  </a>
                </div>
              </div>
              <ColorPalette
                colors={['#214356', '#8db2c3', '#e7e7e9', '#989598', '#445f88']}
              />
            </div>
            <div
              ref={rightPhotoRef}
              className="photo-section__photo-wrapper photo right"
            >
              <img src={iceberg} alt="iceberg" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default VisitGreenland;
