import { useState } from 'react';
import { Radio } from 'lucide-react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/RadioPlayer.css';

const RadioPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div 
        className={`radio-floating-button ${isExpanded ? 'expanded' : ''}`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {!isExpanded ? (
          <div className="radio-icon-wrapper">
            <Radio size={28} />
          </div>
        ) : (
          <div className="radio-player-expanded">
            <div className="radio-header">
              <div className="radio-info">
                <Radio size={24} />
                <div className="radio-text">
                  <h4>EQ 593</h4>
                  <p>Radio en vivo</p>
                </div>
              </div>
              <button 
                className="radio-close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
              >
                ×
              </button>
            </div>

            <div className="radio-player-container">
              <AudioPlayer
                src="http://streaming.eq593.com:8000/eq593"
                showJumpControls={false}
                customAdditionalControls={[]}
                layout="horizontal-reverse"
                autoPlayAfterSrcChange={false}
              />
            </div>

            <div className="radio-footer">
              <a 
                href="https://www.eq593.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="radio-link"
                onClick={(e) => e.stopPropagation()}
              >
                Visitar EQ593 →
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RadioPlayer;
