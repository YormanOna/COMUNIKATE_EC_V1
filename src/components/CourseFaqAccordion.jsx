import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import '../styles/Cursos/CourseFaqAccordion.css';

export function CourseFaqAccordion({
  items = [],
  title = "Preguntas Frecuentes",
  subtitle = "Todo lo que necesitas saber sobre la metodología, modalidades y certificación.",
  badge = "Resolvemos tus dudas"
}) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);

  const [activeCategory, setActiveCategory] = useState("Todos");
  const [openId, setOpenId] = useState(null);
  const [showAllItems, setShowAllItems] = useState(false);

  // Extraer categorías únicas disponibles en los items suministrados
  const categories = useMemo(() => {
    const rawCategories = safeItems.map((it) => it.category).filter(Boolean);
    const unique = Array.from(new Set(rawCategories));
    if (unique.length <= 1) return [];
    return ["Todos", ...unique];
  }, [safeItems]);

  // Filtrar items según la categoría seleccionada
  const filteredItems = useMemo(() => {
    if (!categories.length || activeCategory === "Todos") {
      return safeItems;
    }
    return safeItems.filter((it) => it.category === activeCategory);
  }, [safeItems, activeCategory, categories]);

  const isAllCategory = categories.length > 0 && activeCategory === "Todos";
  const visibleItems = isAllCategory && !showAllItems
    ? filteredItems.slice(0, 4)
    : filteredItems;

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Si no hay datos, no se renderiza nada (garantiza reutilización segura en cursos sin FAQ)
  if (safeItems.length === 0) {
    return null;
  }

  return (
    <section className="course-faq-section" aria-label="Sección de Preguntas Frecuentes">
      <div className="course-faq-header">
        {badge && <span className="course-faq-badge">{badge}</span>}
        <h2 className="course-faq-title">{title}</h2>
        {subtitle && <p className="course-faq-subtitle">{subtitle}</p>}
      </div>

      {/* Pestañas de categorías si hay 2 o más categorías */}
      {categories.length > 0 && (
        <div className="course-faq-tabs-wrapper">
          <div className="course-faq-tabs" role="tablist">
            {categories.map((cat) => {
              const count = cat === "Todos"
                ? items.length
                : items.filter((it) => it.category === cat).length;

              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`course-faq-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenId(null);
                    setShowAllItems(false);
                  }}
                >
                  <span>{cat}</span>
                  <span className="course-faq-tab-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Lista de acordeones */}
      <div className="course-faq-list">
        {visibleItems.map((item, index) => {
          const itemId = item.id || `faq-${index}`;
          const isOpen = openId === itemId;

          return (
            <div
              key={itemId}
              className={`course-faq-item ${isOpen ? 'is-open' : ''}`}
            >
              <button
                type="button"
                className="course-faq-question-btn"
                onClick={() => toggleAccordion(itemId)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${itemId}`}
              >
                <span>{item.question}</span>
                <span className="course-faq-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${itemId}`}
                className="course-faq-answer-wrapper"
                role="region"
                aria-hidden={!isOpen}
              >
                <div className="course-faq-answer-inner">
                  <div className="course-faq-answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isAllCategory && filteredItems.length > 4 && (
        <button
          type="button"
          className="course-faq-more-btn"
          onClick={() => setShowAllItems((prev) => !prev)}
          aria-expanded={showAllItems}
        >
          {showAllItems ? "Ver menos" : "Ver más"}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points={showAllItems ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
          </svg>
        </button>
      )}

      {/* Tarjeta de soporte / dudas personalizadas */}
      <div className="course-faq-cta-card">
        <div className="course-faq-cta-text">
          <h4>¿Tienes alguna otra duda o consulta específica?</h4>
          <p>Un asesor académico de Comunikate está listo para ayudarte en vivo por WhatsApp.</p>
        </div>
        <a
          href="https://wa.me/593995222922?text=Hola%20Comunikate,%20tengo%20una%20consulta%20sobre%20el%20curso%20de%20Oratoria%20y%20Locuci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="course-faq-cta-btn"
        >
          <span>Consultar por WhatsApp</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

CourseFaqAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  badge: PropTypes.string
};
