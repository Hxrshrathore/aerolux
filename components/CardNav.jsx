'use client';

import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { GoArrowUpRight } from 'react-icons/go';
import { ArrowUpRight } from 'lucide-react';

const FluidGlass = dynamic(() => import('./FluidGlass'), { ssr: false });

function FlyyoLogo({ className = "h-11 w-11", color = "currentColor" }) {
  return (
    <svg
      width="1016"
      height="1016"
      viewBox="0 0 1016 1016"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <path
        d="M472.553 165.443L742.9 165.786C824.801 165.403 906.696 165.548 988.596 166.224L912.753 274.545L886.202 312.818C874.211 330.137 864.776 345.285 848.459 359.022C830.615 373.881 809.461 384.246 786.785 389.251C770.091 392.771 750.228 392.412 733.117 392.374L688.082 392.207L526.261 391.912L452.831 392.001C417.105 391.968 373.531 389.728 340.273 402.088C294.086 419.254 263.968 452.269 238.234 492.717C231.308 503.6 222.591 515.203 217.148 526.926C235.651 527.085 254.155 527.075 272.658 526.891C276.611 522.074 281.996 513.001 285.644 507.454C291.88 497.954 298.797 488.919 306.34 480.419C323.433 461.82 345.562 448.588 370.036 442.333C389.029 437.664 405.907 438.026 425.217 437.95L466.819 437.828L608.166 437.958L659.09 437.954C669.171 437.94 679.986 438.177 690.002 437.635C686.177 441.63 680.303 450.436 676.975 455.23C666.304 470.607 658.133 482.325 643.925 494.586C602.838 530.046 560.983 527.7 510.867 527.809L436.814 527.883C382.765 527.873 382.982 522.307 351.632 568.181C340.647 584.16 329.254 599.842 318.606 616.039C304.48 616.714 289.811 616.56 275.658 616.57L221.759 616.669L43.7927 616.307C51.0972 606.787 58.3685 595.714 65.2924 585.768L98.3303 538.311C111.783 518.706 125.421 499.209 139.34 479.934C158.429 453.498 175.985 423.865 197.035 399.119C243.45 343.972 309.785 309.412 381.576 302.974C414.196 299.871 452.551 300.913 485.672 301.061L597.823 300.728L717.575 300.614C774.392 300.574 784.746 309.6 817.066 255.408L586.695 255.885C547.028 255.562 507.36 255.457 467.692 255.569C445.158 255.532 422.491 255.28 399.964 255.587C315.073 256.744 245.755 290.204 187.429 350.765C192.886 339.632 196.384 328.425 201.564 317.521C213.956 291.436 231.359 266.885 251.572 246.343C291.368 206.437 342.589 179.892 398.14 170.386C422.59 166.339 447.834 165.654 472.553 165.443Z"
        fill="currentColor"
      />
      <path
        d="M639.122 719.033C649.58 718.23 661.085 719.028 671.175 718.78C700.633 718.056 729.144 716.697 727.075 755.774C726.514 766.415 728.37 780.871 726.117 791.334C725.13 796.002 723.086 800.378 720.144 804.133C714.598 811.208 708.01 814.323 699.234 815.395C699.095 815.419 698.956 815.444 698.817 815.469C683.82 816.114 668.546 815.762 653.554 815.777C647.601 815.782 641.469 815.94 635.893 814.745C630.862 813.673 626.16 811.416 622.181 808.157C608.637 797.138 611.475 781.179 611.242 765.656C611.133 758.14 610.9 747.772 612.71 740.638C613.797 736.307 615.866 732.284 618.763 728.881C624.562 722.05 630.59 719.738 639.122 719.033ZM698.376 800.834C702.464 799.926 708.576 797.183 710.396 793.308C713.789 786.085 712.262 772.795 712.366 764.629C712.524 751.622 714.816 733.971 696.764 733.351C678.388 733.41 658.51 732.388 640.194 733.37C619.795 735.846 627.043 761.732 625.673 775.32C624.567 786.284 627.762 800.12 640.675 800.432C658.51 800.869 680.705 801.945 698.376 800.834Z"
        fill="currentColor"
      />
      <path
        d="M95.7545 718.527C131.369 717.912 168.839 718.706 204.561 718.845C204.251 723.617 203.996 728.395 203.797 733.172L111.258 733.182L111.213 759.971C126.175 759.713 141.871 759.976 156.89 760.001C168.412 760.035 181.08 760.403 192.483 760.065L192.445 774.69C185.557 774.199 173.61 774.477 166.237 774.442L111.173 774.402C111.201 787.727 111.05 801.757 111.53 815.013C106.919 814.958 100.608 814.705 96.135 815.057C96.838 791.24 95.8051 766.936 96.2457 743.064C96.392 735.141 96.3682 726.39 95.7545 718.527Z"
        fill="currentColor"
      />
      <path
        d="M596.657 718.641L596.86 718.731C596.761 719.877 543.376 763.468 538.019 771.252C537.508 781.75 537.895 804.649 538.768 815.112C533.524 815.072 528.28 815.186 523.046 815.454C523.577 801.038 523.041 785.376 523.255 770.706C516.845 763.841 505.827 755.337 498.291 749.092C486.988 739.284 475.823 729.317 464.799 719.197C472.496 719.133 480.271 718.999 487.957 719.306C502.354 732.358 516.166 744.146 530.79 756.851C545.49 745.202 559.39 730.984 573.618 719.162C580.792 718.716 589.374 718.775 596.657 718.641Z"
        fill="currentColor"
      />
      <path
        d="M436.933 718.483C443.871 718.254 451.141 718.364 458.082 718.468C451.589 725.259 434.845 739.651 427.444 745.996C418.023 754.177 408.377 762.223 399.103 770.548C398.502 783.129 399.478 802.303 399.447 815.514L384.889 815.553C385.403 802.407 385.283 783.858 385 770.741C374.206 761.439 363.47 752.068 352.792 742.632C344.377 735.285 333.839 726.49 326.199 718.547C333.949 718.641 341.772 718.299 349.476 718.929C363.083 731.996 378.197 744.091 391.781 757.347C393.717 755.521 395.981 753.77 398.018 752.024C411.036 740.881 423.726 729.412 436.933 718.483Z"
        fill="currentColor"
      />
      <path
        d="M228.191 718.393C233.087 718.339 238.19 718.483 243.101 718.547L242.954 800.725L316.951 801.087C316.99 805.795 317.132 810.885 316.892 815.558C296.831 816.049 276.379 815.459 256.289 815.653C246.752 815.747 237.06 815.444 227.542 815.99C228.888 784.572 227.911 749.999 228.191 718.393Z"
        fill="currentColor"
      />
    </svg>
  );
}

