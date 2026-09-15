import React from 'react';

const dogStyles = `
  .dog-scene {
    position: absolute;
    left: 18px;
    bottom: 18px;
    width: 220px;
    height: 120px;
    z-index: 20;
    pointer-events: none;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    filter: drop-shadow(0 18px 20px rgba(15, 23, 42, 0.18));
  }

  .dog-bubble {
    position: absolute;
    left: 170px;
    top: 20px;
    padding: 10px 14px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(148, 163, 184, 0.3);
    color: #FF8200;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.08em;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    backdrop-filter: blur(5px);
  }

  .dog-bubble::after {
    content: '';
    position: absolute;
    left: -7px;
    top: 18px;
    width: 16px;
    height: 16px;
    background: rgba(255, 255, 255, 0.9);
    border-left: 1px solid rgba(148, 163, 184, 0.3);
    border-bottom: 1px solid rgba(148, 163, 184, 0.3);
    transform: rotate(45deg);
  }

  .dog-scene .ball {
    position: absolute;
    left: 105px;
    bottom: -15px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    z-index: 3;
    background: linear-gradient(135deg, #7c6cff 0%, #5b4ef5 100%);
    box-shadow: inset 0 -8px 0 rgba(0, 0, 0, 0.18), 0 8px 18px rgba(91, 78, 245, 0.35);
    animation: ball-bounce 1.1s ease-in-out infinite alternate;
  }

  .dog-scene .ball::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0) 30%);
  }

  .dog-scene .ball::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    top: 7px;
    left: 10px;
    box-shadow: 8px 8px 0 rgba(255,255,255,0.3);
  }

  .dog-scene .dog {
    width: 110px;
    height: 110px;
    z-index: 1;
    position: relative;
    transform: scale(0.92);
    margin-left: 4px;
  }

  .dog-scene .dog:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.03);
    transform: translateY(-30%) scale(1.5);
  }

  .dog-scene .dog * {
    position: absolute;
  }

  .dog-scene .dog-body {
    top: -50%;
    animation: dog-body 200ms ease-in-out infinite alternate;
  }

  .dog-scene .dog-body:before {
    content: '';
    position: absolute;
    bottom: 90%;
    right: 50%;
    width: 90%;
    height: 90%;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 10%;
    border-top-right-radius: 10%;
    background: rgba(255, 255, 255, 0.4);
    transform-origin: right bottom;
    animation: dog-tail-blur 200ms 33ms ease-in-out infinite alternate both;
  }

  .dog-scene .dog-head {
    animation: dog-head 1800ms cubic-bezier(0.11, 0.79, 0, 0.99) infinite;
  }

  .dog-scene .dog-torso {
    top: -20%;
    animation: dog-torso 200ms ease-in-out infinite alternate-reverse;
  }

  .dog-scene .dog-eyes {
    width: 60%;
    top: 55%;
    left: 20%;
    z-index: 1;
  }

  .dog-scene .dog-eyes:before {
    content: '';
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    position: absolute;
    background: orange;
    top: -10px;
    left: -10px;
    z-index: 0;
    border: 4px solid white;
    border-left-width: 0;
    border-bottom-width: 0;
    border-top-width: 0;
    transform: rotate(-45deg);
  }

  .dog-scene .dog-eye {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
    z-index: 1;
    animation: dog-eye 1800ms infinite;
  }

  .dog-scene .dog-eye:first-child { left: 0; }
  .dog-scene .dog-eye:last-child { right: 0; }

  .dog-scene .dog-muzzle {
    width: 60%;
    left: 20%;
    height: 50%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background: white;
    bottom: -15%;
  }

  .dog-scene .dog-muzzle:before,
  .dog-scene .dog-muzzle:after {
    content: '';
    display: block;
    position: absolute;
  }

  .dog-scene .dog-muzzle:before {
    width: 6px;
    height: 20px;
    bottom: 0;
    left: calc(50% - 3px);
    background: #EAEBEC;
  }

  .dog-scene .dog-muzzle:after {
    background: black;
    width: 20px;
    height: 15px;
    bottom: 12px;
    left: calc(50% - 10px);
    border-bottom-left-radius: 60% 60%;
    border-bottom-right-radius: 60% 60%;
    border-top-left-radius: 50% 40%;
    border-top-right-radius: 50% 40%;
  }

  .dog-scene .dog-tongue {
    width: 40px;
    height: 100%;
    left: calc(50% - 20px);
    z-index: -1;
    transform-origin: center top;
    animation: dog-tongue 1800ms -50ms ease-in-out infinite;
  }

  .dog-scene .dog-tongue:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background: #FD3163;
    animation: dog-tongue-inner 100ms ease-in-out infinite alternate;
  }

  .dog-scene .dog-ears {
    width: 40%;
    top: 25%;
    left: 30%;
    animation: dog-ears 1800ms 100ms ease infinite;
  }

  .dog-scene .dog-ear {
    bottom: -10px;
    height: 50px;
    width: 50px;
    background: #EAEBEC;
    animation-duration: 400ms;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }

  .dog-scene .dog-ear:first-child {
    border-bottom-left-radius: 80%;
    border-top-right-radius: 80%;
    right: 100%;
    box-shadow: inset -15px 15px 0 1px white;
    transform-origin: right bottom;
    transform: rotate(10deg);
  }

  .dog-scene .dog-ear:last-child {
    border-top-left-radius: 80%;
    border-bottom-right-radius: 80%;
    left: 100%;
    box-shadow: inset 15px 15px 0 0 white;
    transform-origin: left bottom;
    transform: rotate(-10deg);
  }

  .dog-scene .dog-tail {
    width: 22px;
    height: 24.2px;
    background: white;
    bottom: 40%;
    border-radius: 11px;
    left: calc(50% - 11px);
    transform-origin: center bottom;
  }

  .dog-scene .dog-tail .dog-tail {
    animation: dog-tail-segment 200ms ease-in-out infinite alternate;
  }

  .dog-scene .dog-body > .dog-tail {
    bottom: 90%;
    animation: dog-tail 200ms ease-in-out infinite alternate;
  }

  .dog-scene .dog-body,
  .dog-scene .dog-torso,
  .dog-scene .dog-head {
    border-radius: 50%;
    background: white;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .dog-scene .dog-body,
  .dog-scene .dog-torso {
    box-shadow: inset 0 -15px 0 0 #EAEBEC;
  }

  @keyframes bounce {
    from { transform: scale(2); animation-timing-function: ease-in; }
    to { transform: scale(0.8); animation-timing-function: cubic-bezier(0, 0, 0, 1); }
  }

  @keyframes bounce-shadow {
    from { transform: scale(2.5, 2.6) translateY(-50%); animation-timing-function: ease-in; }
    to { transform: scale(0.5) translateY(0); animation-timing-function: cubic-bezier(0, 0, 0, 1); }
  }

  @keyframes dog-body {
    from { transform: translateX(-10%); }
    to { transform: translateX(10%); }
  }

  @keyframes dog-tail-blur {
    from { transform: rotate(0); opacity: 0; }
    50% { opacity: 1; }
    to { transform: rotate(90deg); opacity: 0; }
  }

  @keyframes dog-head {
    from, to { transform: rotate(45deg); }
    33.3% { transform: rotate(-45deg); }
    66.6% { transform: rotate(0); }
  }

  @keyframes dog-torso {
    from { transform: translateX(-5%); }
    to { transform: translateX(5%); }
  }

  @keyframes dog-eye {
    from, to {
      animation-timing-function: step-end;
      opacity: 1;
    }
    50%, 55% {
      animation-timing-function: step-start;
      opacity: 0;
    }
  }

  @keyframes dog-tongue {
    from, to { transform: rotate(0); }
    16.666% { transform: rotate(30deg); }
    33.333%, 66.666% { transform: rotate(0); }
    50%, 83.333% { transform: rotate(-20deg); }
  }

  @keyframes dog-tongue-inner {
    from { transform: translateY(5%); }
    to { transform: translateY(22%); }
  }

  @keyframes dog-ears {
    42.3%, 71.6% { transform: rotate(-5deg); }
    50.3%, 79.6% { transform: rotate(5deg); }
    5% { transform: rotate(5deg); }
    12% { transform: rotate(-5%); }
    from, 33.3%, 66%, to { transform: rotate(0); }
  }

  @keyframes dog-tail-segment {
    from { transform: rotate(-10deg); }
    to { transform: rotate(10deg); }
  }

  @keyframes dog-tail {
    from { transform: rotate(-45deg); }
    to { transform: rotate(45deg); }
  }
`;

export const Dog = () => {
  return (
    <>
      <style>{dogStyles}</style>
      <div className="dog-scene" aria-hidden="true">
        <div className="dog-bubble"><span className='animate-pulse'>Woof Woof Welcome</span></div>
        <div className="dog">
          <div className="dog-body">
            <div className="dog-tail">
              <div className="dog-tail">
                <div className="dog-tail">
                  <div className="dog-tail">
                    <div className="dog-tail">
                      <div className="dog-tail">
                        <div className="dog-tail">
                          <div className="dog-tail" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dog-torso" />
          <div className="dog-head">
            <div className="dog-ears">
              <div className="dog-ear" />
              <div className="dog-ear" />
            </div>
            <div className="dog-eyes">
              <div className="dog-eye" />
              <div className="dog-eye" />
            </div>
            <div className="dog-muzzle">
              <div className="dog-tongue" />
            </div>
          </div>
        </div>

        <div className="ball" tabIndex={0} />
      </div>
    </>
  );
};