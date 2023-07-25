// import React, { memo, useRef, useCallback, useEffect } from 'react';

// const CelebrationRibbons = ({ start, onEnd: onAnimationEnd }) => {
//     const confettiRef = useRef(null);
  
//     const startCelebration = useCallback(() => {
//       confettiRef.current && confettiRef.current.start();
//     }, []);
  
//     useEffect(() => {
//       start && startCelebration();
//     }, [start, startCelebration]);
  
//     const onEnd = () => {
//       onAnimationEnd && onAnimationEnd();
//     };
  
//     return (
//     //   <ConfettiCannon
//     //     count={500}
//     //     origin={{ x: 610, y: -500 }}
//     //     autoStartDelay={0}
//     //     autoStart={false}
//     //     ref={confettiRef}
//     //     onAnimationEnd={onEnd}
//     //   />
        
//     );
// };
  
// export default memo(CelebrationRibbons)