const CardNav = ({
  logoText,
  logoHref = '/',
  items,
  className = '',
  ease = 'circ.out',
  baseColor = '#fff',
  menuColor = '#000',
  buttonBgColor = '#09090b',
  buttonTextColor = '#ffffff',
  buttonLabel = 'Login',
  buttonHref = '/login',
  onButtonClick = undefined,
  rightContent = null,
  isScrolled = false,
  scrollProgress = 0,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  const router = useRouter();

  const NAV_HEIGHT = 68;        // top bar height
  const EXPANDED_HEIGHT = 380;  // expanded desktop height

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return EXPANDED_HEIGHT;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const padding = 20;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return NAV_HEIGHT + contentHeight + padding;
      }
    }
    return EXPANDED_HEIGHT;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: NAV_HEIGHT, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 60, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.5,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.5, ease, stagger: 0.1 }, '-=0.15');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    // If nav was already expanded (e.g. prop change from scroll), keep it open
    if (isExpanded && tl) {
      tl.progress(1);
    }
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  // Lock body scroll when nav is expanded
  useLayoutEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isExpanded]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const handleCloseAndNavigate = (e, href) => {
    e.preventDefault();
    if (isExpanded) {
      const tl = tlRef.current;
      if (tl) {
        setIsHamburgerOpen(false);
        tl.eventCallback('onReverseComplete', () => {
          setIsExpanded(false);
          router.push(href);
        });
        tl.reverse();
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-[99] top-[1em] md:top-[1.5em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block p-0 rounded-2xl shadow-xl relative overflow-hidden will-change-[height] border border-white/20`}
        style={{ 
          backgroundColor: 'transparent', 
          height: NAV_HEIGHT,
        }}
      >
        {/* 3D Fluid Glass Background in 0 scroll position */}
        <div 
          className="card-nav-fluid-glass absolute inset-0 pointer-events-none z-0 rounded-2xl overflow-hidden transition-opacity duration-300 backdrop-blur-xl bg-white/[0.10]"
          style={{
            opacity: isExpanded ? 0 : Math.max(0, 1 - scrollProgress),
          }}
        >
          <FluidGlass
            mode="bar"
            scale={0.15}
            ior={1.15}
            thickness={10}
            transmission={1}
            roughness={0}
            chromaticAberration={0.1}
            anisotropy={0.01}
          />
        </div>

        {/* Base Top Bar (Over transparent FluidGlass, crisp dark elements over daytime sky, clickable) */}
        <div className="card-nav-top absolute inset-x-0 top-0 flex items-center justify-between px-5 z-[1]" style={{ height: NAV_HEIGHT }}>
          {/* Hamburger / Menu Button */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group flex flex-col items-center justify-center cursor-pointer gap-[7px] order-2 md:order-none w-12 h-12 transition-colors duration-300 text-zinc-950`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
          >
            <div
              className={`hamburger-line w-[28px] h-[2px] bg-zinc-950 transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? 'translate-y-[4.5px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[28px] h-[2px] bg-zinc-950 transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? '-translate-y-[4.5px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          {/* Logo — centered (Dark State over daytime sky) */}
          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <Link href={logoHref} aria-label="Flyyo Home" className="flex items-center justify-center transition-opacity hover:opacity-85 no-underline">
              <FlyyoLogo className="h-12 w-12 sm:h-14 sm:w-14 scale-110 sm:scale-125 transition-transform duration-200 origin-center" color="#09090b" />
            </Link>
          </div>

          {/* Right side — Portal + CTA (Base Black Button on Transparent Nav) */}
          <div className="hidden md:flex items-center gap-4 order-3 relative z-[1]">
            {rightContent}
            <Link
              href={buttonHref || '/login'}
              className="card-nav-cta-button group inline-flex border border-zinc-900/10 rounded-xl px-5 py-2.5 items-center gap-1.5 text-[14px] sm:text-[15px] font-medium tracking-tight antialiased cursor-pointer shadow-sm hover:opacity-90 transition-opacity duration-200 no-underline bg-[#09090b] text-white"
              onClick={onButtonClick}
            >
              <span>{buttonLabel}</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2] text-white"
              />
            </Link>
          </div>

          {/* Mobile CTA (Base Black Button on Transparent Nav) */}
          <div className="md:hidden order-3 relative z-[1]">
            <Link
              href={buttonHref || '/login'}
              className="group inline-flex border border-zinc-900/10 rounded-lg px-3.5 py-2 items-center gap-0.5 text-[13px] font-medium tracking-tight antialiased cursor-pointer shadow-sm transition-opacity duration-200 no-underline bg-[#09090b] text-white"
              onClick={onButtonClick}
            >
              <span>{buttonLabel}</span>
              <ArrowUpRight size={15} className="stroke-[2] text-white" />
            </Link>
          </div>
        </div>

        {/* Fluid Dark Wave — Grows outward from CTA button and fills the entire navbar */}
        <div
          className="nav-splash-wave absolute inset-0 rounded-2xl pointer-events-none transition-[clip-path] duration-200 ease-out z-[2] overflow-hidden"
          style={{
            backgroundColor: 'rgba(9, 9, 11, 0.98)',
            clipPath: `circle(${((isExpanded ? 1 : scrollProgress) * 180).toFixed(1)}% at calc(100% - 65px) 34px)`,
            opacity: (isExpanded || scrollProgress > 0) ? 1 : 0,
            visibility: (isExpanded || scrollProgress > 0) ? 'visible' : 'hidden',
          }}
        >
          {/* Mirrored Top Bar in Pure White, pixel-aligned with base bar */}
          <div className="card-nav-top absolute inset-x-0 top-0 flex items-center justify-between px-5 pointer-events-none" style={{ height: NAV_HEIGHT }}>
            {/* Hamburger - White state */}
            <div className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} flex flex-col items-center justify-center gap-[7px] order-2 md:order-none w-12 h-12 text-white`}>
              <div
                className={`hamburger-line w-[28px] h-[2px] bg-white transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                  isHamburgerOpen ? 'translate-y-[4.5px] rotate-45' : ''
                }`}
              />
              <div
                className={`hamburger-line w-[28px] h-[2px] bg-white transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                  isHamburgerOpen ? '-translate-y-[4.5px] -rotate-45' : ''
                }`}
              />
            </div>

            {/* Logo — centered (White State, zoomed in) */}
            <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
              <div className="flex items-center justify-center">
                <FlyyoLogo className="h-12 w-12 sm:h-14 sm:w-14 scale-110 sm:scale-125 transition-transform duration-200 origin-center" color="#ffffff" />
              </div>
            </div>

            {/* Right side — Mirrored White CTA for Desktop (Revealed as wave expands) */}
            <div className="hidden md:flex items-center gap-4 order-3 pointer-events-none">
              {rightContent && <div className="text-white">{rightContent}</div>}
              <div
                className="card-nav-cta-button inline-flex border border-white/20 rounded-xl px-5 py-2.5 items-center gap-1.5 text-[14px] sm:text-[15px] font-medium tracking-tight antialiased shadow-md bg-white text-[#09090b]"
              >
                <span>{buttonLabel}</span>
                <ArrowUpRight
                  size={18}
                  className="stroke-[2] text-[#09090b]"
                />
              </div>
            </div>

            {/* Mobile Mirrored White CTA (Revealed as wave expands) */}
            <div className="md:hidden order-3 pointer-events-none">
              <div
                className="inline-flex border border-white/20 rounded-lg px-3.5 py-2 items-center gap-0.5 text-[13px] font-medium tracking-tight antialiased shadow-md bg-white text-[#09090b]"
              >
                <span>{buttonLabel}</span>
                <ArrowUpRight size={15} className="stroke-[2] text-[#09090b]" />
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Content — Card Panels */}
        <div
          className={`card-nav-content absolute left-0 right-0 bottom-0 p-3 flex flex-col items-stretch gap-3 justify-start z-[10] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-stretch md:gap-3`}
          style={{ top: NAV_HEIGHT }}
          aria-hidden={!isExpanded}
        >
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-3 p-5 md:p-6 rounded-xl min-w-0 flex-[1_1_auto] md:flex-[1_1_0%] border border-white/10 shadow-lg backdrop-blur-md transition-all duration-200"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor || '#141418', color: item.textColor || '#ffffff' }}
            >
              <div className="nav-card-label font-semibold tracking-[-0.3px] text-[18px] md:text-[20px] mb-2 text-white">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-1.5">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-all duration-200 text-zinc-300 hover:text-white hover:translate-x-0.5 text-[14px] md:text-[15px] py-1"
                    href={lnk.href || '#'}
                    aria-label={lnk.ariaLabel}
                    onClick={(e) => handleCloseAndNavigate(e, lnk.href || '#')}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0 text-[16px] text-zinc-400 group-hover:text-white" aria-hidden="true" />
                    <span>{lnk.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
