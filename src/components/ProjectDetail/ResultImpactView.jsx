import React, { useRef, useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function ResultImpactView({ actNumber, result }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (!selectedImage) return;
    dialog.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selectedImage]);
  if (!result) return null;
  const images = result.benchmarkImages?.length ? result.benchmarkImages
    : result.image ? [{ src: result.image, title: result.title, desc: result.summary }] : [];
  return <section className="story-section result-section">
    <div className="section-kicker"><span>{actNumber} / 03</span><span>검증과 성과</span></div>
    {images.length > 0 && <div className="evidence-block">
      <div className="story-subheading">실측 자료 <span>이미지를 선택하면 확대됩니다</span></div>
      <div className={`evidence-grid ${images.length === 1 ? 'single' : ''}`}>
        {images.map((image) => <figure key={image.src}>
          <button className="evidence-image" onClick={() => setSelectedImage(image)} aria-label={`${image.title} 확대`}>
            <img src={image.src} alt={image.title} loading="lazy" />
            <span>확대 <ArrowUpRight size={14} /></span>
          </button>
          <figcaption><strong>{image.title}</strong><p>{image.desc}</p></figcaption>
        </figure>)}
      </div>
    </div>}
    <div className="outcome-grid">
      <div><span className="eyebrow">RESULT</span><h3>{result.title}</h3><p>{result.summary}</p></div>
      <dl className="metric-grid">{result.metrics?.map((metric) => <div key={metric.label}>
        <dt>{metric.label}</dt><dd className="metric-value">{metric.value}</dd><dd className="metric-note">{metric.desc}</dd>
      </div>)}</dl>
    </div>
    {selectedImage && <dialog ref={dialog} className="image-dialog" aria-label={selectedImage.title}
      onClose={() => setSelectedImage(null)} onClick={(event) => { if (event.target === dialog.current) dialog.current.close(); }}>
      <div className="dialog-heading"><strong>{selectedImage.title}</strong>
        <button autoFocus onClick={() => dialog.current.close()} aria-label="이미지 닫기"><X size={22} /></button>
      </div>
      <img src={selectedImage.src} alt={selectedImage.title} />
      <p>{selectedImage.desc}</p>
    </dialog>}
  </section>;
}
